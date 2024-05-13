import styles from "./tutorstep.module.css";

const TutorStepBlock = ({ step, reverse }) => {
  return (
    <section className={styles.tutorStepBlock} style={{ flexDirection: reverse ? "row" : "row-reverse" }}>
      <img src={step.img} alt={step.img.src} className={styles.stepImage} />
      <div className={styles.text}>
        <h1>{step.title}</h1>
        <p>{step.content}</p>
      </div>
    </section>
  )
}

export default TutorStepBlock;
