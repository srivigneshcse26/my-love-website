import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import DashboardPage from './components/DashboardPage';
import ThirdPage from './components/ThirdPage';
import PageFour from './components/PageFour';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login'); // 'login' | 'dashboard' | 'thirdPage' | 'pageFour'

  const handleLoginSuccess = () => {
    setCurrentPage('dashboard');
  };

  const handleHeartClick = () => {
    setCurrentPage('thirdPage');
  };

  const handleRsvpClick = () => {
    setCurrentPage('pageFour');
  };

  const handleBackToThird = () => {
    setCurrentPage('thirdPage');
  };

  if (currentPage === 'dashboard') {
    return <DashboardPage onHeartClick={handleHeartClick} />;
  }

  if (currentPage === 'thirdPage') {
    return <ThirdPage onRsvpClick={handleRsvpClick} />;
  }

  if (currentPage === 'pageFour') {
    return <PageFour onBackClick={handleBackToThird} />;
  }

  return (
    <div className="app-container">
      {/* Background Lighting & Glowing Abstract Shapes */}
      <div className="bg-glowing-shapes">
        <div className="bg-image-overlay"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="bg-grid"></div>
      </div>

      {/* Main Centered Glassmorphic Container */}
      <main className="main-glass-card">
        {/* Dynamic Page Content */}
        <div className="card-body">
          {/* Prominent Welcome Heading */}
          <h1 className="hero-title"># Welcome🫶</h1>

          {/* Login Form Section */}
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>

        {/* Footer */}
        <footer className="card-footer">
          <p>© 2026 NEXUS Portal System. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
