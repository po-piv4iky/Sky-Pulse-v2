import { storage } from '@/shared/storage/storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { TemperatureUnit } from '../types/temperatureUnit.types'

interface SettingsStore {
  temperatureUnit: TemperatureUnit
  setTemperatureUnit: (unit: TemperatureUnit) => void
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      temperatureUnit: 'celsius',
      setTemperatureUnit: (temperatureUnit) => {
        set({ temperatureUnit })
      },
    }),
    {
      name: 'settings-store',
      storage: createJSONStorage(() => storage),
    },
  ),
)
