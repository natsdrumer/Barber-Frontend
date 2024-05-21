import React, { useState, useContext } from 'react';
import './style.css';
import FormField from '../../molecules/FormField';
import Button from '../../atoms/Button';
// import AuthContext from '../../../context/AuthContext';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const { login, error } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <FormField label="Email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormField label="Password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {/* {error && <p className="error-message">{error}</p>} */}
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginForm;
