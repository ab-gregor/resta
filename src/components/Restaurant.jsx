import React from 'react'

function Restaurant({restaurant}) {
  return (
    <div><h2>{restaurant.name}: {restaurant.city}</h2></div>
  )
}

export default Restaurant