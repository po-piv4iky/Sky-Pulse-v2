import { WeatherForecast } from './weatherForecast.types'

export interface DailyForecast {
  date: string
  forecasts: WeatherForecast[]
}
