import ScrollAnimatedSection from "../ScrollAnimatedSection"

const Hero = () => {
  return (
    <>
      <section className="F-hero-section">
        <div className="bg-blur"></div>
        <div className="F-hero-content">
          <ScrollAnimatedSection animation="bounceIn" delay={200}>
            <h2>Your Feedback Matters</h2>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInUp" delay={400}>
            <p>Help us improve our emergency medical services by sharing your experience with our team</p>
          </ScrollAnimatedSection>
        </div>

        {/* Floating feedback icons */}
        <div
          className="floating-element"
          style={{ position: "absolute", top: "20%", left: "10%", fontSize: "2rem", color: "rgba(255,255,255,0.1)" }}
        >
          <i className="fas fa-star"></i>
        </div>
        <div
          className="floating-element"
          style={{ position: "absolute", top: "60%", right: "15%", fontSize: "1.5rem", color: "rgba(255,255,255,0.1)" }}
        >
          <i className="fas fa-comments"></i>
        </div>
        <div
          className="floating-element"
          style={{
            position: "absolute",
            bottom: "30%",
            left: "20%",
            fontSize: "1.8rem",
            color: "rgba(255,255,255,0.1)",
          }}
        >
          <i className="fas fa-thumbs-up"></i>
        </div>
      </section>
    </>
  )
}

export default Hero
