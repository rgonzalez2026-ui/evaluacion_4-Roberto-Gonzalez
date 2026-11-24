export interface NavigationItem {
  to: string
  label: string
  end?: boolean
}

export type ProjectCategory = 'todos' | 'web' | 'react' | 'python'

export interface ProjectItem {
  id: number
  title: string
  description: string
  url: string | null
  technologies: string[]
  visual: string
  label: string
  category: Exclude<ProjectCategory, 'todos'>
}

export interface SkillItem {
  name: string
  level: string
  percentage: number
}

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  updated_at: string
}

export interface FetchState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export interface ContactValues {
  name: string
  email: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

export interface StatusMessageProps {
  type: 'loading' | 'error' | 'empty'
  message: string
}

export type Theme = 'dark' | 'light'

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}
