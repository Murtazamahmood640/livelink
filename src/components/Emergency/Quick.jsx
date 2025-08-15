import React from 'react'

const Quick = () => {
  return (
    <>
      <section class="quick-actions-section">
    <div class="actions-container">
        <div class="section-header">
            <h2>Quick Emergency Actions</h2>
            <p>Important contact numbers and actions</p>
        </div>

        <div class="actions-grid">
            <div class="action-card">
                <i class="icon-emergency fas fa-phone"></i>
                <h3>Emergency Services</h3>
                <p>Life-threatening emergencies</p>
                <a href="tel:911" class="action-btn red-btn">Call 911</a>
            </div>

            <div class="action-card">
                <i class="icon-booking fas fa-ambulance"></i>
                <h3>Ambulance Booking</h3>
                <p>Non-emergency transport</p>
                <a href="tel:5551234567" class="action-btn">Call (555) 123-4567</a>
            </div>

            <div class="action-card">
                <i class="icon-poison fas fa-info-circle"></i>
                <h3>Poison Control</h3>
                <p>Poison emergencies & information</p>
                <a href="tel:8002221222" class="action-btn green-btn">Call (800) 222-1222</a>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Quick
