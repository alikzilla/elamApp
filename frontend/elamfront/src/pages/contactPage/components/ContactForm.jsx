import { useState } from "react";
import styles from "../contactpage.module.css";
import Button from "../../../components/button/Button";

const ContactForm = ({}) => {
  const [ nameText, setNameText ] = useState("");
  const [ emailText, setEmailText ] = useState("");
  const [ messageText, setMessageText ] = useState("");

  const NameTextHandler = (event) => {
    setNameText(event.target.value);
  }

  const EmailTextHandler = (event) => {
    setEmailText(event.target.value);
  }

  const MessageTextHandler = (event) => {
    setMessageText(event.target.value);
  }

  const sendMessage = () => {
    if (nameText !== "" && emailText !== "" && messageText !== "") {
      console.log("Send message " + nameText + " " + emailText + " " + messageText)
    }
  }

  return (
    <section className={styles.formWrapper}>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Your name" onChange={NameTextHandler} />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="Email" id="email" placeholder="Your email" onChange={EmailTextHandler} />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" placeholder="Your message" onChange={MessageTextHandler} ></textarea>
      </div>
      <Button onClick={sendMessage}>Send Message</Button>
    </section>
  )
}

export default ContactForm;