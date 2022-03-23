import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css';


const Shop = () => {

    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch(`products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    //

    const [cart, setCart] = useState([]);

    const handelAddToCart = (product) => {


        const newCart = [...cart, product];
        setCart(newCart);

    }

    console.log(cart)


    return (
        <div className='shop-container'>

            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={handelAddToCart}
                    ></Product>)
                }

            </div>

            <div className="cart-container">
                <h1>Order Summary {products.length}</h1>
                <p>Selected Items: {cart.length}</p>

            </div>

        </div>
    );
};

export default Shop;