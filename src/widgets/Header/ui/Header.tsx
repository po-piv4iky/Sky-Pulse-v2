import IconButton from '@/shared/components/IconButton/IconButton'
import { SCREEN_CONFIG } from '@/widgets/ScreenLayout/config/screen.config'
import { useRouter } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'

import { useWeatherStore } from '@/entities/weather/store/useWeatherStore'
import SaveCityButton from '@/features/save-city/ui/SaveCityButton'

import { AppColors } from '@/shared/theme/colors'
import HeaderLeft from './HeaderLeft'

type HeaderProps = {
  config: (typeof SCREEN_CONFIG)[keyof typeof SCREEN_CONFIG]
  colors: AppColors
}

export default function Header({ config, colors }: HeaderProps) {
  const { t } = useTranslation()
  const styles = createStyles(colors)
  const weather = useWeatherStore((s) => s.weather)
  const router = useRouter()
  const handleSearchPress = () => {
    router.push('/search')
  }

  return (
    <View style={styles.container}>
      <HeaderLeft title={t(config.titleKey)} iconName={config.iconName} />

      {config.buttonSave && (
        <SaveCityButton
          city={
            weather
              ? {
                  id: `${weather.lat}-${weather.lon}`,
                  name: weather.city,
                  country: weather.country,
                  coord: { lat: weather.lat, lon: weather.lon },
                }
              : null
          }
        />
      )}

      {config.showSearch && <IconButton name="search" onPress={handleSearchPress} />}
    </View>
  )
}

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 15,
      paddingRight: 25,
      paddingBottom: 20,
      paddingTop: 40,
      backgroundColor: colors.OVERLAY.dark,
    },
  })
