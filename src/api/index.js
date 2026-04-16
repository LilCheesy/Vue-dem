import axios from 'axios'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        // Có thể thêm token vào header ở đây
        // const token = localStorage.getItem('token')
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`
        // }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Xử lý lỗi chung (401, 403, 500...)
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // Redirect to login hoặc refresh token
                    break
                case 403:
                    console.error('Forbidden')
                    break
                case 500:
                    console.error('Server error')
                    break
            }
        }
        return Promise.reject(error)
    }
)

export default apiClient
