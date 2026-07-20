import React from "react";
import myImg from "../../Assets/myimage.jpg";

import {
  SiPython, SiGo, SiCplusplus,
  SiFastapi, SiDjango, SiPostgresql, SiMysql, SiMongodb, SiRedis,
  SiNextdotjs, SiReact, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap,
  SiApachekafka, SiGooglecloud, SiAmazonaws, SiDocker, SiGit, SiGitlab, SiGithub, SiBitbucket, SiJira,
  SiLinux, SiWindows, SiApple, SiUbuntu
} from "react-icons/si";
import { FaDatabase, FaNetworkWired, FaServer, FaCogs, FaRobot } from "react-icons/fa";

/* ── skill groups ── */
const SKILL_GROUPS = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: <SiPython color="#3776AB" /> },
      { name: "GoLang", icon: <SiGo color="#00ADD8" /> },
      { name: "SQL", icon: <FaDatabase color="#f29111" /> },
      { name: "C++", icon: <SiCplusplus color="#00599C" /> }
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
      { name: "Django", icon: <SiDjango color="#092E20" /> },
      { name: "DRF", icon: <SiDjango color="#092E20" /> },
      { name: "REST APIs", icon: <FaServer color="#607D8B" /> },
      { name: "gRPC", icon: <FaNetworkWired color="#244c5a" /> }
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "DynamoDB", icon: <SiAmazonaws color="#4053D6" /> },
      { name: "Redis", icon: <SiRedis color="#DC382D" /> }
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
      { name: "HTML5 / CSS3", icon: <SiHtml5 color="#E34F26" /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> }
    ],
  },
  {
    label: "OS",
    items: [
      { name: "Windows", icon: <SiWindows color="#0078D6" /> },
      { name: "macOS", icon: <SiApple color="#ffffff" /> },
      { name: "Ubuntu", icon: <SiUbuntu color="#E95420" /> },
      { name: "Linux", icon: <SiLinux color="#FCC624" /> }
    ],
  },
  {
    label: "Architecture",
    items: [
      { name: "Monolithic", icon: <FaServer color="#607D8B" /> },
      { name: "Microservices", icon: <FaNetworkWired color="#ffffff" /> },
      { name: "Kafka", icon: <SiApachekafka color="#ffffff" /> },
      { name: "Event-Driven", icon: <FaCogs color="#607D8B" /> }
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: <SiAmazonaws color="#FF9900" /> },
      { name: "GCP", icon: <SiGooglecloud color="#4285F4" /> },
      { name: "Docker", icon: <SiDocker color="#2496ED" /> },
      { name: "Git", icon: <SiGit color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub color="#ffffff" /> },
      { name: "GitLab", icon: <SiGitlab color="#FCA121" /> },
      { name: "Bitbucket", icon: <SiBitbucket color="#0052CC" /> },
      { name: "Jira", icon: <SiJira color="#0052CC" /> }
    ],
  },
];

const CERTIFICATIONS = [
  { name: "Prompt Engineering",                     year: "2025" },
  { name: "Problem Solving (Intermediate) · HackerRank", year: "2024" },
  { name: "AWS Cloud Foundations · Great Learning", year: "2024" },
  { name: "Python Pandas · Great Learning",         year: "2024" },
  { name: "REST API · HackerRank",                  year: "2024" },
];

const ACHIEVEMENTS = [
  { emoji: "🏆", text: "Secured #1 rank in Problem Solving on GeeksforGeeks among all college students for 1.5 years consecutively." },
  { emoji: "⭐", text: "Achieved 5★ in Python & C++ and 4★ in C on HackerRank." },
  { emoji: "🔧", text: "Automated nearly 60% of manual workflows at Adani Green Energy through Python-based scripts." },
  { emoji: "🚀", text: "Improved API response times by ~30% through optimized query handling and caching strategies." },
];

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
              <p>
                Hey! I'm <strong>Ajit Kumar Singh</strong>, a Senior Software Developer based in
                Ahmedabad, India. I specialize in backend engineering — designing and building scalable
                backend architectures, REST APIs, and distributed systems that handle real-world complexity.
              </p>
              <p>
                Over the past 2.5+ years, I've worked on high-availability, data-driven applications
                at Adani Green Energy (renewable-energy power forecasting platform) and Urbano Infotech
                (intelligent chatbot solutions and scalable backend services). I have a strong background in
                event-driven architectures using Kafka, Redis, and Celery on cloud platforms like GCP and AWS.
              </p>
              <p>
                My toolkit: <strong>Python · Django · FastAPI · GoLang · Kafka · gRPC · PostgreSQL · Microservices</strong>.
                Outside of backend work, I'm comfortable reaching into the frontend with
                Next.js / React when the need arises.
              </p>
              <p>
                When I'm not shipping features, I'm solving algorithmic problems—like securing 1st rank on GeeksforGeeks
                in my college and earning 5★ in Python & C++ on HackerRank.
              </p>

              {/* quick facts */}
              <div className="quick-facts" style={{ marginTop: "2rem" }}>
                <div className="fact-item">
                  <span className="fact-label">Location</span>
                  <span className="fact-value">Ahmedabad, India</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Experience</span>
                  <span className="fact-value">2.5+ years</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Education</span>
                  <span className="fact-value">B.Tech · CSE</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Email</span>
                  <span className="fact-value">
                    <a href="mailto:ajitkrsingh841@gmail.com" style={{ color: "var(--accent)", textDecoration: "none" }}>
                      ajitkrsingh841@gmail.com
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
                  <span className="badge-skill" key={item.name} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    {item.icon}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EDUCATION + CERTS ── */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="edu-cert-grid">
            {/* Education */}
            <div>
              <span className="section-label">Education</span>
              <div className="info-card">
                <p className="info-card-title">Degree</p>
                <p className="edu-degree">B.Tech — Computer Science &amp; Engineering</p>
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
    </main>
  );
}

export default About;
