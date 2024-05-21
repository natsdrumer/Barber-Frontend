import React from 'react';
import './style.css';

const FormField = ({ label, type, name, value, onChange }) => {
    return (
        <div className="form-field">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="form-input"
            />
        </div>
    );
};

export default FormField;
