import CleanseAllCities from '@/features/save-city/ui/CleanseAllCities'
import SavedCities from '@/widgets/SavedCities/SavedCities'
import ScreenLayout from '@/widgets/ScreenLayout/ScreenLayout'

import { StyleSheet } from 'react-native'

export default function SavedPage() {
  return (
    <ScreenLayout scrollable>
      <CleanseAllCities />

      <SavedCities />
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({})
