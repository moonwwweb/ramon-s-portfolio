function ProjectCard({ title, image, decription, liveLink, codeLink }) {
  return (
    <div className="project-card">
      <h3 className="projectTitle">{title}</h3>
      <img src={image} alt="quiz app demo gif" id="projectGif" />
      <p className="projectDescription">{decription}</p>
      <div className="links">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}{" "}
        <br />
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
