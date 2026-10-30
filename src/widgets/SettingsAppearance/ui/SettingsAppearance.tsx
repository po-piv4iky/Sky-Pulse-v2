import LanguageSelector from '@/features/change-language/ui/LanguageSelector'
import { ThemeSelector } from '@/features/change-theme'
import Card from '@/shared/components/Card/Card'
import StyledText from '@/shared/components/StyledText/StyledText'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'

export function SettingsAppearance() {
  const { t } = useTranslation()

  return (
    <View style={{ gap: 10 }}>
      <StyledText color="secondary">{t('settings.appearance')}</StyledText>
      <Card border="default" style={styles.container}>
        <ThemeSelector />
        <LanguageSelector />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
})
