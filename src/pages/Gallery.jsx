import React from 'react'
import '../assets/Css/gallery.css'
import Hero from '../components/gallery/hero'
import OUR from '../components/gallery/OUR'
import Certifications from '../components/gallery/Certifications'
const Gallery = () => {
  document.addEventListener("DOMContentLoaded", function () {
        const navItems = document.querySelectorAll(".G-gallery-nav .G-nav-item");
        const galleryCards = document.querySelectorAll(
          ".G-gallery-grid .G-gallery-card"
        );

        navItems.forEach((item) => {
          item.addEventListener("click", function () {
            const tab = this.dataset.tab;

            // Deactivate all nav items
            navItems.forEach((navItem) => navItem.classList.remove("G-active"));
            // Activate the clicked nav item
            this.classList.add("G-active");

            // Show/hide gallery cards based on the selected tab
            galleryCards.forEach((card) => {
              if (tab === "all" || card.dataset.tab === tab) {
                card.style.display = "block";
              } else {
                card.style.display = "none";
              }
            });
          });
        });

        // Initially show all images
        navItems.forEach((item) => {
          if (item.dataset.tab === "all") {
            item.click();
          }
        });
      });
      document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".gallery-nav .nav-item");
    const galleryCards = document.querySelectorAll(
      ".gallery-grid .gallery-card"
    );

    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        const tab = this.dataset.tab;

        // Deactivate all nav items
        navItems.forEach((navItem) => navItem.classList.remove("active"));
        // Activate the clicked nav item
        this.classList.add("active");

        // Show/hide gallery cards based on the selected tab
        galleryCards.forEach((card) => {
          if (tab === "all" || card.dataset.tab === tab) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });

    // Initially show all images
    navItems.forEach((item) => {
      if (item.dataset.tab === "all") {
        item.click();
      }
    });
  });
  return (
    <>
      <Hero/>
    
    <OUR/>
    <Certifications/>
    </>
  )
}

export default Gallery
