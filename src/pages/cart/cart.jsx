import React, { useContext } from "react";
import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shop-context"
import { CartItem } from "./cart-item";
import "./cart.css"
import { useNavigate } from 'react-router-dom'
import { Heart } from "phosphor-react";

export const Cart = () => {
  const {cartItems, calculateTotal} = useContext(ShopContext)
  const { totalAmount, totalQuantity } = calculateTotal();

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
              return <CartItem key={product.id} data={product}/>
            }
            return null
          })}
        </div>
  
        {totalAmount > 0 ?
        <div className="checkout">
          <p className="subtotal">SubTotal: ${roundedTotalAmount}</p>
          <p className="quantity">Number of coffee bags: {totalQuantity} </p>
          <button className='checkoutBtn' onClick={() => navigate("../../")}>Continue Shopping</button>
          <button className='checkoutBtn' id="goCheckout">Checkout</button>
        </div>
      :  
      <div>
        <h3>Give your cart some love! <Heart color="#EBE3D5" weight="fill" style={{ verticalAlign: 'bottom' }} size={20} /></h3>
        
        <button className='checkoutBtn'onClick={() => navigate("../../")}>Shop for beans</button>
      </div>}
      </div>
    </div>
  )
}

