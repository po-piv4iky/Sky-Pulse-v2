import LanguageSelector from '@/features/change-language/ui/LanguageSelector'
import Card from '@/shared/components/Card/Card'
import { StyleSheet } from 'react-native'

export function SettingsAppearance() {
  return (
    <Card border="default" style={styles.container}>
      <LanguageSelector />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
})
