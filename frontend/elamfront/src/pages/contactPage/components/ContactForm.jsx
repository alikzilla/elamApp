// ContactForm.js
import React, { useState } from 'react';
import styles from '../contactpage.module.css';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';

const ContactForm = () => {
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleNameChange = (value) => {
    console.log(nameText)
    setNameText(value);
  };

  const handleEmailChange = (value) => {
    console.log(nameText)
    setEmailText(value);
  };

  const handleMessageChange = (value) => {
    console.log(nameText)
    setMessageText(value);
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
      <Input label={"Name"} type={"text"} placeholder={"Your name"} value={nameText} onChange={handleNameChange} />
      <Input label={"Email"} type={"text"} placeholder={"Your email"} value={emailText} onChange={handleEmailChange} />
      <Input label={"Message"} type={"textarea"} placeholder={"Your message"} value={messageText} onChange={handleMessageChange} />
      <Button onClick={sendMessage}>Send Message</Button>
    </section>
  );
};

export default ContactForm;
