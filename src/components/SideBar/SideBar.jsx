import "./SideBar.css";

import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function SideBar(props) {
  const currentUserContext = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={currentUserContext.avatar}></img>
      <p className="sidebar__name">{currentUserContext.name}</p>

      <div className="sidebar__buttons">
        <p className="sidebar__button" onClick={props.handleChangeProfileClick}>
          Change profile data
        </p>
        <p className="sidebar__button" onClick={props.handleSignout}>
          Log out
        </p>
      </div>
    </div>
  );
}

export default SideBar;
