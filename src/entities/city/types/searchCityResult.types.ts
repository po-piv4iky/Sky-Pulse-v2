import { City } from './city.types'

export interface SearchCityResult extends City {
  temperature: number
  icon: string
  description: string
}
