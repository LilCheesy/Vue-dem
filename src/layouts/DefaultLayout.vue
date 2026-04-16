<!-- layouts/DefaultLayout.vue -->
<!-- ==========================================
  🖼 LAYOUTS - Khung giao diện
  ==========================================
  Layout định nghĩa CẤU TRÚC CHUNG cho các trang:
  Header, Sidebar, Footer... Nội dung trang được đặt
  trong <router-view /> bên trong layout.
  
  Có thể tạo nhiều layout: DefaultLayout, AdminLayout, AuthLayout...
-->
<script setup>
import { useCounterStore } from '@/stores/counter'

// Hiển thị counter trên nav để chứng minh state toàn cục
const counter = useCounterStore()
</script>

<template>
  <div class="default-layout">
    <header class="app-header">
      <div class="brand">📦 Vue Demo</div>
      <nav>
        <router-link to="/">🏠 Home</router-link>
        <router-link to="/users">👥 Users</router-link>
        <router-link to="/counter">🔢 Counter ({{ counter.count }})</router-link>
        <router-link to="/about">🛠 Utils</router-link>
      </nav>
    </header>

    <main class="app-main">
      <router-view />
    </main>

    <footer class="app-footer">
      <p>📂 Layout này nằm trong <code>layouts/DefaultLayout.vue</code> — Mọi trang đều dùng chung khung này</p>
    </footer>
  </div>
</template>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  padding: 0.75rem 2rem;
  background-color: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.brand {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-heading);
}

.app-header nav {
  display: flex;
  gap: 0.25rem;
}

.app-header nav a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
  font-size: 0.9rem;
}

.app-header nav a:hover {
  background: var(--color-background-mute);
}

.app-header nav a.router-link-active {
  background: hsla(160, 100%, 37%, 0.15);
  color: hsla(160, 100%, 37%, 1);
  font-weight: 600;
}

.app-main {
  flex: 1;
  padding: 2rem;
}

.app-footer {
  padding: 1rem 2rem;
  text-align: center;
  background-color: var(--color-background-soft);
  border-top: 1px solid var(--color-border);
  font-size: 0.85rem;
}

.app-footer code {
  color: hsla(160, 100%, 37%, 1);
  font-weight: bold;
}
</style>
