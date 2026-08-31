import { useChangeLanguage } from '@/features/change-language/model/useChangeLanguage'
import StyledText from '@/shared/components/StyledText/StyledText'
import { THEME } from '@/shared/theme'
import { Language } from '@/shared/types/language'
import { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<'ru' | 'en'>('ru')
  const { currentLanguage, changeLanguage } = useChangeLanguage()

  const handleLanguagePress = (lang: Language) => {
    setSelectedLanguage(lang)
    changeLanguage(lang)
  }
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          selectedLanguage === 'ru' && styles.activeButton,
          pressed && styles.pressed,
        ]}
        onPress={() => handleLanguagePress('ru')}
      >
        <StyledText
          variant="headlineLg"
          style={[styles.buttonText, selectedLanguage === 'en' && styles.activeText]}
        >
          🇷🇺 RUS
        </StyledText>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.buttonContainer,
          selectedLanguage === 'en' && styles.activeButton,
          pressed && styles.pressed,
        ]}
        onPress={() => handleLanguagePress('en')}
      >
        <StyledText
          variant="headlineLg"
          style={[styles.buttonText, selectedLanguage === 'en' && styles.activeText]}
        >
          🇬🇧 EN
        </StyledText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: THEME.colors.BORDER_PRIMARY,
    backgroundColor: 'transparent',
    minWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  activeButton: {
    borderColor: THEME.colors.PRIMARY,
    backgroundColor: THEME.colors.PRIMARY + '20',
    shadowColor: THEME.colors.PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  pressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.8,
  },
  buttonText: {
    color: THEME.colors.TEXT_PRIMARY,
    fontSize: 18,
    fontWeight: '600',
  },
  activeText: {
    color: THEME.colors.PRIMARY,
  },
})
