import { skills, tools } from '../data/portfolioData'

function SkillsPage() {
  return (
    <section className="section page-section" aria-labelledby="titulo-habilidades">
      <header className="page-heading">
        <p className="eyebrow">Lo que utilizo</p>
        <h1 className="page-heading__title" id="titulo-habilidades">Habilidades <span>en desarrollo.</span></h1>
        <p className="page-heading__description">Una base técnica que sigo fortaleciendo con proyectos académicos y personales.</p>
      </header>
      <ul className="skills-grid">
        {skills.map((skill) => (
          <li className="skill-card" key={skill.name}>
            <div className="skill-card__heading">
              <h2 className="skill-card__title">{skill.name}</h2>
              <span className="skill-card__level">{skill.level}</span>
            </div>
            <div
              className="skill-card__track"
              role="progressbar"
              aria-label={skill.name}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={skill.percentage}
            >
              <span className="skill-card__progress" style={{ width: `${skill.percentage}%` }} aria-hidden="true" />
            </div>
            <small className="skill-card__percentage">{skill.percentage}%</small>
          </li>
        ))}
      </ul>
      <section className="tools-panel" aria-labelledby="tools-title">
        <p className="eyebrow" id="tools-title">Herramientas</p>
        <ul className="tools-panel__list">
          {tools.map((tool) => <li className="tools-panel__item" key={tool}>{tool}</li>)}
        </ul>
      </section>
    </section>
  )
}

export default SkillsPage
