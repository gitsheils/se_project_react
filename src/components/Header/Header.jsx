import "./Header.css";
function Header(props) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo"></div>
      <p className="header__date_location">
        {currentDate}, {props.weatherData.city}
      </p>

      <button className="header__button" onClick={props.handleAddClick}>
        + Add clothes
      </button>
      <p className="header__name">Terrence</p>
      <div className="header__avatar"></div>
    </header>
  );
}

export default Header;
