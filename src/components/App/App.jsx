import { useEffect, useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather } from "../../utils/weatherAPI.js";
import { coordinates, APIkey } from "../../utils/constants.js";

import AddGarmentForm from "../AddGarmentForm/AddGarmentForm.jsx";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import {
  getItems,
  getUserInfo,
  updateUserInfo,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} from "../../utils/api.js";
//
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import { signup, authorize } from "../../utils/auth.js";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { setToken, getToken, removeToken } from "../../utils/token.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import UpdateProfileModal from "../UpdateProfileModal/UpdateProfileModal.jsx";

function App() {
  const [weatherData, setWeatherData] = useState({
    city: "",
    temp: "",
    type: "cold",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  //
  const [modalType, setModalType] = useState("");

  const handleAddClick = () => {
    setIsOpen(true);
    //
    setModalType("addgarm");
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleCardClick = (card) => {
    setIsOpen(true);
    setModalType("preview");
    setSelectedCard(card);
  };

  const determineDay = ({ sunrise, sunset }, now) => {
    return sunrise * 1000 < now && now < sunset * 1000;
  };

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSignupClick = () => {
    setIsOpen(true);
    setModalType("signup");
  };
  const handleSigninClick = () => {
    setIsOpen(true);
    setModalType("signin");
  };
  const handleChangeProfileClick = () => {
    setIsOpen(true);
    setModalType("changeProfile");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((res) => {
        const city = res.name;
        const tempF = Math.round(res.main.temp);
        const tempC = Math.round(((res.main.temp - 32) * 5) / 9);
        const condition = res.weather[0].main.toLowerCase();
        const isDay = determineDay(res.sys, Date.now());
        setWeatherData({
          ...weatherData,
          city: city,
          temp: { F: tempF, C: tempC },
          isDay: isDay,
          condition: condition,
        });
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  const handleAddItemSubmit = (item) => {
    const jwt = getToken();
    createItem(jwt, item.name, item.weather, item.link)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        closeModal();
      })
      .catch(console.error);
  };

  const [clothingItems, setClothingItems] = useState([]);
  const handleDeleteCard = (card) => {
    const jwt = getToken();

    deleteItem(jwt, card._id)
      .then(() => {
        const newClothingItems = [...clothingItems];
        const ind = newClothingItems.findIndex((item) => {
          return item._id === card._id;
        }, card);
        if (ind > -1) {
          newClothingItems.splice(ind, 1);
        }
        setClothingItems(newClothingItems);
        closeModal();
      })
      .catch(console.error);
  };

  const handleRegisterSubmit = (item) => {
    signup(item)
      .then((res) => {
        setIsOpen(false);

        handleLogin({ email: item.email, password: item.password });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navigate = useNavigate();
  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    authorize(email, password)
      .then((data) => {
        setIsOpen(false);
        setToken(data.token);
        //setUserData(data.user);
        setIsLoggedIn(true);

        const jwt = getToken();
        getUserInfo(jwt)
          .then((user) => {
            setUserData(user);
          })
          .catch(console.error);
      })
      .catch(console.error);
  };
  const handleUpdateProfile = ({ name, avatar }) => {
    const jwt = getToken();
    updateUserInfo(jwt, name, avatar)
      .then((newUserInfo) => {
        const newData = { ...userData, name, avatar };
        setUserData(newData);
        setIsOpen(false);
      })
      .catch(console.error);
  };
  const handleSignout = () => {
    setIsLoggedIn(false);
    setUserData({ name: "", avatar: "" });
    removeToken();
  };

  const handleCardLike = ({ id, isLiked }) => {
    const jwt = getToken();
    if (!isLiked) {
      return likeItem(jwt, id)
        .then(() => {
          getItems()
            .then((data) => {
              setClothingItems(data);
            })
            .catch(console.error);
        })
        .catch(console.error);
    }
    return dislikeItem(jwt, id)
      .then(() => {
        getItems()
          .then((data) => {
            setClothingItems(data);
          })
          .catch(console.error);
      })
      .catch(console.error);
  };

  const location = useLocation();
  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }
    getUserInfo(jwt)
      .then((user) => {
        setIsLoggedIn(true);
        setUserData(user);

        const redirectPath = location.state?.from?.pathname;
        navigate(redirectPath);
      })
      .catch(console.error);
  }, []);

  const [userData, setUserData] = useState({ name: "", avatar: "" });
  {
    /*
  const handleDeleteCard = (card) => {

    

    const newClothingItems = [...clothingItems];
    const ind = newClothingItems.findIndex((item) => {
      return item._id === card._id;
    }, card);
    if (ind > -1) {
      newClothingItems.splice(ind, 1);
    }
    deleteItem(card._id);
    setClothingItems(newClothingItems);
  };
*/
  }
  return (
    <CurrentUserContext.Provider value={userData}>
      <div className="page">
        <div className="page__content">
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <Header
              weatherData={weatherData}
              handleAddClick={handleAddClick}
              isLoggedIn={isLoggedIn}
              handleSignupClick={handleSignupClick}
              handleSigninClick={handleSigninClick}
              userData={userData}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                  />
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleAddClick={handleAddClick}
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      handleChangeProfileClick={handleChangeProfileClick}
                      handleSignout={handleSignout}
                      onCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
            {modalType === "preview" && (
              <ItemModal
                isOpen={isOpen}
                card={selectedCard}
                closeModal={closeModal}
                handleDeleteCard={handleDeleteCard}
              />
            )}
            {modalType === "addgarm" && (
              <AddItemModal
                isOpen={isOpen}
                closeModal={closeModal}
                onAddItem={handleAddItemSubmit}
                clothingItems={clothingItems}
              />
            )}
            {modalType === "signup" && (
              <RegisterModal
                isOpen={isOpen}
                closeModal={closeModal}
                onRegister={handleRegisterSubmit}
              />
            )}
            {modalType === "signin" && (
              <LoginModal
                isOpen={isOpen}
                closeModal={closeModal}
                onLogin={handleLogin}
              />
            )}

            {modalType === "changeProfile" && (
              <UpdateProfileModal
                isOpen={isOpen}
                closeModal={closeModal}
                onUpdate={handleUpdateProfile}
              />
            )}
          </CurrentTemperatureUnitContext.Provider>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
