import { useSettingsStore } from '@/entities/settings/model/store/useSettingsStore'
import StyledButton from '@/shared/components/StyledButton/StyledButton'
import { THEME } from '@/shared/theme'
import { StyleSheet, View } from 'react-native'

export default function TemperatureUnitSelector() {
  const setTemperatureUnit = useSettingsStore((s) => s.setTemperatureUnit)
  const temperatureUnit = useSettingsStore((s) => s.temperatureUnit)

  return (
    <View style={{ gap: 20, flexDirection: 'row' }}>
      <StyledButton
        style={[
          { padding: 20 },
          temperatureUnit === 'celsius'
            ? { backgroundColor: THEME.colors.BUTTON_SECONDARY_HOVER }
            : { backgroundColor: THEME.colors.NEUTRAL },
        ]}
        label="цельсии"
        onPress={() => setTemperatureUnit('celsius')}
      ></StyledButton>
      <StyledButton
        style={[
          { padding: 20, backgroundColor: THEME.colors.NEUTRAL },
          temperatureUnit === 'fahrenheit'
            ? { backgroundColor: THEME.colors.BUTTON_SECONDARY_HOVER }
            : { backgroundColor: THEME.colors.NEUTRAL },
        ]}
        label="фаренгейты"
        onPress={() => setTemperatureUnit('fahrenheit')}
      ></StyledButton>
      <StyledButton
        style={[
          { padding: 20, backgroundColor: THEME.colors.NEUTRAL },
          temperatureUnit === 'kelvin'
            ? { backgroundColor: THEME.colors.BUTTON_SECONDARY_HOVER }
            : { backgroundColor: THEME.colors.NEUTRAL },
        ]}
        label="кельвины"
        onPress={() => setTemperatureUnit('kelvin')}
      ></StyledButton>
    </View>
  )
}

const styles = StyleSheet.create({})
