import { Language } from '@/shared/types/language'
import { weatherClient } from '../../../shared/api/weatherClient'
import { WeatherApiResponse } from '../types/weatherApiResponse.types'
import { WeatherForecastResponse } from '../types/weatherForecastResponse.types'

export async function getCurrentWeather(
  lat: number,
  lon: number,
  lang: Language,
): Promise<WeatherApiResponse> {
  const { data } = await weatherClient.get('/weather', {
    params: { lat, lon, lang: lang },
  })
  return data
}

export async function getWeatherForecast(
  lat: number,
  lon: number,
  lang: Language,
): Promise<WeatherForecastResponse> {
  const { data } = await weatherClient.get('/forecast', {
    params: { lat, lon, lang: lang },
  })
  return data
}
