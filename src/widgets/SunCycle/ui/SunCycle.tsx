import { StyleSheet, View } from 'react-native'
import { getSunPosition } from '../model/getSunPosition'
import { SunCycleData } from '../types/sunCycleData.types'
import SunArc from './SunArc'

export function SunCycle({ currentTime, sunrise, sunset, timezone }: SunCycleData) {
  const { progress } = getSunPosition(sunrise, sunset, currentTime, 100, 100)
  return (
    <View>
      <SunArc progress={progress} />
    </View>
  )
}

const styles = StyleSheet.create({})
