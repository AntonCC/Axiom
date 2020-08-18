import CartActionTypes from './cart.types'
import { addItem } from './cart.utils'

const INITIAL_STATE = {
  cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case(CartActionTypes.ADD_ITEM):
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer