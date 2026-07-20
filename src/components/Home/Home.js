import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload, FiTerminal } from "react-icons/fi";

const SKILLS_PREVIEW = [
  "Python", "FastAPI", "Django", "GoLang",
  "Microservices", "Kafka", "Redis", "GCP",
];

function Home() {
  return (
    <main>
      {/* Ambient background */}
      <div className="bg-grid" aria-hidden="true" />

      {/* ── HERO ── */}
      <section id="home" className="hero" aria-label="Introduction">
        <div className="hero-bg-glow" aria-hidden="true" />
        <div className="hero-inner">

          {/* Status badge */}
          <div className="hero-status">
            <span className="glow-dot" aria-hidden="true" />
            Open to senior backend roles
          </div>

          {/* Greeting */}
          <p className="hero-eyebrow">Hi, my name is</p>

          {/* Name */}
          <h1 className="hero-name">Ajit Kumar Singh.</h1>

          {/* Title */}
          <h2 className="hero-title-line">
            I build&nbsp;<strong>scalable backend</strong>&nbsp;systems.
          </h2>

          {/* Description */}
          <p className="hero-desc">
            Senior Software Developer with <strong>2.5+ years</strong> of experience designing and building scalable backend architectures and REST APIs using Django and FastAPI. Strong background in distributed systems, microservices, event-driven architectures, and cloud platforms (GCP, AWS), with hands-on experience in Kafka, Redis, Celery, and gRPC. Passionate about building high-availability, data-driven applications.
          </p>

          {/* Skill pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
            {SKILLS_PREVIEW.map(s => (
              <span key={s} className="badge-tech">{s}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-actions">
            <a href="#project" className="btn-primary-custom" onClick={(e) => { e.preventDefault(); document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }); }}>
              View Projects <FiArrowRight />
            </a>
            <a href="#experience" className="btn-outline-custom" onClick={(e) => { e.preventDefault(); document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); }}>
              My Experience
            </a>
            <a
              href="/resume1.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-custom"
            >
              <FiDownload /> Resume
            </a>
            <Link to="/terminal" className="btn-outline-custom" style={{ borderColor: '#50fa7b', color: '#50fa7b' }}>
              <FiTerminal /> Do something Crazy
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">2.5+</span>
              <span className="stat-label">Years experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">4+</span>
              <span className="stat-label">Production apps</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">60%</span>
              <span className="stat-label">Workflow automation</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">30%</span>
              <span className="stat-label">API perf gain</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
