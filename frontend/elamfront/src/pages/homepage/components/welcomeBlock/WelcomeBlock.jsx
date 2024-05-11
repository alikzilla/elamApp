import styles from "./welcomeBlock.module.css";

const WelcomeBlock = ({}) => {
  return (
    <section className={styles.welcomeBlock}>
      <h1 className={styles.welcomeTitle}>Welcome to Elam!</h1>
      <p className={styles.welcomeContent}>Find Safe Homes, Avoid Quakes!</p>
    </section>
  )
}

export default WelcomeBlock;