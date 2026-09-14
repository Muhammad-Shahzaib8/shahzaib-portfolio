
function Education() {
  return (
    <section className="education section" id="education">
      <div className="section-container">

        {/* Section Header */}
        <div className="section-heading">
          <p>MY ACADEMIC JOURNEY</p>
          <h2>Education</h2>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">

          {/* ================= MATRICULATION ================= */}
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
                  Successfully completed secondary education with
                  excellent academic performance and achieved
                 
                </p>

              
              </div>

            </div>
          </div>


          {/* ================= INTERMEDIATE ================= */}
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
                  Completed intermediate education with a strong
                  academic record and achieved
                
                </p>

               
              </div>

            </div>
          </div>


          {/* ================= BACHELOR'S ================= */}
          <div className="education-item">

            <div className="education-marker">
              <span>03</span>
            </div>

            <div className="education-card">

              <div className="education-card-header">
                <div>
                  <span className="education-level">
                    UNIVERSITY EDUCATION
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
                  Completed a Bachelor's degree in Information
                  Technology with a focus on software development,
                  databases, web technologies, programming, and
                  artificial intelligence. 
                 
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
