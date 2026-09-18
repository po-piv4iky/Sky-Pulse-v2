export type WeatherForecastItem = {
  dt: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
  }
  pop: number
  dt_txt: string
}

export type WeatherForecastResponse = {
  cod: string
  message: number
  cnt: number
  list: WeatherForecastItem[]
  city: {
    name: string
    timezone: number
    coord: {
      lat: number
      lon: number
    }
  }
}
