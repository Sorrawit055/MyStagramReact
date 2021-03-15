import axios from 'axios'

const unsplash = axios.create({ //เป็นการสร้างตัวดึงไว้ก่อน เเล้วค่อยดึงมาใช้อีกที
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID EruaGNRLyIbzUuvY4tAdsN8mCrH95kiwLtDQ0PsMm4o` //ตัว unsplash ตัว key ไม่ใส่ก็ รัน รูปไม่ขึ้น
  }
})

export default unsplash