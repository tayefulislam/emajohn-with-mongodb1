import { useEffect, useState } from "react"
import { getStoredCart } from "../../utilities/fakedb"


const useCart = () => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        const keys = Object.keys(storedCart)
        console.log(keys)


        fetch(`http://localhost:5000/productByKeys`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify(keys),

        })
            .then(res => res.json())
            .then(products => {

                for (const id in storedCart) {
                    const addedProduct = products.find(product => product._id === id)

                    if (addedProduct) {
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity;
                        saveCart.push(addedProduct)
                    }

                    setCart(saveCart);
                }

            })




    }, [])

    return [cart, setCart];

}

export default useCart;