const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__text">© {currentYear} Roberto González</p>
      <p className="site-footer__text">Hecho con intención y código.</p>
    </footer>
  )
}

export default Footer
