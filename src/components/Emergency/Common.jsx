import React from 'react'

const Common = () => {
  return (
    <>
      <section class="emergency-types-section">
    <div class="types-container">
        <div class="section-header">
            <h2>Common Emergency Types</h2>
            <p>Recognize these emergency situations and take immediate action</p>
        </div>

        <div class="types-grid">
            <div class="type-card">
                <h3>Cardiac Emergency</h3>
                <div class="warning-signs">
                    <h4>Warning Signs:</h4>
                    <ul>
                        <li><i class="fas fa-exclamation-triangle"></i> Chest pain</li>
                        <li><i class="fas fa-exclamation-triangle"></i> Difficulty breathing</li>
                        <li><i class="fas fa-exclamation-triangle"></i> Irregular heartbeat</li>
                        <li><i class="fas fa-exclamation-triangle"></i> Loss of consciousness</li>
                    </ul>
                </div>
                <a href="tel:911" class="card-btn"><i class="fas fa-ambulance"></i> Call 911 immediately</a>
            </div>
            
            <div class="type-card">
                <h3>Stroke</h3>
                <div class="warning-signs">
                    <h4>Warning Signs:</h4>
                    <ul>
                        <li><i class="fas fa-exclamation-triangle"></i> Sudden numbness</li>
                        <li><i class="fas fa-exclamation-triangle"></i> Confusion</li>
                        <li><i class="fas fa-exclamation-triangle"></i> Trouble speaking</li>
                        <li><i class="fas fa-exclamation-triangle"></i> Severe headache</li>
                    </ul>
                </div>
                <a href="tel:911" class="card-btn red-text"><i class="far fa-clock"></i> Time is critical - Call 911</a>
            </div>

            <div class="type-card">
                <h3>Severe Injury</h3>
                <div class="warning-signs">
                    <h4>Warning Signs:</h4>
                    <ul>
                        <li><i class="fas fa-exclamation-triangle"></i> Heavy bleeding</li>
                        <li><i class="fas fa-exclamation-triangle"></i> Broken bones</li>
                        <li><i class="fas fa-exclamation-triangle"></i> Head injury</li>
                        <li><i class="fas fa-exclamation-triangle"></i> Severe burns</li>
                    </ul>
                </div>
                <a href="tel:911" class="card-btn"><i class="fas fa-first-aid"></i> Apply first aid, call 911</a>
            </div>

            <div class="type-card">
                <h3>Respiratory Emergency</h3>
                <div class="warning-signs">
                    <h4>Warning Signs:</h4>
                    <ul>
                        <li><i class="fas fa-exclamation-triangle"></i> Cannot breathe</li>
                        <li><i class="fas fa-exclamation-triangle"></i> Choking</li>
                        <li><i class="fas fa-exclamation-triangle"></i> Severe asthma</li>
                        <li><i class="fas fa-exclamation-triangle"></i> Allergic reaction</li>
                    </ul>
                </div>
                <a href="tel:911" class="card-btn"><i class="fas fa-lungs"></i> Clear airway, call 911</a>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Common
