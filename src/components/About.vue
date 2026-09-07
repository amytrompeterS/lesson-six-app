<script setup lang="ts">
</script>

<template>
  <main class="links-page">
    <div class="card">
      <h1>About</h1>
      <p class="tagline">Hi — I'm Amy. I build interfaces and tools.</p>
      <p style="margin-top:16px">This is a small link-in-bio demo built with Vue 3 + TypeScript + Vite.</p>
      <div style="margin-top:20px">
        <router-link to="/" class="btn">← Back</router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.tagline { margin: 8px 0 0; color: var(--text); }
.btn { display:inline-block; margin-top:8px }
</style>
