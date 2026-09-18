import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import {
  getCurrentLocation,
  getPermissionStatus,
  requestPermission,
} from '../api/userLocation'
import { Coordinates } from '../types/coordinates.types'

type PermissionStatus = 'undetermined' | 'granted' | 'denied' //"не определено" | "предоставлено" | "отклонено"

interface LocationStore {
  coordinates: Coordinates | null
  permission: PermissionStatus | null
  hasHydrated: boolean
  isLoading: boolean
  error: string | null

  loadLocation: () => Promise<Coordinates | null> // загрузка координат по jps устройства, если jps выключен то спрашиваем разрешение на jps, если его нет,
  // то используем сохранёные кординаты либо будет not found
}

export const useUserLocationStore = create<LocationStore>()(
  persist(
    (set, get) => {
      const fetchLocation = async (): Promise<Coordinates | null> => {
        let permission = await getPermissionStatus() // cпросили у ос
        if (permission.status === 'undetermined') {
          permission = await requestPermission() // спросили у юзера
        }
        set({ permission: permission.status })
        if (permission.status !== 'granted') {
          return null
        }
        return await getCurrentLocation()
      }
      return {
        coordinates: null,
        permission: null,
        hasHydrated: false,
        isLoading: false,
        error: null,

        loadLocation: async () => {
          set({ isLoading: true, error: null })
          try {
            // Получили свежие координаты с GPS
            const coordinates = await fetchLocation()
            if (coordinates) {
              set({ coordinates })
              return coordinates
            }
            // GPS недоступен → используем сохранённые координаты
            const savedCoordinates = get().coordinates
            if (savedCoordinates) {
              console.log('non gps')
              return savedCoordinates
            }
            // Нет ни GPS, ни сохранённых координат
            set({ error: 'Not Found' })
            return null
          } catch {
            set({ error: 'Not found' })
            return null
          } finally {
            set({ isLoading: false })
          }
        },
      }
    },
    {
      name: 'user-location-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        coordinates: state.coordinates,
        permission: state.permission,
      }),
      onRehydrateStorage: () => {
        return () => {
          useUserLocationStore.setState({
            hasHydrated: true,
          })
        }
      },
    },
  ),
)
