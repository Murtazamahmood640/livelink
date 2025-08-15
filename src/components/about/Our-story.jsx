import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"
import About from "../../assets/Images/about.jpg"
const OurStory = () => {
  return (
    <>
      <section className="our-story-section">
        <div className="story-container">
          <ScrollAnimatedSection animation="fadeInLeft" delay={200}>
            <div className="story-content-wrapper">
              <TiltCard
                className="story-content feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <h2 className="tilt-3d-text">Our Story</h2>
                <p className="tilt-3d-text">
                  Founded in 2010 by a group of experienced paramedics and healthcare professionals, eAmbulance began
                  with a simple yet powerful mission: to provide exceptional emergency medical transport services to our
                  community.
                </p>
                <p className="tilt-3d-text">
                  Over the years, we have grown from a small operation with just three ambulances to a comprehensive
                  emergency medical services provider with a fleet of 15 specialized vehicles and over 50 trained
                  medical professionals.
                </p>
                <p className="tilt-3d-text">
                  Today, we are proud to serve thousands of patients annually, providing everything from basic life
                  support to critical care transport, always maintaining our commitment to excellence and compassionate
                  care.
                </p>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "1rem" }}>
                  <i className="fas fa-history"></i>
                </div>
              </TiltCard>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInRight" delay={400}>
            <div className="story-image-wrapper">
              <TiltCard
                className="story-image-card gallery-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <img
                  src={About}
                  alt="MAMON'S medical facility with ambulance fleet"
                  className="tilt-3d-element"
                />

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "15px", left: "15px", fontSize: "1rem" }}>
                  <i className="fas fa-building"></i>
                </div>
              </TiltCard>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}

export default OurStory
