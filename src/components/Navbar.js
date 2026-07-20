import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const NAV_LINKS = [
  { label: "Home",       to: "#home" },
  { label: "About",      to: "#about" },
  { label: "Experience", to: "#experience" },
  { label: "Projects",   to: "#project" },
];

function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { pathname }              = useLocation();

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
        <Link to="/" className="nav-logo">
          ajit<span>.</span>dev
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
          <li>
            <Link to="/resume" className="nav-cta" style={{color: 'var(--text-1)', borderColor: 'var(--text-1)'}}>
              Resume
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/AjitSinghCoder"
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
            >
              GitHub
            </a>
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
