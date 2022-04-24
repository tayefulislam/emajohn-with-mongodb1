import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../hooks/useCart';
import useProduct from '../hooks/useProducts';
import ReviewCart from '../ReviewCart/ReviewCart';

const Orders = () => {

    const [products, setPrducts] = useProduct();

    const [cart, setCart] = useCart(products)

    const handleRemoveItem = (product) => {

        const restItem = cart.filter(pd => pd._id !== product._id)

        setCart(restItem)
        removeFromDb(product._id)

    }


    return (
        <div className='shop-container'>

            <div className='review-item-container'>

                {
                    cart.map(product => <ReviewCart
                        key={product._id}
                        product={product}
                        removeItem={handleRemoveItem}></ReviewCart>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <Link to='/shipment'> <button>Proceed Checkout</button> </Link>


                </Cart>
            </div>

        </div>
    );
};

export default Orders;