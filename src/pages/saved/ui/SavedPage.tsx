import SavedCities from '@/widgets/SavedCities/SavedCities'
import ScreenLayout from '@/widgets/ScreenLayout/ScreenLayout'
import { StyleSheet } from 'react-native'

export default function SavedPage() {
  return (
    <ScreenLayout>
      <SavedCities />
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({})
