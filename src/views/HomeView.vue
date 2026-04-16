<!-- views/HomeView.vue -->
<!-- ==========================================
  📄 VIEWS - Các trang chính của ứng dụng
  ==========================================
  Views là các component đại diện cho MỘT TRANG.
  Mỗi view được gắn với một route trong router/.
  Views sử dụng components, stores, composables, utils...
-->
<script setup>
import { useI18n } from 'vue-i18n'

// 🌍 LOCALES (i18n) - Đa ngôn ngữ
const { t, locale } = useI18n()

function toggleLanguage() {
  locale.value = locale.value === 'vi' ? 'en' : 'vi'
}
</script>

<template>
  <div class="home">
    <h1>🏠 {{ t('common.home') }}</h1>
    <p>{{ t('message.welcome') }}</p>

    <div class="demo-section">
      <h2>🌍 Demo: locales/ (i18n)</h2>
      <p class="explain">
        Folder <code>locales/</code> chứa file dịch ngôn ngữ (vi.json, en.json).
        Khi chuyển ngôn ngữ, toàn bộ text trong app thay đổi theo.
      </p>
      <p>Ngôn ngữ hiện tại: <strong>{{ locale === 'vi' ? 'Tiếng Việt 🇻🇳' : 'English 🇬🇧' }}</strong></p>
      <button @click="toggleLanguage">
        Chuyển sang {{ locale === 'vi' ? 'English' : 'Tiếng Việt' }}
      </button>
    </div>

    <div class="demo-section">
      <h2>📁 Tổng quan cấu trúc dự án</h2>
      <div class="folder-list">
        <div class="folder-item"><code>api/</code> — Gọi API bằng Axios → <router-link to="/users">Xem demo Users</router-link></div>
        <div class="folder-item"><code>components/</code> — Component tái sử dụng → <router-link to="/users">Xem UserCard</router-link></div>
        <div class="folder-item"><code>composables/</code> — Logic tái sử dụng → <router-link to="/users">Xem useFetch</router-link></div>
        <div class="folder-item"><code>layouts/</code> — Khung giao diện (Header + Nav + Footer bạn đang thấy)</div>
        <div class="folder-item"><code>locales/</code> — Đa ngôn ngữ → Bấm nút ở trên ☝️</div>
        <div class="folder-item"><code>router/</code> — Điều hướng trang → Click các link trên thanh Nav</div>
        <div class="folder-item"><code>stores/</code> — State toàn cục (Pinia) → <router-link to="/counter">Xem demo Counter</router-link></div>
        <div class="folder-item"><code>utils/</code> — Hàm tiện ích → <router-link to="/about">Xem demo format</router-link></div>
        <div class="folder-item"><code>views/</code> — Các trang này chính là views!</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
}

.home h1 {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.demo-section {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  text-align: left;
  background: var(--color-background-soft);
}

.demo-section h2 {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  color: var(--color-heading);
}

.explain {
  font-size: 0.9rem;
  color: var(--vt-c-text-light-2);
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

button {
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 6px;
  background: hsla(160, 100%, 37%, 1);
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;
}

button:hover {
  background: hsla(160, 100%, 30%, 1);
}

.folder-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.folder-item {
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  background: var(--color-background);
  font-size: 0.9rem;
}

.folder-item code {
  font-weight: bold;
  color: hsla(160, 100%, 37%, 1);
}
</style>
