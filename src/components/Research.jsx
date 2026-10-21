
function Research() {
  return (
    <section className="research section" id="research">
      <div className="section-container">
        <div className="section-heading">
          <p>AI &amp; COMPUTER VISION</p>
          <h2>Research Interests</h2>
          <span>
            Exploring artificial intelligence to address
            real-world challenges in agriculture.
          </span>
        </div>

        <div className="research-grid">
          <article className="research-card">
            <div className="research-number">01</div>

            <span className="research-status">
              RESEARCH INTEREST
            </span>

            <h3>
              Transformer-Based Weed Detection
            </h3>

            <p>
              Exploring transformer-based computer vision
              models for identifying weeds in agricultural
              fields, with a focus on supporting precision
              agriculture and smarter weed management.
            </p>

            <div className="research-tags">
              <span>Artificial Intelligence</span>
              <span>Computer Vision</span>
              <span>Transformers</span>
              <span>Precision Agriculture</span>
            </div>

            <div className="research-focus">
              <h4>Research Direction</h4>

              <p>
                Investigating how visual recognition models
                could distinguish weeds from crops and
                potentially support targeted weed control.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Research;
