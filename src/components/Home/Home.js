import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload, FiTerminal } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { HERO_DATA, SKILLS_PREVIEW } from "../../config/data";

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
            Open to senior backend / Tech lead roles
          </div>

          {/* Greeting */}
          <p className="hero-eyebrow">{HERO_DATA.greeting}</p>

          {/* Name */}
          <h1 className="hero-name">{HERO_DATA.name}</h1>

          {/* Title */}
          <h2 className="hero-title-line" dangerouslySetInnerHTML={{ __html: HERO_DATA.title }}>
          </h2>

          {/* Description */}
          <p className="hero-desc" dangerouslySetInnerHTML={{ __html: HERO_DATA.desc }}>
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
              <span className="stat-num">3+</span>
              <span className="stat-label">Years experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">10+</span>
              <span className="stat-label">Production apps</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">60%</span>
              <span className="stat-label">Workflow automation</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">1000+</span>
              <span className="stat-label">DSA Problems</span>
              <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                <a href="https://leetcode.com/u/ajitkrsingh841/" target="_blank" rel="noreferrer" style={{ color: "#FFA116", transition: "transform 0.2s" }} onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"} onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}>
                  <SiLeetcode size={20} />
                </a>
                <a href="https://www.geeksforgeeks.org/profile/ajit7367091304" target="_blank" rel="noreferrer" style={{ color: "#2F8D46", transition: "transform 0.2s" }} onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"} onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}>
                  <SiGeeksforgeeks size={20} />
                </a>
                <a href="https://www.hackerrank.com/profile/ajit7367091304" target="_blank" rel="noreferrer" style={{ color: "#00EA64", transition: "transform 0.2s" }} onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"} onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}>
                  <SiHackerrank size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}

export default Home;
