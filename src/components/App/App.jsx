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
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import { getItems, addItem, deleteItem } from "../../utils/api.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    city: "",
    temp: "",
    type: "cold",
  });

  const [isOpen, setIsOpen] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const handleAddClick = () => {
    setIsOpen("addgarm");
  };
  const closeModal = () => {
    setIsOpen("");
  };
  const handleCardClick = (card) => {
    setIsOpen("preview");
    setSelectedCard(card);
  };

  const determineDay = ({ sunrise, sunset }, now) => {
    return sunrise * 1000 < now && now < sunset * 1000;
  };

  const [currentTemperatureUnit, setcurrentTemperatureUnit] = useState("F");
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") setcurrentTemperatureUnit("C");

    if (currentTemperatureUnit === "C") setcurrentTemperatureUnit("F");
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
    setClothingItems([item, ...clothingItems]);
    addItem(item.name, item.weather, item.link);
  };
  const [clothingItems, setClothingItems] = useState([]);
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
  return (
    <div className="page">
      <div className="page__content">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header weatherData={weatherData} handleAddClick={handleAddClick} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <Profile
                  handleAddClick={handleAddClick}
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                />
              }
            />
          </Routes>

          <Footer />
          {/*
          <ModalWithForm
            isOpen={isOpen}
            closeModal={closeModal}
            title="New garment"
            buttonLabel="Add garment"
            formType={addGarmentForm}
          />
            */}
          <ItemModal
            isOpen={isOpen}
            card={selectedCard}
            closeModal={closeModal}
            handleDeleteCard={handleDeleteCard}
          />

          <AddItemModal
            isOpen={isOpen}
            closeModal={closeModal}
            onAddItem={handleAddItemSubmit}
            clothingItems={clothingItems}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </div>
  );
}

export default App;
