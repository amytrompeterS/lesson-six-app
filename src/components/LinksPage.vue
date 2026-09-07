<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = ref(theme.global.name.value === 'dark')

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
  isDark.value = !isDark.value
}

const buttons = [
  { label: 'About', to: '/about', icon: 'mdi-information-outline' },
  { label: 'Portfolio', href: '#', icon: 'mdi-briefcase-outline' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'mdi-linkedin' },
  { label: 'Email', href: 'mailto:amy@example.com', icon: 'mdi-email-outline' },
]

onMounted(() => {
  // default theme
  theme.global.name.value = 'dark'
  isDark.value = true
})
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card class="pa-6" elevation="6">
              <div class="d-flex justify-end">
                <v-btn icon @click="toggleTheme">
                  <v-icon>{{ isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}</v-icon>
                </v-btn>
              </div>

              <div class="d-flex flex-column align-center">
                <v-avatar size="96" class="mb-4" color="primary">
                  <v-icon size="36">mdi-account</v-icon>
                </v-avatar>
                <h1 class="text-h5 name"><span>Amy</span><span class="last">Trompeter</span></h1>
                <div class="mb-4">Designer & developer — link-in-bio</div>

                <v-row dense>
                  <v-col cols="12" v-for="(btn, i) in buttons" :key="i" class="mb-2">
                    <v-btn
                      v-if="btn.href"
                      :href="btn.href"
                      target="_blank"
                      rel="noopener"
                      style="width:100%"
                      variant="tonal"
                    >
                      <v-icon left>{{ btn.icon }}</v-icon>
                      {{ btn.label }}
                    </v-btn>

                    <v-btn v-else :to="btn.to" style="width:100%" variant="tonal">
                      <v-icon left>{{ btn.icon }}</v-icon>
                      {{ btn.label }}
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.name .last { margin-left: 8px; }
</style>

