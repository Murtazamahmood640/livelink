import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"

const Certifications = () => {
  return (
    <>
      <section className="G-impact-and-certifications">
        <div className="G-impact-section">
          <ScrollAnimatedSection animation="fadeInUp">
            <h2>Our Impact</h2>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInUp" delay={200}>
            <p className="G-intro-text">Numbers that showcase our commitment to emergency medical care</p>
          </ScrollAnimatedSection>

          <div className="G-impact-grid stagger-container">
            <ScrollAnimatedSection animation="bounceIn" delay={300}>
              <TiltCard
                className="G-impact-item feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <h3 className="tilt-3d-text">500+</h3>
                <p className="tilt-3d-text">Lives Saved</p>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-heart"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="bounceIn" delay={400}>
              <TiltCard
                className="G-impact-item feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <h3 className="tilt-3d-text">24/7</h3>
                <p className="tilt-3d-text">Availability</p>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-clock"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="bounceIn" delay={500}>
              <TiltCard
                className="G-impact-item feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <h3 className="tilt-3d-text">15</h3>
                <p className="tilt-3d-text">Ambulances</p>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-ambulance"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="bounceIn" delay={600}>
              <TiltCard
                className="G-impact-item feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <h3 className="tilt-3d-text">50+</h3>
                <p className="tilt-3d-text">Medical Staff</p>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-user-md"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>
          </div>
        </div>

        <div className="G-certifications-section">
          <ScrollAnimatedSection animation="slideInDown">
            <h2>Certifications & Standards</h2>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInUp" delay={200}>
            <p className="G-intro-text">We maintain the highest standards in emergency medical care</p>
          </ScrollAnimatedSection>

          <div className="G-certifications-grid stagger-container">
            <ScrollAnimatedSection animation="rotateIn" delay={300}>
              <TiltCard
                className="G-certification-item feature-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <div className="G-icon-wrapper tilt-3d-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3 className="tilt-3d-text">DOT Certified</h3>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.7rem" }}>
                  <i className="fas fa-check-circle"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="rotateIn" delay={400}>
              <TiltCard
                className="G-certification-item feature-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <div className="G-icon-wrapper tilt-3d-icon">
                  <i className="fas fa-hospital-alt"></i>
                </div>
                <h3 className="tilt-3d-text">NHTSA Standards</h3>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.7rem" }}>
                  <i className="fas fa-shield-alt"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="rotateIn" delay={500}>
              <TiltCard
                className="G-certification-item feature-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <div className="G-icon-wrapper tilt-3d-icon">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h3 className="tilt-3d-text">AHA Guidelines</h3>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.7rem" }}>
                  <i className="fas fa-award"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="rotateIn" delay={600}>
              <TiltCard
                className="G-certification-item feature-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <div className="G-icon-wrapper tilt-3d-icon">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="tilt-3d-text">State Licensed</h3>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.7rem" }}>
                  <i className="fas fa-star"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

export default Certifications
