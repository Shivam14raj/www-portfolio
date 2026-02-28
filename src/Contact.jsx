import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);
  formData.append("access_key", "a051eb22-69f2-41b8-9717-11aecd74da23");

  const response = await fetch("a051eb22-69f2-41b8-9717-11aecd74da23", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  if (data.success) {
    setResult("Form Submitted Successfully");
    event.target.reset();
  } else {
    setResult("Error");
  }
};

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <div className="contact-title" style={{ gridArea: "contacttitle" }}>
          <h1>CONTACT ME</h1>
        </div>
        <div className="contact-details" style={{ gridArea: "contactdetails" }}>
          <div className="form-input" style={{ gridArea: "forminput" }}>
            <h1>
              Have an awesome idea?
              <br />
              Let's bring it to life.
            </h1>{" "}
            <br />
            <h6>
              I am looking for opportunities or internships <br />
              as a software developer.
            </h6>
            <br />
            <form action="" className="contact-form" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Your name"
                className="input"
                name="name"
                required
              />{" "}
              <br />
              <input
                type="text"
                placeholder="Your email"
                className="input"
                name="email"
                required
              />{" "}
              <br />
              <textarea
                name="message"
                id=""
                placeholder="Your message"
                className="textarea"
                required
              ></textarea>{" "}
              <br />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: "300", damping: "20" }}
                type="submit"
                className="submit-btn"
              >
                Send Message
              </motion.button>
            </form>
          </div>
          <div className="socials" style={{ gridArea: "socials" }}>
            <h1>Contact Details</h1> <br />
            <h4>shivamrraj2005@gmail.com</h4> <br />
            <h4>+91- 9304774216</h4>
            <br /> <br />
            <h1>My Digital Space</h1> <br />
            <a
              href="https://www.linkedin.com/in/shivam-raj-427a03284"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Linkdein</h3>
            </a>
            <br />
            <a
              href="https://github.com/Shivam14raj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Github</h3>
            </a>
            <br />
            <a
              href="https://twitter.com/invadMars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>X(Formal twitter) </h3>
            </a>
            <br />
            <a
              href="https://leetcode.com/u/shivam_hack014/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>LeetCode</h3>
            </a>
            <br /> <br />
            <h1>Location</h1> <br />
            <h4>India, New Delhi</h4>
          </div>
        </div>
      </div>

      <footer className="portfolio-footer">
        <p>© 2026 Shivam Raj — Made with ❤️ & code</p>
      </footer>
    </>
  );
};

export default Contact;
