import React from 'react'
import Restaurant from './Restaurant'

import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';

function Restaurants() {
    const restaurants = useSelector((state)=>(state.restaurants))
  const dispatch = useDispatch()

  useEffect(()=>{
    
    getData()
  }, [])
  const getData = async ()=>{
    const res = await fetch("http://localhost:5000/restaurant",{
        method:"GET"
    })
    const data = await res.json()
    // console.log(data)
    dispatch({
      type:"GET_RES",
      payload: data
    })
  }

  return (
    <div>
        {restaurants.map((restaurant) =>(
        <Restaurant key={restaurant.id} restaurant={restaurant}></Restaurant>
      ))}
        
    </div>
  )
}

export default Restaurants