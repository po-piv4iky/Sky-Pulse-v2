import { useUserLocationStore } from '@/entities/user-location/store/userLocationStore'
import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import { isInternetAvailable } from '@/shared/network/isInternetAvailable'
import { Language } from '@/shared/types/language'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// 1. Запуск приложения
// 2. Проверяем интернет

// 3. Если интернет есть:
//    → проверяем GPS
//    → если GPS включён — получаем текущие координаты
//    → получаем по ним свежую погоду
//    → сохраняем координаты и погоду в кеш
//    → показываем свежую погоду

// 4. Если GPS выключен:
//    → проверяем сохранённые координаты
//    → если они есть — запрашиваем по ним свежую погоду
//    → сохраняем погоду в кеш
//    → показываем свежую погоду

// 5. Если интернета нет:
//    → проверяем сохранённую погоду
//    → если она есть — показываем её
//    → если её нет — показываем Not Found

// 6. Если интернет есть, но запрос погоды не удался:
//    → проверяем кеш
//    → если кеш есть — показываем старую погоду
//    → если кеш нет — показываем Not Found

export const useInitializeApp = () => {
  const { i18n } = useTranslation()
  const language = i18n.language as Language //получаем текущий язык интерфейса

  const locationHasHydrated = useUserLocationStore((s) => s.hasHydrated)

  const weatherHasHydrated = useWeatherStore((s) => s.hasHydrated) //прошла гидрация или нет

  const loadLocation = useUserLocationStore((s) => s.loadLocation) // функция запроса координат, или по jps, или по стору, или null
  const loadWeather = useWeatherStore((s) => s.loadWeather) //функция запроса погоды по координатам

  useEffect(() => {
    if (!locationHasHydrated || !weatherHasHydrated) {
      return
    }
    const initializeApp = async () => {
      try {
        const coordinates = await loadLocation()
        if (!coordinates) {
          return
        }
        const hasInternet = await isInternetAvailable()

        if (hasInternet) {
          await loadWeather(coordinates, language)
        }
      } catch (error) {
        console.error('Initialize app error:', error)
      }
    }
    initializeApp()
  }, [language, locationHasHydrated, weatherHasHydrated, loadLocation, loadWeather])
}
