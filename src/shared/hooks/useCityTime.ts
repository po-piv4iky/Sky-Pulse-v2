import { useEffect, useMemo, useState } from 'react'

export type CityTime = {
  hours: string
  minutes: string
  seconds: string
}

export const useCityTime = (
  initialTimestamp: number,
  timezoneOffset: number,
): CityTime => {
  const [timestamp, setTimestamp] = useState(() => initialTimestamp)

  useEffect(() => {
    setTimestamp(initialTimestamp)
  }, [initialTimestamp])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimestamp((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return useMemo(() => {
    const totalSeconds = timestamp + timezoneOffset
    const date = new Date(totalSeconds * 1000)

    return {
      hours: String(date.getUTCHours()).padStart(2, '0'),
      minutes: String(date.getUTCMinutes()).padStart(2, '0'),
      seconds: String(date.getUTCSeconds()).padStart(2, '0'),
    }
  }, [timestamp, timezoneOffset])
}
