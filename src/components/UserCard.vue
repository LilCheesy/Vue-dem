<!-- components/UserCard.vue -->
<!-- ==========================================
  🧩 COMPONENTS - Component dùng chung, tái sử dụng
  ==========================================
  Components ở đây là các "khối" UI nhỏ, có thể dùng lại
  ở nhiều trang (views) khác nhau. Ví dụ: Button, Modal, Card...
-->
<script setup>
defineProps({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
})
</script>

<template>
  <div class="user-card">
    <div class="user-avatar">{{ name.charAt(0).toUpperCase() }}</div>
    <div class="user-info">
      <h3>{{ name }}</h3>
      <p class="email">📧 {{ email }}</p>
      <p v-if="phone" class="phone">📱 {{ phone }}</p>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-background-soft);
  transition: transform 0.2s, box-shadow 0.2s;
}

.user-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: hsla(160, 100%, 37%, 1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
  flex-shrink: 0;
}

.user-info h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-heading);
}

.user-info p {
  margin: 0.25rem 0 0;
  font-size: 0.85rem;
}
</style>
