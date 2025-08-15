"use client"

import { useState, useEffect } from "react"
import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"

const FeedbackAndReviews = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceUsed: "",
    rating: 0,
    experience: "",
    detailedFeedback: "",
    recommend: "",
  })

  const [showSuccessAlert, setShowSuccessAlert] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleRatingClick = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)

    setShowSuccessAlert(true)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      serviceUsed: "",
      rating: 0,
      experience: "",
      detailedFeedback: "",
      recommend: "",
    })
    setHoverRating(0)
  }

  useEffect(() => {
    setCharCount(formData.detailedFeedback.length)
  }, [formData.detailedFeedback])

  return (
    <section className="feedback-and-reviews-section">
      <div className="feedback-container">
        {/* Enhanced Feedback Form Column */}
        <ScrollAnimatedSection animation="fadeInLeft" delay={200}>
          <TiltCard
            className="feedback-form-column feature-tilt-card tilt-card-animate-in"
            intensity="subtle"
            glare={true}
            shadow={true}
          >
            <h2 className="tilt-3d-text">Share Your Experience</h2>
            <form id="feedbackForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="serviceUsed">Service Used</label>
                  <select id="serviceUsed" name="serviceUsed" value={formData.serviceUsed} onChange={handleChange}>
                    <option value="">Select service type</option>
                    <option value="bls">Basic Life Support</option>
                    <option value="als">Advanced Life Support</option>
                    <option value="critical-care">Critical Care Transport</option>
                  </select>
                </div>
              </div>

              <div className="form-group g">
                <label>Overall Rating</label>
                <div className="rating-stars">
                  {[1, 2, 3, 4, 5].map((starValue) => (
                    <i
                      key={starValue}
                      className={`fa-star star ${(hoverRating || formData.rating) >= starValue ? "fas active" : "far"}`}
                      onClick={() => handleRatingClick(starValue)}
                      onMouseEnter={() => setHoverRating(starValue)}
                      onMouseLeave={() => setHoverRating(0)}
                    ></i>
                  ))}
                </div>
                <input type="hidden" name="rating" value={formData.rating} />
              </div>

              <div className="form-group g">
                <label>How was your experience?</label>
                <div className="radio-group">
                  {["excellent", "good", "average"].map((option) => (
                    <label key={option} className="radio-container">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                      <input
                        type="radio"
                        name="experience"
                        value={option}
                        checked={formData.experience === option}
                        onChange={handleChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group g">
                <label htmlFor="detailedFeedback">
                  Detailed Feedback
                  <span className="max-chars">(max 500 characters)</span>
                </label>
                <textarea
                  id="detailedFeedback"
                  name="detailedFeedback"
                  rows="4"
                  placeholder="Please share your detailed experience..."
                  value={formData.detailedFeedback}
                  onChange={handleChange}
                  maxLength="500"
                ></textarea>
                <div className="char-count">{charCount}/500 characters</div>
              </div>

              <div className="form-group g">
                <label>Would you recommend our services?</label>
                <div className="radio-group">
                  {["yes", "no", "maybe"].map((option) => (
                    <label key={option} className="radio-container">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                      <input
                        type="radio"
                        name="recommend"
                        value={option}
                        checked={formData.recommend === option}
                        onChange={handleChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="submit-btn b tilt-3d-button">
                <i className="fas fa-paper-plane"></i> Submit Feedback
              </button>
            </form>
          </TiltCard>
        </ScrollAnimatedSection>

        {/* Enhanced Testimonials Column */}
        <ScrollAnimatedSection animation="fadeInRight" delay={400}>
          <div className="testimonials-column">
            <div className="patient-reviews">
              <h2>What Our Patients Say</h2>

              <div className="stagger-container">
                <ScrollAnimatedSection animation="slideInUp" delay={500}>
                  <TiltCard
                    className="testimonial-card feature-tilt-card tilt-card-animate-in"
                    intensity="subtle"
                    glare={true}
                    shadow={true}
                  >
                    <div className="patient-info">
                      <div className="patient-icon tilt-3d-icon">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div>
                        <h4 className="tilt-3d-text">Sarah Mitchell</h4>
                        <div className="testimonial-rating tilt-3d-element">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <p className="testimonial-text tilt-3d-text">
                      Outstanding service! The paramedics were professional, caring, and arrived quickly during our
                      emergency. Highly recommended!
                    </p>
                    <p className="service-used tilt-3d-text">Advanced Life Support</p>
                  </TiltCard>
                </ScrollAnimatedSection>

                <ScrollAnimatedSection animation="slideInUp" delay={600}>
                  <TiltCard
                    className="testimonial-card feature-tilt-card tilt-card-animate-in"
                    intensity="subtle"
                    glare={true}
                    shadow={true}
                  >
                    <div className="patient-info">
                      <div className="patient-icon tilt-3d-icon">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div>
                        <h4 className="tilt-3d-text">Robert Chen</h4>
                        <div className="testimonial-rating tilt-3d-element">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <p className="testimonial-text tilt-3d-text">
                      Excellent experience with their critical care transport. The medical team was knowledgeable and
                      made us feel safe throughout the journey.
                    </p>
                    <p className="service-used tilt-3d-text">Critical Care Transport</p>
                  </TiltCard>
                </ScrollAnimatedSection>

                <ScrollAnimatedSection animation="slideInUp" delay={700}>
                  <TiltCard
                    className="testimonial-card feature-tilt-card tilt-card-animate-in"
                    intensity="subtle"
                    glare={true}
                    shadow={true}
                  >
                    <div className="patient-info">
                      <div className="patient-icon tilt-3d-icon">
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <div>
                        <h4 className="tilt-3d-text">Maria Rodriguez</h4>
                        <div className="testimonial-rating tilt-3d-element">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                      </div>
                    </div>
                    <p className="testimonial-text tilt-3d-text">
                      Professional and compassionate service. They handled my father's transport with great care and
                      attention to detail.
                    </p>
                    <p className="service-used tilt-3d-text">Basic Life Support</p>
                  </TiltCard>
                </ScrollAnimatedSection>
              </div>
            </div>

            <ScrollAnimatedSection animation="scaleIn" delay={800}>
              <TiltCard
                className="patient-satisfaction-box feature-tilt-card tilt-card-animate-in"
                intensity="subtle"
                glare={true}
                shadow={true}
              >
                <h3 className="tilt-3d-text">Patient Satisfaction</h3>
                <div className="rating-item">
                  <p className="tilt-3d-text">Overall Satisfaction</p>
                  <p className="tilt-3d-text">
                    <span>4.8</span>/5.0
                  </p>
                </div>
                <div className="rating-item">
                  <p className="tilt-3d-text">Response Time</p>
                  <p className="tilt-3d-text">
                    <span>4.9</span>/5.0
                  </p>
                </div>
                <div className="rating-item">
                  <p className="tilt-3d-text">Medical Care Quality</p>
                  <p className="tilt-3d-text">
                    <span>4.9</span>/5.0
                  </p>
                </div>
                <div className="rating-item">
                  <p className="tilt-3d-text">Staff Professionalism</p>
                  <p className="tilt-3d-text">
                    <span>4.8</span>/5.0
                  </p>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>
          </div>
        </ScrollAnimatedSection>
      </div>

      {showSuccessAlert && (
        <div id="custom-success-alert" className="show animate-in">
          <p>Your feedback has been submitted successfully!</p>
          <button onClick={() => setShowSuccessAlert(false)}>&times;</button>
        </div>
      )}
    </section>
  )
}

export default FeedbackAndReviews
