import "./AddItemModal.css";
import { useEffect, useState, useRef } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import AddGarmentForm from "../AddGarmentForm/AddGarmentForm.jsx";

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ isOpen, closeModal, onAddItem, clothingItems }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };
  const handleWeather = (e) => {
    setWeather(e.target.id);
  };

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened
  useEffect(() => {
    setName("");
    setUrl("");
    refHot.current.checked = false;
    refWarm.current.checked = false;
    refCold.current.checked = false;
  }, [isOpen]);

  const length = clothingItems.length;

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ _id: length, name: name, weather: weather, link: url });
    closeModal();
  }

  const refHot = useRef();
  const refWarm = useRef();
  const refCold = useRef();

  return (
    <ModalWithForm
      isOpen={isOpen}
      closeModal={closeModal}
      title="New garment"
      buttonLabel="Add garment"
      handleSubmit={handleSubmit}
    >
      <label className="form__label" htmlFor="name">
        Name
        <input
          className="form__input form__text-input"
          type="text"
          placeholder="Name"
          id="name"
          onChange={handleName}
          value={name}
        />
      </label>
      <label className="form__label" htmlFor="imageurl">
        Image
        <input
          className="form__input form__text-input"
          type="url"
          placeholder="Image URL"
          id="imageurl"
          onChange={handleUrl}
          value={url}
        />
      </label>
      <fieldset className="form__radio" onChange={handleWeather}>
        <legend className="form__legend">Select the weather type: </legend>
        <label htmlFor="hot" className="form__label form__fieldset-label">
          <input
            className="form__input form__fieldset-input"
            type="radio"
            id="hot"
            name="radio"
            ref={refHot}
          />
          Hot
        </label>
        <label htmlFor="warm" className="form__label form__fieldset-label">
          <input
            className="form__input form__fieldset-input"
            type="radio"
            id="warm"
            name="radio"
            ref={refWarm}
          />
          Warm
        </label>
        <label htmlFor="cold" className="form__label form__fieldset-label">
          <input
            className="form__input form__fieldset-input"
            type="radio"
            id="cold"
            name="radio"
            ref={refCold}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
