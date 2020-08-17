import React from 'react'
import './cart.styles.scss'
import { ReactComponent as Minus } from '../../imgs/minus-solid.svg'
import { ReactComponent as Plus } from '../../imgs/plus-solid.svg'
import { ReactComponent as Trash } from '../../imgs/trash-alt-solid.svg'
import Headphones from '../../imgs/lb2.jpg'

const Cart = () => {
  return (
    <div className="cart">
      <div className="container">
        <div className="side-a">
          <img src={Headphones} alt="headphones"/>
        </div>
        <div className="side-b">
          <div className="top">
            <div className="description">
              <h4>Axiom G1</h4>
              <p>Premium - Headphones</p> 
              <p>Made in USA</p>
            </div>
            <div className="quantity">
              <div className="minus">
                <Minus />
              </div>
              <div className="amount">2</div>
              <div className="plus">
                <Plus />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="remove-item">
              <Trash />
              <p>Remove-item</p>
            </div>
            <div className="total">
              <h4>$20.99</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart