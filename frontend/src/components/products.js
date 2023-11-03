import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Product from "./productComponent";

const ProductsPage = (props) => {
    const [searchText, setSearchText] = useState('');

    const setTheSearchText = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div>
            <h1>Products page</h1>
            <Link to="/cart">Checkout</Link>
            <br></br>
            <Link to="/">Log Out</Link>
            <br></br>
            <input type="text" value={searchText} onChange={setTheSearchText}></input>
            <button onClick={props.getProducts}>Search</button>
        </div>
    )
};

export default ProductsPage;