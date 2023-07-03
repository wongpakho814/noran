import React, { useState } from "react";

function SocialImpact() {
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidMsg, setInvalidMsg] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Checks if the name is empty, if so display error message
    if (!e.target.name.value) {
      setInvalidName(true);
    } else {
      setInvalidName(false);
    }

    // Checks if the email is in the correct format or empty
    if (!e.target.email.value) {
      setInvalidEmail(true);
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.email.value)) {
      setInvalidEmail(true);
    } else {
      setInvalidEmail(false);
    }

    // Checks if the message is empty, if so display error message
    if (!e.target.message.value) {
      setInvalidMsg(true);
    } else {
      setInvalidMsg(false);
    }
  };
  return (
    <section id="contact-me">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." />

        <label htmlFor="email">Email address</label>
        <input type="text" id="email" name="email" placeholder="Your email.." />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something.."
        ></textarea>

        <input type="submit" value="Submit" />
        <br />
        <br />
        {invalidName && (
          <span>
            Name cannot be empty!
            <br />
          </span>
        )}
        {invalidEmail && (
          <span>
            The email has a wrong format/cannot be empty!
            <br />
          </span>
        )}
        {invalidMsg && <span>Message cannot be empty!</span>}
      </form>
    </section>
  );
}

export default SocialImpact;
