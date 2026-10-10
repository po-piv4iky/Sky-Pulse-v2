import { City } from '../model/types/city.types'
import { CityApiResponse } from './types/cityApiResponse.types'

export function normalizeCity(city: CityApiResponse): City {
  return {
    id: `${city.lat}-${city.lon}`,
    coord: {
      lat: city.lat,
      lon: city.lon,
    },
    name: city.name,
    country: city.country,
    state: city.state,
  }
}
