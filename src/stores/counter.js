// stores/counter.js
// ==========================================
// 📦 STORES (Pinia) - Quản lý state toàn cục
// ==========================================
// Pinia thay thế Vuex, quản lý state chung giữa các component.
// Bất kỳ component nào cũng có thể đọc/ghi state từ store.

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    // State - dữ liệu
    const count = ref(0)
    const name = ref('Vue Demo')

    // Getters - computed từ state
    const doubleCount = computed(() => count.value * 2)

    // Actions - thay đổi state
    function increment() {
        count.value++
    }

    function decrement() {
        if (count.value > 0) count.value--
    }

    function reset() {
        count.value = 0
    }

    return { count, name, doubleCount, increment, decrement, reset }
})
