import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import StyledText from '@/shared/components/StyledText/StyledText'
import { formatDate } from '@/shared/date/formatDate'
import { Language } from '@/shared/types/language'
import { useTranslation } from 'react-i18next'
import { Image, StyleSheet, View } from 'react-native'

export default function CurrentWeather() {
  const weather = useWeatherStore((s) => s.weather)
  const { i18n } = useTranslation()
  const language = i18n.language as Language
  if (!weather) return null
  console.log(weather.uri)
  return (
    <View style={styles.container}>
      <StyledText>{formatDate(weather.dt, language)}</StyledText>
      <StyledText>{weather.city}</StyledText>
      {weather.uri && (
        <Image source={{ uri: weather.uri }} style={styles.icon} resizeMode="contain" />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  icon: {
    width: 130,
    height: 130,
    marginBottom: 8,
  },
})
