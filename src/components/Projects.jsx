import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import projectVistaImg from '../assets/project_vista.png';
import projectEmeraldImg from '../assets/project_emerald.png';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      name: "The Vista Heights",
      location: "16th Road, Bandra West, Mumbai",
      status: "ready to move",
      badge: "Ready to Move",
      image: projectVistaImg,
      desc: "An exclusive collection of penthouses offering floor-to-ceiling glass facades with panoramic views of the Arabian Sea and Bandra-Worli Sea Link. Featuring gold-accented bespoke interiors.",
      price: "₹18.5 Cr+",
      area: "3,200 Sq.Ft.",
      config: "4 BHK Penthouse"
    },
    {
      id: 2,
      name: "KN Emerald Terraces",
      location: "Perry Cross Road, Bandra West, Mumbai",
      status: "ongoing",
      badge: "Ongoing Project",
      image: projectEmeraldImg,
      desc: "Ultra-luxury residences defined by private terrace gardens, vertical landscaping, and state-of-the-art smart home integration. Curated for tranquility and sophisticated city living.",
      price: "₹12.8 Cr+",
      area: "2,450 Sq.Ft.",
      config: "3 BHK Residence"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.status === filter);

  return (
    <section id="projects" className="section section-bg-alt">
      <div className="container">
        
        <div className="section-title-wrapper">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">
            Featured <span>Architectural Landmarks</span>
          </h2>
        </div>

        <div className="projects-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'ongoing' ? 'active' : ''}`}
            onClick={() => setFilter('ongoing')}
          >
            Ongoing
          </button>
          <button 
            className={`filter-btn ${filter === 'ready to move' ? 'active' : ''}`}
            onClick={() => setFilter('ready to move')}
          >
            Ready to Move
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-img-wrapper">
                <img 
                  className="project-img" 
                  src={project.image} 
                  alt={project.name} 
                  loading="lazy"
                />
                <span className="project-badge">{project.badge}</span>
              </div>
              
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                
                <div className="project-loc">
                  <MapPin size={14} className="gold-text" />
                  <span>{project.location}</span>
                </div>
                
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-specs">
                  <div>
                    <div className="spec-title">Config</div>
                    <div className="spec-val">{project.config}</div>
                  </div>
                  <div>
                    <div className="spec-title">Area</div>
                    <div className="spec-val">{project.area}</div>
                  </div>
                  <div>
                    <div className="spec-title">Pricing</div>
                    <div className="spec-val">{project.price}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
