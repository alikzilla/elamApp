import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = ({}) => {
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.headerTitle}>Elam</Link>
      <ul className={styles.itemList}>
        <Link to={"/about"} className={styles.itemText}>Who we are</Link>
        <Link to={"/pricepage"} className={styles.itemText}>Price</Link>
        <Link to={"/contact"} className={styles.itemText}>Contact</Link>
      </ul>
    </header>
  )
}

export default Header;