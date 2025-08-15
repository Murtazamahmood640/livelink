import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"
import Picture from "../../assets/Images/D-3.png"
import Picture2 from "../../assets/Images/D-2.png"
import Picture3 from "../../assets/Images/D-1.jpg"
import Picture4 from "../../assets/Images/D-4.png"

function leadership() {
  return (
    <>
      <section className="leadership-team-section">
        <ScrollAnimatedSection animation="slideInDown">
          <div className="team-header">
            <h2>Meet Our Leadership Team</h2>
            <p>Experienced professionals dedicated to saving lives</p>
          </div>
        </ScrollAnimatedSection>

        <div className="team-grid stagger-container">
          <ScrollAnimatedSection animation="rotateIn" delay={300}>
            <TiltCard
              className="team-member feature-tilt-card tilt-card-animate-in"
              intensity="medium"
              glare={true}
              shadow={true}
            >
              <div className="member-photo tilt-3d-element">
                <img src={Picture || "/placeholder.svg"} alt="Dr. Sarah Johnson" />
              </div>
              <h3 className="tilt-3d-text">Dr. Sarah Johnson</h3>
              <p className="role tilt-3d-text">Medical Director</p>
              <p className="experience tilt-3d-text">15+ years experience</p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                <i className="fas fa-user-md"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="rotateIn" delay={400}>
            <TiltCard
              className="team-member feature-tilt-card tilt-card-animate-in"
              intensity="medium"
              glare={true}
              shadow={true}
            >
              <div className="member-photo tilt-3d-element">
                <img src={Picture2 || "/placeholder.svg"} alt="Michael Rodriguez" />
              </div>
              <h3 className="tilt-3d-text">Michael Rodriguez</h3>
              <p className="role tilt-3d-text">Operations Manager</p>
              <p className="experience tilt-3d-text">12+ years experience</p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                <i className="fas fa-cogs"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="rotateIn" delay={500}>
            <TiltCard
              className="team-member feature-tilt-card tilt-card-animate-in"
              intensity="medium"
              glare={true}
              shadow={true}
            >
              <div className="member-photo tilt-3d-element">
                <img src={Picture3 || "/placeholder.svg"} alt="Emily Chen" />
              </div>
              <h3 className="tilt-3d-text">Emily Chen</h3>
              <p className="role tilt-3d-text">Lead Paramedic</p>
              <p className="experience tilt-3d-text">10+ years experience</p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                <i className="fas fa-stethoscope"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="rotateIn" delay={600}>
            <TiltCard
              className="team-member feature-tilt-card tilt-card-animate-in"
              intensity="medium"
              glare={true}
              shadow={true}
            >
              <div className="member-photo tilt-3d-element">
                <img src={Picture4 || "/placeholder.svg"} alt="James Wilson" />
              </div>
              <h3 className="tilt-3d-text">James Wilson</h3>
              <p className="role tilt-3d-text">Fleet Supervisor</p>
              <p className="experience tilt-3d-text">8+ years experience</p>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                <i className="fas fa-truck"></i>
              </div>
            </TiltCard>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}

export default leadership
