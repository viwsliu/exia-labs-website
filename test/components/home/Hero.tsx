"use client"

import { useEffect } from "react"

export default function Hero() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute("href") || "")
      if (target) {
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
        const elementHeight = (target as HTMLElement).offsetHeight
        const viewportHeight = window.innerHeight
        const offsetPosition = elementPosition - viewportHeight / 2 + elementHeight / 2

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }

    const scrollArrow = document.querySelector(".hero .scroll-arrow")
    if (scrollArrow) {
      scrollArrow.addEventListener("click", handleSmoothScroll as EventListener)
    }

    return () => {
      if (scrollArrow) {
        scrollArrow.removeEventListener("click", handleSmoothScroll as EventListener)
      }
    }
  }, [])

  return (
    <section className="hero hero-fade-in">
      <div className="hero-content">
        <div className="hero-logo">
          <div className="product-logo">
            <img src="/images/exialabs_logo.jpg" alt="Exia Labs Logo" />
          </div>
        </div>
        <div className="hero-text">
          <h1>Exia Labs</h1>
          <p className="mission-statement">Generating Warfighting Strategies Beyond Human Limits</p>
        </div>
      </div>
      <a href="#vision" className="scroll-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    </section>
  )
}
