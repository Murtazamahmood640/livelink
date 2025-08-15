import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"

function Missionvision() {
  return (
    <>
      <section className="mission-vision-section">
        <div className="mission-vision-grid stagger-container">
          <ScrollAnimatedSection animation="fadeInLeft" delay={200}>
            <TiltCard
              className="mission-card feature-tilt-card tilt-card-animate-in"
              intensity="subtle"
              glare={true}
              shadow={true}
            >
              <div className="icon-wrapper tilt-3d-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h2 className="tilt-3d-text">Our Mission</h2>
              <p className="tilt-3d-text">
                To provide rapid, professional, and compassionate emergency medical transport services that save lives
                and improve patient outcomes. We are committed to delivering the highest standard of pre-hospital care
                through advanced medical equipment, highly trained personnel, and unwavering dedication to our
                communities.
              </p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "0.8rem" }}>
                <i className="fas fa-ambulance"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInRight" delay={400}>
            <TiltCard
              className="vision-card feature-tilt-card tilt-card-animate-in"
              intensity="subtle"
              glare={true}
              shadow={true}
            >
              <div className="icon-wrapper tilt-3d-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h2 className="tilt-3d-text">Our Vision</h2>
              <p className="tilt-3d-text">
                To be the leading emergency medical services provider, recognized for excellence in patient care,
                innovation in medical transport, and a positive impact on community health. We envision a future where
                every patient receives immediate, expert medical attention when they need it most for saving more lives as much as we can.
              </p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "0.8rem" }}>
                <i className="fas fa-star"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Missionvision
