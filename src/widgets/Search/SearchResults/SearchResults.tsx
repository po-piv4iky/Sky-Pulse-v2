import { SearchResult } from '@/features/search-city/searchResult.types'
import Loader from '@/shared/components/Loader/Loader'
import StyledText from '@/shared/components/StyledText/StyledText'
import { FlatList, StyleSheet, View } from 'react-native'
import SearchResultItem from './SearchResultItem'

type SearchResultsProps = {
  results: SearchResult[]
  isLoading: boolean
  error: string | null
}

export default function SearchResults({ results, isLoading, error }: SearchResultsProps) {
  if (isLoading) {
    return (
      <View>
        <Loader />
      </View>
    )
  }

  if (error) {
    return (
      <View>
        <StyledText color="secondary">{error}</StyledText>
      </View>
    )
  }

  return (
    <View style={{ gap: 15, paddingHorizontal: 20 }}>
      <FlatList
        data={results}
        keyboardShouldPersistTaps="handled"
        keyExtractor={(item) => `${item.lat}-${item.lon}`}
        renderItem={({ item }) => <SearchResultItem cityItem={item} onPress={() => {}} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
