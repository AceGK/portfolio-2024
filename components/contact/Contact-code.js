"use client";
import { useState } from "react";
// https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from "./Contact.module.scss";

export default function Contact() {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [hide, setHide] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    const res = await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess(!success);
    } else {
      setError(!error);
    }

    setHide(!hide);
  }

  return (
    <section id="contact">
      <h2 className="code-heading fs-600 center-text">Contact</h2>

      <div className={styles.contact}>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`import { useState } from "react";

const [sender, setSender] = useState("${sender}");
const [recipient, setRecipient] = useState("${recipient}");
const [subject, setSubject] = useState("${subject}");
const [message, setMessage] = useState("${message}");

`}
        </SyntaxHighlighter>

        <div
          className={styles.success}
          style={{ display: success ? "block" : "none" }}
        >
          <p>Thank you for getting in touch!</p>
        </div>
        <div
          className={styles.success}
          style={{ display: error ? "block" : "none" }}
        >
          <p>
            Error! <br />
            Please refresh and try again or contact me at{" "}
            <a href="mailto:acekisch@gmail.com">acekisch@gmail.com</a>
          </p>
        </div>

        <form
          name="contact"
          method="POST"
          onSubmit={handleOnSubmit}
          className={styles.form}
          style={{ display: hide ? "none" : "grid" }}
        >
          <div className="honey">
            <label htmlFor="email">Your Name</label>
            <input id="email" name="email" type="email" autoComplete="off" />
            <label htmlFor="email">Your Email</label>
            <input id="subject" name="subject" type="subject" autoComplete="off" />
            <label htmlFor="subject">Your Subject</label>
            <input id="email" name="email" type="email" autoComplete="off" />
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" autoComplete="off"></textarea>
          </div>

          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="nameTrue" hidden>Name</label>
          <input type="text" name="nameTrue" placeholder="Your Name" required value={sender} onChange={(e) => setSender(e.target.value)} />

          <label htmlFor="emailTrue" hidden>Email</label>
          <input type="email" name="emailTrue" placeholder="Your Email" required value={recipient} onChange={(e) => setRecipient(e.target.value)} />

          <label htmlFor="subject" hidden>Subject</label>
          <input type="subject" name="subjectTrue" placeholder="Your Subject" required value={subject} onChange={(e) => setSubject(e.target.value)} />

          <label htmlFor="messageTrue" hidden>Message</label>
          <textarea name="messageTrue" placeholder="Your Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit" className="button">
            Send
          </button>
        </form>
        <style jsx>{`
          .honey {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
