import "./ItemCard.css";

import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function ItemCard({ item, handleCardClick, onCardLike }) {
  const handleClick = () => {
    handleCardClick(item);
  };

  const currentUserContext = useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUserContext._id);
  const itemLikeButtonClassName = `card__buttonLike ${
    isLiked && "card__buttonLike_active"
  }`;

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <div className="card">
      <div className="card__title-and-like">
        <h2 className="card__title">{item.name}</h2>
        {currentUserContext.name && (
          <div className={itemLikeButtonClassName} onClick={handleLike}></div>
        )}
      </div>

      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={handleClick}
      ></img>
    </div>
  );
}

export default ItemCard;
