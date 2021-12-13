import React from 'react';
import './input.scss';

const Input = ({ type, name, value, placeholder, onChange,  disabled = false, onKeyPress  }) => {
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
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
