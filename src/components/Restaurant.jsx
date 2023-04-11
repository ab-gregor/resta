import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';

function Restaurant({restaurant}) {
    const navigate = useNavigate();
    function menuPage(id){
        // console.log(id)
        navigate('/menu', {state:{resId:id}})
        
      }
  return (
<>
    
     <Card style={{ width: '200px' }} onClick={()=>{menuPage(restaurant.id)}}>
     <Card.Img variant="top" src= {restaurant.img}/>
     <Card.Body>
       <Card.Title>{restaurant.name}</Card.Title>
       <Card.Text>
       {restaurant.city}
       </Card.Text>
       {/* <Button variant="primary">Go somewhere</Button> */}
     </Card.Body>
   </Card>
   </>
  )
}

export default Restaurant