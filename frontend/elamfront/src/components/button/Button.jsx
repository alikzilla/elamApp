import React from 'react';
import styles from "./button.module.css";

const Button = ({ children, width, height, onClick }) => {
    return (
        <button className={styles.button} style={{ height: height + "px", width: width + "px" }} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
