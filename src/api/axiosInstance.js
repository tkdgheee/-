import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // ✅ 정확한 속성명
    headers: {
        'Content-Type' : 'application/json'
    }
})

export default axiosInstance
