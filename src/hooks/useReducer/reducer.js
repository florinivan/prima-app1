import { APRI_MODAL, CHIUDI_MODAL } from "./action";

const reducer = (state, action) => {
  console.log(state, action);
  console.log(action.type);
  /* if (action.type === APRI_MODAL)
    return { ...state, isModalOpen: true, modalContent: action.payload };
  if (action.type === CHIUDI_MODAL) return { ...state, isModalOpen: false };
  return state;*/

  switch (action.type) {
    case APRI_MODAL:
      return {
        ...state,
        isModalOpen: true,
        modalContent: action.payload,
      };
    case CHIUDI_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
