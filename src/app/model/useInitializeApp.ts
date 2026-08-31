import { useUserLocationStore } from '@/entities/user-location/store/userLocationStore'
import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import { Language } from '@/shared/types/language'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Запуск приложения
//        ↓
// Hydration Zustand
//        ↓
// LocationStore
//        ↓
// есть сохранённые coordinates?
//        │
//        ├── Да → используем их
//        │
//        └── Нет → получаем GPS
//        ↓
//       Weather
//        ↓
// есть интернет?
//    ┌───┴────┐
//   ДА       НЕТ
//    ↓         ↓
// API       cached weather
//    ↓         ↓
// fresh     показать старую
// weather    weather
//    ↓
// Home

// Работа стора!!! Гидрация - востановления последних данных из памяти устройства        ↓
// 1. Приложение запускается
// 2. Zustand создаёт стор с initialState
//    coordinates: null,
//    permission: null,
//    hasHydrated: false,  // 👈 сначала false
//    isLoading: false,
//    error: null
//          ↓
// 3. persist начинает гидратацию
//          ↓
// 4. onRehydrateStorage вызывается (регистрирует колбэк)
//          ↓
// 5. persist читает AsyncStorage
//          ↓
// 6. Найденные данные применяются к стору
//    coordinates: { lat: 55.75, lon: 37.61 },
//    permission: 'granted',
//    // hasHydrated: false (пока ещё не обновлён!)
//          ↓
// 7. Колбэк из onRehydrateStorage выполняется
//    useUserLocationStore.setState({ hasHydrated: true })
//          ↓
// 8. hasHydrated: true ✅
export const useInitializeApp = () => {
  const { i18n } = useTranslation()
  const language = i18n.language as Language
  const hasHydrated = useUserLocationStore((s) => s.hasHydrated)
  const loadLocation = useUserLocationStore(s => s.loadLocation)
  const loadWeather = useWeatherStore((s) => s.loadWeather)
  const refreshLocation = useUserLocationStore(s => s.refreshLocation)
  const coord = refreshLocation() ?? loadLocation()

  useEffect(() => {
    if (!hasHydrated) {
      return null
    }

  }, [language])
}
