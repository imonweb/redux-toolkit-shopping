import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const productCart = useSelector(state => state.cart)
  return (
    <>
    <h2>Cart</h2>
    {/* {JSON.stringify(productCart)} */}

    
    </>
  )
}

export default Cart