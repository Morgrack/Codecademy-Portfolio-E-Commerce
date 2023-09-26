import React from 'react'
import { Link } from 'react-router-dom';

const LoginAndRegistrationPage = (props) => {
    return (
        <div>
            <h1>Login and registration page</h1>
            <Link to="/products">Log In</Link>
        </div>
    )
};

export default LoginAndRegistrationPage;