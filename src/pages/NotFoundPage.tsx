import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="section page-section not-found" aria-labelledby="not-found-title">
      <p className="not-found__code" aria-hidden="true">404</p>
      <p className="eyebrow">Ruta no encontrada</p>
      <h1 className="not-found__title" id="not-found-title">Esta página no existe.</h1>
      <p className="not-found__description">La dirección puede estar incompleta o haber cambiado.</p>
      <Link className="button button--primary" to="/">Volver al inicio</Link>
    </section>
  )
}

export default NotFoundPage
