
function Contact() {
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
                rel="noreferrer"
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
                onClick={(e) => e.preventDefault()}
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
              RIGHT SIDE - FORM
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
              onSubmit={(e) => e.preventDefault()}
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
              >
                <span>Send Message</span>
                <span>→</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
