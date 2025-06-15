import React, { useState } from "react";
import myPic from "../assets/myPic.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-container">
      <header className="header">
        <h1 id="headerH1">Ramon</h1>
        <nav>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
          <ul id="headerUl" className={menuOpen ? "open" : ""}>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              <li>About Me</li>
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              <li>Projects</li>
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              <li>Skills</li>
            </a>
            <a href="#footer" onClick={() => setMenuOpen(false)}>
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </header>

      <div id="introduction-container">
        <h1 id="helloMsg">HELLO WORLD!</h1>
        <div id="introduction">
          <img src={myPic} alt="" id="myPic" />
          <p id="shortIntro">
            "I'm Ramon, a front-end developer focused on building clean,
            responsive, and modern web interfaces. I value simplicity,
            performance, and great user experience, fueled by a good cup of
            coffee."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
