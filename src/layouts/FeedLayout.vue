<template>
  <main class="bg-gray-100 w-screen min-h-screen h-screen dark:bg-black dark:text-white">
    <nav class="dark:bg-gray-900 bg-white">
      <div class="w-screen flex justify-between items-center px-2 py-3">
        <div class="header flex items-center gap-3 px-5">
          <div class="logo bg-blue-700 p-2 rounded-lg flex items-center justify-center">
            <span class="material-icons-outlined text-white">code</span>
          </div>
          <h1 class="font-bold text-2xl">DevConnect</h1>
        </div>
        <div class="right items-center gap-4 hidden md:flex">
          <div class="search flex items-center dark:bg-black px-4 py-2 rounded-xl w-80 space-x-1">
            <span class="material-icons-outlined">search</span>
            <input type="text" placeholder="Search..." class="tex-gray-700 outline-none" />
          </div>
          <div class="flex space-x-5 items-center ">
            <router-link class="flex items-center bg-blue-600 text-white px-3 py-2 rounded-lg" to="/create-post">
              <span class="material-icons-outlined text-white">add</span>
              Create Post
            </router-link>
            <router-link to="/notifications"><span class="material-icons-outlined">notifications </span></router-link>
            <router-link to="/profile"><span class="material-icons-outlined">account_circle </span></router-link>
          </div>
        </div>
      </div>
    </nav>
    <div
      class="h-[92%] m-2 mx-auto rounded-lg p-1 overflow-y-auto flex md:flex-row flex-col flex-wrap outer-container ">
      <div class="flex-1 px-3 hidden md:block">
        <div class="nav rounded-lg hidden md:block">
          <nav class="flex-1 p-4 space-y-2 dark:bg-gray-900 rounded-lg bg-white">
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
        </div>
      </div>
      <div class="md:flex-5 w-screen rounded-xl flex justify-around items-start space-x-3 flex-col md:flex-row  gap-3">
        <div class="flex-3 bg h-full rounded-lg p-x-3  ">
          <PostCard />
        </div>
        <div class="flex-1 flex flex-col space-y-3">
          <div class="rounded-lg dark:bg-gray-900 mx-2">
            <TrendingCard />
          </div>

          <div class="rounded-lg dark:bg-gray-900 ">
            <SuggestedDevelopers />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import PostCard from '@/components/PostCard.vue'
import TrendingCard from '@/components/TrendingCard.vue'
import SuggestedDevelopers from '@/components/SuggestedDevelopers.vue'

// import Feed from '@/components/Feed.vue';
</script>

<style scoped>
.material-icons-outlined {
  font-size: 24px;
}
</style>
