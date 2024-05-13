import styles from "./button.module.css";

const Button = ({ children, width, height }) => {
    return (
        <button className={styles.button} style={{height: height + "px", width: width + "px"}}> {children} </button>
    );
}

export default Button;