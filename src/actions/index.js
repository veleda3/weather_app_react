import axios from 'axios';

const API_KEY = '45c56696ae3d2aaa8059019e6ac7abf7'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'


export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)


  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
