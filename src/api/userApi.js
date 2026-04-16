// api/userApi.js
// ==========================================
// 🌐 API - Các hàm gọi API
// ==========================================
// Folder api/ chứa Axios instance (index.js) và các file
// gọi API theo từng module (userApi, productApi...).
// Tách riêng để dễ quản lý và tái sử dụng.

import apiClient from './index'

/**
 * Lấy danh sách users từ API
 * Dùng JSONPlaceholder làm API demo
 */
export function getUsers() {
    return apiClient.get('https://jsonplaceholder.typicode.com/users')
}

/**
 * Lấy user theo ID
 * @param {number} id
 */
export function getUserById(id) {
    return apiClient.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}
