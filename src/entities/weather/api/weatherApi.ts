import { Language } from '@/shared/types/language'
import { weatherClient } from '../../../shared/api/weatherClient'
import { Weather } from '../types/weather.types'

export async function getCurrentWeather(
  lat: number,
  lon: number,
  lang: Language,
): Promise<Weather> {
  const { data } = await weatherClient.get('/weather', {
    params: { lat, lon, lang: lang },
  })
  return data
}
