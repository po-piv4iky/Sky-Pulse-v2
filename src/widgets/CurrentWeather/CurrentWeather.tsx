import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import CityClock from '@/shared/components/CityClock/CityClock'
import StyledText from '@/shared/components/StyledText/StyledText'

import { formatWeekday } from '@/shared/lib/date/formarWeekDay'
import { formatDate } from '@/shared/lib/date/formatDate'
import { getLocalDate } from '@/shared/lib/date/getLocalDate'
import { Language } from '@/shared/types/language'
import { useTranslation } from 'react-i18next'
import { Image, StyleSheet, View } from 'react-native'

export default function CurrentWeather() {
  const weather = useWeatherStore((s) => s.weather)
  const { i18n } = useTranslation()
  const language = i18n.language as Language
  if (!weather) return null
  const dt = getLocalDate(weather.dt, weather.timezone)
  console.log(dt)
  const date = formatDate(weather.dt, language)
  console.log(date)
  const weekDay = formatWeekday(weather.dt, language)

  return (
    <View style={styles.container}>
      {/* LOCATION */}
      <View style={styles.locationBlock}>
        <StyledText style={styles.city}>{weather.city}</StyledText>

        <StyledText style={styles.date}>
          {weekDay}, {date} · <CityClock />
        </StyledText>
      </View>

      {/* CURRENT WEATHER */}
      <View style={styles.currentWeather}>
        {weather.uri && (
          <Image source={{ uri: weather.uri }} style={styles.icon} resizeMode="contain" />
        )}

        <StyledText variant="displayXl" style={styles.temperature}>
          {Math.round(weather.temp)}°
        </StyledText>

        <StyledText style={styles.condition}>{weather.description}</StyledText>

        <View style={styles.minMax}>
          <StyledText style={styles.minMaxText}>
            H {Math.round(weather.temp_max)}°
          </StyledText>

          <View style={styles.dot} />

          <StyledText style={styles.minMaxText}>
            L {Math.round(weather.temp_min)}°
          </StyledText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },

  locationBlock: {
    alignItems: 'center',
    gap: 4,
  },

  city: {
    fontSize: 24,
    fontWeight: '600',
  },

  date: {
    opacity: 0.55,
    fontSize: 14,
  },

  currentWeather: {
    alignItems: 'center',
    marginTop: 15,
  },

  icon: {
    width: 150,
    height: 150,
    marginBottom: 4,
  },

  temperature: {
    fontSize: 72,
    lineHeight: 78,
    fontWeight: '300',
    letterSpacing: -3,
  },

  condition: {
    marginTop: 2,
    opacity: 0.8,
    fontSize: 17,
  },

  minMax: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },

  minMaxText: {
    opacity: 0.65,
    fontSize: 14,
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    opacity: 0.4,
  },
})
