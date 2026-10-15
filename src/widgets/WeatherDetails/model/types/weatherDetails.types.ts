import { Ionicons } from '@expo/vector-icons'
import { ComponentProps } from 'react'

interface WeatherDetailBase {
  icon: ComponentProps<typeof Ionicons>['name']
  labelKey: string
  description?: string
}
export type WeatherDetail =
  | (WeatherDetailBase & {
      valueType: 'temperature'
      value: number
    })
  | (WeatherDetailBase & {
      valueType: 'humidity' | 'wind' | 'visibility' | 'pressure'
      value: string
    })
