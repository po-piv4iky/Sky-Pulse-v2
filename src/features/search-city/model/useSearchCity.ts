import { getCities } from '@/entities/city/api/cityApi'
import { getCurrentWeather } from '@/entities/weather/api/weatherApi'
import { Language } from '@/shared/types/language'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SearchResult } from '../searchResult.types'

export function useSearchCity(query: string) {
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { i18n } = useTranslation()
  const language = i18n.language as Language

  const normalizedQuery = query.trim()

  useEffect(() => {
    if (!normalizedQuery) {
      setResults([])
      return
    }

    const timeoutId = setTimeout(async () => {
      try {
        setIsLoading(true)
        setError(null)

        const cities = await getCities(normalizedQuery)

        const results = await Promise.all(
          cities.map(async (city) => {
            const weather = await getCurrentWeather(city.lat, city.lon, language)

            return {
              name: weather.name,
              lat: city.lat,
              lon: city.lon,
              country: city.country,
              state: city.state,
              temperature: weather.main.temp,
              icon: weather.weather[0].icon,
            }
          }),
        )

        setResults(results)
      } catch {
        setError('Не удалось выполнить поиск')
      } finally {
        setIsLoading(false)
      }
    }, 800)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [normalizedQuery, language])

  return {
    results,
    isLoading,
    error,
  }
}
