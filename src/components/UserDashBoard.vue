<template>
  <main class="flex-1 p-8 overflow-y-auto bg-gray-50 dark:bg-gray-900 h-full">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <header class="mb-8">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Welcome back, {{ userName || 'Alex' }}!
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mt-1">
          Here's a summary of your activity on DevConnect.
        </p>
      </header>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <!-- Total Posts Card -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex items-start gap-4">
          <div class="bg-blue-700/10 p-3 rounded-lg flex items-center justify-center">
            <span class="material-icons-outlined text-blue-700">article</span>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Total Posts</p>
            <p class="text-2xl font-bold text-gray-800 dark:text-gray-100">{{ stats.totalPosts }}</p>
          </div>
        </div>

        <!-- Likes Received Card -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex items-start gap-4">
          <div class="bg-red-500/10 p-3 rounded-lg flex items-center justify-center">
            <span class="material-icons-outlined text-red-500">favorite_border</span>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Likes Received</p>
            <p class="text-2xl font-bold text-gray-800 dark:text-gray-100">{{ stats.likesReceived }}</p>
          </div>
        </div>

        <!-- Comments Card -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex items-start gap-4">
          <div class="bg-green-500/10 p-3 rounded-lg flex items-center justify-center">
            <span class="material-icons-outlined text-green-500">comment</span>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Comments</p>
            <p class="text-2xl font-bold text-gray-800 dark:text-gray-100">{{ stats.comments }}</p>
          </div>
        </div>
      </div>

      <!-- Recent Activity Section -->
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Recent Activity
        </h3>

        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
          <li v-for="activity in activities" :key="activity.id"
            class="py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors rounded-lg px-2">
            <div class="flex items-center gap-4">
              <span :class="['material-icons-outlined', getIconColor(activity.type)]">
                {{ getIcon(activity.type) }}
              </span>
              <div>
                <p class="text-gray-800 dark:text-gray-100">
                  <span class="font-semibold">{{ activity.userName }}</span>
                  {{ activity.action }}
                  <span v-if="activity.postTitle" class="text-blue-700 font-medium">
                    "{{ activity.postTitle }}"
                  </span>
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ activity.timeAgo }}
                </p>
              </div>
            </div>
            <button @click="viewActivity(activity)"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100">
              <span class="material-icons-outlined">chevron_right</span>
            </button>
          </li>
        </ul>

        <!-- Empty State -->
        <div v-if="activities.length === 0" class="text-center py-12">
          <span class="material-icons-outlined text-gray-400 text-5xl">inbox</span>
          <p class="text-gray-600 dark:text-gray-400 mt-4">No recent activity yet</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { jwtDecode } from 'jwt-decode'

const authStore = useAuthStore()

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

// Stats data (replace with API call)
const stats = ref({
  totalPosts: 42,
  likesReceived: 1280,
  comments: 312
})

// Activities data (replace with API call)
const activities = ref([
  {
    id: 1,
    type: 'comment',
    userName: 'Jane Smith',
    action: 'commented on your post',
    postTitle: 'React Hooks Best Practices',
    timeAgo: '2 hours ago'
  },
  {
    id: 2,
    type: 'like',
    userName: 'John Doe',
    action: 'liked your post',
    postTitle: 'Building a REST API with Node.js',
    timeAgo: '5 hours ago'
  },
  {
    id: 3,
    type: 'follow',
    userName: 'Emily White',
    action: 'started following you.',
    postTitle: null,
    timeAgo: '1 day ago'
  },
  {
    id: 4,
    type: 'comment',
    userName: 'Chris Green',
    action: 'commented on your post',
    postTitle: 'Building a REST API with Node.js',
    timeAgo: '2 days ago'
  }
])

// Helper functions
const getIcon = (type) => {
  const icons = {
    comment: 'chat_bubble_outline',
    like: 'favorite_border',
    follow: 'person_add_alt'
  }
  return icons[type] || 'notifications'
}

const getIconColor = (type) => {
  const colors = {
    comment: 'text-green-500',
    like: 'text-red-500',
    follow: 'text-blue-500'
  }
  return colors[type] || 'text-gray-500'
}

const viewActivity = (activity) => {
  console.log('View activity:', activity)
  // Navigate to the specific post or activity
  // router.push(`/post/${activity.postId}`)
}

// Fetch data on mount (replace with actual API calls)
onMounted(async () => {
  // Example: Fetch user stats
  // const response = await fetch('/api/user/stats')
  // stats.value = await response.json()

  // Example: Fetch recent activities
  // const activitiesResponse = await fetch('/api/user/activities')
  // activities.value = await activitiesResponse.json()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

.material-icons-outlined {
  font-size: 24px;
}
</style>
