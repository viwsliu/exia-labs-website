// Automatic product slideshow
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")
  const slideshowContainer = document.querySelector(".slideshow-container")
  let currentSlide = 0
  let slideInterval

  function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove("active"))
    dots.forEach((dot) => dot.classList.remove("active"))

    // Add active class to current slide and dot
    slides[index].classList.add("active")
    dots[index].classList.add("active")
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length
    showSlide(currentSlide)
  }

  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 4000) // Change slide every 4 seconds
  }

  function stopSlideshow() {
    clearInterval(slideInterval)
  }

  // Dot click handlers for manual navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
      stopSlideshow()
      startSlideshow()
    })
  })

  // Start the automatic slideshow
  startSlideshow()

  // Pause slideshow on hover
  if (slideshowContainer) {
    slideshowContainer.addEventListener("mouseenter", stopSlideshow)
    slideshowContainer.addEventListener("mouseleave", startSlideshow)
  }
})
