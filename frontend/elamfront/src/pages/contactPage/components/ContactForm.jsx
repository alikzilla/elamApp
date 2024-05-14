import React, { useState } from 'react';
import styles from '../contactpage.module.css';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';

class MessageSender {
    sendMessage(name, email, message) {
        throw new Error("This method must be overridden");
    }
}

class RealMessageSender extends MessageSender {
    async sendMessage(name, email, message) {
        console.log("Sending message:", name, email, message);
        return fetch('http://localhost:5000/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }
}

class MessageSenderProxy extends MessageSender {
    constructor(realMessageSender) {
        super();
        this.realMessageSender = realMessageSender;
    }

    async sendMessage(name, email, message) {
        if (this.checkAccess()) {
            await this.realMessageSender.sendMessage(name, email, message);
            this.logMessage(name, email, message);
        }
    }

    checkAccess() {
        console.log("Checking access.");
        return true;
    }

    logMessage(name, email, message) {
        console.log("Logging message:", name, email, message);
    }
}

const ContactForm = () => {
    const [nameText, setNameText] = useState("");
    const [emailText, setEmailText] = useState("");
    const [messageText, setMessageText] = useState("");

    const realMessageSender = new RealMessageSender();
    const messageSenderProxy = new MessageSenderProxy(realMessageSender);

    const handleNameChange = (e) => {
        setNameText(e.target.value);
        console.log("Name: " + nameText);
    };

    const handleEmailChange = (e) => {
        setEmailText(e.target.value);
        console.log("Email: " + emailText);
    };

    const handleMessageChange = (e) => {
        setMessageText(e.target.value);
        console.log("Message: " + messageText);
    };

    const sendMessage = () => {
        messageSenderProxy.sendMessage(nameText, emailText, messageText);
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
