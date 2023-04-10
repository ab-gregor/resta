import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaShoppingCart} from 'react-icons/fa';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';




function NavBarCustom() {

    const restaurants = useSelector((state)=>(state.restaurants))
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [query, setQuery] = useState('');

    const searchRestaurant = () =>{

        const result = restaurants.filter((restaurant) =>{
            return restaurant.name === query
        })

        dispatch({
            type: 'GET_RES_SEARCH',
            payload: result
        })
    }

    function cartPage(){
        navigate('/cart')
    }

  return (
    <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Resto</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2" onClick={()=>{cartPage()}}><FaShoppingCart/>  Cart</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>{
                setQuery(e.target.value)
              }}
            />
            <Button onClick={searchRestaurant} variant="outline-success" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarCustom;


