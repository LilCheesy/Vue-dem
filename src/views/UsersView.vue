<!-- views/UsersView.vue -->
<!-- Demo: api/, components/, composables/ -->
<script setup>
import { onMounted } from 'vue'
import UserCard from '@/components/UserCard.vue'
import { useFetch } from '@/composables/useFetch'

// 🔄 COMPOSABLES - useFetch để fetch dữ liệu
const { data: users, loading, error, fetchData } = useFetch(
  'https://jsonplaceholder.typicode.com/users'
)

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="users-view">
    <h1>👥 Danh sách Users</h1>

    <div class="demo-info">
      <h3>📦 Trang này demo 3 folders:</h3>
      <ul>
        <li><code>api/</code> — Dùng Axios instance để gọi API (xem file <code>api/userApi.js</code>)</li>
        <li><code>composables/</code> — Dùng <code>useFetch()</code> để fetch dữ liệu, có loading/error state</li>
        <li><code>components/</code> — Dùng <code>&lt;UserCard /&gt;</code> để hiển thị mỗi user</li>
      </ul>
    </div>

    <!-- Loading state -->
    <p v-if="loading" class="status">⏳ Đang tải dữ liệu...</p>

    <!-- Error state -->
    <p v-else-if="error" class="status error">❌ Lỗi: {{ error }}</p>

    <!-- Data -->
    <div v-else-if="users" class="user-list">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :email="user.email"
        :phone="user.phone"
      />
    </div>
  </div>
</template>

<style scoped>
.users-view h1 {
  font-size: 1.75rem;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.demo-info {
  padding: 1rem 1.25rem;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.demo-info h3 {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.demo-info ul {
  padding-left: 1.25rem;
  margin: 0;
}

.demo-info li {
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.demo-info code {
  color: hsla(160, 100%, 37%, 1);
  font-weight: bold;
}

.user-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.status {
  text-align: center;
  font-size: 1.1rem;
  padding: 2rem;
}

.status.error {
  color: #e74c3c;
}
</style>
