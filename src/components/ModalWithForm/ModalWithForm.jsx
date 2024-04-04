import "./ModalWithForm.css";
import "../AddGarmentForm/AddGarmentForm.jsx";
import AddGarmentForm from "../AddGarmentForm/AddGarmentForm.jsx";
function ModalWithForm({ isOpen, closeModal, title, buttonLabel }) {
  return (
    <div className={`modal ${isOpen === "addgarm" && "modal_opened"}`}>
      <div className="modal__content">
        <button className="modal__close" onClick={closeModal}></button>
        <h2 className="modal__title">{title}</h2>

        <AddGarmentForm buttonLabel={buttonLabel} />
      </div>
    </div>
  );
}

export default ModalWithForm;
