import React from 'react'
import { Link } from 'react-router-dom';
import Product from "./productComponent";

const CartPage = (props) => {

    const removeFromCart = (name, price) => {

    }

    return (
        <div>
            <h1>Cart page</h1>
            <Link to="/products">Back</Link>
            <br></br>
            <Link to="/">Log Out</Link>
            <br></br>
            <button>Clear cart</button>
        </div>
    )
};

export default CartPage;