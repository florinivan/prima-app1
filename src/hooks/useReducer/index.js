import React, { useReducer } from "react";
import Modal from "../../componets/Modal";
import { APRI_MODAL, CHIUDI_MODAL } from "./action";
import reducer from "./reducer";
const initSate = {
  modalContent: "Sono un modal nuovo",
  isModalOpen: false,
};
const Index = () => {
  const [state, dispatch] = useReducer(reducer, initSate);
  const openModal = () => {
    dispatch({ type: APRI_MODAL, payload: "il mio modal" });
  };
  const closeModal = () => {
    dispatch({ type: CHIUDI_MODAL });
  };
  return (
    <>
      <div>
        <h2>Apri modal</h2>
        <button className='button' onClick={openModal}>
          {" "}
          Apri Modal
        </button>
      </div>
      <Modal
        modalContent={state.modalContent}
        modalState={state.isModalOpen}
        chiudiModal={closeModal}
      ></Modal>
    </>
  );
};

export default Index;
