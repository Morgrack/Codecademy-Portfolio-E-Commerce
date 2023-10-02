import './App.css';
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from './components/cart';
import LoginAndRegistrationPage from './components/loginAndRegistration';
import ProductsPage from './components/products';

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
    //filter
  }

  const getProducts = (searchParameter = "") => {
    fetch('http://localhost:3001/', {method: 'GET', mode: 'no-cors'})
        .then(
        response => {
            console.log(response.json);
            //props.updateProducts
        },
        rejection => {
            console.error(rejection.message);
            alert(rejection.message);
        }
    );
};

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<LoginAndRegistrationPage />} />
            <Route exact path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart}/>} />
            <Route exact path="/products" element={<ProductsPage products={products} addToCart={addToCart} getProducts={getProducts} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;