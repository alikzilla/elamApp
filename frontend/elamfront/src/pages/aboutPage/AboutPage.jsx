import styles from "./aboutpage.module.css";
import { tutor } from "../../store";
import TutorStepBlock from "./components/TutorStepBlock";

const AboutPage = () => {
    return (
        <section className={styles.aboutPage}>
        <div className={styles.headerTitle}>
            <h1>How it works</h1>
            <p>There we teach how our service work</p>
        </div>
        <div className={styles.tutorList}>
            {tutor.map((step, index) => (
            <TutorStepBlock key={index} step={step} reverse={index % 2 === 0} />
            ))}
        </div>
    </section>
    )
}

export default AboutPage;