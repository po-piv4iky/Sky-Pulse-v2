import { useAppTheme } from '@/shared/theme'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

type StyledInputProps = TextInputProps & {}

export default function StyledInput({ placeholder, ...props }: StyledInputProps) {
  const { colors } = useAppTheme()
  return (
    <TextInput
      style={[styles.input, props.style]}
      placeholder={placeholder}
      placeholderTextColor={colors.PLACEHOLDER}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
  },
})
