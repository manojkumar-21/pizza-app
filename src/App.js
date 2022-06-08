
import './App.css';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MainNav from './components/Navbar/MainNav';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import MenuNav from './components/Navbar/MenuNav';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import axios from 'axios';





function App() {
  const [cartcount, setCartcount] = useState();
  const [cartItems, setCartItems] = useState([]);
  
   useEffect(() => {
    localStorage.setItem("mycartItems", JSON.stringify(cartItems));    
    const count = JSON.parse(localStorage.getItem("mycartItems")).length;
    setCartcount(count);
     }, [cartItems]);
    
  const addToCart = (obj) => {
    
    console.log(obj)
    // Find if the product already exist in the cartItems state
    const exist = cartItems.find((x) => x.id === obj.id);
    
     if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === obj.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
       obj={ ...obj, qty: obj.qty + 1 }
         axios.post("http://localhost:8888/cartItems",obj)
    } else {
       setCartItems([...cartItems, { ...obj, qty: 1 }]);
       obj={...obj, qty: 1 }
         axios.post("http://localhost:8888/cartItems",obj)
     }
   
  }
  return (
    <>
    <Router>
      <div className="App">
      {/* <Nav /> */}
        <Routes>
          <Route exact path="/" element={<><MainNav /><Home /> </>} ></Route>
          <Route exact path="/signup" element={<><MainNav /><Signup /></>} ></Route>
            <Route exact path="/login" element={<><MainNav /><Login /></>} ></Route>
            <Route exact path="/menu" element={<><MenuNav cartcount={cartcount } /><Menu addToCart={addToCart} /></>} ></Route>
            <Route exact path="/profile" element={<><MenuNav cartcount={cartcount }/><Profile /></>} ></Route>
             <Route exact path="/cart" element={<><MenuNav cartcount={cartcount }/><Cart /></>} ></Route>
        
        </Routes>
      </div>
      
    </Router>
    </>
  );
}

export default App;
