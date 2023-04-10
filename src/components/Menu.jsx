import React from 'react'
import { useLocation } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';

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
    
  return (
    <div>
        <h2>{menuList.cuisine} : {menuList.type}</h2>

        

        {menuItems?.map((items)=>(
            <h2 key={items.id}>{items.itemName}: {items.price} <br/> </h2>
        ))}
        
    </div>

  )
}

export default Menu