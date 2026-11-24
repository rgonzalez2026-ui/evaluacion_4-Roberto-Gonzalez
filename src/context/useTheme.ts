import { useContext } from 'react'
import type { ThemeContextValue } from '../types'
import { ThemeContext } from './themeContext'

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme debe utilizarse dentro de ThemeProvider.')
  return context
}
