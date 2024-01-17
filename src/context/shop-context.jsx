import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i =1; i < PRODUCTS.length + 1; i++){
    cart[i] = 0
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  /** takes in ID of item we want to add to cart, takes prev value of itemid and increment 1  */
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }

  const updateCartItemCount = (newAmount, itemId) =>{
    // console.log("hello in update cart items")
    // console.log("new amount is", newAmount)
    setCartItems((prev) => ({...prev, [itemId]: newAmount}))
  }

  const calculateTotal = () => {
    let totalAmount = 0
    for (const item in cartItems){
      if (cartItems[item] > 0){
        let itemInfo = PRODUCTS.find((product) => (product.id === Number(item)))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }

  /** create a context */
  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount,calculateTotal}
  // console.log(cartItems)

  /** pass the context */
  return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>)
}

