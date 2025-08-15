import ScrollAnimatedSection from "../ScrollAnimatedSection"

const Response = () => {
  return (
    <>
      <section className="emergency-steps-section">
        <div className="emergency-steps-container">
          <div className="section-header">
            <ScrollAnimatedSection animation="fadeInUp">
              <h2>Emergency Response Steps</h2>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="fadeInUp" delay={200}>
              <p>Follow these steps during a medical emergency</p>
            </ScrollAnimatedSection>
          </div>

          <div className="steps-grid stagger-container">
            <ScrollAnimatedSection animation="flipInX" delay={300}>
              <div className="step-card">
                <div className="icon-circle-wrapper">
                  <div className="icon-circle">
                    <i className="fas fa-phone"></i>
                  </div>
                  <span className="step-number">1</span>
                </div>
                <h3>Call 911</h3>
                <p>For life-threatening emergencies, always call 911 first</p>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="flipInX" delay={500}>
              <div className="step-card">
                <div className="icon-circle-wrapper">
                  <div className="icon-circle">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                  <span className="step-number">2</span>
                </div>
                <h3>Stay Calm</h3>
                <p>Keep yourself and others calm while help is on the way

</p>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="flipInX" delay={700}>
              <div className="step-card">
                <div className="icon-circle-wrapper">
                  <div className="icon-circle">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <span className="step-number">3</span>
                </div>
                <h3>Provide Location</h3>
                <p>Give clear address and landmark information correctly</p>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="flipInX" delay={900}>
              <div className="step-card">
                <div className="icon-circle-wrapper">
                  <div className="icon-circle">
                    <i className="fas fa-headset"></i>
                  </div>
                  <span className="step-number">4</span>
                </div>
                <h3>Instructions</h3>
                <p>Listen carefully and follow emergency dispatcher guidance</p>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

export default Response
