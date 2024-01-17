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
    // check to see that the number is greater than 0
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] === 0){
        return prev
      }
      return {...prev, [itemId]: prev[itemId] - 1}
    })
  }

  const updateCartItemCount = (newAmount, itemId) =>{
    // console.log("new amount is", newAmount)
    setCartItems((prev) => ({...prev, [itemId]: newAmount}))
  }

  const calculateTotal = () => {
    let totalAmount = 0
    let totalQuantity = 0
    for (const item in cartItems){
      totalQuantity += cartItems[item]
      if (cartItems[item] > 0){
        let itemInfo = PRODUCTS.find((product) => (product.id === Number(item)))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return {totalAmount, totalQuantity}
  }

  /** create a context */
  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount,calculateTotal}
  // console.log(cartItems)

  /** pass the context */
  return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>)
}

