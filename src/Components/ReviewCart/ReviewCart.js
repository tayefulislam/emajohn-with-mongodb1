
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewCart.css'

const ReviewCart = (props) => {

    const { product, removeItem } = props

    const { name, img, price, shipping, quantity } = product;
    return (



        <div className='review-item'>

            <div>
                <img src={img} alt="" />
            </div>

            <div className="review-item-details-container">
                <div className="review-item-details" title={name}>

                    <p>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p><small>{price}</small></p>
                    <p><small>Shipping Charge :{shipping}</small></p>
                    <p>Quantity : {quantity}</p>



                </div>

                <div className="delete-container">

                    <button onClick={() => removeItem(product)} className='delete-btn'> <FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon></button>

                </div>
            </div>


        </div>



    );
};

export default ReviewCart;