import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle, ArrowRight } from 'lucide-react';

export default function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setError('Please enter both Email and Password.');
      return;
    }

    // Exact check for demo credentials: praveena / 5-2-2007
    if (trimmedEmail === 'praveena' && trimmedPassword === '5-2-2007') {
      onLoginSuccess(trimmedEmail);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-form-wrapper">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        {/* Error Alert Message */}
        {error && (
          <div className="error-alert" role="alert">
            <AlertCircle size={18} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        {/* Email Input Field */}
        <div className="form-group">
          <label className="form-label" htmlFor="email-input">
            Email
          </label>
          <div className="input-container">
            <Mail size={18} className="input-icon" />
            <input
              id="email-input"
              type="text"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              autoComplete="username"
              required
            />
          </div>
        </div>

        {/* Password Input Field with Show/Hide Option */}
        <div className="form-group">
          <label className="form-label" htmlFor="password-input">
            Password
          </label>
          <div className="input-container">
            <Lock size={18} className="input-icon" />
            <input
              id="password-input"
              type={showPassword ? 'text' : 'password'}
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError('');
              }}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              title={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password Options */}
        <div className="form-options-row">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <a
            href="#forgot"
            className="forgot-link"
            onClick={(e) => {
              e.preventDefault();
              alert('Password reset link sent.');
            }}
          >
            Forgot Password?
          </a>
        </div>

        {/* LOGIN Button */}
        <button type="submit" className="btn-login-submit">
          <span>LOGIN</span>
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}
