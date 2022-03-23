import React from 'react';
import './Product.css'
const Product = (props) => {

    console.log(props.product);

    const { name, id, seller, price, img, ratings } = props.product

    return (
        <div className='product'>

            <img src={img} alt={name} />

            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price :$ {price}</p>
                <p>Seller : {seller}</p>
                <p>Ratings : {ratings}</p>

            </div>

            <button className='btn-cart'>
                <p> Add To Cart
                </p>
            </button>
        </div>
    );
};

export default Product;