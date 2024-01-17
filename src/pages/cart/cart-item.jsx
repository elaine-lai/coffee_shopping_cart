import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { ShopContext } from "../../context/shop-context"
import './cart-item.css'

export const CartItem = (props) => {
  const {id, productName, productDescription, price, productImage, grams} = props.data;
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)

  let product_description = false
  const params = useParams();
  if(params.id === undefined){
    product_description = false
  }else{
    product_description = true
  }
  
  return (
    <div className='cartItem'>
      <img src={productImage} alt="" className="productImage"/>
      <div className='description'>
        <p className="prodName"><b>{productName}</b></p>
        <p className="prodPrice">${price}</p>
        {product_description ? <p className="prodDescrip">{productDescription}<br /><br />{grams}</p> : <p></p>}
        <div className='countHandler'>
          <button onClick={()=> removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
          <button onClick={()=> addToCart(id)} className="addToCartBtn">+</button>
        </div>
      </div>
    </div>
  )
}


