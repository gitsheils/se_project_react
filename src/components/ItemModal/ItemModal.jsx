import "./ItemModal.css";
function ItemModal({ isOpen, card, closeModal, handleDeleteCard }) {
  const handleClick = () => {
    handleDeleteCard(card);
    closeModal();
  };
  return (
    <div className={`modal ${isOpen === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button className="modal__close" onClick={closeModal}></button>
        <img className="modal__image" src={card.link} alt={card.name} />
        <div className="modal__caption">
          <h2 className="modal__itemname">{card.name}</h2>
          <p className="modal__weather">{card.weather}</p>
          <button className="modal__delete" onClick={handleClick}>
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
