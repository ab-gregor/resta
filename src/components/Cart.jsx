import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';

import Button from 'react-bootstrap/Button';

function Cart() {

    const cartItems = useSelector((state)=>(state.cartItems))
  const dispatch = useDispatch()

  useEffect(()=>{
    
    getData()
  }, [])
  const getData = async ()=>{
    const res = await fetch("http://localhost:5000/cart",{
        method:"GET"
    })
    const data = await res.json()
    // console.log(data)
    dispatch({
      type:"GET_FROM_CART",
      payload: data
    })
  }
    //   console.log(itemVal)
    let totalPrice = 0
    cartItems.map((cartItem)=>
        
        totalPrice = totalPrice + (cartItem.count * cartItem.itemPrice)
    )

  return (
    <div>
        <h1>Cart</h1>
        {cartItems.map((cartItem)=>(
            <h2 key={cartItem.id}>{cartItem.itemName}: {cartItem.count}</h2>
        ))}
        <h1>{totalPrice}</h1>

        <Button onClick={()=>alert("Order placed!")}>Place Order</Button>
        
    </div>
  )
}

export default Cart