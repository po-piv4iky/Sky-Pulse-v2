import { DailyForecast } from '@/widgets/DailyForecast'
import { ScreenLayout } from '@/widgets/ScreenLayout'
import { StyleSheet } from 'react-native'

export default function Forecast() {
  return (
    <ScreenLayout contentStyle={styles.container}>
      <DailyForecast />
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 110,
    gap: 30,
  },
})
