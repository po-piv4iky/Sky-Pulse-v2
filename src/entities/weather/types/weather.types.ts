export interface Weather {
  coord: {
    lon: number
    lat: number
  }
  name: string
  timezone: number
  dt: number
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
    deg: number
    gust?: number
  }
  clouds: {
    all: number
  }
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  visibility: number
}
