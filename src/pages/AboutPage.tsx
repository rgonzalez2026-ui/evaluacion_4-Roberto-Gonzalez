function AboutPage() {
  return (
    <section className="section page-section about-page" aria-labelledby="titulo-sobre-mi">
      <div className="about-page__mark" aria-hidden="true">RG</div>
      <header className="page-heading">
        <p className="eyebrow">Conóceme</p>
        <h1 className="page-heading__title" id="titulo-sobre-mi">Más que código, <span>curiosidad.</span></h1>
      </header>
      <div className="about-page__columns">
        <p className="about-page__lead">
          Soy estudiante de Ingeniería en Informática de la Universidad Católica de Temuco.
          Desde pequeño me interesa la tecnología y actualmente desarrollo mis habilidades en
          programación, diseño web y creación de proyectos digitales.
        </p>
        <div className="about-page__detail">
          <h2 className="about-page__subtitle">Qué me interesa</h2>
          <ul className="interest-list">
            <li className="interest-list__item">Crear interfaces claras, útiles y accesibles.</li>
            <li className="interest-list__item">Conectar aplicaciones con APIs y datos reales.</li>
            <li className="interest-list__item">Resolver problemas mediante programación.</li>
            <li className="interest-list__item">Aprender React, backend y nuevas tecnologías.</li>
          </ul>
          <h2 className="about-page__subtitle">Hacia dónde voy</h2>
          <p className="about-page__text">
            Quiero convertirme en un desarrollador capaz de transformar necesidades reales en
            productos digitales completos, mantenibles y bien diseñados.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
