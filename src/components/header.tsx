"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageDropdown, setLanguageDropdown] = useState(false)
  const pathname = usePathname()

 
 

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleLanguageDropdown = () => {
    setLanguageDropdown(!languageDropdown)
  }

  return (
    <header className="site-header">
      <div className="announcement-bar">
        <div className="announcement-slider">
          <div className="announcement-item">Lorem ipsum dolor</div>
          <div className="announcement-item">Lorem ipsum dolor</div>
          <div className="announcement-item">Lorem ipsum dolor</div>
        </div>
      </div>

      <div className="main-header">
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span className="hamburger-icon"></span>
        </button>

        <div className="logo-container">
          <Link href="/" aria-label="Home">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm0 11h7v7h-7v-7zm-11 0h7v7H3v-7z" fill="currentColor" />
              </svg>
            </div>
          </Link>

          <Link href="/" className="logo-text" aria-label="Home">
            LOGO
          </Link>
        </div>

        <nav className={`main-navigation ${mobileMenuOpen ? "mobile-open" : ""}`}>
          {mobileMenuOpen && (
            <button className="mobile-menu-close" onClick={toggleMobileMenu} aria-label="Close menu">
              ✕
            </button>
          )}
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/shop" className={pathname === "/shop" ? "active" : ""}>
                SHOP
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/skills" className={pathname === "/skills" ? "active" : ""}>
                SKILLS
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/stories" className={pathname === "/stories" ? "active" : ""}>
                STORIES
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={pathname === "/about" ? "active" : ""}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="icon-button search-button" aria-label="Search">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button className="icon-button wishlist-button" aria-label="Wishlist">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <button className="icon-button cart-button" aria-label="Cart">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>

          <button className="icon-button account-button" aria-label="Account">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          <div className="language-selector">
            <button className="language-button" onClick={toggleLanguageDropdown}>
              ENG
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={languageDropdown ? "rotate" : ""}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {languageDropdown && (
              <div className="language-dropdown">
                <button className="language-option">ENG</button>
                <button className="language-option">FRA</button>
                <button className="language-option">ESP</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}></div>

      <div className="breadcrumb">
        <Link href="/">HOME</Link>
        <span className="separator">|</span>
        <Link href="/shop" className="current">
          SHOP
        </Link>
      </div>
    </header>
  )
}
