"use client"

import { useEffect } from "react"

interface VisionSectionProps {
  id: string
  heading: string
  text: string
  backgroundImage: string
  nextSection: string
  alignment: "left" | "right"
}

export default function VisionSection({
  id,
  heading,
  text,
  backgroundImage,
  nextSection,
  alignment,
}: VisionSectionProps) {
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

    const scrollArrow = document.querySelector(`#${id} .scroll-arrow`)
    if (scrollArrow) {
      scrollArrow.addEventListener("click", handleSmoothScroll as EventListener)
    }

    return () => {
      if (scrollArrow) {
        scrollArrow.removeEventListener("click", handleSmoothScroll as EventListener)
      }
    }
  }, [id])

  const isAlt = alignment === "right"

  return (
    <section
      id={id}
      className={isAlt ? "vision-section-alt" : "vision-section"}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={isAlt ? "vision-overlay-alt" : "vision-overlay"}>
        <div className={isAlt ? "vision-content-alt" : "vision-content"}>
          <h2 className="vision-heading" dangerouslySetInnerHTML={{ __html: heading }} />
          <p className="vision-text-alt">{text}</p>
          <a href="/products" className="vision-button">
            EXPLORE <span>→</span>
          </a>
        </div>
      </div>
      <a href={nextSection} className="scroll-arrow">
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
