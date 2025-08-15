import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"

function Certifications() {
  return (
    <>
      <section className="certifications-accreditations-section">
        <ScrollAnimatedSection animation="slideInDown">
          <div className="certifications-header">
            <h2>Certifications & Accreditations</h2>
            <p>We maintain the highest industry standards</p>
          </div>
        </ScrollAnimatedSection>

        <div className="certifications-grid stagger-container">
          <ScrollAnimatedSection animation="bounceIn" delay={300}>
            <TiltCard
              className="certification-item feature-tilt-card tilt-card-animate-in"
              intensity="medium"
              glare={true}
              shadow={true}
            >
              <div className="icon-wrapper tilt-3d-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="tilt-3d-text">DOT Certified</h3>
              <p className="tilt-3d-text">Department of Transportation certification for medical</p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.7rem" }}>
                <i className="fas fa-check-circle"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="bounceIn" delay={400}>
            <TiltCard
              className="certification-item feature-tilt-card tilt-card-animate-in"
              intensity="medium"
              glare={true}
              shadow={true}
            >
              <div className="icon-wrapper tilt-3d-icon">
                <i className="fas fa-hospital-alt"></i>
              </div>
              <h3 className="tilt-3d-text">NHTSA Standards</h3>
              <p className="tilt-3d-text">National Highway Traffic Safety Administration</p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.7rem" }}>
                <i className="fas fa-shield-check"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="bounceIn" delay={500}>
            <TiltCard
              className="certification-item feature-tilt-card tilt-card-animate-in"
              intensity="medium"
              glare={true}
              shadow={true}
            >
              <div className="icon-wrapper tilt-3d-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3 className="tilt-3d-text">AHA Guidelines</h3>
              <p className="tilt-3d-text">American Heart Association protocols and procedures</p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.7rem" }}>
                <i className="fas fa-award"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="bounceIn" delay={600}>
            <TiltCard
              className="certification-item feature-tilt-card tilt-card-animate-in"
              intensity="medium"
              glare={true}
              shadow={true}
            >
              <div className="icon-wrapper tilt-3d-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="tilt-3d-text">State Licensed</h3>
              <p className="tilt-3d-text">Fully licensed emergency medical services provider</p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.7rem" }}>
                <i className="fas fa-star"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Certifications
