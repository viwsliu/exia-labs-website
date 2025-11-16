"use client"

import { useEffect } from "react"

const investors = [
  { name: "Venture Partners", logo: "/images/backers/a1.svg" },
  { name: "Anorak", logo: "/images/backers/anorak.png" },
  { name: "MV", logo: "/images/backers/mv.svg" },
  { name: "Pathbreaker", logo: "/images/backers/pathbreaker.png" },
  { name: "Space Capital", logo: "/images/backers/space_capital.png" },
]

export default function InvestorsSection() {
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
    <section className="investors-section">
      <hr className="section-divider" />
      <div className="container">
        <h2 className="section-title slide-up">Our Backers</h2>
        <div className="investors-grid">
          {investors.map((investor) => (
            <div key={investor.name} className="investor-card slide-up">
              <img src={investor.logo || "/placeholder.svg"} alt={investor.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
