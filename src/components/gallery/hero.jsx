import ScrollAnimatedSection from "../ScrollAnimatedSection"

const Hero = () => {
  return (
    <section className="G-gallery-hero-section">
      <div className="G-gallery-hero-content">
        <ScrollAnimatedSection animation="slideInDown" delay={300}>
          <h2>Our Gallery</h2>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection animation="fadeInUp" delay={600}>
          <p>
            Take a look at our modern ambulance fleet, advanced medical equipment, and dedicated emergency response team
          </p>
        </ScrollAnimatedSection>
      </div>
    </section>
  )
}

export default Hero
