import React, { useContext } from "react";
import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shop-context"
import { CartItem } from "./cart-item";
import "./cart.css"
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const {cartItems, calculateTotal} = useContext(ShopContext)
  const totalAmount = calculateTotal()

  const navigate = useNavigate()

  const roundedTotalAmount = totalAmount.toFixed(2);

  return (
    <div className='wrapper'>
      <div className='cart'>
        <div>
          <h2>Your Cart</h2>
        </div>
        <div className='cartItems'>
          {PRODUCTS.map((product) => {
            if(cartItems[product.id] !== 0){
              return <CartItem data={product}/>
            }
          })}
        </div>
  
        {totalAmount > 0 ?
        <div className="checkout">
          <p className="subtotal">SubTotal: ${roundedTotalAmount}</p>
          <button className='checkoutBtn' onClick={() => navigate("../../")}>Continue Shopping</button>
          <button className='checkoutBtn' id="goCheckout">Checkout</button>
        </div>
      :  
      <div>
        <h3>Give your cart some love! </h3>
        <button className='checkoutBtn'onClick={() => navigate("../../")}>Shop for beans</button>
      </div>}
      </div>
    </div>
  )
}

