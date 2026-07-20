import React, { useEffect, useRef, useState } from "react";

const EXPERIENCES = [
  {
    id: "adani",
    company: "Adani Green Energy Ltd",
    role: "Sr Software Developer",
    period: "Aug 2025 – Present",
    location: "Ahmedabad, India",
    type: "Off-roll",
    bullets: [
      "Designed and developed scalable backend services with Django for a renewable energy power forecasting platform used to manage GW-scale solar assets.",
      "Built interactive dashboards for comparing forecast vs. actual generation across multiple ML models, enabling faster operational decisions.",
      "Integrated satellite imagery and real-time / historical weather data (WMS APIs) to significantly improve forecasting accuracy.",
      "Developed a Deviation Settlement Mechanism (DSM) penalty calculation dashboard to reduce regulatory compliance time.",
      "Automated ~60% of manual workflows via Python automation scripts for data processing and scheduled report generation.",
      "Maintained high-availability services using Redis for caching, Celery + RabbitMQ for async processing, and GitLab CI/CD for continuous delivery.",
    ],
    tech: ["Python", "Django", "Redis", "Celery", "PostgreSQL", "GitLab CI/CD", "GCP"],
  },
  {
    id: "urbano",
    company: "Urbano Infotech",
    role: "Software Development Engineer II",
    period: "Sep 2023 – Aug 2025",
    location: "Ahmedabad, India",
    type: "Full-time",
    bullets: [
      "Developed and maintained scalable backend services using Django REST Framework (DRF), consistently maintaining high API availability and performance.",
      "Built an intelligent B2B chatbot with the RASA framework, automating customer interactions and reducing manual support volume.",
      "Designed and implemented RESTful APIs with FastAPI, achieving ~30% improvement in response times through query optimisation and caching.",
      "Managed multi-database environments spanning PostgreSQL, DynamoDB, and MongoDB, ensuring data integrity and performant queries.",
      "Contributed to core microservices architecture for the Book You Pandit platform, including API Gateway design with FastAPI.",
    ],
    tech: ["FastAPI", "Django", "RASA", "PostgreSQL", "DynamoDB", "MongoDB", "Next.js"],
  },
];

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
