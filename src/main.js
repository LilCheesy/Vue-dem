import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import pinia from './stores'

// Import locales
import vi from './locales/vi.json'
import en from './locales/en.json'

// Cấu hình i18n
const i18n = createI18n({
    legacy: false, // Sử dụng Composition API mode
    locale: import.meta.env.VITE_DEFAULT_LOCALE || 'vi',
    fallbackLocale: 'en',
    messages: { vi, en },
})

// Khởi tạo ứng dụng
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')
