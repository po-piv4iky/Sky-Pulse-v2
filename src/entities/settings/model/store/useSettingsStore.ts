import { storage } from '@/shared/storage/storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { PressureUnit, TemperatureUnit, WindSpeedUnit } from '../types/units.types'

interface SettingsStore {
  temperatureUnit: TemperatureUnit
  windSpeedUnit: WindSpeedUnit
  pressureUnit: PressureUnit
  setTemperatureUnit: (unit: TemperatureUnit) => void
  setWindSpeedUnit: (unit: WindSpeedUnit) => void
  setPressureUnit: (unit: PressureUnit) => void
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
      setWindSpeedUnit: (windSpeedUnit) => {
        set({ windSpeedUnit })
      },
      setPressureUnit: (pressureUnit) => {
        set({ pressureUnit })
      },
    }),
    {
      name: 'settings-store',
      storage: createJSONStorage(() => storage),
    },
  ),
)
