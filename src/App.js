import logo from './logo.svg';
import './App.css';

import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import Restaurants from './components/Restaurants';
import NavBarCustom from './components/NavBarCustom';
import Carous from './components/Carous';

function App() {

  

  return (
    <div>
      <NavBarCustom></NavBarCustom>
      {/* <Carous></Carous> */}
      <Restaurants></Restaurants>
      
      
    </div>
  );
}

export default App;
