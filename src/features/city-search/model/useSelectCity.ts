import { SearchCityResult } from '@/entities/city/types/searchCityResult.types'
import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import { Language } from '@/shared/types/language'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function useSelectCity() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { i18n } = useTranslation()
  const router = useRouter()
  const language = i18n.language as Language
  const loadWeather = useWeatherStore((s) => s.loadWeather)
  const selectCity = async (city: SearchCityResult) => {
    try {
      setIsLoading(true)
      setError(null)
      const result = await loadWeather(
        {
          latitude: city.lat,
          longitude: city.lon,
        },
        language,
      )
      if (result === 'error') {
        setError('Failed to load weather')
        return
      }

      router.replace('/')
    } finally {
      setIsLoading(false)
    }
  }
  return {
    selectCity,
    isLoading,
    error,
  }
}
