import styles from "./contactpage.module.css";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm";

const ContactPage = ({}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  return (
    <section className={`${styles.contactPage} pt-20`}>
      <h1>Contact us to better experience</h1>
      <ContactForm />
    </section>
  )
}

export default ContactPage;