<template>
  <aside class="w-full bg-white dark:bg-gray-800 flex flex-col border-r border-gray-200 dark:border-gray-700 h-screen">
    <!-- Logo Header -->
    <div class="p-6 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700">
      <div class="bg-blue-700 p-2 rounded-lg flex items-center justify-center">
        <span class="material-icons-outlined text-white">code</span>
      </div>
      <h1 class="text-xl font-bold text-gray-800 dark:text-gray-100">DevConnect</h1>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 p-4 space-y-2">
      <router-link to="/home"
        class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        active-class="bg-blue-700/10 text-blue-700">
        <span class="material-icons-outlined">dashboard</span>
        Dashboard
      </router-link>

      <router-link to="/feed"
        class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        active-class="bg-blue-700/10 text-blue-700">
        <span class="material-icons-outlined">feed</span>
        Feed
      </router-link>

      <router-link to="/profile"
        class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        active-class="bg-blue-700/10 text-blue-700">
        <span class="material-icons-outlined">person</span>
        My Profile
      </router-link>

      <router-link to="/create-post"
        class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        active-class="bg-blue-700/10 text-blue-700">
        <span class="material-icons-outlined">add_circle_outline</span>
        Create Post
      </router-link>

      <router-link to="/notifications"
        class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        active-class="bg-blue-700/10 text-blue-700">
        <span class="material-icons-outlined">notifications</span>
        Notifications
      </router-link>

      <router-link to="/settings"
        class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        active-class="bg-blue-700/10 text-blue-700">
        <span class="material-icons-outlined">settings</span>
        Settings
      </router-link>
    </nav>

    <!-- User Profile Section -->
    <div class="p-6 border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-center gap-3">
        <img :src="userAvatar" alt="User avatar" class="w-10 h-10 rounded-full object-cover" />
        <div class="flex-1">
          <router-link to="/profile">
            <p class="font-semibold text-gray-800 dark:text-gray-100">
              {{ userName || 'User' }}
            </p>
          </router-link>
          <button v-if="authStore.isAuthenticated && authStore.isTokenValid" @click="handleLogout"
            class="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 cursor-pointer">
            Logout
          </button>
          <router-link v-else to="/signin" class="text-sm text-blue-700 hover:underline">
            Sign In
          </router-link>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { jwtDecode } from 'jwt-decode'

const authStore = useAuthStore()
const router = useRouter()

// Extract user name from token
const userName = computed(() => {
  if (authStore.token) {
    try {
      const decoded = jwtDecode(authStore.token)
      return decoded.name || null
    } catch {
      return null
    }
  }
  return null
})

// User avatar (you can customize this based on your needs)
const userAvatar = computed(() => {
  return 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCGsXheDoaygNkVs3MCAIaRi46S6LFF0pBPA9l40xJ6vxqzEMhyPLKYtzn3Y-i4d977JXcicykgXTCBZsqfZYBYUXttsEdHj6HZ2WuRLhoPBZKJ1eHRekI8J6J_DAr7KK440zyY3NTzNngIfhro8tikWiFsEQeJf6nDObinh-mRqVhzoAEirEatXRvpKm-B6Z_uFuhJKUFh-mAKLGAZAUIrsclCtET-MKCCdsMtNImLA8UXIlfR0sM0ROsFzq3cJh4Zzf9_ILsUeAy'
})

// Logout handler
const handleLogout = () => {
  authStore.logout()
  router.push('/signin')
}
</script>

<style scoped>
/* Import Material Icons if not already in your main app */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

.material-icons-outlined {
  font-size: 24px;
}
</style>
