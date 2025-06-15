function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
      <h3 className="skill-name">{skill.name}</h3>
      <p className="skill-description">{skill.description}</p>
    </div>
  );
}

export default SkillCard;
