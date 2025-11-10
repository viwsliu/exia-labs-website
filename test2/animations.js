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

document.addEventListener("DOMContentLoaded", () => {
  const slideUpElements = document.querySelectorAll(".slide-up")
  slideUpElements.forEach((el) => observer.observe(el))

  const productSections = document.querySelectorAll(".product-section")

  productSections.forEach((section) => {
    section.style.cursor = "pointer"
    section.addEventListener("click", (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        return
      }

      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
      const elementHeight = section.offsetHeight
      const viewportHeight = window.innerHeight
      const offsetPosition = elementPosition - viewportHeight / 2 + elementHeight / 2

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    })
  })
})

const hamburger = document.querySelector(".hamburger")
const sidebarNav = document.querySelector(".sidebar-nav")

if (hamburger && sidebarNav) {
  hamburger.addEventListener("click", () => {
    sidebarNav.classList.toggle("active")
  })

  document.addEventListener("click", (e) => {
    if (sidebarNav.classList.contains("active") && !sidebarNav.contains(e.target) && !hamburger.contains(e.target)) {
      sidebarNav.classList.remove("active")
    }
  })

  const navLinks = document.querySelectorAll(".sidebar-menu a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebarNav.classList.remove("active")
    })
  })
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
      const elementHeight = target.offsetHeight
      const viewportHeight = window.innerHeight
      const offsetPosition = elementPosition - viewportHeight / 2 + elementHeight / 2

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})
