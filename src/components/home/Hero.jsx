import ParallaxBackground from "../ParallaxBackground"
import ScrollAnimatedSection from "../ScrollAnimatedSection"

const Hero = () => {
  return (
    <ParallaxBackground
      backgroundImage="src/assets/Images/banner.jpg"
      speed={0.5}
      overlay={true}
      overlayOpacity={0.6}
      height="100vh"
      className="hero-parallax"
    >
      <section className="hero">
        <div className="hero-content">
          <ScrollAnimatedSection animation="slideInDown" delay={200}>
            <h1>Emergency Medical Services</h1>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInLeft" delay={400}>
            <h2>When Every Second Counts</h2>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInRight" delay={600}>
            <p>Professional ambulance services available 24/7 with trained medical personnel and advanced equipment</p>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="fadeInUp" delay={800}>
            <div className="hero-buttons">
             <a href="/Emergency"> <button className="emergency-call">
                <i className="fas fa-ambulance"></i> Emergency Call
              </button></a>
              <a href="/Gallery"><button className="view-services">
                <i className="fas fa-eye"></i> View Services
              </button></a>
            </div>
          </ScrollAnimatedSection>
        </div>

        {/* Floating particles for extra effect */}
        <div className="parallax-particles">
          <div className="particle" style={{ left: "10%", width: "4px", height: "4px", animationDelay: "0s" }}></div>
          <div className="particle" style={{ left: "20%", width: "6px", height: "6px", animationDelay: "2s" }}></div>
          <div className="particle" style={{ left: "30%", width: "3px", height: "3px", animationDelay: "4s" }}></div>
          <div className="particle" style={{ left: "40%", width: "5px", height: "5px", animationDelay: "6s" }}></div>
          <div className="particle" style={{ left: "50%", width: "4px", height: "4px", animationDelay: "8s" }}></div>
          <div className="particle" style={{ left: "60%", width: "6px", height: "6px", animationDelay: "10s" }}></div>
          <div className="particle" style={{ left: "70%", width: "3px", height: "3px", animationDelay: "12s" }}></div>
          <div className="particle" style={{ left: "80%", width: "5px", height: "5px", animationDelay: "14s" }}></div>
          <div className="particle" style={{ left: "90%", width: "4px", height: "4px", animationDelay: "16s" }}></div>
        </div>
      </section>
    </ParallaxBackground>
  )
}

export default Hero
