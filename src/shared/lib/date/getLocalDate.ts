//new Date() — работа с моментом времени
export function getLocalDate(dt: number, timezone: number) {
  return new Date((dt + timezone) * 1000).toISOString().slice(0, 10) // вернёт 2026-09-22
}
