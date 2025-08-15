import ScrollAnimatedSection from "../ScrollAnimatedSection"

function Hero() {
  return (
    <>
      <section className="about-hero-section">
        <div className="about-hero-content">
          <ScrollAnimatedSection animation="bounceIn" delay={200}>
            <h2>About eAmbulance</h2>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInUp" delay={400}>
            <p>
              Dedicated to providing exceptional emergency medical services with compassion, professionalism, and
              state-of-the-art equipment
            </p>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Hero
