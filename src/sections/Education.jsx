
function Education() {
  return (
    <section className="education section" id="education">
      <div className="section-container">
        <div className="section-heading">
          <p>MY ACADEMIC JOURNEY</p>
          <h2>Education</h2>
        </div>

        <div className="education-timeline">

          {/* MATRICULATION */}
          <div className="education-item">
            <div className="education-marker">
              <span>01</span>
            </div>

            <div className="education-card">
              <div className="education-card-header">
                <div>
                  <span className="education-level">
                    SECONDARY EDUCATION
                  </span>

                  <h3>Matriculation</h3>

                  <h4>
                    Government High School, Sher Shah, Multan
                  </h4>
                </div>

                <div className="education-score">
                  <strong>953</strong>
                  <span>OUT OF 1100</span>
                </div>
              </div>

              <div className="education-card-footer">
                <p>
                  Completed secondary education with a strong
                  academic foundation.
                </p>
              </div>
            </div>
          </div>

          {/* INTERMEDIATE */}
          <div className="education-item">
            <div className="education-marker">
              <span>02</span>
            </div>

            <div className="education-card">
              <div className="education-card-header">
                <div>
                  <span className="education-level">
                    HIGHER SECONDARY EDUCATION
                  </span>

                  <h3>F.Sc. Pre-Medical</h3>

                  <h4>
                    Muslim Group of Schools and Colleges, Multan
                  </h4>
                </div>

                <div className="education-score">
                  <strong>900</strong>
                  <span>OUT OF 1100</span>
                </div>
              </div>

              <div className="education-card-footer">
                <p>
                  Completed intermediate education with a
                  background in pre-medical sciences.
                </p>
              </div>
            </div>
          </div>

          {/* BACHELOR'S */}
          <div className="education-item">
            <div className="education-marker">
              <span>03</span>
            </div>

            <div className="education-card">
              <div className="education-card-header">
                <div>
                  <span className="education-level">
                    UNDERGRADUATE EDUCATION
                  </span>

                  <h3>
                    Bachelor of Information Technology
                  </h3>

                  <h4>
                    Muhammad Nawaz Shareef University of Agriculture,
                    Multan
                  </h4>
                </div>

                <div className="education-score">
                  <strong>3.29</strong>
                  <span>CGPA / 4.00</span>
                </div>
              </div>

              <div className="education-card-footer">
                <p>
                  Studied programming, software development,
                  databases, web technologies, and computing
                  fundamentals.
                </p>
              </div>
            </div>
          </div>

          {/* MASTER'S */}
          <div className="education-item">
            <div className="education-marker">
              <span>04</span>
            </div>

            <div className="education-card">
              <div className="education-card-header">
                <div>
                  <span className="education-level">
                    POSTGRADUATE EDUCATION
                  </span>

                  <h3>
                    Master of Science in Computer Science
                  </h3>

                  <h4>
                    [Muhammad Nawaz Shareef University of Agriculture Multan]
                  </h4>
                </div>

                <div className="education-score">
                  <strong>In Progress</strong>
                  <span>MS COMPUTER SCIENCE</span>
                </div>
              </div>

              <div className="education-card-footer">
                <p>
                  Exploring advanced computer science topics,
                  artificial intelligence, machine learning,
                  and transformer-based weed detection for
                  precision agriculture.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
