import React from "react";
import { CERTIFICATIONS, ACHIEVEMENTS, ABOUT_DATA } from "../../config/data";

function Education() {
  return (
    <section className="section" style={{ paddingTop: "5rem", paddingBottom: "7rem" }}>
      <div className="wrap">
        <div className="edu-cert-grid">
          {/* Education */}
          <div>
            <span className="section-label">Education</span>
            <div className="info-card">
              <p className="info-card-title">Degree</p>
              <p className="edu-degree">{ABOUT_DATA.education}</p>
              <p className="edu-college">IES Institute Of Technology and Management</p>
              <div className="edu-meta">
                <span>CGPA — 8.6</span>
                <span>2019 – 2023</span>
              </div>
            </div>

            {/* Achievements */}
            <p className="section-label" style={{ marginTop: "2.5rem" }}>Achievements</p>
            <div className="achievement-cards">
              {ACHIEVEMENTS.map((a, i) => (
                <div className="achievement-card" key={i}>
                  <span className="achievement-icon" aria-hidden="true">{a.emoji}</span>
                  <p className="achievement-text">{a.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <span className="section-label">Certifications</span>
            <div className="info-card">
              <p className="info-card-title">Verified certificates</p>
              <ul className="cert-list">
                {CERTIFICATIONS.map((c, i) => (
                  <li className="cert-item" key={i}>
                    <span className="cert-name">{c.name}</span>
                    <span className="cert-year">{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
