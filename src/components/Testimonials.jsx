import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      author: "khan khaild",
      meta: "Verified Client · a year ago",
      rating: 5,
      quote: "KN Realty provided an outstanding experience from start to finish! Their professionalism, deep knowledge of the Bandra market, and personalized approach made the entire process seamless and stress-free. They went above and beyond to meet my expectations."
    },
    {
      author: "Neha Washivale",
      meta: "Verified Client · a year ago",
      rating: 5,
      quote: "My experience with KN Realty has been nothing short of exceptional! From the very beginning, their team demonstrated unmatched professionalism, a deep understanding of the real estate market, and a genuine commitment to customer service."
    },
    {
      author: "Shaikh Shifa",
      meta: "Verified Client · a year ago",
      rating: 5,
      quote: "KN Realty exceeded all my expectations! Their expertise in the Bandra market, attention to detail, and commitment to excellence are unparalleled. The team provided tailored solutions, guided me through every step, and made the entire process smooth."
    },
    {
      author: "Anonymous Client Review",
      meta: "Google Maps Review Summary",
      rating: 4.8,
      quote: "He was really easy to work with and treated me like a family member. I had an absolutely fantastic experience with KN Realty! I would highly recommend their services to anyone looking for a seamless, stress-free process."
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        
        <div className="section-title-wrapper">
          <span className="section-subtitle">Client Feedback</span>
          <h2 className="section-title">
            What Our <span>Clients Say</span>
          </h2>
        </div>

        {/* Rating Overview Card */}
        <div className="reviews-summary-card">
          <div className="rating-score-box">
            <div className="score-num">4.8</div>
            <div className="score-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill={i < 4 ? "#c5a85c" : "none"} color="#c5a85c" />
              ))}
            </div>
            <div className="score-lbl">Based on 20 Reviews</div>
          </div>
          
          <div className="reviews-breakdown">
            <div className="breakdown-row">
              <span className="breakdown-lbl">5★</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '85%' }}></div>
              </div>
              <span className="breakdown-count">17</span>
            </div>
            <div className="breakdown-row">
              <span className="breakdown-lbl">4★</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '10%' }}></div>
              </div>
              <span className="breakdown-count">2</span>
            </div>
            <div className="breakdown-row">
              <span className="breakdown-lbl">3★</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '5%' }}></div>
              </div>
              <span className="breakdown-count">1</span>
            </div>
            <div className="breakdown-row">
              <span className="breakdown-lbl">2★</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '0%' }}></div>
              </div>
              <span className="breakdown-count">0</span>
            </div>
            <div className="breakdown-row">
              <span className="breakdown-lbl">1★</span>
              <div className="breakdown-bar">
                <div className="breakdown-fill" style={{ width: '0%' }}></div>
              </div>
              <span className="breakdown-count">0</span>
            </div>
          </div>
        </div>

        {/* Reviews Testimonial Slider */}
        <div className="reviews-carousel-wrapper">
          <div className="carousel-track">
            {reviews.map((review, idx) => (
              <div 
                className="review-slide" 
                key={idx}
                style={{ 
                  display: idx === activeIndex ? 'block' : 'none',
                  animation: 'fadeIn 0.6s ease-in-out'
                }}
              >
                <Quote size={40} className="quote-icon" />
                <blockquote className="review-quote">
                  "{review.quote}"
                </blockquote>
                <div className="review-author">{review.author}</div>
                <div className="review-meta">{review.meta}</div>
              </div>
            ))}
          </div>

          <button className="carousel-btn prev" onClick={handlePrev} aria-label="Previous review">
            <ChevronLeft size={20} />
          </button>
          <button className="carousel-btn next" onClick={handleNext} aria-label="Next review">
            <ChevronRight size={20} />
          </button>

          <div className="carousel-dots">
            {reviews.map((_, idx) => (
              <span 
                key={idx} 
                className={`dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              ></span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
