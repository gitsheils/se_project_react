import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";

function ClothesSection(props) {
  return (
    <div className="cards cards_profile">
      <div className="cards__info cards__info_profile">
        <p className="cards__description">Your items</p>
        <button className="cards__buttonAdd" onClick={props.handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="cards__list">
        {props.clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              handleCardClick={props.handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
