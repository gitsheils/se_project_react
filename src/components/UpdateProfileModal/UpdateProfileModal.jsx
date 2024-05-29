import "./UpdateProfileModal.css";

import { useEffect, useState, useRef } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

const UpdateProfileModal = ({ isOpen, closeModal, onUpdate }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAvatar = (e) => {
    setAvatar(e.target.value);
  };

  useEffect(() => {
    setName("");
    setAvatar("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate({ name, avatar });
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      closeModal={closeModal}
      title="Change profile data"
      buttonLabel="Save changes"
      handleSubmit={handleSubmit}
    >
      <label className="form__label" htmlFor="name">
        Name *
        <input
          className="form__input form__text-input"
          type="text"
          placeholder="Name *"
          id="name"
          onChange={handleName}
          value={name}
        />
      </label>
      <label className="form__label" htmlFor="avatar">
        Avatar*
        <input
          className="form__input form__text-input"
          type="url"
          placeholder="Avatar *"
          id="avatar"
          onChange={handleAvatar}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
};

export default UpdateProfileModal;
