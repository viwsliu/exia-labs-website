"use client"

import { useEffect } from "react"

interface ProductItemProps {
  id: string
  title: string
  description: string
  image: string
  link: string
  imagePosition: "left" | "right"
}

export default function ProductItem({ id, title, description, image, link, imagePosition }: ProductItemProps) {
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

    const element = document.getElementById(id)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [id])

  const isComingSoon = !link || link === ""

  return (
    <div id={id} className="product-section slide-up">
      <div className="product-content-alt">
        {imagePosition === "left" && (
          <div className="product-images-single">
            <img src={image || "/placeholder.svg"} alt={title} className="product-single-image" />
          </div>
        )}
        <div className="product-text-content">
          <h2>{title}</h2>
          <p className="product-description">{description}</p>
          {isComingSoon ? (
            <a href="#" className="cta-button" onClick={(e) => e.preventDefault()}>
              Coming Soon
            </a>
          ) : (
            <a href={link} target="_blank" rel="noopener noreferrer" className="cta-button">
              LEARN MORE
            </a>
          )}
        </div>
        {imagePosition === "right" && (
          <div className="product-images-single">
            <img src={image || "/placeholder.svg"} alt={title} className="product-single-image" />
          </div>
        )}
      </div>
    </div>
  )
}
