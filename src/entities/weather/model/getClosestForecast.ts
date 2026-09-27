import { WeatherForecast } from '../types/weatherForecast.types'

export function getClosestForecast(
  forecasts: WeatherForecast[],
  targetHour: number,
  timezone: number,
): WeatherForecast | undefined {
  if (forecasts.length === 0) {
    return undefined
  }
  return forecasts.reduce((closest, current) => {
    // получили вермя первого эллемента, он же самый ближний к текущему часу
    const closestLocalHour = new Date((closest.dt + timezone) * 1000).getUTCHours()
    //второй эллемент массива
    const currentLocalHour = new Date((current.dt + timezone) * 1000).getUTCHours()
    //получили разницу первого эллемента вычитая из 12
    const closestDistance = Math.abs(closestLocalHour - targetHour)
    //получили разницу второго эллемента вычитая из 12
    const currentDistance = Math.abs(currentLocalHour - targetHour)
    return currentDistance < closestDistance ? current : closest
  })
}
