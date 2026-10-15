import { storage } from '@/shared/storage/storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import {
  PressureUnit,
  TemperatureUnit,
  WindSpeedUnit,
} from '../types/temperatureUnit.types'

interface SettingsStore {
  temperatureUnit: TemperatureUnit
  windSpeedUnit: WindSpeedUnit
  pressureUnit: PressureUnit
  setTemperatureUnit: (unit: TemperatureUnit) => void
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      temperatureUnit: 'celsius',
      windSpeedUnit: 'km/h',
      pressureUnit: 'hPa',
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
