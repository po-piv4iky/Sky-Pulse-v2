import { Coordinates } from '@/shared/types/coordinates.types'

export interface City {
  id: string
  coord: Coordinates
  name: string
  country: string
  state?: string
}
