import React from "react";
import myImg from "../../Assets/myimage.jpg";

import { ABOUT_DATA, SKILL_GROUPS } from "../../config/data";

function About() {
  return (
    <main>
      <div className="bg-grid" aria-hidden="true" />

      {/* ── ABOUT ── */}
      <section id="about" className="section" style={{ paddingTop: "7rem" }}>
        <div className="wrap">
          <span className="section-label">About</span>
          <h1 className="section-title">The person behind the code.</h1>

          <div className="about-grid">
            {/* Left — bio text */}
            <div className="about-text">
              <p dangerouslySetInnerHTML={{ __html: ABOUT_DATA.bio1 }}></p>
              <p dangerouslySetInnerHTML={{ __html: ABOUT_DATA.bio2 }}></p>
              <p dangerouslySetInnerHTML={{ __html: ABOUT_DATA.bio3 }}></p>
              <p dangerouslySetInnerHTML={{ __html: ABOUT_DATA.bio4 }}></p>

              {/* quick facts */}
              <div className="quick-facts" style={{ marginTop: "2rem" }}>
                <div className="fact-item">
                  <span className="fact-label">Location</span>
                  <span className="fact-value">{ABOUT_DATA.location}</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Experience</span>
                  <span className="fact-value">{ABOUT_DATA.experience}</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Education</span>
                  <span className="fact-value">{ABOUT_DATA.education}</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Email</span>
                  <span className="fact-value">
                    <a href={`mailto:${ABOUT_DATA.email}`} style={{ color: "var(--accent)", textDecoration: "none" }}>
                      {ABOUT_DATA.email}
                    </a>
                  </span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Phone</span>
                  <span className="fact-value">
                    <a href={`tel:${ABOUT_DATA.phone.replace(/\s+/g, '')}`} style={{ color: "var(--accent)", textDecoration: "none" }}>
                      {ABOUT_DATA.phone}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Right — photo */}
            <div className="about-photo-wrap">
              <div className="about-photo">
                <img src={myImg} alt="Ajit Kumar Singh — Senior Software Developer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical toolkit.</h2>
          <p className="section-desc">
            Technologies and tools I work with regularly in production environments.
          </p>

          {SKILL_GROUPS.map(group => (
            <div className="skills-group" key={group.label}>
              <p className="skills-group-label">{group.label}</p>
              <div className="skills-chips">
                {group.items.map(item => (
                  <span className="badge-skill" key={item.name} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    {item.icon}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
