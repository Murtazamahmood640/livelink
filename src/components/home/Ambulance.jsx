"use client"

import { useEffect, useState } from "react"
import ScrollAnimatedSection from "../ScrollAnimatedSection"
import TiltCard from "../TiltCard"
import ambulanceData from "../../data/data.json"

const Ambulance = () => {
  const [allAmbulances, setAllAmbulances] = useState([])
  const [filteredAmbulances, setFilteredAmbulances] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [type, setType] = useState("all")
  const [availability, setAvailability] = useState("all")
  const [sortBy, setSortBy] = useState("default")
  const [filtersVisible, setFiltersVisible] = useState(false)

  useEffect(() => {
    setAllAmbulances(ambulanceData)
  }, [])

  useEffect(() => {
    filterAndRenderCards()
  }, [searchTerm, type, availability, sortBy, allAmbulances])

  const filterAndRenderCards = () => {
    let filtered = [...allAmbulances]

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter((a) => `${a.title} ${a.location} ${a.features.join(" ")}`.toLowerCase().includes(term))
    }

    if (type !== "all") {
      filtered = filtered.filter((a) => a.title.toLowerCase().includes(type))
    }

    if (availability !== "all") {
      filtered = filtered.filter((a) => a.status === availability)
    }

    if (sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price)
    }

    setFilteredAmbulances(filtered)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setType("all")
    setAvailability("all")
    setSortBy("default")
  }

  return (
    <section className="ambulances-section">
      <ScrollAnimatedSection animation="slideInDown">
        <div className="filter-bar-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search ambulances by type, location, or features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">
              <i className="fas fa-search"></i> Search
            </button>
            <button className="filters-btn" onClick={() => setFiltersVisible((prev) => !prev)}>
              <i className="fas fa-filter"></i> Filters
            </button>
          </div>

          <div className={`filters-row ${filtersVisible ? "active" : ""}`}>
            <div className="filter-dropdown">
              <label htmlFor="type">Type</label>
              <select id="type-filter" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="all">All Types</option>
                <option value="bls">BLS</option>
                <option value="als">ALS</option>
                <option value="cct">CCT</option>
              </select>
            </div>
            <div className="filter-dropdown">
              <label htmlFor="availability">Availability</label>
              <select id="availability-filter" value={availability} onChange={(e) => setAvailability(e.target.value)}>
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="on-call">On Call</option>
              </select>
            </div>
            <div className="filter-dropdown">
              <label htmlFor="sortby">Sort By</label>
              <select id="sortby-filter" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
            <button className="clear-all-btn" onClick={clearFilters}>
              Clear All
            </button>
          </div>
        </div>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection animation="fadeInLeft" delay={200}>
        <div className="ambulances-header">
          <h2>Available Ambulances</h2>
          <span className="services-found">{filteredAmbulances.length} services found</span>
        </div>
      </ScrollAnimatedSection>

      <div className="ambulance-cards-grid stagger-container">
        {filteredAmbulances.length === 0 ? (
          <ScrollAnimatedSection animation="fadeInUp">
            <p className="no-results">No ambulances found matching your criteria.</p>
          </ScrollAnimatedSection>
        ) : (
          filteredAmbulances.map((ambulance, idx) => {
            const statusClass = ambulance.status === "available" ? "available" : "on-call"
            const moreFeaturesText =
              ambulance.moreFeaturesCount > 0 ? `+${ambulance.moreFeaturesCount} more features` : ""

            return (
              <ScrollAnimatedSection key={idx} animation="fadeInUp" delay={idx * 100}>
                <TiltCard
                  className="ambulance-card ambulance-tilt-card tilt-card-animate-in"
                  intensity="medium"
                  glare={true}
                  shadow={true}
                >
                  <div className="card-image-container">
                    <img
                      src={ambulance.image || "/placeholder.svg?height=200&width=300&text=Ambulance"}
                      alt={`${ambulance.title} Ambulance`}
                      className="tilt-3d-element"
                    />
                    <span className={`status-badge ${statusClass} tilt-3d-element`}>
                      {ambulance.status.charAt(0).toUpperCase() + ambulance.status.slice(1)}
                    </span>
                  </div>

                  <div className="card-content">
                    <h3 className="tilt-3d-text">{ambulance.title}</h3>
                    <p className="location tilt-3d-text">{ambulance.location}</p>

                    <div className="features">
                      <h4 className="tilt-3d-text">Features:</h4>
                      <ul>
                        {ambulance.features.map((feature, i) => (
                          <li key={i} className="tilt-3d-text">
                            <i className="fas fa-check-circle tilt-3d-icon"></i> {feature}
                          </li>
                        ))}
                        {moreFeaturesText && <li className="more-features tilt-3d-text">{moreFeaturesText}</li>}
                      </ul>
                    </div>

                    <div className="card-footer">
                      <div className="price-time">
                        <span className="price tilt-3d-text">${ambulance.price} /trip</span>
                        <span className="time tilt-3d-text">
                          <i className="fas fa-clock tilt-3d-icon"></i> {ambulance.time} minutes
                        </span>
                      </div>
                      <button className="book-btn tilt-3d-button"></button>
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <div className="tilt-floating-element" style={{ top: "10px", right: "10px", fontSize: "1.2rem" }}>
                    <i className="fas fa-plus-circle"></i>
                  </div>
                  <div className="tilt-floating-element" style={{ bottom: "10px", left: "10px", fontSize: "1rem" }}>
                    <i className="fas fa-shield-alt"></i>
                  </div>
                </TiltCard>
              </ScrollAnimatedSection>
            )
          })
        )}
      </div>
    </section>
  )
}

export default Ambulance
