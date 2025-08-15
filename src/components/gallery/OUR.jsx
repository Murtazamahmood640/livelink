"use client"

import { useState } from "react"
import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"
import gallarydata from "../../data/Gallery.json"

const OUR = () => {
  const [activeTab, setActiveTab] = useState("all")

  const navItems = [
    { label: "All Images", tab: "all" },
    { label: "Fleet", tab: "fleet" },
    { label: "Equipment", tab: "equipment" },
    { label: "Team", tab: "team" },
    { label: "Services", tab: "services" },
  ]

  const filteredCards = activeTab === "all" ? gallarydata : gallarydata.filter((card) => card.tab === activeTab)

  return (
    <section className="G-our-gallery">
      <ScrollAnimatedSection animation="fadeInDown">
        <div className="G-gallery-nav">
          {navItems.map((item) => (
            <button
              key={item.tab}
              className={`G-nav-item ${activeTab === item.tab ? "G-active" : ""}`}
              onClick={() => setActiveTab(item.tab)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </ScrollAnimatedSection>

      <div className="G-gallery-grid stagger-container">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <ScrollAnimatedSection key={`${activeTab}-${index}`} animation="zoomIn" delay={index * 100}>
              <TiltCard
                className="G-gallery-card gallery-tilt-card tilt-card-animate-in"
                intensity="medium"
                glare={true}
                shadow={true}
              >
                <img
                  src={card.img || "/placeholder.svg?height=200&width=300&text=Gallery"}
                  alt={card.title}
                  className="tilt-3d-element"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=200&width=300&text=Gallery"
                  }}
                />
                <h3 className="tilt-3d-text">{card.title}</h3>
                <p className="tilt-3d-text">{card.desc}</p>

                {/* Category icon floating element */}
                <div className="tilt-floating-element" style={{ top: "10px", left: "10px", fontSize: "1rem" }}>
                  <i
                    className={`fas fa-${
                      card.tab === "fleet"
                        ? "ambulance"
                        : card.tab === "equipment"
                          ? "stethoscope"
                          : card.tab === "team"
                            ? "user-md"
                            : card.tab === "services"
                              ? "heartbeat"
                              : "image"
                    }`}
                  ></i>
                </div>
              </TiltCard>
            </ScrollAnimatedSection>
          ))
        ) : (
          <ScrollAnimatedSection animation="fadeInUp">
            <div className="no-gallery-items">
              <p>No items found for this category.</p>
            </div>
          </ScrollAnimatedSection>
        )}
      </div>
    </section>
  )
}

export default OUR
