import React from 'react'
import { useLocation } from 'react-router-dom'

function Menu() {
    const location = useLocation();
    const data = location.state.resId

    // useEffect(()=>{
    //     const getData = async ()=>{
    //       const res = await fetch(`http://localhost:5000/menuList/${data}`)
    //       const data = await res.json()
    //       // console.log(data)
    //       dispatch({
    //         type:"GET_MENU",
    //         payload: data
    //       })
    //     }
    //     getData()
    //   }, [])
    
  return (
    <div>Menu
        : {data}
        
    </div>

  )
}

export default Menu