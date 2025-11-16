"use client"

import { useState } from "react"
import "@/styles/slideshow.css"

const slides = [
  {
    image: "/images/blue_sandbox.png",
    caption: "Blue",
    product: "cloudsync",
  },
  {
    image: "/images/recon.jpg",
    caption: "Recon",
    product: "dataviz",
  },
  {
    image: "/images/soraka.png",
    caption: "Soraka",
    product: "secureguard",
  },
  {
    image: "/images/viktor.png",
    caption: "Viktor",
    product: "aiassistant",
  },
]

export default function SlideshowPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const showSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="product-slideshow">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`} data-product={slide.product}>
            <img src={slide.image || "/placeholder.svg"} alt={slide.caption} />
            <div className="slide-caption">
              <h3>{slide.caption}</h3>
            </div>
          </div>
        ))}

        <a className="prev" onClick={prevSlide}>
          ❮
        </a>
        <a className="next" onClick={nextSlide}>
          ❯
        </a>
      </div>
      <div className="slideshow-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            data-index={index}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
