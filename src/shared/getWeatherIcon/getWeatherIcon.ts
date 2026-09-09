export const getWeatherIcon = (icon?: string | null) => {
  if (!icon) {
    return null
  }
  return `https://openweathermap.org/img/wn/${icon}@2x.png`
}