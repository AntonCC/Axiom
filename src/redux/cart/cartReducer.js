import CartActionTypes from './cart.types'
import { addItemToCart, removeItemFromCart, increaseCartItem, decreaseCartItem, addToTotal, itemTotal, orderTotal, orderTax } from './cart.utils'

const INITIAL_STATE = {
  cartItems: [],
  cartTotal: 0,
  itemTotal: 0,
  orderTotal: 0,
  orderTax: 0
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
    case(CartActionTypes.CLEAR_CART):
      return {
        ...state,
        cartItems: []
      }
    case(CartActionTypes.ADD_TO_TOTAL):
      return {
        ...state,
        cartTotal: addToTotal(state.cartItems)
      }
    case(CartActionTypes.CALC_ITEM_TOTAL):
      return {
        ...state,
        itemTotal: itemTotal(state.cartTotal)
      }
    case(CartActionTypes.CALC_ORDER_TOTAL):
      return {
        ...state,
        orderTotal: orderTotal(state.cartTotal)
      }
    case(CartActionTypes.CALC_TAX):
      return {
        ...state,
        orderTax: orderTax(state.cartTotal)
      }
    default:
      return state
  }
}

export default cartReducer