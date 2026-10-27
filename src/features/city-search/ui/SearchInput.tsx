import IconButton from '@/shared/components/IconButton/IconButton'
import StyledInput from '@/shared/components/StyledInput/StyledInput'
import { useAppTheme } from '@/shared/theme'
import type { AppColors } from '@/shared/theme/colors'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'

type InputProps = {
  value: string
  onChangeText: (text: string) => void
}

export default function SearchInput({ value, onChangeText }: InputProps) {
  const { t } = useTranslation()
  const { colors } = useAppTheme()
  const styles = createStyles(colors)

  return (
    <View style={styles.container}>
      <StyledInput
        style={styles.input}
        placeholder={t('search.placeholder')}
        value={value}
        onChangeText={onChangeText}
      />

      {value.length > 0 ? (
        <IconButton name="close" onPress={() => onChangeText('')} />
      ) : (
        <IconButton name="mic" />
      )}
    </View>
  )
}

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.BACKGROUND_INPUT,
      borderRadius: 40,
      width: '80%',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
    },

    input: {
      flex: 1,
      color: colors.TEXT_PRIMARY,
    },
  })
