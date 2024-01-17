import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context"
import { Link } from 'react-router-dom'

export const Product = (props) => {

    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    const priceTwoDecimals = price.toFixed(2);
    return (
      <div>
        <Link className='link' to={{ pathname: `/product-details/${id}` }}>
          <div className='product' >
              <img src={productImage} alt="" className="theImage"/>
              <div className='description'>
                <p><b>{productName}</b></p>
                <p>${priceTwoDecimals}</p>
              </div>
          </div>
        </Link>
        <button className='addToCartButton' onClick = { () => addToCart(id) }> 
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
      </div>
    )
}

