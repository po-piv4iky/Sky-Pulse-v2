export type Weather = {
  id: string
  city: string
  dt: number
  uri: string | null
  timezone: number
  lat: number
  lon: number
  description: string
  country: string
  temp: number
  temp_max: number
  temp_min: number
  feels_like: number
  humidity: number
  wind: { speed: number; deg: number }
  visibility: number
  pressure: number
  sunrise: number
  sunset: number
}
