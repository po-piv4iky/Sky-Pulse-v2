import { Language, localeMap } from '@/shared/types/language'

export const formatWeekday = (timestamp: number, language: Language) => {
  return new Intl.DateTimeFormat(localeMap[language], {
    weekday: 'long',
  }).format(new Date(timestamp * 1000))
}
