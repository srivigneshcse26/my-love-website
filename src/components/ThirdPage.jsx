import React from 'react';
import { Heart } from 'lucide-react';

export default function ThirdPage({ onRsvpClick }) {
  // Array of floating hearts with various positions, delays, and sizes
  const floatingHearts = [
    { id: 1, left: '10%', delay: '0s', size: '1.8rem' },
    { id: 2, left: '22%', delay: '3s', size: '2.4rem' },
    { id: 3, left: '38%', delay: '1s', size: '1.4rem' },
    { id: 4, left: '52%', delay: '5s', size: '2.8rem' },
    { id: 5, left: '68%', delay: '2s', size: '1.6rem' },
    { id: 6, left: '82%', delay: '4s', size: '2.2rem' },
    { id: 7, left: '92%', delay: '6s', size: '1.5rem' },
  ];

  return (
    <div className="page-three-container">
      {/* Animated Floating Hearts Background */}
      <div className="floating-hearts-bg">
        {floatingHearts.map((h) => (
          <div
            key={h.id}
            className="floating-heart"
            style={{
              left: h.left,
              animationDelay: h.delay,
              fontSize: h.size,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Main Centered Content */}
      <div className="page-three-content">
        {/* Top Heart Icon Logo */}
        <div className="brand-heart-icon">
          <Heart size={28} fill="currentColor" />
        </div>

        {/* Main Romantic Heading */}
        <h1 className="romantic-main-heading">
          <span className="cursive-text">i love you forever💗</span>
        </h1>

        {/* Description Paragraph */}
        <p className="romantic-description">
          Celebrate love with me
        </p>

        {/* Centered Button */}
        <button className="btn-rsvp" onClick={onRsvpClick}>
          Maaa
        </button>
      </div>
    </div>
  );
}
