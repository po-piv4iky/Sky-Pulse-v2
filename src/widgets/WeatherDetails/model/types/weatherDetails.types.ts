import { Ionicons } from '@expo/vector-icons'
import { ComponentProps } from 'react'

export interface WeatherDetail {
  icon: ComponentProps<typeof Ionicons>['name']
  labelKey: string
  value: string
  description?: string
}
