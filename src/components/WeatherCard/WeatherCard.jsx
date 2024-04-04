import "./WeatherCard.css";
import { conditionPics, defaultWeatherOptions } from "../../utils/constants.js";

function WeatherCard(props) {
  const filteredPic = conditionPics.find(
    (option) =>
      option.day === props.weatherData.isDay &&
      option.condition === props.weatherData.condition
  );
  let weatherOption;
  if (typeof filteredPic === "undefined") {
    weatherOption =
      defaultWeatherOptions[props.weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredPic;
  }

  /*
  const filteredPic = conditionPics.filter((option) => {
    return (
      option.day === props.weatherData.isDay &&
      option.condition === props.weatherData.condition
    );
  });
  

  let weatherOption;
  if (filteredPic.length === 0) {
    weatherOption =
      defaultWeatherOptions[props.weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredPic[0];
  }
  */

  return (
    <div className="weather-card">
      <p className="weather-card_temp">{props.weatherData.temp}°F</p>
      <img
        className="weather-card_image"
        src={weatherOption?.link}
        alt={`photo of ${weatherOption?.condition}`}
      ></img>
    </div>
  );
}

export default WeatherCard;
