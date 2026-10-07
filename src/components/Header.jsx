import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

export default function Header({ onSignInClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'DOWNLOAD', href: '#download' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'FEATURES', href: '#features' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header className="card-header">
        {/* Brand Logo & Name */}
        <a href="#" className="logo-container" aria-label="Nexus Home">
          <div className="logo-icon-wrapper">
            <Shield size={22} />
          </div>
          <span className="brand-name">NEXUS</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <button className="btn-signin-nav" onClick={onSignInClick}>
            SIGN IN
          </button>
        </nav>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className="hamburger-btn"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            className="btn-signin-nav"
            style={{ width: '100%', marginTop: '0.5rem' }}
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (onSignInClick) onSignInClick();
            }}
          >
            SIGN IN
          </button>
        </div>
      )}
    </>
  );
}
