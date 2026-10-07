import React from 'react';

export default function DashboardPage({ onHeartClick }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: "url('/pink-glitter.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        zIndex: 99999,
      }}
    >
      <button
        onClick={onHeartClick}
        aria-label="Navigate to Third Page"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '5.5rem',
          lineHeight: 1,
          padding: '1.5rem',
          userSelect: 'none',
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), filter 0.3s ease',
          filter: 'drop-shadow(0 0 25px rgba(255, 105, 180, 0.85))',
          outline: 'none',
          WebkitTapHighlightColor: 'transparent',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.25)';
          e.currentTarget.style.filter = 'drop-shadow(0 0 40px rgba(255, 105, 180, 1))';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.filter = 'drop-shadow(0 0 25px rgba(255, 105, 180, 0.85))';
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'scale(0.95)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'scale(1.25)';
        }}
      >
        💗
      </button>
    </div>
  );
}
