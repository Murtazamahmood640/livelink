import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"
import BLS from "../../assets/Images/bls.jpg"
import ALS from "../../assets/Images/ambulance1.jpg"
import CCT from "../../assets/Images/ambulance2.jpg"
import A1 from "../../assets/Images/ambulance3.jpg"
import A2 from "../../assets/Images/ambulance4.jpg"
import A3 from "../../assets/Images/ambulance5.jpg"

const Types = () => {
  return (
    <>
      <div className="main-container">
        {/* Main Ambulance Services Section */}
        <div className="section">
          <div className="specialized-container stagger-container">
            <ScrollAnimatedSection animation="rotateIn" delay={200}>
              <TiltCard
                className="specialized-card ambulance-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <div className="header">
                  <h1 className="tilt-3d-text">Basic Life Support (BLS)</h1>
                  <p className="tilt-3d-text">
                    Essential emergency medical care for stable patients requiring transportation to medical facilities.
                  </p>
                </div>

                <div className="ambulance-section">
                  <img
                    src={BLS}
                    alt="BLS Ambulance Available"
                    className="service-image tilt-3d-element"
                  />
                  <div className="available-badge tilt-3d-element">Available</div>
                </div>

                <div className="service-details">
                  <h2 className="service-title tilt-3d-text">Basic Life Support (BLS)</h2>
                  <div className="location tilt-3d-text">Downtown Medical Center</div>

                  <div className="features-title tilt-3d-text">Key Features:</div>
                  <ul className="features-list">
                    <li className="tilt-3d-text">Basic medical equipment</li>
                    <li className="tilt-3d-text">EMT personnel</li>
                    <li className="tilt-3d-text">Oxygen support</li>
                    <li className="tilt-3d-text">First aid supplies</li>
                  </ul>
                </div>

                <div className="pricing-section">
                  <div>
                    <span className="price tilt-3d-text">$150</span>
                    <span className="trip-text tilt-3d-text">/trip</span>
                  </div>
                  <div className="duration tilt-3d-text">8-12 minutes</div>
                </div>

                <div className="buttons-section">
                  <button className="book-btn tilt-3d-button">Book Now</button>
                  <button className="favorite-btn tilt-3d-button" aria-label="Add to favorites"></button>
                </div>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "1rem" }}>
                  <i className="fas fa-plus-circle"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="rotateIn" delay={400}>
              <TiltCard
                className="specialized-card ambulance-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <div className="header">
                  <h1 className="tilt-3d-text">Advanced Life Support (ALS)</h1>
                  <p className="tilt-3d-text">
                    Comprehensive emergency medical care with advanced interventions and medications.
                  </p>
                </div>

                <div className="ambulance-section">
                  <img
                    src={ALS}
                    alt="Advanced Life Support ambulance interior"
                    className="service-image tilt-3d-element"
                  />
                  <div className="available-badge tilt-3d-element">Available</div>
                </div>

                <div className="service-details">
                  <h2 className="service-title tilt-3d-text">Advanced Life Support (ALS)</h2>
                  <div className="location tilt-3d-text">City General Hospital</div>

                  <div className="features-title tilt-3d-text">Key Features:</div>
                  <ul className="features-list">
                    <li className="tilt-3d-text">Advanced cardiac monitors</li>
                    <li className="tilt-3d-text">Paramedic team</li>
                    <li className="tilt-3d-text">IV medications</li>
                    <li className="tilt-3d-text">Defibrillator</li>
                    <li className="tilt-3d-text">Ventilator</li>
                  </ul>
                </div>

                <div className="pricing-section">
                  <div>
                    <span className="price tilt-3d-text">$250</span>
                    <span className="trip-text tilt-3d-text">/trip</span>
                  </div>
                  <div className="duration tilt-3d-text">6-10 minutes</div>
                </div>

                <div className="buttons-section">
                  <button className="book-btn tilt-3d-button">Book Now</button>
                  <button className="favorite-btn tilt-3d-button" aria-label="Add to favorites"></button>
                </div>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "1rem" }}>
                  <i className="fas fa-heartbeat"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="rotateIn" delay={600}>
              <TiltCard
                className="specialized-card emergency-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <div className="header">
                  <h1 className="tilt-3d-text">Critical Care Transport</h1>
                  <p className="tilt-3d-text">
                    Intensive care level transport for critically ill patients requiring continuous monitoring.
                  </p>
                </div>

                <div className="ambulance-section">
                  <img
                    src={CCT}
                    alt="Critical Care Transport ambulance interior"
                    className="service-image tilt-3d-element"
                  />
                  <div className="on-call-badge tilt-3d-element">On Call</div>
                </div>

                <div className="service-details">
                  <h2 className="service-title tilt-3d-text">Critical Care Transport</h2>
                  <div className="location tilt-3d-text">Regional Trauma Center</div>

                  <div className="features-title tilt-3d-text">Key Features:</div>
                  <ul className="features-list">
                    <li className="tilt-3d-text">ICU-level equipment</li>
                    <li className="tilt-3d-text">Critical care specialists</li>
                    <li className="tilt-3d-text">Mechanical ventilation</li>
                    <li className="tilt-3d-text">Blood products</li>
                    <li className="tilt-3d-text">Advanced monitoring</li>
                  </ul>
                </div>

                <div className="pricing-section">
                  <div>
                    <span className="price tilt-3d-text">$400</span>
                    <span className="trip-text tilt-3d-text">/trip</span>
                  </div>
                  <div className="duration tilt-3d-text">4-8 minutes</div>
                </div>

                <div className="buttons-section">
                  <button className="book-btn tilt-3d-button">Book Now</button>
                  <button className="favorite-btn tilt-3d-button" aria-label="Add to favorites"></button>
                </div>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "1rem" }}>
                  <i className="fas fa-shield-alt"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>
          </div>
        </div>

        {/* Specialized Services Section */}
        <div className="section">
          <ScrollAnimatedSection animation="slideInDown">
            <div className="section-header">
              <h1>Specialized Services</h1>
              <p>Specialized transport services for specific medical conditions and patient populations.</p>
            </div>
          </ScrollAnimatedSection>

          <div className="specialized-container stagger-container">
            <ScrollAnimatedSection animation="flipInX" delay={300}>
              <TiltCard
                className="specialized-card ambulance-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <div className="ambulance-section">
                  <img
                    src={A1}
                    alt="Neonatal transport interior"
                    className="service-image tilt-3d-element"
                  />
                  <div className="available-badge tilt-3d-element">Available</div>
                </div>

                <div className="service-details">
                  <h2 className="service-title tilt-3d-text">Neonatal Transport</h2>
                  <div className="location tilt-3d-text">Children's Medical Center</div>

                  <div className="features-title tilt-3d-text">Key Features:</div>
                  <ul className="features-list">
                    <li className="tilt-3d-text">Neonatal incubator</li>
                    <li className="tilt-3d-text">Pediatric specialists</li>
                    <li className="tilt-3d-text">Temperature control</li>
                    <li className="tilt-3d-text">Specialized monitoring</li>
                    <li className="tilt-3d-text">Infant care equipment</li>
                  </ul>
                </div>

                <div className="pricing-section">
                  <div>
                    <span className="price tilt-3d-text">$350</span>
                    <span className="trip-text tilt-3d-text">/trip</span>
                  </div>
                  <div className="duration tilt-3d-text">10-15 minutes</div>
                </div>

                <div className="buttons-section">
                  <button className="book-btn tilt-3d-button">Book Now</button>
                  <button className="favorite-btn tilt-3d-button" aria-label="Add to favorites"></button>
                </div>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "1rem" }}>
                  <i className="fas fa-baby"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="flipInX" delay={500}>
              <TiltCard
                className="specialized-card ambulance-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <div className="ambulance-section">
                  <img
                    src={A2}
                    alt="Psychiatric emergency transport"
                    className="service-image tilt-3d-element"
                  />
                  <div className="available-badge tilt-3d-element">Available</div>
                </div>

                <div className="service-details">
                  <h2 className="service-title tilt-3d-text">Psychiatric Emergency</h2>
                  <div className="location tilt-3d-text">Mental Health Crisis Center</div>

                  <div className="features-title tilt-3d-text">Key Features:</div>
                  <ul className="features-list">
                    <li className="tilt-3d-text">Trained mental health personnel</li>
                    <li className="tilt-3d-text">De-escalation equipment</li>
                    <li className="tilt-3d-text">Safe transport</li>
                    <li className="tilt-3d-text">Crisis intervention</li>
                    <li className="tilt-3d-text">Medical restraints</li>
                  </ul>
                </div>

                <div className="pricing-section">
                  <div>
                    <span className="price tilt-3d-text">$200</span>
                    <span className="trip-text tilt-3d-text">/trip</span>
                  </div>
                  <div className="duration tilt-3d-text">12-18 minutes</div>
                </div>

                <div className="buttons-section">
                  <button className="book-btn tilt-3d-button">Book Now</button>
                  <button className="favorite-btn tilt-3d-button" aria-label="Add to favorites"></button>
                </div>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "1rem" }}>
                  <i className="fas fa-brain"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="flipInX" delay={700}>
              <TiltCard
                className="specialized-card ambulance-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <div className="ambulance-section">
                  <img
                    src={A3}
                    alt="Bariatric transport interior"
                    className="service-image tilt-3d-element"
                  />
                  <div className="limited-badge tilt-3d-element">Limited</div>
                </div>

                <div className="service-details">
                  <h2 className="service-title tilt-3d-text">Bariatric Transport</h2>
                  <div className="location tilt-3d-text">Specialty Care Hospital</div>

                  <div className="features-title tilt-3d-text">Key Features:</div>
                  <ul className="features-list">
                    <li className="tilt-3d-text">Heavy-duty stretcher</li>
                    <li className="tilt-3d-text">Specialized lifting equipment</li>
                    <li className="tilt-3d-text">Reinforced vehicle</li>
                    <li className="tilt-3d-text">Trained crew</li>
                    <li className="tilt-3d-text">Extra space</li>
                  </ul>
                </div>

                <div className="pricing-section">
                  <div>
                    <span className="price tilt-3d-text">$300</span>
                    <span className="trip-text tilt-3d-text">/trip</span>
                  </div>
                  <div className="duration tilt-3d-text">15-20 minutes</div>
                </div>

                <div className="buttons-section">
                  <button className="book-btn tilt-3d-button">Book Now</button>
                  <button className="favorite-btn tilt-3d-button" aria-label="Add to favorites"></button>
                </div>

                {/* Floating elements */}
                <div className="tilt-floating-element" style={{ top: "15px", right: "15px", fontSize: "1rem" }}>
                  <i className="fas fa-weight"></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>
          </div>
        </div>

        {/* Service Comparison Section */}
        <div className="section">
          <ScrollAnimatedSection animation="slideInDown">
            <div className="section-header1">
              <h1>Service Comparison</h1>
              <p>Compare different ambulance types to choose the right service for your needs</p>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="zoomIn" delay={300}>
            <div className="container">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Service Type</th>
                    <th>Price Range</th>
                    <th>Response Time</th>
                    <th>Best For</th>
                    <th>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="service-name">Basic Life Support (BLS)</td>
                    <td className="price-cell">$150</td>
                    <td>8-12 minutes</td>
                    <td>Non-emergency transport</td>
                    <td>
                      <span className="status-badge status-available">Available</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="service-name">Advanced Life Support (ALS)</td>
                    <td className="price-cell">$250</td>
                    <td>6-10 minutes</td>
                    <td>Cardiac emergencies</td>
                    <td>
                      <span className="status-badge status-available">Available</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="service-name">Critical Care Transport</td>
                    <td className="price-cell">$400</td>
                    <td>4-8 minutes</td>
                    <td>ICU-level patients</td>
                    <td>
                      <span className="status-badge status-on-call">On Call</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="service-name">Neonatal Transport</td>
                    <td className="price-cell">$350</td>
                    <td>10-15 minutes</td>
                    <td>Newborn babies</td>
                    <td>
                      <span className="status-badge status-available">Available</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="service-name">Psychiatric Emergency</td>
                    <td className="price-cell">$200</td>
                    <td>12-18 minutes</td>
                    <td>Mental health crises</td>
                    <td>
                      <span className="status-badge status-available">Available</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="service-name">Bariatric Transport</td>
                    <td className="price-cell">$300</td>
                    <td>15-20 minutes</td>
                    <td>Heavy-weight patients</td>
                    <td>
                      <span className="status-badge status-limited">Limited</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </>
  )
}

export default Types
