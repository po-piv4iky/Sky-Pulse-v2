import { storage } from '@/shared/storage/storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import {
  PressureUnit,
  TemperatureUnit,
  ThemeMode,
  WindSpeedUnit,
} from '../types/settings.types'

interface SettingsStore {
  temperatureUnit: TemperatureUnit
  windSpeedUnit: WindSpeedUnit
  pressureUnit: PressureUnit
  theme: ThemeMode
  setTemperatureUnit: (unit: TemperatureUnit) => void
  setWindSpeedUnit: (unit: WindSpeedUnit) => void
  setPressureUnit: (unit: PressureUnit) => void
  setThemeMode: (mode: ThemeMode) => void
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      temperatureUnit: 'celsius',
      windSpeedUnit: 'km/h',
      pressureUnit: 'hPa',
      theme: 'dark',
      setTemperatureUnit: (temperatureUnit) => {
        set({ temperatureUnit })
      },
      setWindSpeedUnit: (windSpeedUnit) => {
        set({ windSpeedUnit })
      },
      setPressureUnit: (pressureUnit) => {
        set({ pressureUnit })
      },
      setThemeMode: (theme) => {
        set({ theme })
      },
    }),
    {
      name: 'settings-store',
      storage: createJSONStorage(() => storage),
    },
  ),
)
