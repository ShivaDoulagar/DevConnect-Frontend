<template>
  <div v-if="alert.show" class="fixed top-5 right-5 px-4 py-2 rounded text-white"
    :class="alert.type === 'success' ? 'bg-green-600' : 'bg-red-600'">
    {{ alert.message }}
  </div>
</template>

<script setup>
import { useAlertStore } from '../stores/alerts.js'
const alert = useAlertStore()
</script>
