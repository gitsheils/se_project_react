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

function App() {
  const [weatherData, setWeatherData] = useState({
    city: "",
    temp: "",
    type: "cold",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const handleAddClick = () => {
    setActiveModal("addgarm");
  };
  const closeModal = () => {
    setActiveModal("");
  };
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const determineDay = ({ sunrise, sunset }, now) => {
    return sunrise * 1000 < now && now < sunset * 1000;
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((res) => {
        const city = res.name;
        const temp = Math.round(res.main.temp);
        const condition = res.weather[0].main.toLowerCase();
        const isDay = determineDay(res.sys, Date.now());
        setWeatherData({
          ...weatherData,
          city: city,
          temp: temp,
          isDay: isDay,
          condition: condition,
        });
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header weatherData={weatherData} handleAddClick={handleAddClick} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
        <ModalWithForm activeModal={activeModal} closeModal={closeModal} />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
}

export default App;