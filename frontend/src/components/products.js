import React, {useState} from "react";
import Product from "./productComponent";

const ProductsPage = (props) => {

    const getProducts = () => {
        fetch('http://localhost:3001/', {method: 'GET', mode: 'no-cors'})
            .then(
            response => {
                console.log(response.json);
                //props.updateProducts
            },
            rejection => {
                console.error(rejection.message);
            }
        );

    };

    return (
        <div>
            <h1>Products page</h1>
            <a href="./cart">Checkout</a>
            <br></br>
            <a href="./">Log out</a>
            <br></br>
            <button onClick={getProducts}>Refresh</button>
        </div>
    )
};

export default ProductsPage;