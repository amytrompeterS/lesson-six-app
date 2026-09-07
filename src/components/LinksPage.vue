<script setup lang="ts">
import { ref, onMounted } from 'vue'

const dark = ref(true)

function toggleTheme() {
  dark.value = !dark.value
  if (dark.value) document.documentElement.classList.add('dark')
  else document.documentElement.classList.remove('dark')
}

onMounted(() => {
  // default to dark
  document.documentElement.classList.add('dark')
})
</script>

<template>
  <main class="links-page">
    <div class="card">
      <button class="theme-toggle" @click="toggleTheme()">
        {{ dark ? '🌙' : '☀️' }}
      </button>

      <div class="avatar" aria-hidden="true"></div>
      <h1>Amy Trompeter</h1>
      <p class="tagline">Designer & developer — link-in-bio</p>

      <nav class="links">
        <router-link class="btn" to="/about">About</router-link>
        <a class="btn" href="#" target="_blank" rel="noopener">Portfolio</a>
        <a class="btn" href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn" href="mailto:amy@example.com">Email</a>
      </nav>
    </div>
  </main>
</template>

<style scoped>
.links-page {
  display: flex;
  min-height: 100svh;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.card {
  width: 100%;
  max-width: 480px;
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
  border-radius: 16px;
  padding: 36px 28px;
  box-shadow: var(--shadow);
  text-align: center;
  position: relative;
}

.theme-toggle {
  position: absolute;
  right: 12px;
  top: 12px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg,var(--accent),var(--accent-border));
  margin: 0 auto 16px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.25);
}

h1 {
  margin: 8px 0 4px;
}
.tagline {
  margin: 0 0 20px;
  color: var(--text);
}

.links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  display: inline-block;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 10px;
  background: var(--bg);
  color: var(--text-h);
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.18);
}

@media (max-width: 480px) {
  .card { padding: 28px 18px }
}
</style>
