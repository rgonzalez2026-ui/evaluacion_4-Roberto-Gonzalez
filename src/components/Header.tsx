import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/useTheme'
import { navigationItems } from '../data/portfolioData'

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="site-header">
      <NavLink className="site-header__logo" to="/" aria-label="Ir al inicio" end>
        RG<span className="site-header__accent">.</span>
      </NavLink>
      <div className="site-header__controls">
        <button
          className="site-header__theme"
          type="button"
          onClick={toggleTheme}
          aria-label={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}
        >
          <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
        </button>
        <button
          className="site-header__menu-button"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={menuOpen}
          aria-controls="navegacion-principal"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="site-header__menu-line" aria-hidden="true" />
          <span className="site-header__menu-line" aria-hidden="true" />
          <span className="site-header__menu-line" aria-hidden="true" />
        </button>
      </div>
      <nav
        id="navegacion-principal"
        className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
        aria-label="Navegación principal"
      >
        {navigationItems.map(({ to, label, end }) => (
          <NavLink
            className={({ isActive }) => `site-nav__link${isActive ? ' site-nav__link--active' : ''}`}
            key={to}
            to={to}
            end={end}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
