import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from "../../context/shop-context"
import { PRODUCTS } from "../../products"
import { CartItem } from "../cart/cart-item";
import './productdetails.css'

export const ProductDetails = () => {
  const {cartItems} = useContext(ShopContext)
  const params = useParams();
  const product_productid = Number(params.id);
  
  
  const foundProduct = PRODUCTS.find(product => product.id === product_productid);
  
  if (foundProduct) {
    console.log('Found product:', foundProduct);
  } else {
    console.log('Product not found');
  }

  return (
    <div className='productDetails'>
      {/* <h3>Product Details</h3> */}
      <div className='productInfo'>
        <CartItem data={foundProduct}/>
      </div>
    </div>
  )
}
