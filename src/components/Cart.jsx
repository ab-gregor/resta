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
  let itemVal=[];
  const menuItems =  menuList.menu

//   console.log(menuItems)

  cartItems.map((cartItem)=>(
    itemVal.push(menuItems?.filter((item)=>{
        return item.id === cartItem.itemid
      }))
))
    //   console.log(itemVal)

    

  return (
    <div>
        <h1>Cart</h1>
        {itemVal.map((item)=>
            
            {item.map((ite)=>(
                console.log(ite.itemName)
                // <h2>{ite.itemName}</h2>
                // <p>{ite.itemName}</p>
        ))}
        )}
    </div>
  )
}

export default Cart