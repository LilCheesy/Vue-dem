// composables/useFetch.js
// ==========================================
// 🔄 COMPOSABLES - Logic tái sử dụng (thay thế mixins)
// ==========================================
// Composables là các hàm dùng Composition API, có thể dùng lại
// ở nhiều component khác nhau. Ví dụ: useFetch, useAuth, useTheme...

import { ref } from 'vue'

/**
 * Composable để fetch dữ liệu từ URL bất kỳ.
 * Có thể dùng lại ở bất kỳ component nào.
 *
 * @param {string} url - URL cần fetch
 * @returns {{ data, error, loading, fetchData }}
 */
export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)
    const loading = ref(false)

    async function fetchData() {
        loading.value = true
        error.value = null
        try {
            const response = await fetch(url)
            if (!response.ok) throw new Error(`HTTP ${response.status}`)
            data.value = await response.json()
        } catch (err) {
            error.value = err.message
        } finally {
            loading.value = false
        }
    }

    return { data, error, loading, fetchData }
}
