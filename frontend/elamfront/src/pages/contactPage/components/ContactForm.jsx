import React, { useState } from 'react';
import styles from '../contactpage.module.css';
import Button from '../../../components/button/Button';

const ContactForm = () => {
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleNameChange = (event) => {
    setNameText(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailText(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessageText(event.target.value);
  };

  const sendMessage = () => {
    if (nameText !== "" && emailText !== "" && messageText !== "") {
      fetch('http://localhost:5000/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameText,
          email: emailText,
          message: messageText
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    }
  };

  return (
    <section className={styles.formWrapper}>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Your name" onChange={handleNameChange} />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Your email" onChange={handleEmailChange} />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="Your message" onChange={handleMessageChange}></textarea>
      </div>
      <Button onClick={sendMessage}>Send Message</Button>
    </section>
  );
};

export default ContactForm;