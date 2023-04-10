import React from 'react'
import { useLocation } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function Menu() {
    const location = useLocation();
    const dataId = location.state.resId
    const menuList = useSelector((state)=>(state.menuList))
    const dispatch = useDispatch()

    useEffect(()=>{
        const getData = async ()=>{
          const res = await fetch(`http://localhost:5000/menuList/${dataId}`)
          const data = await res.json()
        //   console.log(data)
          dispatch({
            type:"GET_MENU",
            payload: data
          })
        }
        getData()
      }, [])

    //   console.log(menuList)
      const menuItems = menuList.menu



      const addToCart = async (resid, itemid, name, price)=>{
        // const res = await fetch( `http://localhost:6001/products/${id}`)
        // console.log(res)
        // const data = await res.json()
        let dataCart;
        try {
          const resCart = await fetch("http://localhost:5000/cart")
          const cartData = await resCart.json()
          dataCart = cartData.filter((cartitem)=>{
                return cartitem.itemid === itemid
            })
            

        } catch (error) {
          dataCart = {}
        }
        
        
        console.log(dataCart)

        if(Object.keys(dataCart).length !== 0){
          dataCart[0].count += 1
    
          const resput = await fetch(`http://localhost:5000/cart/${dataCart[0].id}`, {
           method: 'PUT',
           headers: {
             'Content-type': 'application/json'
           },
           body: JSON.stringify(dataCart[0])
    
        })
    
        }else{
          const newCartItem = {"resid":resid,
          "itemid":itemid,
          "itemName":name,
          "itemPrice":price,
          "count":1}
          
          // data = [...data, count]
          const respush = await fetch("http://localhost:5000/cart", {
           method: 'POST',
           headers: {
             'Content-type': 'application/json'
           },
           body: JSON.stringify(newCartItem)
    
        })
      }
    }





    
  return (
    <div>
        <h2>{menuList.cuisine} : {menuList.type}</h2>

        

        {menuItems?.map((items)=>(
            <h2 key={items.id}>{items.itemName}: {items.price} <Button onClick={()=>addToCart(dataId, items.id, items.itemName, items.price)}>Add to Cart</Button> <br/> </h2>
        ))}
        
    </div>

  )
}

export default Menu