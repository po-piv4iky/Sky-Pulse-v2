import { useSavedCityStore } from '@/entities/city/model/store/useSavedCityStore'
import { SearchCityResult } from '@/entities/city/types/searchCityResult.types'
import SavedCityCard from '@/entities/city/ui/SavedCityCard'
import { getCurrentWeather } from '@/entities/weather/api/weatherApi'
import Loader from '@/shared/components/Loader/Loader'
import { Language } from '@/shared/types/language'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList } from 'react-native'

export default function SavedCities() {
  const cities = useSavedCityStore((s) => s.cities)
  const { i18n } = useTranslation()
  const language = i18n.language as Language
  const [data, setData] = useState<SearchCityResult[]>([])

  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const load = async () => {
      setIsLoading(true)
      try {
        const result = await Promise.all(
          cities.map(async (city) => {
            const weather = await getCurrentWeather(
              city.latitude,
              city.longitude,
              language,
            )

            return {
              id: city.id,
              name: city.name,
              latitude: city.latitude,
              longitude: city.longitude,
              country: city.country,
              temperature: weather.main.temp,
              description: weather.weather[0].description,
              icon: weather.weather[0].icon,
            }
          }),
        )
        setData(result)
      } finally {
        setIsLoading(false)
      }
    }
    load()
  }, [cities, language])
  if (isLoading) return <Loader />

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <SavedCityCard data={item} />}
    />
  )
}
