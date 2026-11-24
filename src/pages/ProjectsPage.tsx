import { useState } from 'react'
import GitHubRepositories from '../components/GitHubRepositories'
import ProjectCard from '../components/ProjectCard'
import ProjectFilter from '../components/ProjectFilter'
import { projects } from '../data/portfolioData'
import type { ProjectCategory } from '../types'

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('todos')
  const visibleProjects = selectedCategory === 'todos'
    ? projects
    : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="section page-section" aria-labelledby="titulo-proyectos">
      <header className="section-heading page-heading">
        <div>
          <p className="eyebrow">Mi trabajo</p>
          <h1 className="page-heading__title" id="titulo-proyectos">Proyectos <span>destacados.</span></h1>
        </div>
        <p className="section-heading__description">Una selección de ideas que representan mi aprendizaje en frontend, APIs y Python.</p>
      </header>
      <ProjectFilter selected={selectedCategory} onChange={setSelectedCategory} />
      <ol className="projects-grid" aria-live="polite">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} position={project.id} />
        ))}
      </ol>
      <GitHubRepositories />
    </section>
  )
}

export default ProjectsPage
