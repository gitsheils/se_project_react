import "./AddGarmentForm.css";
function AddGarmentForm({ buttonLabel }) {
  return (
    <form className="form">
      <label className="form__label" htmlFor="name">
        Name
        <input
          className="form__input form__text-input"
          type="text"
          placeholder="Name"
          id="name"
        />
      </label>
      <label className="form__label" htmlFor="imageurl">
        Image
        <input
          className="form__input form__text-input"
          type="url"
          placeholder="Image URL"
          id="imageurl"
        />
      </label>
      <fieldset className="form__radio">
        <legend className="form__legend">Select the weather type: </legend>
        <label htmlFor="hot" className="form__label form__fieldset-label">
          <input
            className="form__input form__fieldset-input"
            type="radio"
            id="hot"
          />
          Hot
        </label>
        <label htmlFor="warm" className="form__label form__fieldset-label">
          <input
            className="form__input form__fieldset-input"
            type="radio"
            id="warm"
          />
          Warm
        </label>
        <label htmlFor="cold" className="form__label form__fieldset-label">
          <input
            className="form__input form__fieldset-input"
            type="radio"
            id="cold"
          />
          Cold
        </label>
      </fieldset>
      <button className="form__submit" type="submit">
        {buttonLabel}{" "}
      </button>
    </form>
  );
}

export default AddGarmentForm;
