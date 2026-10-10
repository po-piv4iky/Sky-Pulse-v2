import { WeatherCityInfo } from '@/entities/city/model/types/weatherCityInfo.types'
import Loader from '@/shared/components/Loader/Loader'
import StyledText from '@/shared/components/StyledText/StyledText'
import { Coordinates } from '@/shared/types/coordinates.types'
import { FlatList, StyleSheet, View } from 'react-native'
import SearchResultItem from '../../../entities/city/ui/SearchCityCard'

type SearchResultsProps = {
  results: WeatherCityInfo[]
  isLoading: boolean
  error: string | null
  selectCity: (coord: Coordinates) => void
}

export default function SearchResults({
  results,
  isLoading,
  error,
  selectCity,
}: SearchResultsProps) {
  if (isLoading) {
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
      array.findIndex(
        (result) =>
          result.coord.lat === item.coord.lat && result.coord.lon === item.coord.lon,
      ),
  )
  return (
    <View style={{ gap: 15, paddingHorizontal: 20 }}>
      <FlatList
        data={uniqueResults}
        keyboardShouldPersistTaps="handled"
        keyExtractor={(item) => `${item.coord.lat}-${item.coord.lon}`}
        renderItem={({ item }) => (
          <SearchResultItem cityItem={item} onPress={selectCity} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
