import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"

function Service() {
  return (
    <>
      <section className="service-coverage-section">
        <div className="coverage-container">
          <ScrollAnimatedSection animation="slideInDown">
            <div className="section-header">
              <h2>Service Coverage Areas</h2>
              <p>We provide comprehensive coverage across multiple districts and areas</p>
            </div>
          </ScrollAnimatedSection>

          <div className="coverage-grid stagger-container">
            <ScrollAnimatedSection animation="flipInX" delay={200}>
              <TiltCard
                className="coverage-card feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <div className="card-header">
                  <h3 className="tilt-3d-text">Downtown District</h3>
                  <span className="status-tag available tilt-3d-element">24/7</span>
                </div>
                <div className="card-body">
                  <p className="tilt-3d-text">
                    <i className="far fa-clock tilt-3d-icon"></i> Response: 6-10 min
                  </p>
                </div>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-building"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="flipInX" delay={300}>
              <TiltCard
                className="coverage-card feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <div className="card-header">
                  <h3 className="tilt-3d-text">Medical District</h3>
                  <span className="status-tag available tilt-3d-element">24/7</span>
                </div>
                <div className="card-body">
                  <p className="tilt-3d-text">
                    <i className="far fa-clock tilt-3d-icon"></i> Response: 4-8 min
                  </p>
                </div>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-hospital"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="flipInX" delay={400}>
              <TiltCard
                className="coverage-card feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <div className="card-header">
                  <h3 className="tilt-3d-text">Residential Areas</h3>
                  <span className="status-tag available tilt-3d-element">24/7</span>
                </div>
                <div className="card-body">
                  <p className="tilt-3d-text">
                    <i className="far fa-clock tilt-3d-icon"></i> Response: 8-12 min
                  </p>
                </div>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-home"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="flipInX" delay={500}>
              <TiltCard
                className="coverage-card feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <div className="card-header">
                  <h3 className="tilt-3d-text">Industrial Zone</h3>
                  <span className="status-tag available tilt-3d-element">24/7</span>
                </div>
                <div className="card-body">
                  <p className="tilt-3d-text">
                    <i className="far fa-clock tilt-3d-icon"></i> Response: 10-15 min
                  </p>
                </div>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-industry"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="flipInX" delay={600}>
              <TiltCard
                className="coverage-card feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <div className="card-header">
                  <h3 className="tilt-3d-text">Suburban Areas</h3>
                  <span className="status-tag available tilt-3d-element">24/7</span>
                </div>
                <div className="card-body">
                  <p className="tilt-3d-text">
                    <i className="far fa-clock tilt-3d-icon"></i> Response: 12-18 min
                  </p>
                </div>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-tree"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="flipInX" delay={700}>
              <TiltCard
                className="coverage-card feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <div className="card-header">
                  <h3 className="tilt-3d-text">Rural Outskirts</h3>
                  <span className="status-tag on-call tilt-3d-element">On-Call</span>
                </div>
                <div className="card-body">
                  <p className="tilt-3d-text">
                    <i className="far fa-clock tilt-3d-icon"></i> Response: 15-25 min
                  </p>
                </div>
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-mountain"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
