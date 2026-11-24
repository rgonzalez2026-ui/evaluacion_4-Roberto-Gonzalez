import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <section className="hero section" aria-labelledby="titulo-principal">
        <article className="hero__copy">
          <p className="eyebrow">Estudiante de ingeniería en informática</p>
          <h1 className="hero__title" id="titulo-principal">
            Creo experiencias digitales <span className="hero__accent">con propósito.</span>
          </h1>
          <p className="hero__text">
            Hola, soy Roberto González. Me interesa transformar ideas en proyectos web
            funcionales, claros y memorables.
          </p>
          <div className="hero__actions">
            <Link className="button button--primary" to="/proyectos">
              Explorar <span aria-hidden="true">↓</span>
            </Link>
            <Link className="button button--ghost" to="/contacto">Hablemos</Link>
          </div>
        </article>
        <aside className="profile" aria-label="Presentación de Roberto González">
          <span className="profile__glow" aria-hidden="true" />
          <figure className="profile__card">
            <img className="profile__image" src="/foto-presentacion.jpeg" alt="Roberto González" />
            <figcaption className="profile__label">
              <strong className="profile__name">Roberto González</strong>
              <span className="profile__role">Desarrollador en formación</span>
            </figcaption>
          </figure>
          <span className="profile__tag profile__tag--html" aria-hidden="true">HTML</span>
          <span className="profile__tag profile__tag--css" aria-hidden="true">CSS</span>
          <span className="profile__tag profile__tag--code" aria-hidden="true">&lt;/&gt;</span>
        </aside>
      </section>
      <section className="intro-strip" aria-label="Perfil profesional">
        <p className="intro-strip__item"><strong className="intro-strip__value">+7</strong><span className="intro-strip__label">proyectos realizados</span></p>
        <p className="intro-strip__item"><strong className="intro-strip__value">React</strong><span className="intro-strip__label">frontend moderno</span></p>
        <p className="intro-strip__item"><strong className="intro-strip__value">API</strong><span className="intro-strip__label">integración de datos</span></p>
      </section>
    </>
  )
}

export default HomePage
