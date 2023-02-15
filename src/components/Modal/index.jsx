import React from "react";
import "./style.css";
import errorIcon from "../../assets/icons/error-icon.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import Button from "../Button";

const Modal = (props) => {
  const { isModalOpen, onConfirm, modalToggleHandlar } = props;
  return (
    <div className="modal">
      <div
        className={`modal-container  ${
          isModalOpen ? "modal-open" : "modal-close"
        }`}
      >
        <div className="modal-container-left">
          <div className="model-container-left-icon">
            <img src={errorIcon} alt="error-icon" />
          </div>
        </div>
        <div className="modal-container-right">
          <img
            onClick={modalToggleHandlar}
            src={closeIcon}
            alt="close-icon"
            className="modal-container-right-close"
          />
          <div className="modal-container-right-content">
            <h3 className="modal-container-right-content-heading">
              Unclosed Overdue Pay Runs
            </h3>
            <p className="modal-container-right-content-paragraph">
              Would you like to skip unclosed periods and start with this pay
              run <span>(January 2023)?</span>
            </p>
            <div className="modal-container-right-content-buttons">
              <Button
                onClick={modalToggleHandlar}
                className="modal-container-right-content-button-back"
              >
                Back
              </Button>
              <Button
                onClick={onConfirm}
                className="modal-container-right-content-button-skip"
              >
                Skip Unclosed Periods
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
