import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          Designed &amp; Built by <span>Ajit Kumar Singh</span> · © {year}
        </p>
        <div className="footer-socials">
          <a href="https://github.com/AjitSinghCoder" target="_blank" rel="noreferrer" aria-label="GitHub">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/ajitsingh841/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <AiFillLinkedin />
          </a>
          <a href="https://leetcode.com/u/ajitkrsingh841/" target="_blank" rel="noreferrer" aria-label="LeetCode">
            <SiLeetcode />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
