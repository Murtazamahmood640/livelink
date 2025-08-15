"use client"

import { useState, useEffect } from "react"
import ParallaxBackground from "../ParallaxBackground"
import ScrollAnimatedSection from "../ScrollAnimatedSection"

const Hero = () => {
  const [time, setTime] = useState("")

  useEffect(() => {
    function updateTime() {
      const now = new Date()
      let hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const ampm = hours >= 12 ? "PM" : "AM"
      hours = hours % 12 || 12
      setTime(`${hours}:${minutes} ${ampm}`)
    }

    updateTime()
    const timer = setInterval(updateTime, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <ParallaxBackground
      backgroundImage="src/assets/Images/E-B.png"
      speed={0.4}
      overlay={true}
      overlayOpacity={0.7}
      height="100vh"
      className="emergency-hero-parallax"
    >
      <section className="emergency-response-section">
        <div className="section-content">
          <ScrollAnimatedSection animation="bounceIn" delay={200}>
            <div className="icon">
              <i className="fas fa-bell"></i>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="slideInDown" delay={400}>
            <h2>Emergency Response</h2>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInUp" delay={600}>
            <p>In a medical emergency, every second counts. Get immediate help now.</p>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInUp" delay={800}>
            <div className="action-buttons">
              <a href="tel:911" className="call-now-btn">
                <i className="fas fa-phone"></i> CALL 911 NOW
              </a>
              <a href="tel:5551234567" className="non-emergency-btn">
                <i className="fas fa-phone"></i> Non-Emergency: (555) 123-4567
              </a>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInUp" delay={1000}>
            <p className="current-time">
              Current Time: <span>{time}</span>
            </p>
          </ScrollAnimatedSection>
        </div>

        {/* Emergency pulse circles */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "100px",
            height: "100px",
            border: "2px solid rgba(255,235,59,0.3)",
            borderRadius: "50%",
            animation: "emergencyPulse 3s infinite",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "10%",
            width: "80px",
            height: "80px",
            border: "2px solid rgba(255,235,59,0.2)",
            borderRadius: "50%",
            animation: "emergencyPulse 4s infinite 1s",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "5%",
            width: "60px",
            height: "60px",
            border: "2px solid rgba(255,235,59,0.1)",
            borderRadius: "50%",
            animation: "emergencyPulse 5s infinite 2s",
          }}
        ></div>
      </section>
    </ParallaxBackground>
  )
}

export default Hero
