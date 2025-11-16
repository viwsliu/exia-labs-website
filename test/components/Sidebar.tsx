"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  currentPath?: string
}

export default function Sidebar({ currentPath }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const activePath = currentPath || pathname

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.querySelector(".sidebar-nav")
      const hamburger = document.querySelector(".hamburger")

      if (
        isOpen &&
        sidebar &&
        hamburger &&
        !sidebar.contains(e.target as Node) &&
        !hamburger.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button className="hamburger" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`sidebar-nav ${isOpen ? "active" : ""}`}>
        <Link href="/" className="sidebar-logo" onClick={handleLinkClick}>
          <img src="/images/exialabs_logo.jpg" alt="Exia Labs Logo" className="sidebar-logo-img" />
          <span>Exia Labs</span>
        </Link>
        <ul className="sidebar-menu">
          <li>
            <Link href="/" className={activePath === "/" ? "active" : ""} onClick={handleLinkClick}>
              Home
            </Link>
            <ul className="sidebar-submenu">
              <li>
                <Link href="/#mission" onClick={handleLinkClick}>
                  Our Mission
                </Link>
              </li>
            </ul>
            <ul className="sidebar-submenu">
              <li>
                <Link href="/#impact" onClick={handleLinkClick}>
                  Our Impact
                </Link>
              </li>
            </ul>
            <ul className="sidebar-submenu">
              <li>
                <Link href="/#gallery" onClick={handleLinkClick}>
                  News
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/products" className={activePath === "/products" ? "active" : ""} onClick={handleLinkClick}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/#about" onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
          <li>
            <a href="https://blog.exialabs.com/" target="_blank" rel="noopener noreferrer">
              Blog{" "}
              <svg
                style={{
                  width: "14px",
                  height: "14px",
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: "4px",
                }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
