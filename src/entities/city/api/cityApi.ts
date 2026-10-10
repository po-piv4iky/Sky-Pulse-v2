import { geoClient } from '@/shared/api/geoClient'
import { CityApiResponse } from '../model/types/cityApiResponse.types'

export async function getCities(cityName: string): Promise<CityApiResponse[]> {
  const { data } = await geoClient.get('/direct', {
    params: {
      q: cityName,
      limit: 5,
    },
  })
  return data
}
