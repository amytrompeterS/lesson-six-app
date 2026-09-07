<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  url: string
  icon?: string
}>()

const isInternal = computed(() => props.url && props.url.startsWith('/'))
</script>

<template>
  <div>
    <v-btn v-if="isInternal" :to="props.url" variant="tonal" style="width:100%">
      <v-icon v-if="props.icon" left>{{ props.icon }}</v-icon>
      {{ props.label }}
    </v-btn>

    <v-btn v-else :href="props.url" target="_blank" rel="noopener" variant="tonal" style="width:100%">
      <v-icon v-if="props.icon" left>{{ props.icon }}</v-icon>
      {{ props.label }}
    </v-btn>
  </div>
</template>
