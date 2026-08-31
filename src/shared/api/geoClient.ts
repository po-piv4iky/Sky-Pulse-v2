import axios from 'axios'

const GEO_URL = process.env.EXPO_PUBLIC_WEATHER_GEO_URL
const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY

export const geoClient = axios.create({
  baseURL: GEO_URL,
  params: {
    appid: API_KEY,
  },
  timeout: 10000,
})
