import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"

function Ourjourney() {
  return (
    <>
      <section className="our-journey-section">
        <ScrollAnimatedSection animation="slideInDown">
          <div className="journey-header">
            <h2>Our Journey</h2>
            <p>Key milestones in our growth and development</p>
          </div>
        </ScrollAnimatedSection>

        <div className="journey-timeline">
          <ScrollAnimatedSection animation="fadeInLeft" delay={300}>
            <div className="timeline-item left">
              <TiltCard
                className="timeline-content feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <h3 className="tilt-3d-text">2010</h3>
                <p className="tilt-3d-text">Founded eAmbulance Services</p>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-rocket"></i>
                </div>
              </TiltCard>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInRight" delay={400}>
            <div className="timeline-item right">
              <TiltCard
                className="timeline-content feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <h3 className="tilt-3d-text">2015</h3>
                <p className="tilt-3d-text">Expanded fleet to 10 ambulances</p>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "10px", left: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-ambulance"></i>
                </div>
              </TiltCard>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInLeft" delay={500}>
            <div className="timeline-item left">
              <TiltCard
                className="timeline-content feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <h3 className="tilt-3d-text">2018</h3>
                <p className="tilt-3d-text">Introduced critical care transport</p>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-heartbeat"></i>
                </div>
              </TiltCard>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInRight" delay={600}>
            <div className="timeline-item right">
              <TiltCard
                className="timeline-content feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <h3 className="tilt-3d-text">2020</h3>
                <p className="tilt-3d-text">24/7 emergency response established</p>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "10px", left: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-clock"></i>
                </div>
              </TiltCard>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInLeft" delay={700}>
            <div className="timeline-item left">
              <TiltCard
                className="timeline-content feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <h3 className="tilt-3d-text">2022</h3>
                <p className="tilt-3d-text">Added specialized services</p>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-plus-circle"></i>
                </div>
              </TiltCard>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInRight" delay={800}>
            <div className="timeline-item right">
              <TiltCard
                className="timeline-content feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <h3 className="tilt-3d-text">2024</h3>
                <p className="tilt-3d-text">Serving 500+ patients monthly</p>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "10px", left: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-chart-line"></i>
                </div>
              </TiltCard>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Ourjourney
