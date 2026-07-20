import React, { useEffect, useRef, useState } from "react";
import { EXPERIENCES } from "../../config/data";

function Experience() {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the container has been scrolled past the middle of the screen
      const scrolled = windowHeight / 2 - rect.top;
      const totalHeight = rect.height;
      
      let progress = Math.max(0, Math.min(1, scrolled / totalHeight));
      setLineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="section" style={{ paddingTop: "7rem" }}>
      <div className="wrap">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Where I've worked.</h2>
        <p className="section-desc" style={{ marginBottom: "5rem" }}>
          Professional roles where I've shipped backend systems that run in production at scale.
        </p>

        <div className="crazy-timeline-wrapper" ref={containerRef}>
          {/* Background Track */}
          <div className="crazy-timeline-track" />
          
          {/* Glowing Fill Line */}
          <div 
            className="crazy-timeline-fill" 
            style={{ height: `${lineHeight}%` }} 
          />

          {EXPERIENCES.map((exp, index) => {
            // Determine if this specific item has been reached by the fill line
            // Roughly estimating based on index
            const isActive = lineHeight > (index * (100 / EXPERIENCES.length));

            return (
              <div className={`crazy-timeline-row ${isActive ? 'active' : ''}`} key={exp.id}>
                
                {/* Left side: Date & Company (Sticky-like) */}
                <div className="crazy-timeline-meta">
                  <div className="meta-sticky">
                    <p className="crazy-period">{exp.period}</p>
                    <p className="crazy-company">{exp.company}</p>
                    <p className="crazy-location">{exp.location}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className={`crazy-timeline-node ${isActive ? 'active' : ''}`}>
                  <div className="node-inner" />
                </div>

                {/* Right side: Content */}
                <div className="crazy-timeline-content">
                  <h3 className="crazy-role">{exp.role}</h3>
                  <span className="crazy-type">{exp.type}</span>
                  
                  <div className="crazy-bullets-wrapper">
                    {exp.bullets.map((b, i) => (
                      <p key={i} className="crazy-bullet">
                        <span className="bullet-icon">▹</span> {b}
                      </p>
                    ))}
                  </div>

                  <div className="crazy-tech-row">
                    {exp.tech.map(t => (
                      <span className="crazy-tech-badge" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
