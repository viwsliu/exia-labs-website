"use client"

import { useEffect } from "react"

export default function GallerySection() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const slideUpElements = document.querySelectorAll(".slide-up")
    slideUpElements.forEach((el) => observer.observe(el))

    return () => {
      slideUpElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="gallery" className="team-section">
      <div className="container">
        <h2 className="section-title slide-up">Gallery</h2>
        <iframe
          src="/slideshow"
          style={{ width: "100%", height: "600px", border: "none", display: "block" }}
          title="Product Slideshow"
        />
        <div className="center-button">
          <a href="/products" className="cta-button">
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
