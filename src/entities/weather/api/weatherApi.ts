import { Coordinates } from '@/shared/types/coordinates.types'
import { Language } from '@/shared/types/language'
import { weatherClient } from '../../../shared/api/weatherClient'
import { WeatherApiResponse } from '../types/weatherApiResponse.types'
import { WeatherForecastResponse } from '../types/weatherForecastResponse.types'

export async function getCurrentWeather(
  coord: Coordinates,
  lang: Language,
): Promise<WeatherApiResponse> {
  const { lat, lon } = coord
  const { data } = await weatherClient.get('/weather', {
    params: { lat, lon, lang: lang },
  })
  return data
}

export async function getWeatherForecast(
  coord: Coordinates,
  lang: Language,
): Promise<WeatherForecastResponse> {
  const { lat, lon } = coord
  const { data } = await weatherClient.get('/forecast', {
    params: { lat, lon, lang: lang },
  })
  return data
}
