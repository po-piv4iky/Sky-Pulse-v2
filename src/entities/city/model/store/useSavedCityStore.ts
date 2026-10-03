import { City } from '@/entities/city/types/city.types'
import { storage } from '@/shared/storage/storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface SavedCityStore {
  cities: City[]

  toggleCity: (city: City) => void
  isCitySaved: (cityId: string) => boolean
  clearAllCities: () => void
}

export const useSavedCityStore = create<SavedCityStore>()(
  persist(
    (set, get) => ({
      cities: [],

      toggleCity: (city) => {
        set((state) => {
          const isSaved = state.cities.some((item) => item.id === city.id)
          if (isSaved) {
            return {
              cities: state.cities.filter((item) => item.id !== city.id),
            }
          }
          return {
            cities: [...state.cities, city],
          }
        })
      },

      isCitySaved: (cityId) => {
        return get().cities.some((city) => city.id === cityId)
      },

      clearAllCities: () => {
        set({ cities: [] })
      },
    }),

    {
      name: 'saved-cities-storage',
      storage: createJSONStorage(() => storage),
    },
  ),
)
