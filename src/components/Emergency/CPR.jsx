import React from 'react'

const CPR = () => {
  return (
    <>
      <section class="cpr-instructions-section">
    <div class="instructions-container">
        <div class="section-header">
            <h2>Basic CPR Instructions</h2>
            <p>For unresponsive adults - Call 911 first</p>
        </div>

        <div class="instructions-grid">
            <div class="instructions-column">
                <h3>Chest Compressions</h3>
                <ol class="cpr-list">
                    <li>Place heel of hand on center of chest between nipples</li>
                    <li>Place other hand on top, interlocking fingers</li>
                    <li>Push hard and fast at least 2 inches deep</li>
                    <li>Compress at rate of 100-120 per minute</li>
                </ol>
            </div>

            <div class="instructions-column">
                <h3>Important Reminders</h3>
                <ul class="reminders-list">
                    <li><i class="fas fa-check-circle"></i> Call 911 immediately before starting CPR</li>
                    <li><i class="fas fa-check-circle"></i> Continue until emergency help arrives</li>
                    <li><i class="fas fa-check-circle"></i> Switch with others every 2 minutes if possible</li>
                    <li><i class="fas fa-check-circle"></i> Use AED if available and trained</li>
                </ul>
            </div>
        </div>

        <div class="disclaimer-box">
            <i class="fas fa-info-circle"></i>
            <p>This is basic information only. Get proper CPR training from certified instructors.</p>
        </div>
    </div>
</section>
    </>
  )
}

export default CPR
