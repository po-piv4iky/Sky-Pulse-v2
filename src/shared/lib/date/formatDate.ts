import { Language, localeMap } from '@/shared/types/language'

//Intl.DateTimeFormat — форматирование для человека
export const formatDate = (dt: number, language: Language) => {
  return new Intl.DateTimeFormat(localeMap[language], {
    day: 'numeric',
    month: 'long',
  }).format(new Date(dt * 1000))
}
