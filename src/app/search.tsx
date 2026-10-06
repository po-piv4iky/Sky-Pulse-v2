import { useSearchCity } from '@/features/city-search/model/useSearchCity'
import { useSelectCity } from '@/features/city-search/model/useSelectCity'
import SearchResults from '@/features/city-search/ui/SearchResults'
import { GradientBackground } from '@/shared/components/GradientBackground'
import { THEME } from '@/shared/theme'
import HeaderSearch from '@/widgets/HeaderSearch/HeaderSearch'
import { useState } from 'react'
import { StyleSheet } from 'react-native'

export default function SearchPage() {
  const [text, setText] = useState('')
  const { results, isLoading, error } = useSearchCity(text)
  const {
    selectCity,
    isLoading: isSelectCityLoading,
    error: selectCityError,
  } = useSelectCity()
  return (
    <GradientBackground
      style={styles.container}
      colors={THEME.gradients.BACKGROUND_SECONDARY}
    >
      <HeaderSearch text={text} onTextChange={setText} />
      <SearchResults
        results={results}
        isLoading={isLoading || isSelectCityLoading}
        error={error || selectCityError}
        selectCity={selectCity}
      />
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
})
