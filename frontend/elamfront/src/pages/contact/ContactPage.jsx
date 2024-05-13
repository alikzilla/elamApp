import styles from "./contactpage.module.css";
import ContactForm from "./components/ContactForm";

const ContactPage = ({}) => {
  return (
    <section className={styles.contactPage}>
      <h1>Contact us to better experience</h1>
      <ContactForm />
    </section>
  )
}

export default ContactPage;