function Skills() {
  return (
    <div className="skills">
      <section id="skills">
        <h2 id="skillH2">Skills</h2>
        <p>Here are some of my skills:</p>

        <div className="skill-list">
          <div className="skill-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="HTML icon"
              className="skill-icon"
            />
            <h3 className="skill-name">HTML</h3>
            <p className="skill-description">
              Markup language for creating web pages.
            </p>
          </div>

          <div className="skill-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="CSS icon"
              className="skill-icon"
            />
            <h3 className="skill-name">CSS</h3>
            <p className="skill-description">
              Style sheet language for designing web pages.
            </p>
          </div>

          <div className="skill-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript icon"
              className="skill-icon"
            />
            <h3 className="skill-name">JavaScript</h3>
            <p className="skill-description">
              Programming language for interactive web content.
            </p>
          </div>

          <div className="skill-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h3 className="skill-name">React</h3>
            <p className="skill-description">
              JavaScript library for building user interfaces.
            </p>
          </div>

          <div className="skill-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
              alt="VsCode icon"
              className="skill-icon"
            />
            <h3 className="skill-name">Virtual Studio Code</h3>
            <p className="skill-description">
              My favorite tool for writing and debugging code
            </p>
          </div>

          <div className="skill-card">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="GitHub icon"
              className="skill-icon"
            />
            <h3 className="skill-name">GitHub</h3>
            <p className="skill-description">
              Version control and code hosting for collaboration and deployment.
            </p>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
}

export default Skills;
