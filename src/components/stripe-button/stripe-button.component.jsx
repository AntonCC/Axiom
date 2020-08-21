import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = "pk_test_Z7jJCliZV8OSj3W5iv3dI2yg0074ZWtPBk"

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(res => {
      alert("Payment Successful.")
    }).catch(error => {
      console.log("Payment error: ", JSON.parse(error))
      alert("There was a problem with your payment.")
    })
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="Axiom"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
export default StripeCheckoutButton