import React from 'react';
import './style.css';

const Button = ({ type, children, onClick }) => {
    return (
        <button className="button" type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
