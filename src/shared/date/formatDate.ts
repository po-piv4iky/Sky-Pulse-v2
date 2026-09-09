import { Language, localeMap } from '../types/language'

export const formatDate = (dt: number, language: Language) => {
  return new Intl.DateTimeFormat(localeMap[language], {
    day: 'numeric',
    month: 'long',
  }).format(new Date(dt * 1000))
}
