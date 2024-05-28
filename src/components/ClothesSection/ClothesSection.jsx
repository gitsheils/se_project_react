import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";

import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function ClothesSection(props) {
  const currentUserContext = useContext(CurrentUserContext);

  return (
    <div className="cards cards_profile">
      <div className="cards__info cards__info_profile">
        <p className="cards__description">Your items</p>
        <button className="cards__buttonAdd" onClick={props.handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="cards__list">
        {props.clothingItems
          .filter((item) => {
            return item.owner === currentUserContext._id;
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
    </div>
  );
}

export default ClothesSection;
