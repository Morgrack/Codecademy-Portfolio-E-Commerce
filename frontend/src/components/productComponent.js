import React from 'react'

const Product = (props) => {
    if (props.inCart) {
        const myButton = <button onPress={props.removeFromCart(props.name, props.price)}>Remove from cart</button>;
    } else {
        const myButton = <button onPress={props.addToCart(props.name, props.price)}>Add to cart</button>;
    }
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <myButton />;
        </div>
    );
};

export default Product;