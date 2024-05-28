import "./RegisterModal.css";

import { useEffect, useState, useRef } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

const RegisterModal = ({ isOpen, closeModal, onRegister, formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAvatar = (e) => {
    setAvatarUrl(e.target.value);
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatarUrl("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ email, password, name, avatarUrl });
  }
  if (formType === "signup") {
    return (
      <ModalWithForm
        isOpen={isOpen}
        closeModal={closeModal}
        title="Sign Up"
        buttonLabel="Sign Up"
        handleSubmit={handleSubmit}
      >
        <label className="form__label" htmlFor="email">
          Email*
          <input
            className="form__input form__text-input"
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleEmail}
            value={email}
          />
        </label>
        <label className="form__label" htmlFor="password">
          Password*
          <input
            className="form__input form__text-input"
            type="text"
            placeholder="Password"
            id="password"
            onChange={handlePassword}
            value={password}
          />
        </label>
        <label className="form__label" htmlFor="name">
          Name*
          <input
            className="form__input form__text-input"
            type="text"
            placeholder="Name"
            id="name"
            onChange={handleName}
            value={name}
          />
        </label>
        <label className="form__label" htmlFor="avatarUrl">
          Avatar URL*
          <input
            className="form__input form__text-input"
            type="url"
            placeholder="Avatar URL"
            id="avatarUrl"
            onChange={handleAvatar}
            value={avatarUrl}
          />
        </label>
      </ModalWithForm>
    );
  }
};

export default RegisterModal;
