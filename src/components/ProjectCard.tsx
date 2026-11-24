import type { ProjectItem } from '../types'

interface ProjectCardProps {
  project: ProjectItem
  position: number
}

function ProjectCard({ project, position }: ProjectCardProps) {
  return (
    <li className="project-card">
      <article className="project-card__article">
        <div className={`project-card__visual project-card__visual--${project.visual}`} aria-hidden="true">
          <span className="project-card__label">{project.label}</span>
          <small className="project-card__tech-line">{project.technologies.join(' · ')}</small>
        </div>
        <div className="project-card__content">
          <span className="project-card__number">{String(position).padStart(2, '0')}</span>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.description}</p>
          <ul className="tag-list" aria-label={`Tecnologías de ${project.title}`}>
            {project.technologies.map((technology) => (
              <li className="tag-list__item" key={technology}>{technology}</li>
            ))}
          </ul>
          {project.url ? (
            <a
              className="project-card__link"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${project.title} en una pestaña nueva`}
            >
              Ver proyecto <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="project-card__link project-card__link--unavailable">Repositorio no disponible</span>
          )}
        </div>
      </article>
    </li>
  )
}

export default ProjectCard
