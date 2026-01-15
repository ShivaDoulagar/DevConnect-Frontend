<template>
  <nav class="bg-white shadow-md px-4 sm:px-8 md:px-12 lg:px-20 py-4 flex justify-between items-center">
    <div class="logo">
      <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">DevConnect</h1>
    </div>
    <div class="actions flex items-center gap-4">
      <!-- Show user info if authenticated -->
      <span v-if="authStore.isAuthenticated && authStore.isTokenValid" class="text-sm sm:text-base text-gray-700">
        Welcome, {{ userName || 'User' }}!
      </span>
      <!-- Logout button if authenticated -->
      <button v-if="authStore.isAuthenticated && authStore.isTokenValid" @click="handleLogout"
        class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm sm:text-base">
        Logout
      </button>
      <!-- Fallback: Sign-in link if not authenticated (though unlikely on protected routes) -->
      <router-link v-else to="/signin" class="text-blue-700 hover:underline text-sm sm:text-base">
        Sign In
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { jwtDecode } from 'jwt-decode'  // For extracting user info from token

const authStore = useAuthStore()
const router = useRouter()

// Extract user name from token (assuming JWT payload has a 'name' field; adjust if needed)
const userName = computed(() => {
  if (authStore.token) {
    try {
      const decoded = jwtDecode(authStore.token)
      return decoded.name || null  // Adjust based on your JWT structure
    } catch {
      return null
    }
  }
  return null
})

// Logout handler
const handleLogout = () => {
  authStore.logout()  // Clears token and updates state
  router.push('/signin')  // Redirect to sign-in page
}
</script>
