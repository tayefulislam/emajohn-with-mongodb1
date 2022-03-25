import React, { useEffect, useState } from 'react';
import { addToDb, getStoredProduct } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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


    useEffect(() => {
        const storedProduct = getStoredProduct()
        console.log(storedProduct)
        const saveCart = []
        for (const id in storedProduct) {
            const addProduct = products.find(product => product.id === id)

            if (addProduct) {
                const quantity = storedProduct[id]
                // console.log(quantity)
                addProduct.quantity = quantity
                // console.log(addProduct)
                saveCart.push(addProduct)
            }

        }

        setCart(saveCart)
    }, [products])

    const handelAddToCart = (product) => {


        const newCart = [...cart, product];
        setCart(newCart);

        addToDb(product.id)

    }

    // console.log(cart)


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
                <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Shop;