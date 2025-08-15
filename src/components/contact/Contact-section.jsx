"use client"

import { useState } from "react"
import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"

function Contactsection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    urgencyLevel: "",
    subject: "",
    message: "",
  })

  const [charCount, setCharCount] = useState(0)
  const [popupVisible, setPopupVisible] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    if (id === "message" && value.length > 500) return
    setFormData((prev) => ({ ...prev, [id]: value }))
    if (id === "message") setCharCount(value.length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.fullName || !formData.email || !formData.message) {
      setPopupVisible(true)
      return
    }
    console.log("Form Data Submitted:", formData)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      urgencyLevel: "",
      subject: "",
      message: "",
    })
    setCharCount(0)
    setPopupVisible(true)
  }

  return (
    <>
      {/* Enhanced Popup with animations */}
      {popupVisible && (
        <div className="popup-overlay animate-in" onClick={() => setPopupVisible(false)}>
          <div className="popup-box">
            <h2>✅ Message Sent</h2>
            <p>We have received your message. Our team will contact you soon.</p>
            <button onClick={() => setPopupVisible(false)}>OK</button>
          </div>
        </div>
      )}

      <section className="contact-section">
        <div className="contact-container">
          {/* Enhanced Form Section */}
          <ScrollAnimatedSection animation="fadeInLeft" delay={200}>
            <TiltCard
              className="contact-form-column feature-tilt-card tilt-card-animate-in"
              intensity="subtle"
              glare={true}
              shadow={true}
            >
              <h2 className="tilt-3d-text">Send Us a Message</h2>
              <form id="contactForm" method="post" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="urgencyLevel">Urgency Level</label>
                    <select id="urgencyLevel" value={formData.urgencyLevel} onChange={handleChange}>
                      <option value="">Select urgency level</option>
                      <option value="emergency">Emergency</option>
                      <option value="non-emergency">Non-Emergency</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Brief subject of your message"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message <span className="max-chars">(max 500 characters)</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Please describe your inquiry or request in detail..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <div className="char-count">{charCount}/500 characters</div>
                </div>

                <button type="submit" className="send-message-btn tilt-3d-button">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            </TiltCard>
          </ScrollAnimatedSection>

          {/* Enhanced Info Section */}
          <ScrollAnimatedSection animation="fadeInRight" delay={400}>
            <div className="get-in-touch-column">
              <h2>Get In Touch</h2>

              <div className="stagger-container">
                <ScrollAnimatedSection animation="slideInUp" delay={500}>
                  <TiltCard
                    className="contact-info-card feature-tilt-card tilt-card-animate-in"
                    intensity="subtle"
                    glare={true}
                    shadow={true}
                  >
                    <div className="icon-circle tilt-3d-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="info-content">
                      <h4 className="tilt-3d-text">Emergency Line</h4>
                      <p className="main-info tilt-3d-text">911</p>
                      <p className="sub-info tilt-3d-text">For immediate medical emergencies</p>
                    </div>
                  </TiltCard>
                </ScrollAnimatedSection>

                <ScrollAnimatedSection animation="slideInUp" delay={600}>
                  <TiltCard
                    className="contact-info-card feature-tilt-card tilt-card-animate-in"
                    intensity="subtle"
                    glare={true}
                    shadow={true}
                  >
                    <div className="icon-circle tilt-3d-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="info-content">
                      <h4 className="tilt-3d-text">Non-Emergency Booking</h4>
                      <p className="main-info tilt-3d-text">(555) 123-4567</p>
                      <p className="sub-info tilt-3d-text">Schedule ambulance services</p>
                    </div>
                  </TiltCard>
                </ScrollAnimatedSection>

                <ScrollAnimatedSection animation="slideInUp" delay={700}>
                  <TiltCard
                    className="contact-info-card feature-tilt-card tilt-card-animate-in"
                    intensity="subtle"
                    glare={true}
                    shadow={true}
                  >
                    <div className="icon-circle tilt-3d-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="info-content">
                      <h4 className="tilt-3d-text">Email</h4>
                      <p className="main-info tilt-3d-text">info@eambulance.com</p>
                      <p className="sub-info tilt-3d-text">General inquiries and information</p>
                    </div>
                  </TiltCard>
                </ScrollAnimatedSection>

                <ScrollAnimatedSection animation="slideInUp" delay={800}>
                  <TiltCard
                    className="contact-info-card feature-tilt-card tilt-card-animate-in"
                    intensity="subtle"
                    glare={true}
                    shadow={true}
                  >
                    <div className="icon-circle tilt-3d-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-content">
                      <h4 className="tilt-3d-text">Address</h4>
                      <p className="main-info tilt-3d-text">123 Medical Center Drive</p>
                      <p className="sub-info tilt-3d-text">Main headquarters and dispatch</p>
                    </div>
                  </TiltCard>
                </ScrollAnimatedSection>
              </div>

              <ScrollAnimatedSection animation="scaleIn" delay={900}>
                <TiltCard
                  className="operating-hours-box feature-tilt-card tilt-card-animate-in"
                  intensity="subtle"
                  glare={true}
                  shadow={true}
                >
                  <h4 className="tilt-3d-text">Operating Hours</h4>
                  <div className="hours-row">
                    <p className="tilt-3d-text">Emergency Services</p>
                    <p className="hours-info tilt-3d-text">24/7</p>
                  </div>
                  <div className="hours-row">
                    <p className="tilt-3d-text">Non-Emergency Booking</p>
                    <p className="hours-info tilt-3d-text">24/7</p>
                  </div>
                  <div className="hours-row">
                    <p className="tilt-3d-text">Administrative Office</p>
                    <p className="hours-info tilt-3d-text">Mon-Fri 8AM-6PM</p>
                  </div>
                  <div className="hours-row">
                    <p className="tilt-3d-text">Billing Department</p>
                    <p className="hours-info tilt-3d-text">Mon-Fri 9AM-5PM</p>
                  </div>
                </TiltCard>
              </ScrollAnimatedSection>

              <ScrollAnimatedSection animation="fadeInUp" delay={1000}>
                <div className="action-buttons">
                  <button className="call-btn tilt-3d-button">
                    <i className="fas fa-phone-alt"></i> Call Emergency
                  </button>
                  <button className="schedule-btn tilt-3d-button">
                    <i className="fas fa-calendar-alt"></i> Schedule Service
                  </button>
                </div>
              </ScrollAnimatedSection>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Contactsection
