export type Weather = {
  city: string
  dt: number
  uri: string | null
  timezone: number
  description: string
  temp: number
  temp_max: number
  temp_min: number
  feels_like: number
  humidity: number
  wind: { speed: number; deg: number }
  visibility: number
  pressure: number
}
