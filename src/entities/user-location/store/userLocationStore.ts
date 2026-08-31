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

  loadLocation: () => Promise<Coordinates | null>
  refreshLocation: () => Promise<Coordinates | null>
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
          const { coordinates } = get()
          if (coordinates) {
            return coordinates
          }
          try {
            const coordinates = await fetchLocation()
            if (!coordinates) {
              return null
            }
            set({ coordinates })
            return coordinates
          } catch {
            set({ error: 'Not found' })
            return null
          } finally {
            set({ isLoading: false })
          }
        },

        refreshLocation: async () => {
          try {
            set({ isLoading: true, error: null })
            const coordinates = await fetchLocation()
            if (!coordinates) {
              return null
            }
            set({ coordinates })
            return coordinates
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
