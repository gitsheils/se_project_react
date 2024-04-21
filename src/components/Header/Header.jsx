import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";

function Header(props) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <NavLink to="/">
        <div className="header__logo"></div>
      </NavLink>

      <p className="header__date_location">
        {currentDate}, {props.weatherData.city}
      </p>

      <ToggleSwitch />
      <button className="header__button" onClick={props.handleAddClick}>
        + Add clothes
      </button>
      <NavLink to="/profile" className="navlink">
        <div className="header__profile">
          <p className="header__name">Terrence</p>
          <div className="header__avatar"></div>
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
