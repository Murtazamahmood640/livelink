import ScrollAnimatedSection from "../ScrollAnimatedSection"

function Location() {
  return (
    <>
      <section className="location-section">
        <div className="location-container">
          <ScrollAnimatedSection animation="slideInDown">
            <div className="section-header">
              <h2>Find Our Location</h2>
              <p>Visit our headquarters and dispatch center</p>
            </div>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="zoomIn" delay={300}>
            <div className="map-container">
              <div style={{ width: "100%", height: "500px" }}>
                <iframe
                  title="Aptech Malir Center"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.5320103957824!2d67.20312107393674!3d24.90371944352787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb337007d3ec103%3A0x574bbbdc0b32cacd!2sAptech%20Malir%20Center!5e1!3m2!1sen!2s!4v1755010244602!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Location
