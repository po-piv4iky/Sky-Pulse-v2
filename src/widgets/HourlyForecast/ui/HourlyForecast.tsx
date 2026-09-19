import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import StyledText from '@/shared/components/StyledText/StyledText'
import { ScrollView, StyleSheet, View } from 'react-native'
import ForecastCard from './ForecastCard'

export function HourlyForecast() {
  const weather = useWeatherStore((s) => s.weather)
  const weatherForecast = useWeatherStore((s) => s.weatherForecast)
  if (!weather || !weatherForecast) return null
  const visibleForecast = weatherForecast.slice(0, 7)
  return (
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
  )
}

const styles = StyleSheet.create({
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
