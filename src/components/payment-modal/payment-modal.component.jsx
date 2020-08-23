import React, { useState } from 'react'
import './payment-modal.styles.scss'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios'
// import { ReactComponent as Exit } from '../../imgs/times-circle-regular.svg'

const api = axios.create({
  baseURL: 'http://localhost:5000/api/secret'
})

const cardOptions = {
  style: {
    // backgroundColor: 'red',
    base: {
      // background: 'blue'
    }
  }
}

const PaymentModal = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await api.post('/')
    const clientSecret = res.data.client_secret

    const cardElement = elements.getElement(CardElement)

    stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: formDetails.name,
          address: formDetails.address,
          city: formDetails.city,
          state: formDetails.state,
        }
      }
    }).then(result => {
      if(result.error) {
        console.log(result.error.message)
      } else if(result.paymentIntent.status === 'succeeded') {
        console.log("Good job dude! Your a master dev!")
      }
    })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormDetails({[name]: value})
  }

  return (
    <div className="wrapper">
      <div className="payment-modal">
        <div className="top">
          <h2>Axiom Headphones</h2>
        </div>
        <div className="bottom">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required/>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required/>
            <div className="row">
              <input type="text" name="city" placeholder="City" onChange={handleChange} required/>
              <input type="text" name="state" placeholder="State" onChange={handleChange} required/>
            </div>
            <div className="element-wrapper">
              <CardElement options={cardOptions}/>
            </div>
            <button className="pay-btn" type="submit">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default PaymentModal