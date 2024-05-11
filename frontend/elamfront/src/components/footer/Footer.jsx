import styles from "./footer.module.css";

const Footer = ({}) => {
  const date = new Date();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© ELAM {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer;