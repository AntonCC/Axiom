import React, { useState } from 'react'
import './payment-modal.styles.scss'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios'
import { connect } from 'react-redux'
import { closeModal } from '../../redux/modal/modal.actions'
import { clearCart } from '../../redux/cart/cart.actions'
import { ReactComponent as Exit } from '../../imgs/times-circle-regular.svg'

const api = axios.create({
  baseURL: 'http://antonchet.com:5000/api/secret'
})

const cardOptions = {
  style: {
    // backgroundColor: 'red',
    base: {
      // background: 'blue'
    }
  }
}

const PaymentModal = ({ orderTotal, closeModal, clearCart }) => {
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
          // state: formDetails.state,
        }
      }
    }).then(result => {
      if(result.error) {
        console.log(result.error.message)
      } else if(result.paymentIntent.status === 'succeeded') {
        console.log("Payment successful.")
        closeModal()
        alert("Payment Successfull.")
        clearCart()
      }
    })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormDetails({[name]: value})
  }

  const handleClick = () => {
    closeModal()
  }

  return (
    <div className="wrapper">
      <div className="payment-modal">
        <div className="top">
          <h2>Axiom Headphones</h2>
          <h4>Order total: ${orderTotal}</h4>
          <div className="test-card-group">
            <h5><span>Test Card: </span>4242 4242 4242 4242</h5>
            <h5><span>Expiration: </span>12/20</h5>
            <h5><span>CVC: </span>222</h5>
            <h5><span>Zip Code: </span>11238</h5>
          </div>
          <div className="exit-container" onClick={handleClick}>
            <Exit />
          </div>
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

const mapStateToProps = state => ({
  orderTotal: state.cartReducer.orderTotal
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  clearCart: () => dispatch(clearCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentModal)