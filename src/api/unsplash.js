import axios from 'axios'

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID EruaGNRLyIbzUuvY4tAdsN8mCrH95kiwLtDQ0PsMm4o`
  }
})

export default unsplash