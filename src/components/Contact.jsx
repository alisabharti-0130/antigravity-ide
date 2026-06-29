import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'general',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [hoursText, setHoursText] = useState('Closed · Opens 10:30 AM');

  // Dynamic Office Hours Check
  useEffect(() => {
    const checkOfficeHours = () => {
      // Office hours: Mon-Sat, 10:30 AM to 7:00 PM (10:30 to 19:00)
      const now = new Date();
      // Adjust to India Standard Time (IST) if needed, but since users setting local time, let's use the local client time
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentDecimalTime = hours + minutes / 60;

      const openingTime = 10.5; // 10:30 AM
      const closingTime = 19.0; // 7:00 PM

      if (day === 0) {
        // Sunday
        setIsOpenNow(false);
        setHoursText("Closed · Opens Mon 10:30 AM");
      } else {
        // Mon-Sat
        if (currentDecimalTime >= openingTime && currentDecimalTime < closingTime) {
          setIsOpenNow(true);
          setHoursText("Open Now · Closes 7:00 PM");
        } else if (currentDecimalTime < openingTime) {
          setIsOpenNow(false);
          setHoursText("Closed · Opens 10:30 AM");
        } else {
          setIsOpenNow(false);
          setHoursText(day === 6 ? "Closed · Opens Mon 10:30 AM" : "Closed · Opens 10:30 AM");
        }
      }
    };

    checkOfficeHours();
    const interval = setInterval(checkOfficeHours, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      tempErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API submit delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: 'general',
          message: ''
        });
      }, 1500);
    }
  };

  const openInGoogleMaps = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=203,+2nd+Floor,+16th+Rd,+Bandra+West,+Mumbai,+Maharashtra+400050", "_blank");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        
        <div className="section-title-wrapper">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">
            Begin Your <span>Bespoke Journey</span>
          </h2>
        </div>

        <div className="contact-grid">
          
          {/* Contact Details Panel */}
          <div className="contact-info-panel">
            <div className="contact-detail-card">
              <div className="detail-icon-box">
                <MapPin size={24} />
              </div>
              <div className="detail-info">
                <h4>Registered Address</h4>
                <p>
                  203, 2nd Floor, 16th Rd, Bandra West,<br />
                  Mumbai, Maharashtra 400050
                </p>
                <p style={{ fontSize: '0.8rem', color: '#c5a85c', marginTop: '0.5rem' }}>
                  Plus Code: 3R7J+29 Mumbai, Maharashtra
                </p>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="detail-icon-box">
                <Phone size={24} />
              </div>
              <div className="detail-info">
                <h4>Direct Phone Hotline</h4>
                <p>
                  <a href="tel:+919833652887" style={{ textDecoration: 'underline' }}>
                    +91 98336 52887
                  </a>
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Call for inquiries & scheduling a viewing
                </p>
              </div>
            </div>

            <div className="contact-detail-card">
              <div className="detail-icon-box">
                <Clock size={24} />
              </div>
              <div className="detail-info">
                <h4>Hours of Operation</h4>
                <p>Mon - Sat: 10:30 AM - 7:00 PM</p>
                <p>Sunday: Closed</p>
                <span className={`hours-badge ${isOpenNow ? 'hours-open' : 'hours-closed'}`}>
                  {hoursText}
                </span>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="map-container">
              <div className="map-placeholder-bg">
                <MapPin size={32} className="gold-text" style={{ marginBottom: '0.5rem' }} />
                <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '400' }}>
                  Bandra West, Mumbai
                </h5>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', maxWidth: '240px', marginTop: '0.25rem' }}>
                  16th Road, near Bandra West market area
                </p>
                <button className="map-pin-btn" onClick={openInGoogleMaps}>
                  Open In Google Maps
                </button>
              </div>
            </div>
          </div>

          {/* Inquiry Form Panel */}
          <div className="contact-form-panel">
            {!submitSuccess ? (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: '400', marginBottom: '2.5rem' }}>
                  Send An Inquiry
                </h3>

                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <div className="form-error">{errors.name}</div>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <div className="form-error">{errors.email}</div>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && <div className="form-error">{errors.phone}</div>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="interest">Interested In</label>
                  <select
                    id="interest"
                    name="interest"
                    className="form-select"
                    value={formData.interest}
                    onChange={handleInputChange}
                  >
                    <option value="general">General Real Estate Query</option>
                    <option value="vista">The Vista Heights, Bandra West</option>
                    <option value="emerald">KN Emerald Terraces, Bandra West</option>
                    <option value="partnership">Joint Development / Alliance</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '2.5rem' }}>
                  <label className="form-label" htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Describe your requirements (e.g. BHK size, budget)"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && <div className="form-error">{errors.message}</div>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : <>Submit Inquiry <Send size={16} /></>}
                </button>
              </form>
            ) : (
              <div className="submit-success-animation">
                <div className="success-icon-box">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="success-title">Inquiry Received</h3>
                <p className="success-desc">
                  Thank you for contacting KN Realty. Our sales coordinator will reach out to you within 24 business hours to address your requirements.
                </p>
                <button 
                  className="btn btn-outline" 
                  onClick={() => setSubmitSuccess(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
