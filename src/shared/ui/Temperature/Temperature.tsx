import { useSettingsStore } from '@/entities/settings/model/store/useSettingsStore'
import StyledText from '@/shared/components/StyledText/StyledText'
import { formatTemperature } from '@/shared/lib/temperature/formatTemperature'
import { useTranslation } from 'react-i18next'
import { TextProps } from 'react-native'

interface TemperatureProps {
  value: number
  variant?:
    | 'displayXl'
    | 'headlineLg'
    | 'headlineMd'
    | 'titleMd'
    | 'bodyMd'
    | 'bodySm'
    | 'labelSm'
  style?: TextProps['style']
  labelKey?: string
}

export function Temperature({ value, variant, style, labelKey }: TemperatureProps) {
  const unit = useSettingsStore((s) => s.temperatureUnit)
  const { t } = useTranslation()
  return (
    <StyledText variant={variant} style={style}>
      {labelKey ? `${t(labelKey)} ` : ''}
      {formatTemperature(value, unit)}
    </StyledText>
  )
}
