import { City } from './city.types'

export interface WeatherCityInfo extends City {
  temperature: number
  icon: string
  description: string
}
