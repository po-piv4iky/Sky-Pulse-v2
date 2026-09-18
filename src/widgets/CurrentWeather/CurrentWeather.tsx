import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import StyledText from '@/shared/components/StyledText/StyledText'
import { formatWeekday } from '@/shared/date/formarWeekDay'
import { formatDate } from '@/shared/date/formatDate'
import { useCityTime } from '@/shared/hooks/useCityTime'
import { Language } from '@/shared/types/language'
import { useTranslation } from 'react-i18next'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import ForecastCard from '../ForecastCard/ForecastCard'

export default function CurrentWeather() {
  const weather = useWeatherStore((s) => s.weather)
  const weatherForecast = useWeatherStore((s) => s.weatherForecast)

  const { i18n } = useTranslation()
  const language = i18n.language as Language

  if (!weather || !weatherForecast) return null

  const visibleForecast = weatherForecast.slice(0, 7)

  const time = useCityTime(weather.dt, weather.timezone)
  const date = formatDate(weather.dt, language)
  const weekDay = formatWeekday(weather.dt, language)

  return (
    <View style={styles.container}>
      {/* LOCATION */}
      <View style={styles.locationBlock}>
        <StyledText style={styles.city}>{weather.city}</StyledText>

        <StyledText style={styles.date}>
          {weekDay}, {date} · {time.hours}:{time.minutes}:{time.seconds}
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

      {/* HOURLY */}
      <View style={styles.hourlySection}>
        <View style={styles.sectionHeader}>
          <StyledText style={styles.sectionTitle}>HOURLY FORECAST</StyledText>

          <StyledText style={styles.sectionHint}>Next hours</StyledText>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.forecastContent}
        >
          {visibleForecast.map((item) => (
            <ForecastCard key={item.dt} item={item} timezone={weather.timezone} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 24,
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
    marginTop: 24,
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

  hourlySection: {
    marginTop: 34,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 1,
    opacity: 0.65,
  },

  sectionHint: {
    fontSize: 12,
    opacity: 0.4,
  },

  forecastContent: {
    gap: 10,
    paddingTop: 4,
    paddingBottom: 8,
    paddingRight: 20,
    alignItems: 'flex-start',
  },
})
