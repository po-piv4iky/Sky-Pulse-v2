import CleanseAllCities from '@/features/save-city/ui/CleanseAllCities'
import SavedCities from '@/widgets/SavedCities/SavedCities'
import ScreenLayout from '@/widgets/ScreenLayout/ScreenLayout'

import { StyleSheet } from 'react-native'

export default function Save() {
  return (
    <ScreenLayout contentStyle={styles.container}>
      <CleanseAllCities />

      <SavedCities />
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 110,
    gap: 30,
  },
})
