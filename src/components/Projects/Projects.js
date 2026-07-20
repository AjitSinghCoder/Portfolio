import React from "react";
import SpotlightCard from "../SpotlightCard";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SiPython, SiFastapi, SiDjango, SiApachekafka,
} from "react-icons/si";

const PROJECTS = [
  {
    featured: true,
    title: "Book You Pandit",
    subtitle: "Religious services booking platform",
    description:
      "A production multi-platform app connecting users with pandits for religious ceremonies. Architected the entire backend layer — API Gateway, service separation, background jobs, and mobile APIs that power an app with real users on Google Play.",
    bullets: [
      "Designed an API Gateway with FastAPI to centralise routing, auth, rate-limiting, and request validation.",
      "Improved average API response time by ~30% through query optimisation and Redis-based caching.",
      "Implemented Celery + Redis background task processing for notification delivery and PDF report generation.",
      "Delivered full-stack features using Next.js / TypeScript for the admin dashboard.",
    ],
    tech: ["Python", "FastAPI", "Django", "Celery", "Redis", "Next.js", "TypeScript", "PostgreSQL"],
    demo: "https://play.google.com/store/apps/details?id=com.bookyourpandit.client",
    github: null,
    icon: <SiFastapi size={20} />,
  },
  {
    featured: true,
    title: "Crypto Trading Platform",
    subtitle: "Microservices architecture · Kafka · gRPC",
    description:
      "Designed and built a microservices-based cryptocurrency trading platform with clean service boundaries, event-driven data flows, and a real-time settlement layer. Built for high throughput and low latency.",
    bullets: [
      "Designed core microservices: Auth, User, Wallet, Market Data, and Order services — each independently deployable.",
      "Used gRPC for type-safe, high-performance internal service communication.",
      "Built Kafka-powered event bus for trade events, wallet updates, and audit logging.",
      "Applied Redis for session storage and market data caching to achieve sub-10ms read times.",
    ],
    tech: ["FastAPI", "GoLang", "gRPC", "Kafka", "Redis", "PostgreSQL", "JWT", "Docker"],
    demo: null,
    github: null,
    icon: <SiApachekafka size={20} />,
  },
  {
    title: "Morsmiles",
    subtitle: "Doctor discovery & healthcare platform",
    description:
      "An extensive directory of doctors spanning diverse medical fields — from cardiologists to dermatologists. Users can search, filter, and book specialist consultations.",
    tech: ["Python", "Django", "FastAPI", "Next.js", "React", "TypeScript"],
    demo: "https://blogs.soumya-jit.tech/",
    github: null,
    icon: <SiDjango size={20} />,
  },
  {
    title: "Dylog B2B Chatbot",
    subtitle: "AI chatbot for hardware & defense sectors",
    description:
      "An intelligent chatbot designed for the B2B sector to improve communication between buyers and suppliers. Handles product queries, lead qualification, and order status across hardware and defense industries.",
    tech: ["Python", "RASA", "NLU", "OpenAI", "FastAPI"],
    demo: "https://www.dylog.ai/",
    github: null,
    icon: <SiPython size={20} />,
  },
];

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
