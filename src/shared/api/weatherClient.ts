import axios from 'axios'

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY
const BASE_URL = process.env.EXPO_PUBLIC_WEATHER_BASE_URL

// Клиент для основных запросов (погода, прогноз)

export const weatherClient = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric', // 👈 температура в Цельсиях
  },
  timeout: 10000,
})
