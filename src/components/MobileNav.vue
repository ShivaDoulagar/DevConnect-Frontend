<template>
  <nav>
    <div class="w-full flex justify-between px-6 items-center md:px-36 ">
      <div class="left flex flex-row items-center justify-center space-x-3  md:justify-start">
        <div>
          <div class="material-icons-outlined text-white h-full bg-blue-600 md:p-2 p-1 rounded-lg md:text-2xl text-sm">
            code
          </div>
        </div>
        <div>
          <h1 class="text-lg md:text-2xl font-bold py-4 ">DevConnect</h1>
        </div>
      </div>
      <div class="right  md:flex items-center">
        <div class="login flex justify-around gap-3">
          <button class="material-icons-outlined  cursor-pointer h-full  p-2 rounded-lg " @click="toggle_menu">
            {{ isMenuopen ? 'close' : 'dehaze' }}
          </button>
        </div>
      </div>

      <div v-show="isMenuopen"
        class="menu absolute w-[90vw]  p-4  top-20  bg-white shadow-2xl rounded dark:bg-gray-800 z-20 transform transition-transform duration-300 ease-in-out ">
        <div class="w-full h-full   z-15">
          <router-link to="/feed">
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

              <router-link to="/edit_profile"
                class="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                active-class="bg-blue-700/10 text-blue-700">
                <span class="material-icons-outlined">settings</span>
                Settings
              </router-link>
            </nav>

          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>


<script setup>
import { ref } from 'vue';


let isMenuopen = ref(false)

const toggle_menu = () => {
  if (isMenuopen.value) {
    isMenuopen.value = false;
  }
  else {
    isMenuopen.value = true;
  }
}

</script>


<style scoped>
/* Import Material Icons if not already in your main app */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

.material-icons-outlined {
  font-size: 24px;
}
</style>
