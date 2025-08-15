import ScrollAnimatedSection from "../ScrollAnimatedSection"

function Hero() {
  return (
    <>
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <ScrollAnimatedSection animation="bounceIn" delay={200}>
            <h2>Contact Us</h2>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInUp" delay={400}>
            <p>Get in touch with our emergency medical services team. We're here to help 24/7.</p>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Hero
