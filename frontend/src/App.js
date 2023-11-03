import './App.css';
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from './components/cart';
import LoginAndRegistrationPage from './components/loginAndRegistration';
import ProductsPage from './components/products';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);

  const addToCart = (name, price) => {
    const productToAdd = {name : name, price : price};
    setCart(() => {return [...cart, productToAdd]});
  }

  const removeFromCart = (name, price) => {
    const productToRemove = {name : name, price : price};
    setCart(() => {return [cart.filter((element) => element !== productToRemove)]});
  }

  const getProducts = async (searchParameter = "") => {
    try {
      const data = await axios.get('http://localhost:3001/');
      //const data = await (await fetch('http://localhost:3001/', {method: 'GET', mode: 'no-cors'})).json()
      console.log(data);
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<LoginAndRegistrationPage />} />
            <Route exact path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
            <Route exact path="/products" element={<ProductsPage products={products} addToCart={addToCart} getProducts={getProducts} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;