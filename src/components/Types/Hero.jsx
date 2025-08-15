import ScrollAnimatedSection from "../ScrollAnimatedSection"

const Hero = () => {
  return (
    <>
      <section className="T-hero-section">
        <div className="T-hero-content">
          <ScrollAnimatedSection animation="bounceIn" delay={200}>
            <h2>eAmbulance Types & Services</h2>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInUp" delay={400}>
            <p>
              Comprehensive emergency medical transport services tailored to meet diverse patient needs and medical
              conditions
            </p>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Hero
