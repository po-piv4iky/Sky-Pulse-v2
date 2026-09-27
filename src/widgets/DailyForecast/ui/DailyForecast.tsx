import { getDailySummary } from '@/entities/weather/model/getDailySummary'
import { groupForecastByDay } from '@/entities/weather/model/groupForecastByDay'
import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import Card from '@/shared/components/Card/Card'
import StyledIcon from '@/shared/components/StyledIcon/StyledIcon'
import StyledText from '@/shared/components/StyledText/StyledText'
import { Language } from '@/shared/types/language'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import ForecastCard from './ForecastCard'

export function DailyForecast() {
  const weatherForecast = useWeatherStore((s) => s.weatherForecast)
  const weather = useWeatherStore((s) => s.weather)
  if (!weatherForecast || !weather) return

  const { i18n } = useTranslation()
  const language = i18n.language as Language
  const { t } = useTranslation()
  const groupedForecast = groupForecastByDay(weatherForecast, weather.timezone)
  const dailyForecast = getDailySummary(groupedForecast, language)

  return (
    <Card border="default">
      <View style={styles.titleBlock}>
        <StyledIcon name="calendar-outline" />
        <StyledText>{t('forecast.daily')}</StyledText>
      </View>
      {dailyForecast.map((item, index) => (
        <ForecastCard key={item.date} item={item} isLast={index === dailyForecast.length - 1}/>
      ))}
    </Card>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  titleBlock: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
})
