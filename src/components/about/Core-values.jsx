import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"

function Corevalues() {
  return (
    <>
      <section className="core-values-section">
        <ScrollAnimatedSection animation="slideInDown">
          <div className="values-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
        </ScrollAnimatedSection>

        <div className="values-grid stagger-container">
          <ScrollAnimatedSection animation="scaleIn" delay={300}>
            <TiltCard
              className="value-item feature-tilt-card tilt-card-animate-in"
              intensity="subtle"
              glare={true}
              shadow={true}
            >
              <div className="icon-wrapper tilt-3d-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="tilt-3d-text">Compassion</h3>
              <p className="tilt-3d-text">
                Treating every patient with empathy, respect, and dignity during their most vulnerable moments.
              </p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.7rem" }}>
                <i className="fas fa-hands-heart"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="scaleIn" delay={400}>
            <TiltCard
              className="value-item feature-tilt-card tilt-card-animate-in"
              intensity="subtle"
              glare={true}
              shadow={true}
            >
              <div className="icon-wrapper tilt-3d-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="tilt-3d-text">Excellence</h3>
              <p className="tilt-3d-text">
                Maintaining the highest standards in medical care, equipment, and professional service delivery.
              </p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.7rem" }}>
                <i className="fas fa-trophy"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="scaleIn" delay={500}>
            <TiltCard
              className="value-item feature-tilt-card tilt-card-animate-in"
              intensity="subtle"
              glare={true}
              shadow={true}
            >
              <div className="icon-wrapper tilt-3d-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3 className="tilt-3d-text">Integrity</h3>
              <p className="tilt-3d-text">
                Operating with honesty, transparency, and ethical practices in all our interactions.
              </p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.7rem" }}>
                <i className="fas fa-shield-check"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="scaleIn" delay={600}>
            <TiltCard
              className="value-item feature-tilt-card tilt-card-animate-in"
              intensity="subtle"
              glare={true}
              shadow={true}
            >
              <div className="icon-wrapper tilt-3d-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="tilt-3d-text">Teamwork</h3>
              <p className="tilt-3d-text">
                Collaborating effectively with healthcare providers, hospitals, and communities we serve.
              </p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.7rem" }}>
                <i className="fas fa-handshake"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Corevalues
