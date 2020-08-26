import ModalActionTypes from './modal.types'

const INITIAL_STATE = {
  isModalOpen: false
}

const modalReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case ModalActionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true
      }
    case ModalActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false
      }
    default:
      return state
  }
}

export default modalReducer