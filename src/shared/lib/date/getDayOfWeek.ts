import { Language, localeMap } from '@/shared/types/language'

export function getDayOfWeek(timestep: number, timezone: number, language: Language) {
  const date = new Date((timestep + timezone) * 1000)
  return new Intl.DateTimeFormat(localeMap[language], {
    weekday: 'long',
    timeZone: 'UTC',
  }).format(date)
}
