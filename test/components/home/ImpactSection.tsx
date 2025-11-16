"use client"

import { useEffect } from "react"

export default function ImpactSection() {
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
    <section id="impact" className="mission-section">
      <div className="container">
        <h2 className="section-title slide-up">Our Impact</h2>
        <div className="mission-content mission-content-reverse">
          <div className="mission-text-container slide-up">
            <p className="mission-text">
              Our impact extends across defense and intelligence communities. Example impact statement text goes here.{" "}
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p className="mission-text">
              We are transforming how warfighters make critical decisions through advanced AI systems. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="mission-video slide-up">
            <video controls poster="/images/blue_intro.png">
              <source src="/images/blue_vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
