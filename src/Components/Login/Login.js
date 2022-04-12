import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }

    const [signInWithEmailAndPassword,
        user, loading, error,] = useSignInWithEmailAndPassword(auth)

    if (user) {
        navigate('/shop')

    }

    const handleSignIn = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)

    }





    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login !!</h1>

                <form onSubmit={handleSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />

                    </div>


                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>



                    <input className='form-submit' type="submit" value="Login" required />

                </form>
                <p>New to Ema-john? <Link className='form-link' to="/signup">Create New Account</Link></p>
                {
                    loading && <p>Loading...</p>
                }

                {
                    error && <p>{error.message}</p>
                }
            </div>

        </div>
    );
};

export default Login;