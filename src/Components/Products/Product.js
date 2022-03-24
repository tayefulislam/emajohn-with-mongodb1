import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {

    // console.log(props.addToCart);

    const { name, seller, price, img, ratings } = props.product

    return (
        <div className='product'>

            <img src={img} alt={name} />

            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p>Seller : {seller}</p>
                <p>Ratings : {ratings}</p>

            </div>

            <button onClick={() => props.addToCart(props.product)} className='btn-cart'>
                <p className='btn-text'> Add To Cart
                </p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Product;