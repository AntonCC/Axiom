import CartActionTypes from './cart.types'
import { addItemToCart, removeItemFromCart, increaseCartItem, decreaseCartItem } from './cart.utils'

const INITIAL_STATE = {
  cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case(CartActionTypes.ADD_ITEM):
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case(CartActionTypes.REMOVE_ITEM):
    return {
      ...state,
      cartItems: removeItemFromCart(state.cartItems, action.payload) 
    }
    case(CartActionTypes.INCREASE_ITEM):
      return {
        ...state,
        cartItems: increaseCartItem(state.cartItems, action.payload)
      }
    case(CartActionTypes.DECREASE_ITEM):
      return {
        ...state,
        cartItems: decreaseCartItem(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer