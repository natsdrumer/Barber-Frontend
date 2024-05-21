import React from 'react';
import './styles/RegisterPage.css';
import RegistrationForm from '../components/organisms/RegisterForm';

const RegisterPage = () => {
    return (
        <div className="register-page">
            <h1>Register</h1>
            <RegistrationForm />
        </div>
    );
};

export default RegisterPage;
