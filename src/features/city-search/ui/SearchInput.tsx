import IconButton from '@/shared/components/IconButton/IconButton'
import StyledInput from '@/shared/components/StyledInput/StyledInput'
import { THEME } from '@/shared/theme'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'

type InputProps = {
  value: string
  onChangeText: (text: string) => void
}

export default function SearchInput({ value, onChangeText }: InputProps) {
  const { t } = useTranslation()
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: THEME.colors.BACKGROUND_INPUT,
    borderRadius: 40,
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    flex: 1, // 👈 занимает всё свободное место
    color: '#FFFFFF',
  },
})
