import ScrollAnimatedSection from "../components/ScrollAnimatedSection"
import TiltCard from "./TiltCard"
import { Link } from "react-router-dom"

const Sitemap = () => {
  const sitePages = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: "fas fa-home",
      summary: "Main landing page showcasing emergency medical services",
      useCase: "First point of contact for visitors seeking ambulance services",
      features: [
        "Hero section with emergency call-to-action",
        "Available ambulance types display",
        "Why choose us section",
        "Quick service overview",
      ],
      color: "#e30000",
      bgGradient: "linear-gradient(135deg, #e30000, #b70000)",
    },
    {
      id: 2,
      name: "About Us",
      path: "/about",
      icon: "fas fa-info-circle",
      summary: "Company information, mission, vision, and team details",
      useCase: "Building trust and credibility with potential customers",
      features: [
        "Company mission and vision",
        "Core values and principles",
        "Leadership team profiles",
        "Company journey timeline",
        "Certifications and accreditations",
      ],
      color: "#2196f3",
      bgGradient: "linear-gradient(135deg, #2196f3, #1976d2)",
    },
    {
      id: 3,
      name: "eAmbulance Types",
      path: "/Type",
      icon: "fas fa-ambulance",
      summary: "Detailed information about different ambulance services",
      useCase: "Helping users choose the right ambulance type for their needs",
      features: [
        "Basic Life Support (BLS)",
        "Advanced Life Support (ALS)",
        "Critical Care Transport",
        "Specialized services",
        "Service comparison table",
        "Pricing information",
      ],
      color: "#4caf50",
      bgGradient: "linear-gradient(135deg, #4caf50, #388e3c)",
    },
    {
      id: 4,
      name: "Gallery",
      path: "/Gallery",
      icon: "fas fa-images",
      summary: "Visual showcase of ambulances, equipment, and team",
      useCase: "Building confidence through visual proof of quality services",
      features: [
        "Fleet gallery with modern ambulances",
        "Medical equipment showcase",
        "Team member photos",
        "Service delivery images",
        "Certification displays",
        "Impact statistics",
      ],
      color: "#ff9800",
      bgGradient: "linear-gradient(135deg, #ff9800, #f57c00)",
    },
    {
      id: 5,
      name: "Emergency Response",
      path: "/Emergency",
      icon: "fas fa-exclamation-triangle",
      summary: "Emergency procedures, response steps, and critical information",
      useCase: "Educating users on emergency procedures and immediate actions",
      features: [
        "Emergency response steps",
        "Common emergency types",
        "Quick action guidelines",
        "CPR instructions",
        "Emergency contact numbers",
        "Real-time emergency assistance",
      ],
      color: "#f44336",
      bgGradient: "linear-gradient(135deg, #f44336, #d32f2f)",
    },
    {
      id: 6,
      name: "Contact Us",
      path: "/Contact",
      icon: "fas fa-phone",
      summary: "Contact information, location, and inquiry forms",
      useCase: "Facilitating communication between customers and service providers",
      features: [
        "Contact form for inquiries",
        "Emergency and non-emergency numbers",
        "Office location with map",
        "Service coverage areas",
        "Operating hours",
        "Response time information",
      ],
      color: "#9c27b0",
      bgGradient: "linear-gradient(135deg, #9c27b0, #7b1fa2)",
    },
    {
      id: 7,
      name: "Feedback",
      path: "/feedback",
      icon: "fas fa-comments",
      summary: "Customer feedback collection and testimonials display",
      useCase: "Collecting user experiences and showcasing service quality",
      features: [
        "Feedback submission form",
        "Service rating system",
        "Customer testimonials",
        "Patient satisfaction metrics",
        "Service improvement suggestions",
        "Experience sharing platform",
      ],
      color: "#607d8b",
      bgGradient: "linear-gradient(135deg, #607d8b, #455a64)",
    },
  ]

  const websiteOverview = {
    title: "eAmbulance - Emergency Medical Services",
    description: "Professional 24/7 ambulance services with trained medical personnel",
    mainPurpose: "Connecting patients with emergency medical transport services",
    targetAudience: [
      "Patients requiring emergency medical transport",
      "Healthcare facilities needing patient transfers",
      "Individuals seeking non-emergency medical transport",
      "Family members of patients",
      "Medical professionals",
    ],
    keyFeatures: [
      "24/7 Emergency Response",
      "Multiple Ambulance Types",
      "Trained Medical Personnel",
      "Advanced Medical Equipment",
      "Real-time Service Availability",
      "Comprehensive Coverage Areas",
    ],
  }

  return (
    <section className="sitemap-section">
      <div className="sitemap-container">
        {/* Website Overview */}
        <ScrollAnimatedSection animation="slideInDown">
          <div className="website-overview">
            <TiltCard
              className="overview-card feature-tilt-card tilt-card-animate-in"
              intensity="subtle"
              glare={true}
              shadow={true}
            >
              <div className="overview-header">
                <div className="overview-icon tilt-3d-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h1 className="tilt-3d-text">{websiteOverview.title}</h1>
                <p className="overview-description tilt-3d-text">{websiteOverview.description}</p>
              </div>

              <div className="overview-content">
                <div className="overview-section">
                  <h3 className="tilt-3d-text">Main Purpose</h3>
                  <p className="tilt-3d-text">{websiteOverview.mainPurpose}</p>
                </div>

                <div className="overview-section">
                  <h3 className="tilt-3d-text">Target Audience</h3>
                  <ul className="audience-list">
                    {websiteOverview.targetAudience.map((audience, index) => (
                      <li key={index} className="tilt-3d-text">
                        <i className="fas fa-user-check"></i>
                        {audience}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="overview-section">
                  <h3 className="tilt-3d-text">Key Features</h3>
                  <div className="features-grid">
                    {websiteOverview.keyFeatures.map((feature, index) => (
                      <div key={index} className="feature-tag tilt-3d-element">
                        <i className="fas fa-check-circle"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "1rem" }}>
                <i className="fas fa-sitemap"></i>
              </div>
            </TiltCard>
          </div>
        </ScrollAnimatedSection>

        {/* Sitemap Header */}
        <ScrollAnimatedSection animation="fadeInUp" delay={200}>
          <div className="sitemap-header">
            <h2>Website Sitemap</h2>
            <p>Complete overview of all pages and their functionalities</p>
          </div>
        </ScrollAnimatedSection>

        {/* Pages Grid */}
        <div className="sitemap-grid stagger-container">
          {sitePages.map((page, index) => (
            <ScrollAnimatedSection key={page.id} animation="zoomIn" delay={300 + index * 100}>
              <TiltCard
                className="sitemap-card feature-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <div className="card-header" style={{ background: page.bgGradient }}>
                  <div className="page-icon tilt-3d-icon">
                    <i className={page.icon}></i>
                  </div>
                  <h3 className="page-name tilt-3d-text">{page.name}</h3>
                  <Link to={page.path} className="page-link tilt-3d-button">
                    <i className="fas fa-external-link-alt"></i>
                    Visit Page
                  </Link>
                </div>

                <div className="card-content">
                  <div className="page-summary">
                    <h4 className="tilt-3d-text">Summary</h4>
                    <p className="tilt-3d-text">{page.summary}</p>
                  </div>

                  <div className="page-usecase">
                    <h4 className="tilt-3d-text">Use Case</h4>
                    <p className="tilt-3d-text">{page.useCase}</p>
                  </div>

                  <div className="page-features">
                    <h4 className="tilt-3d-text">Key Features</h4>
                    <ul className="features-list">
                      {page.features.map((feature, idx) => (
                        <li key={idx} className="tilt-3d-text">
                          <i className="fas fa-chevron-right"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="page-path">
                    <h4 className="tilt-3d-text">URL Path</h4>
                    <code className="path-code tilt-3d-element">{page.path}</code>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                  <i className="fas fa-bookmark"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>
          ))}
        </div>

        {/* Website Statistics */}
        <ScrollAnimatedSection animation="fadeInUp" delay={800}>
          <div className="website-stats">
            <TiltCard
              className="stats-card feature-tilt-card tilt-card-animate-in"
              intensity="subtle"
              glare={true}
              shadow={true}
            >
              <h3 className="tilt-3d-text">Website Statistics</h3>
              <div className="stats-grid">
                <div className="stat-item tilt-3d-element">
                  <div className="stat-number">7</div>
                  <div className="stat-label">Total Pages</div>
                </div>
                <div className="stat-item tilt-3d-element">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Key Features</div>
                </div>
                <div className="stat-item tilt-3d-element">
                  <div className="stat-number">6</div>
                  <div className="stat-label">Service Types</div>
                </div>
                <div className="stat-item tilt-3d-element">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Availability</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                <i className="fas fa-chart-bar"></i>
              </div>
            </TiltCard>
          </div>
        </ScrollAnimatedSection>

        {/* Navigation Flow */}
        <ScrollAnimatedSection animation="slideInUp" delay={1000}>
          <div className="navigation-flow">
            <TiltCard
              className="flow-card feature-tilt-card tilt-card-animate-in"
              intensity="subtle"
              glare={true}
              shadow={true}
            >
              <h3 className="tilt-3d-text">Typical User Journey</h3>
              <div className="flow-steps">
                <div className="flow-step tilt-3d-element">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Landing</h4>
                    <p>
                      User arrives at <strong>Home</strong> page
                    </p>
                  </div>
                </div>
                <div className="flow-arrow">
                  <i className="fas fa-arrow-down"></i>
                </div>
                <div className="flow-step tilt-3d-element">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Explore</h4>
                    <p>
                      Browse <strong>eAmbulance Types</strong> or <strong>Gallery</strong>
                    </p>
                  </div>
                </div>
                <div className="flow-arrow">
                  <i className="fas fa-arrow-down"></i>
                </div>
                <div className="flow-step tilt-3d-element">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Learn</h4>
                    <p>
                      Read <strong>About Us</strong> for credibility
                    </p>
                  </div>
                </div>
                <div className="flow-arrow">
                  <i className="fas fa-arrow-down"></i>
                </div>
                <div className="flow-step tilt-3d-element">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Contact</h4>
                    <p>
                      Use <strong>Contact</strong> or <strong>Emergency</strong> for service
                    </p>
                  </div>
                </div>
                <div className="flow-arrow">
                  <i className="fas fa-arrow-down"></i>
                </div>
                <div className="flow-step tilt-3d-element">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h4>Feedback</h4>
                    <p>
                      Share experience via <strong>Feedback</strong> page
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "0.8rem" }}>
                <i className="fas fa-route"></i>
              </div>
            </TiltCard>
          </div>
        </ScrollAnimatedSection>
      </div>
    </section>
  )
}

export default Sitemap
