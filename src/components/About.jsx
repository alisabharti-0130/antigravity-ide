import React from 'react';
import { Compass, ShieldCheck, Award, Clock } from 'lucide-react';

export default function About() {
  const strengths = [
    {
      icon: <Compass className="feat-icon" size={28} />,
      title: "Tailored Solutions",
      desc: "Every project and interior layout is customized to individual requirements, reflecting personal taste and lifestyle."
    },
    {
      icon: <ShieldCheck className="feat-icon" size={28} />,
      title: "Attention to Detail",
      desc: "From foundation layout to marble finishings, our meticulous planning guarantees premium material execution."
    },
    {
      icon: <Award className="feat-icon" size={28} />,
      title: "Seamless Process",
      desc: "We take care of all regulatory approvals and project milestones, providing you with a stress-free acquisition."
    },
    {
      icon: <Clock className="feat-icon" size={28} />,
      title: "Promptness",
      desc: "Time is luxury. We commit to strict delivery timelines with absolute transparency in reporting progress."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-content-left">
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
              Redefining Luxury Living In <span>Bandra West</span>
            </h2>
            
            <p className="about-text">
              KN Builders and Real Estates has established a reputation for excellence in the Mumbai real estate landscape. 
              Known for our deep local expertise in the Bandra market, we bridge high-end architecture with family-like customer relationships.
            </p>
            <p className="about-text" style={{ marginBottom: '3.5rem' }}>
              Whether developing ultra-modern residential estates or crafting bespoke luxury apartments, our core ethos is centered around delivery, quality, and complete transparency.
            </p>

            <div className="about-features">
              {strengths.map((s, idx) => (
                <div className="feat-item" key={idx}>
                  {s.icon}
                  <div>
                    <h4 className="feat-title">{s.title}</h4>
                    <p className="feat-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="stats-card">
              <div className="stat-item">
                <div className="stat-num">4.8</div>
                <div className="stat-label">Google Rating</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">20</div>
                <div className="stat-label">Verified Reviews</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">100%</div>
                <div className="stat-label">Client Trust</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
