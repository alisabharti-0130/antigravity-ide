import React from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <a href="#home" className="logo" onClick={handleScrollToTop} style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              <div className="logo-icon">KN</div>
              <div>
                <span className="logo-text">KN REALTY</span>
                <span className="logo-sub">Builders & Developers</span>
              </div>
            </a>
            <p className="footer-desc">
              KN Builders and Real Estates (KN Realty) is a boutique luxury real estate developer delivering premium residential landmarks in Bandra West, Mumbai.
            </p>
          </div>

          <div>
            <h4 className="footer-title">Quick Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" className="footer-link" onClick={handleScrollToTop}>
                  Home Base
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link" onClick={(e) => handleLinkClick(e, 'about')}>
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#projects" className="footer-link" onClick={(e) => handleLinkClick(e, 'projects')}>
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="footer-link" onClick={(e) => handleLinkClick(e, 'testimonials')}>
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link" onClick={(e) => handleLinkClick(e, 'contact')}>
                  Inquiries
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact Office</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" size={16} />
                <span>
                  203, 2nd Floor, 16th Rd, Bandra West, Mumbai, Maharashtra 400050
                </span>
              </div>
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" size={16} />
                <span>
                  <a href="tel:+919833652887">+91 98336 52887</a>
                </span>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" size={16} />
                <span>
                  <a href="mailto:info@knrealty.in">info@knrealty.in</a>
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} KN Builders and Real Estates. All rights reserved. 
          </div>
          
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="Facebook">FB</a>
            <a href="#" className="social-link" aria-label="Instagram">IG</a>
            <a href="#" className="social-link" aria-label="LinkedIn">LN</a>
            <a href="#" className="social-link" aria-label="Scroll to top" onClick={handleScrollToTop}>
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
