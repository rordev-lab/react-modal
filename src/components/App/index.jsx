import React, { useState } from "react";

import Button from "../Button";
import Modal from "../Modal";
import "./style.css";

const ModalApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandlar = () => {
    setIsModalOpen(!isModalOpen);
  };

  const modalConfirmHandlar = () => {
    console.log("Modal Confirm Handlar", isModalOpen);
  };

  return (
    <>
      <h1 className="react-app-heading">React Test </h1>
      <Button className="click-me-button" onClick={openModalHandlar}>
        Click Me
      </Button>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          onConfirm={modalConfirmHandlar}
          modalToggleHandlar={openModalHandlar}
        />
      )}
    </>
  );
};

export default ModalApp;
