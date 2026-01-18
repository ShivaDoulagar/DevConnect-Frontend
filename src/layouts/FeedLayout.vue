<template>
  <main class="bg-gray-200 w-screen min-h-screen h-screen">
    <nav class="bg-white">
      <div class="w-screen flex justify-between items-center px-2 py-3">
        <div class="header flex items-center gap-3">
          <div class="logo bg-blue-700 p-2 rounded-lg flex items-center justify-center">
            <span class="material-icons-outlined text-white">code</span>
          </div>
          <h1 class="font-bold text-2xl">DevConnect</h1>
        </div>
        <div class="right items-center gap-4 hidden md:flex">
          <div class="search flex items-center bg-gray-200 px-4 py-2 rounded-xl w-80 space-x-1">
            <span class="material-icons-outlined text-gray-500">search</span>
            <input type="text" placeholder="Search..." class="tex-gray-700" />
          </div>
          <div class="flex space-x-5">
            <button class="flex items-center bg-blue-600 text-white px-3 py-2 rounded-lg">
              <span class="material-icons-outlined text-white">add</span>
              Create Post
            </button>
            <button><span class="material-icons-outlined text-black">notifications </span></button>
            <button><span class="material-icons-outlined text-black">account_circle </span></button>
          </div>
        </div>
      </div>
    </nav>
    <div class="h-[92%] m-2 mx-auto rounded-lg p-1 overflow-y-auto flex">
      <div class="flex-1 px-3 hidden md:block">
        <div class="nav rounded-lg hidden md:block">
          <nav class="flex-1 p-4 space-y-2 bg-white rounded-lg">
            <router-link to="/dashboard"
              class="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-700/10 text-blue-700 font-semibold"
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
        </div>
      </div>
      <div class="md:flex-5 w-screen rounded-xl flex justify-around items-start space-x-3">
        <div class="flex-3 bg h-full rounded-lg p-3">
          <PostCard />
        </div>
        <div class="flex-1 flex flex-col space-y-3">
          <div class="bg-white rounded-lg">
            <TrendingCard />
          </div>

          <div class="bg-white rounded-lg">suggested developers</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import PostCard from '@/components/PostCard.vue'
import TrendingCard from '@/components/TrendingCard.vue'

// import Feed from '@/components/Feed.vue';
</script>

<style scoped>
.material-icons-outlined {
  font-size: 24px;
}
</style>
