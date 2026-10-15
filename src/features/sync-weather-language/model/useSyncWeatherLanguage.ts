import { useWeatherStore } from '@/entities/weather'
import { Language } from '@/shared/types/language'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export function useSyncWeatherLanguage() {
  const weather = useWeatherStore((s) => s.weather)
  const loadWeather = useWeatherStore((s) => s.loadWeather)
  const { i18n } = useTranslation()
  const language = i18n.language as Language
  const previousLanguage = useRef(language)
  useEffect(() => {
    // Язык не менялся — повторный запрос не нужен.
    if (previousLanguage.current === language) {
      return
    }
    // Ждём, пока появится погода с координатами.
    if (!weather) {
      return
    }
    previousLanguage.current = language
    void loadWeather({ lat: weather.lat, lon: weather.lon }, language)
  }, [language, weather, loadWeather])
}
