import { WeatherCityInfo } from '@/entities/city'
import { getCities } from '@/entities/city/api/cityApi'
import { getCurrentWeather } from '@/entities/weather/api/weatherApi'
import { Language } from '@/shared/types/language'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export function useSearchCity(query: string) {
  const [results, setResults] = useState<WeatherCityInfo[]>([])
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
            const weather = await getCurrentWeather(
              { lat: city.lat, lon: city.lon },
              language,
            )
            return {
              id: `${city.lat}-${city.lon}`,
              name: weather.name,
              coord: { lat: city.lat, lon: city.lon },
              country: city.country,
              state: city.state,
              temperature: weather.main.temp,
              icon: weather.weather[0].icon,
              description: weather.weather[0].description,
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
