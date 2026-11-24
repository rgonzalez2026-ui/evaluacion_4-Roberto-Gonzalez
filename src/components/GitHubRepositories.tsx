import { useFetchApi } from '../hooks/useFetchApi'
import { githubRepositoriesUrl } from '../services/githubService'
import type { GitHubRepo } from '../types'
import StatusMessage from './StatusMessage'

function GitHubRepositories() {
  const { data: repositories, loading, error } = useFetchApi<GitHubRepo[]>(githubRepositoriesUrl)

  return (
    <section className="github-section" aria-labelledby="github-title">
      <header className="github-section__header">
        <p className="eyebrow">API oficial</p>
        <h2 className="github-section__title" id="github-title">Repositorios actualizados.</h2>
        <p className="github-section__description">
          Datos públicos de GitHub sincronizados en tiempo real para reflejar mi trabajo más reciente.
        </p>
      </header>
      {loading && <StatusMessage type="loading" message="Cargando repositorios desde GitHub..." />}
      {error && <StatusMessage type="error" message={`No fue posible cargar los repositorios: ${error}`} />}
      {!loading && !error && repositories && repositories.length === 0 && (
        <StatusMessage type="empty" message="No hay repositorios públicos para mostrar." />
      )}
      {!loading && !error && repositories && repositories.length > 0 && (
        <ul className="repo-grid">
          {repositories.map((repository) => (
            <li className="repo-card" key={repository.id}>
              <article>
                <div className="repo-card__meta">
                  <span>{repository.language ?? 'Sin lenguaje'}</span>
                  <span aria-label={`${repository.stargazers_count} estrellas`}>★ {repository.stargazers_count}</span>
                </div>
                <h3 className="repo-card__title">{repository.name}</h3>
                <p className="repo-card__description">
                  {repository.description ?? 'Sin descripción proporcionada en el repositorio.'}
                </p>
                <time className="repo-card__date" dateTime={repository.updated_at}>
                  Actualizado: {new Intl.DateTimeFormat('es-CL', { dateStyle: 'medium' }).format(new Date(repository.updated_at))}
                </time>
                <a
                  className="repo-card__link"
                  href={repository.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver el repositorio ${repository.name} en GitHub, en una pestaña nueva`}
                >
                  Ver código <span aria-hidden="true">↗</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default GitHubRepositories
