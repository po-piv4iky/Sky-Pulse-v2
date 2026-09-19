import AsyncStorage from '@react-native-async-storage/async-storage'
import { Platform } from 'react-native'

export const storage =
  Platform.OS === 'web'
    ? {
        getItem: async (name: string) => {
          if (typeof window === 'undefined') {
            return null
          }
          return window.localStorage.getItem(name)
        },

        setItem: async (name: string, value: string) => {
          if (typeof window === 'undefined') {
            return
          }
          window.localStorage.setItem(name, value)
        },

        removeItem: async (name: string) => {
          if (typeof window === 'undefined') {
            return
          }
          window.localStorage.removeItem(name)
        },
      }
    : AsyncStorage
