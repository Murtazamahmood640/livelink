import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"

function Whychooseus() {
  return (
    <>
      <section className="why-choose-us">
        <div className="why-choose-content">
          <ScrollAnimatedSection animation="fadeInUp">
            <h2>Why Choose Our Services</h2>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInUp" delay={200}>
            <p className="intro-text">
              We provide professional emergency medical transport with trained personnel and state-of-the-art equipment
            </p>
          </ScrollAnimatedSection>

          <div className="features-grid stagger-container">
            <ScrollAnimatedSection animation="scaleIn" delay={300}>
              <TiltCard
                className="feature-item feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <div className="icon-wrapper tilt-3d-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="tilt-3d-text">Fast Response</h3>
                <p className="description tilt-3d-text">Average response time of 8-12 minutes for emergency calls</p>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "0.8rem" }}>
                  <i className="fas fa-stopwatch"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="scaleIn" delay={500}>
              <TiltCard
                className="feature-item feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <div className="icon-wrapper tilt-3d-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="tilt-3d-text">Professional Care</h3>
                <p className="description tilt-3d-text">Certified EMTs and paramedics with years of experience</p>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "0.8rem" }}>
                  <i className="fas fa-certificate"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="scaleIn" delay={700}>
              <TiltCard
                className="feature-item feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <div className="icon-wrapper tilt-3d-icon">
                  <i className="fas fa-sync-alt"></i>
                  <span className="availability-24 tilt-3d-element">24</span>
                </div>
                <h3 className="tilt-3d-text">24/7 Availability</h3>
                <p className="description tilt-3d-text">
                  Round-the-clock emergency medical services when you need 
                </p>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "0.8rem" }}>
                  <i className="fas fa-moon"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

export default Whychooseus
