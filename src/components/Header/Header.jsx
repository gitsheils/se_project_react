import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Header(props) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUserContext = useContext(CurrentUserContext);

  if (props.isLoggedIn === true) {
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
            <p className="header__name">{currentUserContext.name}</p>
            {currentUserContext.avatar ? (
              <img
                className="header__avatar"
                src={currentUserContext.avatar}
              ></img>
            ) : (
              <div className="header__avatar_placeholder">
                <p className="header__avatar_letter">
                  {currentUserContext.name[0]}
                </p>
              </div>
            )}
          </div>
        </NavLink>
      </header>
    );
  }
  return (
    <header className="header">
      <NavLink to="/">
        <div className="header__logo"></div>
      </NavLink>

      <p className="header__date_location">
        {currentDate}, {props.weatherData.city}
      </p>

      <ToggleSwitch />

      <div className="header__profile">
        <button
          className="header__button_signup"
          onClick={props.handleSignupClick}
        >
          Sign Up
        </button>
        <button
          className="header__button_login"
          onClick={props.handleSigninClick}
        >
          Log In
        </button>
      </div>
    </header>
  );
}

export default Header;
