import CartActionTypes from './cart.types'

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})

export const increaseItem = item => ({
  type: CartActionTypes.INCREASE_ITEM,
  payload: item
})

export const decreaseItem = item => ({
  type: CartActionTypes.DECREASE_ITEM,
  payload: item
})

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
})

export const addToTotal = items => ({
  type: CartActionTypes.ADD_TO_TOTAL,
  payload: items
})

export const calcItemTotal = item => ({
  type: CartActionTypes.CALC_ITEM_TOTAL,
  payload: item
})

export const calcOrderTotal = item => ({
  type: CartActionTypes.CALC_ORDER_TOTAL,
  payload: item
})

export const calcOrderTax = item => ({
  type: CartActionTypes.CALC_TAX,
  payload: item
})

