import { useEffect, useState } from 'react'
import type { FetchState } from '../types'

export function useFetchApi<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async (): Promise<void> => {
      setState({ data: null, loading: true, error: null })

      try {
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`GitHub respondió con HTTP ${response.status}.`)
        }

        const data: T = await response.json()
        if (!controller.signal.aborted) {
          setState({ data, loading: false, error: null })
        }
      } catch (error: unknown) {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error.message : 'No fue posible consultar la API.',
        })
      }
    }

    void fetchData()
    return () => controller.abort()
  }, [url])

  return state
}
