import { SearchCityResult } from '@/entities/city/types/searchCityResult.types'
import Loader from '@/shared/components/Loader/Loader'
import StyledText from '@/shared/components/StyledText/StyledText'
import { FlatList, StyleSheet, View } from 'react-native'
import SearchResultItem from '../../../entities/city/ui/SearchCityItem'

type SearchResultsProps = {
  results: SearchCityResult[]
  isLoading: boolean
  error: string | null
  selectCity: (city: SearchCityResult) => void
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
      array.findIndex((result) => result.lat === item.lat && result.lon === item.lon),
  )
  return (
    <View style={{ gap: 15, paddingHorizontal: 20 }}>
      <FlatList
        data={uniqueResults}
        keyboardShouldPersistTaps="handled"
        keyExtractor={(item) => `${item.lat}-${item.lon}`}
        renderItem={({ item }) => (
          <SearchResultItem cityItem={item} onPress={selectCity} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
