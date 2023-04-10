import logo from './logo.svg';
import './App.css';

import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import Restaurants from './components/Restaurants';
import NavBarCustom from './components/NavBarCustom';

function App() {

  

  return (
    <div>
      <NavBarCustom></NavBarCustom>
      <Restaurants></Restaurants>
      
      
    </div>
  );
}

export default App;
