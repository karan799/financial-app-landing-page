import React, { useState } from 'react';
import '../style/Header.css';

export const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleToggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a className="navbar-brand" href="#"><img src="img/logo.svg" alt="Logo" /></a>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={handleToggleNav}
            aria-controls="navbarSupportedContent" 
            aria-expanded={!isNavCollapsed} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`navbar-collapse ${isNavCollapsed ? 'collapse' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
            </ul>
            <a href="#" className="button">Download</a>
          </div>
        </nav>
      </div>
    </header>
  );
};
