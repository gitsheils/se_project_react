import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  closeModal,
  title,
  buttonLabel,
  children,
  handleSubmit,
}) {
  return (
    <div className={`modal ${isOpen === "form" && "modal_opened"}`}>
      <div className="modal__content">
        <button className="modal__close" onClick={closeModal}></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}

          <button className="modal__submit" type="submit">
            {buttonLabel}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
