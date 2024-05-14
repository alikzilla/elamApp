import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = ({ headerTitle, items }) => {
  return (
    <header className={styles.header}>
      <Link to={"/elamApp"} className={styles.headerTitle}>{headerTitle}</Link>
      <ul className={styles.itemList}>
        {items.map(({ link, text }) => (
          <li key={link}>
            <Link to={link} className={styles.itemText}>{text}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;