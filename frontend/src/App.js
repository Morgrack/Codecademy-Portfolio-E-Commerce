import './App.css';
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import CartPage from './components/cart';
import LoginAndRegistrationPage from './components/loginAndRegistration';
import ProductsPage from './components/products';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([3, 4]);
  const [user, setUser] = useState([]);

  const addToCart = (name, price) => {
    const productToAdd = {name : name, price : price};
    setCart(() => {return [...cart, productToAdd]});
  }

  const removeFromCart = (name, price) => {
    const productToRemove = {name : name, price : price};
    //filter
  }

  const updateProducts = (newList) => {
    setProducts(() => {return newList});
  }

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<LoginAndRegistrationPage />} />
            <Route exact path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart}/>} />
            <Route exact path="/products" element={<ProductsPage products={products} addToCart={addToCart} updateProducts={updateProducts} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;