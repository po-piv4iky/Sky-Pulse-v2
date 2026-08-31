import { Language } from '@/shared/types/language'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'



export function useChangeLanguage() {
  const { i18n } = useTranslation()
  const changeLanguage = useCallback(
    async (language: Language) => {
      await i18n.changeLanguage(language)
    },
    [i18n],
  )
  return {
    currentLanguage: i18n.language as Language,
    changeLanguage,
  }
}
