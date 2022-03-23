import React from 'react';
import './Product.css'
const Product = (props) => {

    console.log(props.product);

    const { name, id, seller, price, img, ratings } = props.product

    return (
        <div className='product'>

            <img src={img} alt={name} />

            <h1>Product added</h1>

        </div>
    );
};

export default Product;