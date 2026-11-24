import { useState, type ChangeEvent, type FormEvent } from 'react'
import type { ContactErrors, ContactValues } from '../types'

const initialValues: ContactValues = { name: '', email: '', message: '' }

function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [sent, setSent] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const field = event.target.name as keyof ContactValues
    setValues((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSent(false)
  }

  const validate = (): ContactErrors => {
    const nextErrors: ContactErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Escribe tu nombre.'
    if (!values.email.trim()) nextErrors.email = 'Escribe tu correo.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Escribe un correo válido.'
    if (!values.message.trim()) nextErrors.message = 'Escribe un mensaje.'
    return nextErrors
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSent(false)
      return
    }
    setErrors({})
    setValues(initialValues)
    setSent(true)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="form-field">
          <label className="form-field__label" htmlFor="name">Nombre</label>
          <input
            className="form-field__control"
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'error-name' : undefined}
          />
          {errors.name && <p className="form-field__error" id="error-name" role="alert">{errors.name}</p>}
        </div>
        <div className="form-field">
          <label className="form-field__label" htmlFor="email">Correo electrónico</label>
          <input
            className="form-field__control"
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'error-email' : undefined}
          />
          {errors.email && <p className="form-field__error" id="error-email" role="alert">{errors.email}</p>}
        </div>
      </div>
      <div className="form-field">
        <label className="form-field__label" htmlFor="message">Mensaje</label>
        <textarea
          className="form-field__control"
          id="message"
          name="message"
          placeholder="Cuéntame sobre tu proyecto..."
          rows={7}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'error-message' : undefined}
        />
        {errors.message && <p className="form-field__error" id="error-message" role="alert">{errors.message}</p>}
      </div>
      <button className="button button--primary contact-form__submit" type="submit">
        Enviar mensaje <span aria-hidden="true">↗</span>
      </button>
      {sent && (
        <p className="contact-form__success" role="status" aria-live="polite">
          ¡Gracias por escribir! Tu mensaje fue validado correctamente.
        </p>
      )}
    </form>
  )
}

export default ContactForm
