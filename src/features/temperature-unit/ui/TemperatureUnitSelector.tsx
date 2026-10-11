import { useSettingsStore } from '@/entities/settings/model/store/useSettingsStore'
import StyledButton from '@/shared/components/StyledButton/StyledButton'
import { StyleSheet, View } from 'react-native'

export default function TemperatureUnitSelector() {
  const setTemperatureUnit = useSettingsStore((s) => s.setTemperatureUnit)
  return (
    <View>
      <StyledButton
        label="цельсии"
        onPress={() => setTemperatureUnit('celsius')}
      ></StyledButton>
      <StyledButton
        label="фаренгейты"
        onPress={() => setTemperatureUnit('fahrenheit')}
      ></StyledButton>
    </View>
  )
}

const styles = StyleSheet.create({})
