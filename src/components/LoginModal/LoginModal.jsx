import "./LoginModal.css";

import { useEffect, useState, useRef } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

const LoginModal = ({ isOpen, closeModal, onLogin, formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }
  if (formType === "signin") {
    return (
      <ModalWithForm
        isOpen={isOpen}
        closeModal={closeModal}
        title="Log In"
        buttonLabel="Log In"
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
      </ModalWithForm>
    );
  }
};

export default LoginModal;
