import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero_villa.png';

export default function Hero() {
  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div 
        className="hero-bg" 
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Star size={14} fill="#c5a85c" color="#c5a85c" />
            <span>4.8 Rating (20 Google Reviews)</span>
          </div>
          
          <h1 className="hero-title">
            Crafting Premium <span>Luxury Residences</span> in Bandra West
          </h1>
          
          <p className="hero-desc">
            KN Builders and Real Estates (KN Realty) designs and develops modern architectural landmarks. 
            Experience unparalleled tailoring, seamless processes, and an uncompromising commitment to detail.
          </p>
          
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => handleScrollTo('projects')}
            >
              Explore Projects <ArrowRight size={16} />
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => handleScrollTo('contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
