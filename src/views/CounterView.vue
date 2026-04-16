<!-- views/CounterView.vue -->
<!-- Demo: stores/ (Pinia) -->
<script setup>
import { useCounterStore } from '@/stores/counter'

// 📦 STORES (Pinia) - Lấy store ra dùng
const counter = useCounterStore()
</script>

<template>
  <div class="counter-view">
    <h1>🔢 Demo: stores/ (Pinia)</h1>

    <div class="demo-info">
      <h3>📦 Trang này demo folder <code>stores/</code>:</h3>
      <ul>
        <li><code>stores/counter.js</code> — Định nghĩa state, getters, actions</li>
        <li>State là dữ liệu chung, bất kỳ component nào cũng truy cập được</li>
        <li>Dù chuyển sang trang khác rồi quay lại, giá trị vẫn được giữ!</li>
      </ul>
    </div>

    <div class="counter-box">
      <div class="counter-display">
        <span class="label">Count:</span>
        <span class="value">{{ counter.count }}</span>
      </div>

      <div class="counter-display">
        <span class="label">Double (getter):</span>
        <span class="value secondary">{{ counter.doubleCount }}</span>
      </div>

      <div class="counter-actions">
        <button class="btn decrement" @click="counter.decrement">➖</button>
        <button class="btn reset" @click="counter.reset">🔄 Reset</button>
        <button class="btn increment" @click="counter.increment">➕</button>
      </div>

      <p class="hint">
        💡 Thử tăng counter, chuyển sang trang khác, rồi quay lại — giá trị vẫn giữ nguyên!
      </p>
    </div>
  </div>
</template>

<style scoped>
.counter-view h1 {
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

.counter-box {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-background-soft);
  text-align: center;
}

.counter-display {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.label {
  font-size: 1rem;
  color: var(--color-text);
}

.value {
  font-size: 2.5rem;
  font-weight: bold;
  color: hsla(160, 100%, 37%, 1);
}

.value.secondary {
  font-size: 1.5rem;
  color: var(--vt-c-indigo);
}

.counter-actions {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin: 1.5rem 0 1rem;
}

.btn {
  padding: 0.6rem 1.25rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.15s, background 0.3s;
}

.btn:hover {
  transform: scale(1.05);
}

.btn.increment { background: hsla(160, 100%, 37%, 1); color: white; }
.btn.decrement { background: #e74c3c; color: white; }
.btn.reset { background: var(--color-background-mute); color: var(--color-text); }

.hint {
  font-size: 0.85rem;
  color: var(--vt-c-text-light-2);
  margin-top: 0.5rem;
}
</style>
