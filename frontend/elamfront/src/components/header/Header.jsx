import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = ({}) => {
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.headerTitle}>Elam</Link>
      <ul className={styles.itemList}>
        <Link to={"/aboutpage"} className={styles.itemText}>Who we are</Link>
        <Link to={"/houses"} className={styles.itemText}>Houses</Link>
        <Link to={"/contactpage"} className={styles.itemText}>Contact</Link>
      </ul>
    </header>
  )
}

export default Header;