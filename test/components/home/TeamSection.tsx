"use client"

import { useEffect } from "react"

const teamMembers = [
  {
    name: "Jonathan Pan",
    role: "CEO & Co-founder",
    image: "/images/people/jon.png",
    linkedin: "https://www.linkedin.com/in/jonpan/",
    twitter: "https://x.com/notvert",
  },
  {
    name: "Serj Kazar",
    role: "CTO & Co-founder",
    image: "/images/people/serj.png",
    linkedin: "https://www.linkedin.com/in/serjkazar/",
  },
  {
    name: "Connor Walsh",
    role: "Founding Engineer",
    image: "/images/people/connor.png",
    linkedin: "https://www.linkedin.com/in/connor-walsh-0812a395/",
  },
  {
    name: "Abby Beizer",
    role: "Software Engineer",
    image: "/images/people/abby.png",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "John Herman",
    role: "Head of Mission Partners",
    image: "/images/people/john.png",
    linkedin: "https://www.linkedin.com/in/john-j-herrman/",
  },
]

export default function TeamSection() {
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
    <section id="about" className="team-section">
      <div className="container">
        <h2 className="section-title slide-up">Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-member slide-up">
              <div className="member-image">
                <img src={member.image || "/placeholder.svg"} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-links">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
