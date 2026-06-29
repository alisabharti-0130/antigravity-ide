import React, { useState, useEffect } from 'react';
import { Menu, X, Building } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, 'home')}>
          <div className="logo-icon">KN</div>
          <div>
            <span className="logo-text">KN REALTY</span>
            <span className="logo-sub">Builders & Developers</span>
          </div>
        </a>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a
            href="#home"
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'about')}
          >
            About
          </a>
          <a
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'projects')}
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'testimonials')}
          >
            Reviews
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Contact
          </a>
          <button 
            className="btn btn-outline" 
            style={{ display: 'none' }} /* Visible inside drawer on mobile if customized */
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            Get In Touch
          </button>
        </nav>

        <button 
          className="btn btn-primary nav-cta" 
          onClick={(e) => handleLinkClick(e, 'contact')}
        >
          Get In Touch
        </button>

        <div className="btn-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </header>
  );
}
