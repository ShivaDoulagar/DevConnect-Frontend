<template>
  <nav>
    <MobileNav class="md:hidden" />
  </nav>
  <main
    class="flex-1 p-8 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white h-full flex flex-col space-y-10  z-10">
    <div
      class="up   flex justify-between space-x-3 rounded-xl overflow-hidden flex-col md:flex-row  h-auto md:p-8 bg-white dark:bg-gray-800 py-3  shadow-lg">
      <div class="left flex-1 flex justify-center align-top ">
        <div class="relative group">
          <div
            class="image rounded-full overflow-hidden object-fill  flex justify-center items-center dark:border-gray-600 shadow-lg   md:h-50 md:w-50 w-30 h-30">
            <img class="h-full w-full object-cover" :src="imageUrl" alt="Profile image">
          </div>
          <!-- Upload button overlay -->
          <button @click="triggerFileInput"
            class="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
            <span class="material-icons-outlined text-white text-3xl">camera_alt</span>
          </button>
        </div>
        <!-- Hidden file input -->
        <input ref="fileInput" type="file" accept="image/png,image/jpeg,image/jpg" @change="handleImageUpload"
          class="hidden" />
      </div>
      <div class="right  flex-4  flex flex-col space-y-6">
        <div class=" flex-2 flex justify-between items-center px-10 md:flex-row flex-col space-y-3">



          <div v-if="portfolio" class="username text-center">
            <a :href="portfolio" target="__blank">
              <h1 class="text-3xl font-bold"> {{ name[0] + name.slice(1).toLowerCase() }}</h1>
            </a>
          </div>
          <div v-else class="username text-center">
            <a :href="portfolio">
              <h1 class="text-3xl font-bold"> {{ name[0] + name.slice(1).toLowerCase() }}</h1>
            </a>
          </div>



          <div class="edit_profile flex">
            <router-link to="/edit_profile"
              class="border-2 rounded px-4 py-2 cursor-pointer sm:flex-1 text-center flex items-center gap-2 "
              username='shiva'>
              <span class="material-icons-outlined">edit</span>
              Edit Profile</router-link>
          </div>
        </div>
        <div class=" flex-1 px-10 ">
          <p v-if="bio && bio.trim()" class="text-gray-500 text-sm text-center md:text-start md:text-lg ">{{ bio }}</p>
          <p v-else class="text-gray-500 text-sm text-center md:text-start md:text-lg ">Add Your bio</p>
        </div>
        <div class=" flex-1 px-10 flex items-center justify-center md:justify-start">
          <div class="flex items-center justify-center md:justify-start space-x-4 mb-5">
            <a v-if="github && github.trim()" target="__blank"
              class="text-gray-500 dark:text-gray-400 hover:text-prim  ary dark:hover:text-blue-400 flex items-center"
              :href="github">
              <svg aria-hidden="true" class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.853 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                  fill-rule="evenodd"></path>
              </svg>
              GitHub
            </a>
            <router-link to="/edit_profile" v-else
              class="text-gray-500 dark:text-gray-400 hover:text-prim  ary dark:hover:text-blue-400 flex items-center">
              <svg aria-hidden="true" class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.853 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                  fill-rule="evenodd"></path>
              </svg>
              Add
              Github </router-link>
            <a v-if="linkedin && linkedin.trim()" target="__blank"
              class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 flex items-center"
              :href="linkedin">
              <svg aria-hidden="true" class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                </path>
              </svg>
              LinkedIn
            </a>
            <router-link to="/edit_profile" v-else
              class="text-gray-500 dark:text-gray-400 hover:text-prim  ary dark:hover:text-blue-400 flex items-center">
              <svg aria-hidden="true" class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                </path>
              </svg>
              Add
              LinkedIn </router-link>
          </div>
        </div>
        <div class=" flex-1 px-10">
          <div class="flex flex-wrap gap-2 justify-center md:justify-start">
            <span v-for="(skill, index) in skills" :key="index"
              class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 .2 rounded-full">{{
                skill }}</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="down flex-2 lex justify-between space-x-3 rounded-xl overflow-hidden flex-col md:flex-row  h-auto md:p-8 py-3 ">
      <div class="border-b border-gray-200 dark:border-gray-700">
        <nav aria-label="Tabs" class="-mb-px flex space-x-8">
          <a class="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            href="#">Posts</a>
          <a class="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            href="#">Likes</a>
          <a class="border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            href="#">Comments</a>
        </nav>
      </div>
      <div class="mt-6 space-y-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 text-center shadow-lg">
          <div class="flex flex-col items-center justify-center h-48">
            <span class="material-symbols-outlined text-5xl text-gray-400 dark:text-gray-500">article</span>
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mt-2">No Posts Yet</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">Posts from Alex will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>

import { onMounted, ref, computed } from 'vue';
import api from '@/services/api'
import MobileNav from './MobileNav.vue';

// Helper function to build image URL using api's baseURL
const buildImageUrl = (imagePath) => {
  if (!imagePath) return null
  if (imagePath.startsWith('http')) return imagePath

  // Get the base URL from the api axios instance
  const baseURL = api.defaults.baseURL || import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'
  const cleanBaseURL = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  return `${cleanBaseURL}${cleanPath}`
}


let name = ref('')
let bio = ref('');
let skills = ref(['node js', 'vue js', 'frontend development']);
let github = ref('')
let linkedin = ref("")
let portfolio = ref('')
let profileImage = ref('')
let isUploading = ref(false)
let fileInput = ref(null)

// Compute full image URL
const imageUrl = computed(() => {
  return buildImageUrl(profileImage.value) || 'https://imgs.search.brave.com/sqQQjsEwVRvUPDbhEHjO6WMPp-kvO1lcI1p9CFx3NI4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYXgt/dmVyc3RhcHBlbi1t/YXgtdmVyc3RhcHBl/bi1hc3Rvbi1tYXJ0/aW4tcmVkLWJ1bGwt/cmFjaW5nLXBhZGRv/Y2stcHJldmlld3Mt/YWhlYWQtZi1ncmFu/ZC1wcml4LW1vbmFj/by0xODYzNzU2MTQu/anBn'
})

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleImageUpload = async (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  // Validate file
  const validTypes = ['image/png', 'image/jpeg', 'image/jpg']
  if (!validTypes.includes(file.type)) {
    alert('Please upload a PNG or JPG image')
    return
  }

  if (file.size > 16 * 1024 * 1024) {
    alert('File size must be less than 16MB')
    return
  }

  try {
    isUploading.value = true
    const formData = new FormData()
    formData.append('image', file)

    const response = await api.post('user/me/profile-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    if (response.data.profile_image) {
      profileImage.value = response.data.profile_image
      alert('Profile image updated successfully!')
    }
  } catch (error) {
    console.error('Upload error:', error)
    alert('Failed to upload image. Please try again.')
  } finally {
    isUploading.value = false
    // Reset file input
    event.target.value = ''
  }
}

onMounted(async () => {
  try {
    let data = await api.get('user/me')
    name.value = data.data.username
    bio.value = data.data.bio
    github.value = data.data.github
    linkedin.value = data.data.linkedin
    portfolio.value = data.data.portfolio
    profileImage.value = data.data.profile_image
    console.log(data.data)
  } catch (e) {
    console.log(`some error ${e}`)
  }
})



</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

.material-icons-outlined {
  font-size: 24px;
}
</style>
