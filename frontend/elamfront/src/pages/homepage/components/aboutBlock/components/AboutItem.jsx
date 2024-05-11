import styles from "./about.module.css";

const AboutItem = ({ name, content }) => {
  return (
    <section className={styles.aboutItem}>
      <h1 className={styles.itemTitle}>{ name }</h1>
      <p className={styles.itemContent}>{ content }</p>
    </section>
  )
}

export default AboutItem;