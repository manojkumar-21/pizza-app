import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import Checkout from './components/Checkout/Checkout';

import './App.css';

function App() {
  const [cartcount, setCartcount] = useState();
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    setCartcount(cartItems.length);
  }, [cartItems]);
    
  const addToCart = (obj) => {
    // Find if the product already exist in the cartItems state
    const exist = cartItems.find((x) => x.id === obj.id);
    
     if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === obj.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
       setCartItems([...cartItems, { ...obj, qty: 1 }]);
     }
  }

  const deletecartItems = cartItem => {
    const exist = cartItems.find((x) => x.id === cartItem.id);
    
     if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((x) =>
          x.id !== cartItem.id
        )
      );
    } else {
       setCartItems(
        cartItems.map((x) =>
          x.id === cartItem.id ? {...exist, qty: x.qty - 1} : x
        )
      );
     }
  }
  
  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/signup" element={<Signup />} ></Route>
          <Route exact path="/login" element={<Login />} ></Route>
          <Route exact path="/menu" element={<Menu addToCart={addToCart} cartcount={cartcount }/>} ></Route>
          <Route exact path="/profile" element={<Profile cartcount={cartcount }/>} ></Route>
          <Route exact path="/cart" element={<Cart cartItems={cartItems} deletecartItems={deletecartItems} cartcount={cartcount }/>} ></Route>
          <Route exact path="/checkout" element={<Checkout cartcount={cartcount }/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
