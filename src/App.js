import logo from './logo.svg';
import './App.css';

import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import Restaurants from './components/Restaurants';
import NavBarCustom from './components/NavBarCustom';
import Carous from './components/Carous';




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';

function App() {

  

  return (
    <Router>
    <div>
      <NavBarCustom></NavBarCustom>
      <Carous></Carous>
      <Routes>

      <Route path='/'  element={<Restaurants/>}/>
      <Route path='/menu' element={<Menu/>}/>
      
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
