import "./ModalWithForm.css";

function ModalWithForm({ isOpen, closeModal, title, buttonLabel, formType }) {
  return (
    <div className={`modal ${isOpen === "addgarm" && "modal_opened"}`}>
      <div className="modal__content">
        <button className="modal__close" onClick={closeModal}></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form">
          {formType}

          <button className="modal__submit" type="submit">
            {buttonLabel}
          </button>
        </form>
        {/*<AddGarmentForm buttonLabel={buttonLabel} />*/}
      </div>
    </div>
  );
}

export default ModalWithForm;
