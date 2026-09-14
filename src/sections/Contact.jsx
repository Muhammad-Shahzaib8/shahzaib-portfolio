import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    const form = event.target;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    formData.append(
      "subject",
      `New Portfolio Message - ${formData.get("subject")}`
    );

    formData.append("from_name", "Shahzaib Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Let's Work Together</h2>
        </div>

        <div className="contact-wrapper">

          {/* =========================
              LEFT SIDE
          ========================= */}
          <div className="contact-intro">

            <span className="contact-label">
              OPEN TO OPPORTUNITIES
            </span>

            <h3>
              Let's build something
              <span> meaningful.</span>
            </h3>

            <p>
              I am open to professional opportunities, software
              development roles, web development projects, and
              technology-related collaborations. If you have an
              opportunity that matches my skills, I'd be happy to
              connect.
            </p>

            <div className="contact-info">

              {/* Email */}
              <a
                href="mailto:shahzaibmunir.official@gmail.com"
                className="contact-info-item"
              >
                <div className="contact-info-icon">
                  @
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    shahzaibmunir.official@gmail.com
                  </strong>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Muhammad-Shahzaib8"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
              >
                <div className="contact-info-icon">
                  GH
                </div>

                <div>
                  <span>GitHub</span>
                  <strong>
                    Muhammad-Shahzaib8
                  </strong>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="contact-info-item"
                onClick={(event) => event.preventDefault()}
              >
                <div className="contact-info-icon">
                  in
                </div>

                <div>
                  <span>LinkedIn</span>
                  <strong>
                    Muhammad Shahzaib
                  </strong>
                </div>
              </a>

            </div>
          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}
          <div className="contact-form-container">

            <div className="form-header">

              <span>01</span>

              <div>
                <h3>Send a Message</h3>

                <p>
                  Have an opportunity or project in mind?
                  Let's talk.
                </p>
              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* Name + Email */}
              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                />

              </div>

              {/* Message */}
              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="contact-button"
                disabled={status === "sending"}
              >
                <span>
                  {status === "sending"
                    ? "Sending..."
                    : "Send Message"}
                </span>

                <span>
                  {status === "sending" ? "..." : "→"}
                </span>
              </button>

              {/* Success Message */}
              {status === "success" && (
                <div className="form-message success-message">
                  ✓ Your message has been sent successfully.
                  I'll get back to you as soon as possible.
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="form-message error-message">
                  ✕ Something went wrong. Please try again or
                  contact me directly by email.
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;