import "./ModalWithForm.css";
function ModalWithForm(props) {
  return (
    <div
      className={`modal ${props.activeModal === "addgarm" && "modal_opened"}`}
    >
      <div className="modal__content">
        <button className="modal__close" onClick={props.closeModal}></button>
        <h2 className="modal__title">New garment</h2>
        <form className="modal__form">
          <label className="modal__label" htmlFor="name">
            Name
            <input
              className="modal__input modal__text-input"
              type="text"
              placeholder="Name"
              id="name"
            />
          </label>
          <label className="modal__label" htmlFor="imageurl">
            Image
            <input
              className="modal__input modal__text-input"
              type="url"
              placeholder="Image URL"
              id="imageurl"
            />
          </label>
          <fieldset className="modal__radio">
            <legend className="modal__legend">Select the weather type: </legend>
            <label htmlFor="hot" className="modal__label modal__fieldset-label">
              <input
                className="modal__input modal__fieldset-input"
                type="radio"
                id="hot"
              />
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__fieldset-label"
            >
              <input
                className="modal__input modal__fieldset-input"
                type="radio"
                id="warm"
              />
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__fieldset-label"
            >
              <input
                className="modal__input modal__fieldset-input"
                type="radio"
                id="cold"
              />
              Cold
            </label>
          </fieldset>
          <button className="modal__submit" type="submit">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
