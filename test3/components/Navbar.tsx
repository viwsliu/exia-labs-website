'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

interface NavbarProps {
  currentPage?: 'home' | 'products' | 'about'
}

export default function Navbar({ currentPage = 'home' }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          <img src="/images/exialabs_logo.jpg" alt="Exia Labs" className={styles.logoImg} />
          <span className={styles.logoText}>Exia Labs</span>
        </Link>

        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <ul className={`${styles.navMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
          <li>
            <Link 
              href="/" 
              className={currentPage === 'home' ? styles.activeLink : ''}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/products" 
              className={currentPage === 'products' ? styles.activeLink : ''}
              onClick={closeMobileMenu}
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={currentPage === 'about' ? styles.activeLink : ''}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>

          <li>
            <a 
              href="https://blog.exialabs.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.blogLink}
            >
              Blog
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}