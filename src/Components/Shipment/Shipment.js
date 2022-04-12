import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipment = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');



    // const navigate = useNavigate();
    const handleNameBlur = event => { setName(event.target.value) }

    const handleEmailBlur = event => { setEmail(event.target.value); };

    const handleAddressBlur = event => { setAddress(event.target.value); };

    const handleConfirmPasswordBlur = event => { setNumber(event.target.value); };

    const handleShipment = (event) => {

        event.preventDefault();



    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipment !!</h1>

                <form onSubmit={handleShipment}>

                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />

                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />

                    </div>

                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="number">Phone Number</label>
                        <input onBlur={handleConfirmPasswordBlur} type="number" name="number" id="" required />
                    </div>

                    <p style={{ color: 'red' }}>{error}</p>

                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>





            </div>

        </div>
    );
};

export default Shipment;