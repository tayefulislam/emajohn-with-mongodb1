import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProduct from '../hooks/useProducts';
import Product from '../Products/Product';
import './Shop.css';


const Shop = () => {

    const [products, setProducts] = useProduct();

    const [cart, setCart] = useState([]);

    const [pageCount, setPageCount] = useState(0);

    const [page, setPage] = useState(0)


    const selectPage = (number) => {
        setPage(number)

    }


    useEffect(() => {
        fetch(`http://localhost:5000/pageCount`)
            .then(res => res.json())
            .then(data => {

                const count = Math.ceil(data.count)
                const totalPage = Math.ceil(count / 10)

                setPageCount(totalPage)

            })
    }, [])

    console.log(pageCount)


    useEffect(() => {
        const storedProduct = getStoredCart()
        // console.log(storedProduct)
        const saveCart = []
        for (const id in storedProduct) {
            const addProduct = products.find(product => product._id === id)

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

        const exists = cart.find(product => product._id === selectedProduct._id)

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }

        else {

            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }


        // const newCart = [...cart, product];

        setCart(newCart);
        addToDb(selectedProduct._id)

    }

    // console.log(cart)


    return (
        <div className='shop-container'>

            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        addToCart={handelAddToCart}
                    ></Product>)
                }

            </div>





            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>

            <div className='pagination'>
                {
                    [...Array(pageCount).keys()].map(number => <button
                        className={page === number ? 'selected' : ''}
                        onClick={() => selectPage(number)} key={number}>{number}</button>)
                }
            </div>

        </div>
    );
};

export default Shop;