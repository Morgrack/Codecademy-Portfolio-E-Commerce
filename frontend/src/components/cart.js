import React from 'react'
import Product from "./productComponent";

const CartPage = (props) => {

    const removeFromCart = (name, price) => {

    }

    return (
        <div>
            <h1>Cart page</h1>
            <a href="./products">Back</a>
            <br></br>
            <a href="./">Log out</a>
            <br></br>
            <button>Clear cart</button>
        </div>
    )
};

export default CartPage;