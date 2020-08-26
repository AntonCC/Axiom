export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

  if(!existingCartItem) {
    return [...cartItems, {...cartItemToAdd}]
  }
  return cartItems
}

export const increaseCartItem = (cartItems, cartItemToIncrease) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToIncrease.id)

  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToIncrease.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem  
    )
  }
  return [...cartItems]
}

export const decreaseCartItem = (cartItems, cartItemToDecrease) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDecrease.id)

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id)
  }

  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToDecrease.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem  
    )
  }

  return [...cartItems]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

  if(existingCartItem) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }
  return cartItems
}

export const addToTotal = (cartItems) => {
  let cartTotal = 0
  cartItems.forEach(cartItem => {
    cartTotal +=(cartItem.activePrice * cartItem.quantity)
  })
  
  return cartTotal
}
// helper
const roundTwo = (num) => {
  let multiplier = Math.pow(10, 2)
  return (Math.round(num * multiplier) / multiplier)
}

export const orderTotal = (cartTotal) => {
  const tax = roundTwo(cartTotal * .0875)

  return roundTwo(cartTotal + tax + 9.99)
}

export const orderTax = (cartTotal) => {
  const tax = roundTwo(cartTotal * .0875)

  return tax
}