import SelectBottomSheet from '@/shared/components/SelectBottomSheet/SelectBottomSheet'
import SelectRow from '@/shared/components/SelectRow/SelectRow'
import { BottomSheetModal } from '@expo/ui/community/bottom-sheet'
import { useRef } from 'react'
import { StyleSheet } from 'react-native'
import { useChangeLanguage } from '../model/useChangeLanguage'

export default function LanguageSelector() {
  const { currentLanguage, changeLanguage } = useChangeLanguage()
  const sheetRef = useRef<BottomSheetModal>(null)
  return (
    <>
      <SelectRow
        title="Language"
        icon="globe-outline"
        value={currentLanguage}
        onPress={() => sheetRef.current?.present()}
        isOpen={true}
        isLast
      />
      <SelectBottomSheet
        ref={sheetRef}
        title="language"
        options={['en', 'ru'] as const}
        value={currentLanguage}
        onSelect={(lang) => {
          changeLanguage(lang)
          sheetRef.current?.dismiss()
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({})
