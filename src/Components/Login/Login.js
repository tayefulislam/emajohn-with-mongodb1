import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login !!</h1>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />

                </div>

                <div className="password-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>
            </div>

        </div>
    );
};

export default Login;