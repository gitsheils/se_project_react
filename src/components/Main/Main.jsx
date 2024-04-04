import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import { defaultClothingItems } from "../../utils/constants.js";
import ItemCard from "../ItemCard/ItemCard.jsx";

function Main(props) {
  const getType = () => {
    if (props.weatherData.temp >= 86) {
      return "hot";
    } else if (props.weatherData.temp >= 66 && props.weatherData.temp <= 85) {
      return "warm";
    } else if (props.weatherData.temp <= 65) {
      return "cold";
    }
  };

  return (
    <main className="main">
      <WeatherCard weatherData={props.weatherData} />
      <section className="cards">
        <p>Today is {props.weatherData.temp}°F / You may want to wear: </p>
        <ul className="cards__list">
          {defaultClothingItems
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
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
