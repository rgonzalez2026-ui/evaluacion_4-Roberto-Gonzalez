import type { ProjectCategory } from '../types'

interface ProjectFilterProps {
  selected: ProjectCategory
  onChange: (category: ProjectCategory) => void
}

const filters: Array<{ value: ProjectCategory; label: string }> = [
  { value: 'todos', label: 'Todos' },
  { value: 'web', label: 'Web' },
  { value: 'react', label: 'React' },
  { value: 'python', label: 'Python' },
]

function ProjectFilter({ selected, onChange }: ProjectFilterProps) {
  return (
    <div className="project-filter" role="group" aria-label="Filtrar proyectos por tecnología">
      {filters.map((filter) => (
        <button
          className={`project-filter__button${selected === filter.value ? ' project-filter__button--active' : ''}`}
          key={filter.value}
          type="button"
          aria-pressed={selected === filter.value}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default ProjectFilter
