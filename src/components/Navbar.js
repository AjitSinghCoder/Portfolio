import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { ABOUT_DATA } from "../config/data";

const NAV_LINKS = [
  { label: "Home", to: "#home" },
  { label: "About", to: "#about" },
  { label: "Experience", to: "#experience" },
  { label: "Projects", to: "#project" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Determine active section
      const sections = ["home", "about", "experience", "project"];
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial check
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname, activeSection]);

  // If we are on the /resume page, normal links won't work, so we redirect to /#section
  const isResumePage = pathname === "/resume";

  return (
    <nav className={`nav-root ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo" style={{ fontSize: "0.95rem", textDecoration: "none" }}>
          ajitkrsingh841@gmail.com
        </Link>

        {/* Desktop links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              {isResumePage ? (
                <Link to={`/${to}`} className="">{label}</Link>
              ) : (
                <a
                  href={to}
                  className={activeSection === to.replace("#", "") ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(to.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                    setMenuOpen(false);
                  }}
                >
                  {label}
                </a>
              )}
            </li>
          ))}

          {/* Social Icons */}
          <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '0.5rem', marginRight: '0.5rem' }}>
            <a href="https://github.com/AjitSinghCoder" target="_blank" rel="noreferrer" style={{ color: "var(--text-1)", transition: "color 0.2s", display: 'flex', alignItems: 'center' }} onMouseOver={e => e.currentTarget.style.color = "var(--accent)"} onMouseOut={e => e.currentTarget.style.color = "var(--text-1)"}>
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ajitsingh841/" target="_blank" rel="noreferrer" style={{ color: "var(--text-1)", transition: "color 0.2s", display: 'flex', alignItems: 'center' }} onMouseOver={e => e.currentTarget.style.color = "var(--accent)"} onMouseOut={e => e.currentTarget.style.color = "var(--text-1)"}>
              <FiLinkedin size={20} />
            </a>
            <a href={`tel:${ABOUT_DATA.phone.replace(/\s+/g, '')}`} style={{ color: "var(--text-1)", transition: "color 0.2s", display: 'flex', alignItems: 'center' }} onMouseOver={e => e.currentTarget.style.color = "var(--accent)"} onMouseOut={e => e.currentTarget.style.color = "var(--text-1)"}>
              <FiPhone size={20} />
            </a>
          </li>

          <li>
            <Link to="/resume" className="nav-cta" style={{ color: 'var(--text-1)', borderColor: 'var(--text-1)' }}>
              Resume
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
