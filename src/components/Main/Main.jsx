import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
//import { defaultClothingItems } from "../../utils/constants.js";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { useContext, useState } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";

function Main(props) {
  const getType = () => {
    if (props.weatherData.temp.F >= 86) {
      return "hot";
    } else if (
      props.weatherData.temp.F >= 66 &&
      props.weatherData.temp.F <= 85
    ) {
      return "warm";
    } else if (props.weatherData.temp.F <= 65) {
      return "cold";
    }
  };

  const tempContext = useContext(CurrentTemperatureUnitContext);
  const currentTemperatureUnit = tempContext.currentTemperatureUnit;

  return (
    <main className="main">
      <WeatherCard weatherData={props.weatherData} />
      <section className="cards">
        <p className="cards__info">
          Today is {props.weatherData.temp[currentTemperatureUnit]}°
          {currentTemperatureUnit} / You may want to wear:{" "}
        </p>
        <ul className="cards__list">
          {/*
          <ItemCard
            item={{
              name: "jan",
              link: "https://i5.walmartimages.com/asr/fa04892c-2e22-4462-9042-c5ccc441c0a6.cdd56e332e08314f549dec11b58aae2a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
            }}
          ></ItemCard>
          */}
          {props.clothingItems
            .filter((item) => {
              return item.weather === getType();
              //return item.weather === props.weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  handleCardClick={props.handleCardClick}
                  onCardLike={props.onCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
