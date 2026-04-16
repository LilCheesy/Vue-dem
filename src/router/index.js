// router/index.js
// ==========================================
// 🗺 ROUTER - Điều hướng các trang
// ==========================================
// Router quản lý URL → component nào được hiển thị.
// Dùng lazy loading (import()) để chỉ tải trang khi cần.

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: 'Trang chủ' },
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import('@/views/UsersView.vue'),
        meta: { title: 'Danh sách Users' },
    },
    {
        path: '/counter',
        name: 'Counter',
        component: () => import('@/views/CounterView.vue'),
        meta: { title: 'Counter Demo' },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutView.vue'),
        meta: { title: 'Utils Demo' },
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

// Navigation guard - tự động cập nhật title theo route
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Vue App'
    next()
})

export default router
