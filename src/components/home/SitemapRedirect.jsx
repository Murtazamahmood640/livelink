import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"
import { Link } from "react-router-dom"

const SitemapRedirect = () => {
  const quickLinks = [
    {
      id: 1,
      name: "Emergency Services",
      path: "/Emergency",
      icon: "fas fa-exclamation-triangle",
      description: "Immediate emergency response and procedures",
      color: "#f44336",
      urgent: true,
    },
    {
      id: 2,
      name: "Ambulance Types",
      path: "/Type",
      icon: "fas fa-ambulance",
      description: "Browse different ambulance services available",
      color: "#4caf50",
    },
    {
      id: 3,
      name: " OUR Contact Us",
      path: "/Contact",
      icon: "fas fa-phone",
      description: "Get in touch   for bookings ,inquiries Your Thought Matter Please Drop For Us Thanks",
      color: "#2196f3",
    },
    {
      id: 4,
      name: "About Our Services",
      path: "/about",
      icon: "fas fa-info-circle",
      description: "Learn about our mission and team WE Seraf YOU Our Passion",
      color: "#9c27b0",
    },
  ]

  return (
    <section className="sitemap-redirect-section">
      <div className="sitemap-redirect-container">
        <ScrollAnimatedSection animation="slideInDown">
          <div className="section-header">
            <h2>Explore Our Services</h2>
            <p>Quick access to all our emergency medical services and information</p>
          </div>
        </ScrollAnimatedSection>

        {/* Quick Links Grid */}
        <div className="quick-links-grid stagger-container">
          {quickLinks.map((link, index) => (
            <ScrollAnimatedSection key={link.id} animation="zoomIn" delay={200 + index * 100}>
              <TiltCard
                className={`quick-link-card ${link.urgent ? "urgent-card" : ""} feature-tilt-card tilt-card-animate-in`}
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <Link to={link.path} className="card-link">
                  <div className="card-icon-wrapper">
                    <div className="card-icon tilt-3d-icon" style={{ backgroundColor: link.color }}>
                      <i className={link.icon}></i>
                    </div>
                    {link.urgent && (
                      <div className="urgent-badge tilt-3d-element">
                        <i className="fas fa-bolt"></i>
                        URGENT
                      </div>
                    )}
                  </div>

                  <div className="card-content">
                    <h3 className="tilt-3d-text">{link.name}</h3>
                    <p className="tilt-3d-text">{link.description}</p>
                    <div className="card-arrow tilt-3d-element">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                </Link>
              </TiltCard>
            </ScrollAnimatedSection>
          ))}
        </div>

        {/* Main Sitemap CTA */}
        <ScrollAnimatedSection animation="bounceIn" delay={800}>
          <div className="main-sitemap-cta">
            <TiltCard
              className="sitemap-cta-card feature-tilt-card tilt-card-animate-in"
              intensity="subtle"
              glare={true}
              shadow={true}
            >
              <div className="cta-content">
                <div className="cta-icon tilt-3d-icon">
                  <i className="fas fa-sitemap"></i>
                </div>
                <div className="cta-text">
                  <h3 className="tilt-3d-text">View Complete Website Map</h3>
                  <p className="tilt-3d-text">Explore all pages, features, and services in our comprehensive sitemap</p>
                </div>
                <Link to="/sitemap" className="cta-button tilt-3d-button">
                  <i className="fas fa-map"></i>
                  View Sitemap
                </Link>
              </div>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "1rem" }}>
                <i className="fas fa-compass"></i>
              </div>
            </TiltCard>
          </div>
        </ScrollAnimatedSection>

        {/* Service Stats */}
        <ScrollAnimatedSection animation="fadeInUp" delay={1000}>
          <div className="service-stats">
            <div className="stats-grid stagger-container">
              <ScrollAnimatedSection animation="scaleIn" delay={1100}>
                <TiltCard
                  className="stat-card feature-tilt-card tilt-card-animate-in"
                  intensity="subtle"
                  glare={true}
                  shadow={true}
                >
                  <div className="stat-icon tilt-3d-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="stat-number tilt-3d-text">24/7</div>
                  <div className="stat-label tilt-3d-text">Emergency Response</div>
                </TiltCard>
              </ScrollAnimatedSection>

              <ScrollAnimatedSection animation="scaleIn" delay={1200}>
                <TiltCard
                  className="stat-card feature-tilt-card tilt-card-animate-in"
                  intensity="subtle"
                  glare={true}
                  shadow={true}
                >
                  <div className="stat-icon tilt-3d-icon">
                    <i className="fas fa-ambulance"></i>
                  </div>
                  <div className="stat-number tilt-3d-text">15+</div>
                  <div className="stat-label tilt-3d-text">Ambulances Available</div>
                </TiltCard>
              </ScrollAnimatedSection>

              <ScrollAnimatedSection animation="scaleIn" delay={1300}>
                <TiltCard
                  className="stat-card feature-tilt-card tilt-card-animate-in"
                  intensity="subtle"
                  glare={true}
                  shadow={true}
                >
                  <div className="stat-icon tilt-3d-icon">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <div className="stat-number tilt-3d-text">50+</div>
                  <div className="stat-label tilt-3d-text">Medical Professionals</div>
                </TiltCard>
              </ScrollAnimatedSection>

              <ScrollAnimatedSection animation="scaleIn" delay={1400}>
                <TiltCard
                  className="stat-card feature-tilt-card tilt-card-animate-in"
                  intensity="subtle"
                  glare={true}
                  shadow={true}
                >
                  <div className="stat-icon tilt-3d-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="stat-number tilt-3d-text">500+</div>
                  <div className="stat-label tilt-3d-text">Lives Saved</div>
                </TiltCard>
              </ScrollAnimatedSection>
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </section>
  )
}

export default SitemapRedirect
