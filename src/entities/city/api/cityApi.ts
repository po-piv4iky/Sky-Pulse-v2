import { geoClient } from '@/shared/api/geoClient'
import { City } from '../types/city.types'

export async function getCities(cityName: string): Promise<City[]> {
  const { data } = await geoClient.get('/direct', {
    params: {
      q: cityName,
      limit: 5,
    },
  })
  return data
}
