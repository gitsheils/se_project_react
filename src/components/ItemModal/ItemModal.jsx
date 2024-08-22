import "./ItemModal.css";

import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function ItemModal({ isOpen, card, closeModal, onDelete }) {
  const handleClick = () => {
    onDelete(card);
  };

  const currentUserContext = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUserContext._id;
  const itemDeleteButtonClassName = `modal__delete ${
    isOwn ? "modal__delete" : "modal__delete_hidden"
  }`;

  return (
    <div className={`modal ${isOpen === true && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button className="modal__close" onClick={closeModal}></button>
        <img className="modal__image" src={card.imageUrl} alt={card.name} />
        <div className="modal__caption">
          <h2 className="modal__itemname">{card.name}</h2>
          <p className="modal__weather">{card.weather}</p>
          <button className={itemDeleteButtonClassName} onClick={handleClick}>
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
