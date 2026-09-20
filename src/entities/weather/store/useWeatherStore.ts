import { Coordinates } from '@/entities/user-location/types/coordinates.types'
import { Language } from '@/shared/types/language'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { storage } from '@/shared/storage/storage'
import { getCurrentWeather, getWeatherForecast } from '../api/weatherApi'
import { normalizeWeather } from '../model/normalizeWeather'
import { normalizeWeatherForecast } from '../model/normalizeWeatherForecast'
import { Weather } from '../types/weather.types'
import { WeatherForecast } from '../types/weatherForecast.types'

export type WeatherStatus =
  | 'idle' // Загрузка ещё не запускалась
  | 'loading' // Выполняется запрос к API
  | 'success' // Погода успешно получена
  | 'error' // Ошибка

interface WeatherStore {
  weather: Weather | null
  weatherForecast: WeatherForecast[] | null
  hasHydrated: boolean // прошло ли восановление данных из storage
  weatherStatus: WeatherStatus
  error: string | null

  loadWeather: (coord: Coordinates, language: Language) => Promise<void>
}

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set) => ({
      weather: null,
      weatherForecast: null,
      hasHydrated: false,
      weatherStatus: 'idle',
      error: null,

      loadWeather: async (coord, language) => {
        try {
          set({ weatherStatus: 'loading', error: null })
          const responseCurrentWeather = await getCurrentWeather(
            coord.latitude,
            coord.longitude,
            language,
          )
          const responseForecastWeather = await getWeatherForecast(
            coord.latitude,
            coord.longitude,
            language,
          )
          //           const [
          //   responseCurrentWeather,
          //   responseForecastWeather,
          // ] = await Promise.all([
          //   getCurrentWeather(...),
          //   getWeatherForecast(...),
          // ])
          console.log(responseCurrentWeather)
          const weather = normalizeWeather(responseCurrentWeather)
          const weatherForecast = normalizeWeatherForecast(responseForecastWeather)
          set({ weather, weatherForecast, error: null, weatherStatus: 'success' })
        } catch {
          set({ error: 'Failed to load weather', weatherStatus: 'error' })
        }
      },
    }),
    {
      name: 'weather-store',
      storage: createJSONStorage(() => storage),
      partialize: (state) => ({ weather: state.weather }),
      onRehydrateStorage: () => {
        return () => {
          useWeatherStore.setState({
            hasHydrated: true,
          })
        }
      },
    },
  ),
)
