import { SearchCityResult } from '@/entities/city/types/searchCityResult.types'
import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import Loader from '@/shared/components/Loader/Loader'
import StyledText from '@/shared/components/StyledText/StyledText'
import { Language } from '@/shared/types/language'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { FlatList, StyleSheet, View } from 'react-native'
import SearchResultItem from '../../../entities/city/ui/SearchCityItem'

type SearchResultsProps = {
  results: SearchCityResult[]
  isLoading: boolean
  error: string | null
}

export default function SearchResults({ results, isLoading, error }: SearchResultsProps) {
  const weatherStatus = useWeatherStore((s) => s.weatherStatus)
  const { i18n } = useTranslation()
  const router = useRouter()
  const language = i18n.language as Language
  const loadWeather = useWeatherStore((s) => s.loadWeather)
  const handleCityPress = async (city: SearchCityResult) => {
    await loadWeather(
      {
        latitude: city.lat,
        longitude: city.lon,
      },
      language,
    )
    router.replace('/')
  }
  if (isLoading) {
    return (
      <View>
        <Loader />
      </View>
    )
  }
  if (weatherStatus === 'loading') {
    return (
      <View>
        <Loader />
      </View>
    )
  }

  if (error) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <StyledText variant="headlineLg" color="error">
          {error}
        </StyledText>
      </View>
    )
  }
  const uniqueResults = results.filter(
    (item, index, array) =>
      index ===
      array.findIndex((result) => result.lat === item.lat && result.lon === item.lon),
  )
  return (
    <View style={{ gap: 15, paddingHorizontal: 20 }}>
      <FlatList
        data={uniqueResults}
        keyboardShouldPersistTaps="handled"
        keyExtractor={(item) => `${item.lat}-${item.lon}`}
        renderItem={({ item }) => (
          <SearchResultItem cityItem={item} onPress={handleCityPress} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
