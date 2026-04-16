<!-- views/AboutView.vue -->
<!-- Demo: utils/ -->
<script setup>
import { formatDate, formatCurrency, debounce } from '@/utils'
import { ref } from 'vue'

// Demo utils
const today = formatDate(new Date())
const price = formatCurrency(1500000)

// Demo debounce
const searchText = ref('')
const debouncedResult = ref('')

const handleSearch = debounce((value) => {
  debouncedResult.value = value
}, 500)

function onInput(event) {
  searchText.value = event.target.value
  handleSearch(event.target.value)
}
</script>

<template>
  <div class="about-view">
    <h1>🛠 Demo: utils/</h1>

    <div class="demo-info">
      <h3>📦 Trang này demo folder <code>utils/</code>:</h3>
      <ul>
        <li><code>formatDate()</code> — Format ngày tháng theo locale</li>
        <li><code>formatCurrency()</code> — Format tiền tệ</li>
        <li><code>debounce()</code> — Trì hoãn thực thi hàm (hay dùng cho search)</li>
      </ul>
    </div>

    <div class="demo-grid">
      <div class="demo-card">
        <h3>📅 formatDate()</h3>
        <p>Input: <code>new Date()</code></p>
        <p>Output: <strong>{{ today }}</strong></p>
      </div>

      <div class="demo-card">
        <h3>💰 formatCurrency()</h3>
        <p>Input: <code>1500000</code></p>
        <p>Output: <strong>{{ price }}</strong></p>
      </div>

      <div class="demo-card full-width">
        <h3>⏱ debounce()</h3>
        <p>Gõ text vào ô bên dưới — kết quả chỉ cập nhật sau 500ms ngừng gõ:</p>
        <input
          type="text"
          placeholder="Thử gõ gì đó..."
          :value="searchText"
          @input="onInput"
        />
        <p>Đang gõ: <code>{{ searchText }}</code></p>
        <p>Sau debounce: <strong>{{ debouncedResult || '(chưa có)' }}</strong></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-view h1 {
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

.demo-info h3 { margin: 0 0 0.5rem; font-size: 1rem; font-weight: 600; }
.demo-info ul { padding-left: 1.25rem; margin: 0; }
.demo-info li { margin-bottom: 0.25rem; font-size: 0.9rem; }
.demo-info code { color: hsla(160, 100%, 37%, 1); font-weight: bold; }

.demo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.demo-card {
  padding: 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  background: var(--color-background-soft);
}

.demo-card.full-width {
  grid-column: 1 / -1;
}

.demo-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.demo-card code {
  color: hsla(160, 100%, 37%, 1);
}

input {
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 0.95rem;
  margin: 0.5rem 0;
  background: var(--color-background);
  color: var(--color-text);
}

input:focus {
  outline: none;
  border-color: hsla(160, 100%, 37%, 1);
}
</style>
