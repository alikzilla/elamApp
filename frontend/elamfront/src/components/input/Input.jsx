// Input.js
import React from 'react';
import styles from './input.module.css';

const Input = ({ type, label, placeholder, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={label}>{label}:</label>
      {type === 'textarea' ? (
        <textarea
          id={label}
          placeholder={placeholder}
          className={styles.textarea}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          className={styles.input}
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Input;
