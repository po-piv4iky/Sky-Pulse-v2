import { create } from 'zustand'

export type InitializationStatus = 'idle' | 'loading' | 'success' | 'error'

interface InitializationStore {
  status: InitializationStatus
  error: string | null

  startInitialization: () => void
  finishInitialization: () => void
  failInitialization: (error: string) => void
}

export const useInitializationStore = create<InitializationStore>((set) => ({
  status: 'idle',
  error: null,

  startInitialization: () => set({ status: 'loading' }),
  finishInitialization: () => set({ status: 'success' }),
  failInitialization: (error) => set({ status: 'error', error: error }),
}))
