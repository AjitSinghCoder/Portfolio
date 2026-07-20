import React from "react";
import SpotlightCard from "../SpotlightCard";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "../../config/data";

function Projects() {
  return (
    <main>
      <div className="bg-grid" aria-hidden="true" />

      <section id="project" className="section" style={{ paddingTop: "7rem" }}>
        <div className="wrap">
          <span className="section-label">Projects</span>
          <h1 className="section-title">Things I've built.</h1>
          <p className="section-desc">
            Production applications and backend systems — with a focus on architecture,
            performance, and real-world impact.
          </p>

          {/* Featured projects — full-width cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "1.5rem" }}>
            {PROJECTS.filter(p => p.featured).map((project, i) => (
              <SpotlightCard key={i} style={{ display: "block" }}>
                <div style={{ padding: '2.5rem' }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
                    <div className="project-icon">{project.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <h2 className="project-name">{project.title}</h2>
                          <p style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "var(--accent)", marginBottom: "0.75rem" }}>
                            {project.subtitle}
                          </p>
                        </div>
                        <div className="project-links">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" aria-label="Source code">
                              <FiGithub />
                            </a>
                          )}
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo">
                              <FiExternalLink />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="project-desc" style={{ marginBottom: "1rem" }}>{project.description}</p>

                      <ul style={{
                        listStyle: "none", padding: 0, margin: "0 0 1.25rem 0",
                        display: "flex", flexDirection: "column", gap: "0.5rem"
                      }}>
                        {project.bullets.map((b, bi) => (
                          <li key={bi} style={{
                            display: "flex", gap: "0.65rem",
                            fontSize: "0.88rem", color: "var(--text-2)", lineHeight: 1.55
                          }}>
                            <span style={{ color: "var(--accent)", marginTop: "0.1rem", flexShrink: 0 }}>▸</span>
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="project-tech">
                        {project.tech.map(t => (
                          <span className="badge-tech" key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* Grid for other projects */}
          <div className="projects-grid">
            {PROJECTS.filter(p => !p.featured).map((project, i) => (
              <SpotlightCard key={i}>
                <div style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="project-header">
                    <div className="project-icon">{project.icon}</div>
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" aria-label="Source code">
                          <FiGithub />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo">
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  </div>

                  <h2 className="project-name">{project.title}</h2>
                  <p style={{ fontFamily: "var(--mono)", fontSize: "0.78rem", color: "var(--accent)", marginBottom: "0.75rem" }}>
                    {project.subtitle}
                  </p>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map(t => (
                      <span className="badge-tech" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
