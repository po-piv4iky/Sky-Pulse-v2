import { useUserLocationStore } from '@/entities/user-location/store/userLocationStore'
import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import { isInternetAvailable } from '@/shared/network/isInternetAvailable'
import { Language } from '@/shared/types/language'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useInitializationStore } from './initializationStore'

export const useInitializeApp = () => {
  const { i18n } = useTranslation()
  const language = i18n.language as Language //получаем текущий язык интерфейса

  const startInitialization = useInitializationStore((s) => s.startInitialization)
  const finishInitialization = useInitializationStore((s) => s.finishInitialization)
  const failInitialization = useInitializationStore((s) => s.failInitialization)

  const locationHasHydrated = useUserLocationStore((s) => s.hasHydrated) //прошла гидрация локации или нет
  const weatherHasHydrated = useWeatherStore((s) => s.hasHydrated) //прошла гидрация погоды или нет

  const loadLocation = useUserLocationStore((s) => s.loadLocation) // функция запроса координат, или по jps, или по стору, или null
  const loadWeather = useWeatherStore((s) => s.loadWeather) //функция запроса погоды по координатам

  useEffect(() => {
    if (!locationHasHydrated || !weatherHasHydrated) {
      return
    }
    const initializeApp = async () => {
      startInitialization()
      try {
        const coordinates = await loadLocation()
        const hasInternet = await isInternetAvailable()
        if (coordinates && hasInternet) {
          await loadWeather(coordinates, language)
          finishInitialization()
          return
        }
        if (!hasInternet) {
          const cachedWeather = useWeatherStore.getState().weather
          if (cachedWeather) {
            finishInitialization()
          } else {
            failInitialization('No internet and no cached weather')
          }
          return
        }

        if (!coordinates) {
          const cachedWeather = useWeatherStore.getState().weather

          if (cachedWeather) {
            finishInitialization()
          } else {
            failInitialization('No location available')
          }

          return
        }
      } catch (error) {
        console.error('Initialize app error:', error)
        const cachedWeather = useWeatherStore.getState().weather

        if (cachedWeather) {
          finishInitialization()
        } else {
          failInitialization('Failed to initialize app')
        }
      }
    }
    initializeApp()
  }, [
    language,
    locationHasHydrated,
    weatherHasHydrated,
    loadLocation,
    loadWeather,
    startInitialization,
    finishInitialization,
    failInitialization,
  ])
}
