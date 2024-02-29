import React from "react";
import styles from "./ContactForm.module.css";
// Importing useForm and ValidationError from formspree
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  // Initializing useForm hook with the form ID
  const [state, handleSubmit] = useForm("mjvnrpqr");
  if (state.succeeded) {
    // If form submission succeeds, display a thank you message
    return <p className={styles.thankyou}>Thanks for your message!</p>;
  }

  // If form submission is not successful, display the contact form
  return (
    <div className={styles.contact_section} id="contact">
      <div>
        {/* Section heading and description */}
        <h2 className="heading-font">LET'S CONNECT</h2>
        <p className="heading-font">
          Contact our support team or make an appointment with our experts.
        </p>
      </div>
      {/* Form */}
      <form
        className={`${styles.formContainer} content-font`}
        onSubmit={handleSubmit}
      >
        {/* Name input */}
        <label htmlFor="name">Full Name*:</label>
        <input id="name" type="text" name="name" required />
        {/* Display validation error if any */}
        <ValidationError prefix="name" field="name" errors={state.errors} />
        {/* Email input */}
        <label htmlFor="email">Email*:</label>
        <input id="email" type="email" name="email" required />
        {/* Display validation error if any */}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        {/* Contact number input */}
        <label htmlFor="contact_number">Contact Number*:</label>
        <input
          id="contact_number"
          type="number"
          name="contact_number"
          required
        />
        {/* Display validation error if any */}
        <ValidationError
          prefix="contact_number"
          field="contact_number"
          errors={state.errors}
        />
        {/* Subject input */}
        <label htmlFor="subject">Subject*:</label>
        <input id="subject" type="text" name="subject" required />
        {/* Display validation error if any */}
        <ValidationError
          prefix="subject"
          field="subject"
          errors={state.errors}
        />
        {/* Message textarea */}
        <label htmlFor="message">Message*:</label>
        <textarea id="message" name="message" required />
        {/* Display validation error if any */}
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        {/* Submit button */}
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
