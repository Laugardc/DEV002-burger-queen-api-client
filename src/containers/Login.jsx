import React from 'react';
import '../styles/Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title">Login</h1>
                <p className="subtitle">Enter your user and password</p>
                <form action="/" className="form">
                    <label for="user" className="label">User</label>
                    <input type="user" id="user" placeholder="Your name" className="input input-user" />
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
                    <input type="submit" value="Confirm" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default Login;