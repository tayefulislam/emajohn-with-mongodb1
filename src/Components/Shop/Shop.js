import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProduct from '../hooks/useProducts';
import Product from '../Products/Product';
import './Shop.css';


const Shop = () => {

    const [products, setProducts] = useProduct();

    const [cart, setCart] = useState([]);



    useEffect(() => {
        const storedProduct = getStoredCart()
        // console.log(storedProduct)
        const saveCart = []
        for (const id in storedProduct) {
            const addProduct = products.find(product => product.id === id)

            if (addProduct) {
                const quantity = storedProduct[id]
                // console.log(storedProduct)
                // console.log(quantity)
                addProduct.quantity = quantity
                // console.log(addProduct)
                saveCart.push(addProduct)
            }

        }

        setCart(saveCart)
    }, [products])



    const handelAddToCart = (selectedProduct) => {



        let newCart = []

        const exists = cart.find(product => product.id === selectedProduct.id)

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }

        else {

            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }


        // const newCart = [...cart, product];

        setCart(newCart);
        addToDb(selectedProduct.id)

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