import React, { useState, useContext } from 'react';
import './style.css';
import FormField from '../../molecules/FormField';
import Button from '../../atoms/Button';
import AuthContext from '../../../context/AuthContext';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { register, error } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        register(email, password, name);
    };

    return (
        <form className="registration-form" onSubmit={handleSubmit}>
            <FormField label="Email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormField label="Password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <FormField label="Name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            {error && <p className="error-message">{error}</p>}
            <Button type="submit">Register</Button>
        </form>
    );
};

export default RegistrationForm;
