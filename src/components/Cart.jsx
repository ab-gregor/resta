import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';

function Cart() {

    const cartItems = useSelector((state)=>(state.cartItems))
    const menuList = useSelector((state)=>(state.menuList))
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
  let itemVal;
  const menuItems =  menuList.menu
  console.log(menuItems)
  cartItems.map((cartItem)=>(
    itemVal =menuItems?.filter((item)=>{
        return item.id === cartItem.itemid
      })
))


  return (
    <div>
        <h1>Cart</h1>
        {/* <h2>{itemVal}</h2> */}
    </div>
  )
}

export default Cart