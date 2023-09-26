import React, {useState} from "react";
import { Link } from 'react-router-dom';
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
                alert(rejection.message);
            }
        );

    };

    return (
        <div>
            <h1>Products page</h1>
            <Link to="/cart">Checkout</Link>
            <br></br>
            <Link to="/">Log Out</Link>
            <br></br>
            <button onClick={getProducts}>Refresh</button>
        </div>
    )
};

export default ProductsPage;