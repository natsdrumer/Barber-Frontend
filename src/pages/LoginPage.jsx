import React from 'react';
import './styles/LoginPage.css';
import LoginForm from '../components/organisms/LoginForm';

const LoginPage = () => {
    return (
        <div className="login-page">
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
