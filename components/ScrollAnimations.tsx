"use client"
import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -20px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const slideUpElements = document.querySelectorAll(".slide-up")
    slideUpElements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible")
      }
      observer.observe(el)
    })

    const handleAnchorClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement
      const href = anchor.getAttribute("href")

      if (href && href.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
          const elementHeight = target.getBoundingClientRect().height
          const viewportHeight = window.innerHeight
          const offsetPosition = elementPosition - viewportHeight / 2 + elementHeight / 2
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick)
    })

    return () => {
      slideUpElements.forEach((el) => observer.unobserve(el))
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick)
      })
    }
  }, [])

  return null
}