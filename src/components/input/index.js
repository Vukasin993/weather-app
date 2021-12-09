import React from 'react';
import './input.scss';

const Input = ({ type, name, value, placeholder, onChange, autofocus = false, disabled = false, onKeyPress, autoComplete }) => {
    return (
        <div className="inputWrapper">
            <input
                className="input"
                id={name}
                type={type}
                name={name}
                onKeyPress={onKeyPress}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                autoFocus={autofocus}
                disabled={disabled}
                autoComplete={autoComplete}
            />
        </div>
    );
};

export default Input;
