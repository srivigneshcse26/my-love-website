import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function PageFour({ onBackClick }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        background: 'radial-gradient(circle at center, #3b0764 0%, #1e1b4b 60%, #0f172a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontFamily: "'Outfit', -apple-system, sans-serif",
        textAlign: 'center',
        padding: '2rem',
        zIndex: 99999,
      }}
    >
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(244, 114, 182, 0.2)',
          border: '1px solid rgba(244, 114, 182, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f472b6',
          marginBottom: '1.5rem',
          boxShadow: '0 0 30px rgba(244, 114, 182, 0.4)',
        }}
      >
        <CheckCircle2 size={38} />
      </div>

      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#fecdd3' }}>
        praviiMaaa🫶💗
      </h1>

      <p style={{ fontSize: '1.15rem', color: '#fecdd3', maxWidth: '520px', lineHeight: 1.7, marginBottom: '2rem' }}>
        Sorry Thangoo unaiya na romba hurt pannirukalam manichiko maaa<br />
        Bestest Wife Forever 🫶💗
      </p>

      {onBackClick && (
        <button
          onClick={onBackClick}
          style={{
            padding: '0.75rem 2rem',
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.9rem',
            fontWeight: 700,
            color: '#ffffff',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            borderRadius: '100px',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          Back to Invitation
        </button>
      )}
    </div>
  );
}
