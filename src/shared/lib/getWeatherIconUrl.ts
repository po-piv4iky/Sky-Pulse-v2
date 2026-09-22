const WEATHER_ICON_URL = 'https://openweathermap.org/img/wn'

export const getWeatherIconUrl = (iconCode: string) => {
  return `${WEATHER_ICON_URL}/${iconCode}@2x.png`
}
