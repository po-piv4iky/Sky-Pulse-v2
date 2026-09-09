import { Coordinates } from '@/entities/user-location/types/coordinates.types'
import { Language } from '@/shared/types/language'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { normalizeWeather } from '../api/model/normalizeWeather'
import { getCurrentWeather } from '../api/weatherApi'
import { Weather } from '../types/weather.types'

interface WeatherStore {
  weather: Weather | null
  hasHydrated: boolean
  isLoading: boolean
  error: string | null

  loadWeather: (coord: Coordinates, language: Language) => Promise<void>
}

export const useWeatherStore = create<WeatherStore>()(
  persist(
    (set) => ({
      weather: null,
      hasHydrated: false,
      isLoading: false,
      error: null,

      loadWeather: async (coord, language) => {
        try {
          set({ isLoading: true, error: null })
          const response = await getCurrentWeather(
            coord.latitude,
            coord.longitude,
            language,
          )
          const weather = normalizeWeather(response)
          set({ weather })
        } catch {
          set({ error: 'Failed to load weather' })
        } finally {
          set({ isLoading: false })
        }
      },
    }),
    {
      name: 'weather-store',
      storage: createJSONStorage(() => AsyncStorage),
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
