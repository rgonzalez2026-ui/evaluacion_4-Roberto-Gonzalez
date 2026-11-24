import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <section className="section page-section contact-page" aria-labelledby="titulo-contacto">
      <div className="contact-page__intro">
        <p className="eyebrow">¿Tienes una idea?</p>
        <h1 className="contact-page__title" id="titulo-contacto">Hagámosla <span>realidad.</span></h1>
        <p className="contact-page__description">
          Si quieres conversar sobre un proyecto, una colaboración o una oportunidad de
          aprendizaje, escríbeme.
        </p>
        <address className="contact-page__details">
          <a className="contact-page__link" href="mailto:r.goonzlez@gmail.com">r.goonzlez@gmail.com</a>
          <a className="contact-page__link" href="tel:+56972725235">+56 9 72725235</a>
        </address>
      </div>
      <ContactForm />
    </section>
  )
}

export default ContactPage
