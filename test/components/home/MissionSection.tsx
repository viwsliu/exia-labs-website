"use client"

import { useEffect } from "react"

export default function MissionSection() {
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
    <section id="mission" className="mission-section">
      <div className="container">
        <h2 className="section-title slide-up">Our Mission</h2>
        <div className="mission-content">
          <div className="mission-text-container slide-up">
            <p className="mission-text">
              Example mission statement text goes here. Example text something. <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p className="mission-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
          </div>
          <div className="mission-video slide-up">
            <video controls poster="/images/blue_intro.png">
              <source src="/images/blue_vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="center-button" style={{ marginTop: "40px" }}>
          <a href="#about" className="cta-button">
            More About Us
          </a>
        </div>
      </div>
    </section>
  )
}
