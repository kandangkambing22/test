import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

axios.interceptors.request.use(
    function (config) {
        const auth = useAuthStore()
        config.headers['Authorization'] = auth.token ? `Bearer ${auth.token}` : ''
        config.headers['Content-Type'] = 'application/json'
        return config
    },
    function (error) {
        throw Promise.reject(error)
    }
)

axios.interceptors.response.use(
    function (response) {
        response = typeof response.data !== undefined ? response.data : response
        return response
    },
    function (error) {
        return error.response.data
    }
)

export default axios
