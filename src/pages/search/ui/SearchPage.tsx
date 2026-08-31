import { useSearchCity } from '@/features/search-city/model/useSearchCity'
import { GradientBackground } from '@/shared/components/GradientBackground'
import { THEME } from '@/shared/theme'
import { HeaderSearch } from '@/widgets/Search'
import SearchResults from '@/widgets/Search/SearchResults/SearchResults'
import { useState } from 'react'
import { StyleSheet } from 'react-native'

export default function SearchPage() {
  const [text, setText] = useState('')
  const { results, isLoading, error } = useSearchCity(text)
  return (
    <GradientBackground
      style={styles.container}
      colors={THEME.gradients.BACKGROUND_SECONDARY}
    >
      <HeaderSearch text={text} onTextChange={setText} />
      <SearchResults results={results} isLoading={isLoading} error={error} />
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
})
