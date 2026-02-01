<template>
  <nav>
    <MobileNav class="md:hidden" />
  </nav>
  <main class="flex-1 py-6 overflow-y-auto bg-white dark:bg-gray-900 dark:text-white h-full flex flex-col space-y-10 ">
    <div class="header flex text-center w-full flex-col space-y-5">
      <h1 class="text-2xl   md:text-4xl font-bold mx-auto">Edit Your Profile </h1>
      <p class="text-lg  text-gray-600 mx-4">Keep your DevConnect profile fresh and up-to-date </p>
    </div>
    <main class="container  px-4 md:px-30 dark:bg-gray-800 dark:text-white rounded-lg shadow  py-5">
      <div class="first flex justify-start items-center  space-x-10">
        <div class="image flex space-x-4 flex-wrap">
          <div class="outer rounded-full overflow-clip mx-auto">
            <img class="h-25 w-25 md:h-30 md:w-30 object-cover" :src="imageUrl" alt="Profile">
          </div>
          <div class="flex flex-col items-center justify-center sm:items-start gap-2  flex-1">
            <div class="flex flex-wrap space-x-6">


              <input type="file" id="profile_image" accept=".png , .jpg , .jpeg" v-on:change="onImageSelect" hidden
                ref="fileInput"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm  bg-primary dark:bg-gray-900 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-800">

              <div class="space-x-4 pl-4">
                <button
                  class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-red-600 dark:text-red-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  type="button">
                  Remove
                </button>
                <button class="bg-blue-600 rounded-lg text-white px-4 py-2" @click="$refs.fileInput.click()">
                  Change Photo
                </button>
              </div>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400">JPG, GIF or PNG. Max size of 800K</p>
          </div>
        </div>
      </div>
      <hr class="bg-gray-100 m-3">
      <div class="forms px-4 py-3 space-y-5">


        <!-- name -->
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" for="post-title">Name</label>
          <input v-model="name"
            class="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            id="name" placeholder="John doe" type="text" />
        </div>


        <!-- bio -->
        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" for="post-title">Bio</label>
          <textarea name="" id="bio" v-model="bio"
            class="w-full h-auto px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors">Bio</textarea>
        </div>


        <!-- skills -->

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" for="skills">
            Skills
          </label>
          <div
            class="flex items-center gap-2 flex-wrap p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700">
            <!-- Render all skills -->
            <span v-for="(skill, index) in skills" :key="index"
              class="bg-indigo-200  flex items-center gap-1.5 bg-brand-indigo/10 dark:bg-brand-indigo/20 text-white dark:text-white text-sm font-medium px-2 py-1 rounded-full">
              {{ skill }}
              <button @click="removeSkill(index)" type="button"
                class="text-brand-indigo/60 dark:text-indigo-300/70 hover:text-brand-indigo dark:hover:text-indigo-300">
                <span class="material-icons-outlined text-[16px]">close</span>
              </button>
            </span>

            <!-- Input field -->
            <input v-model="currentSkill" @keydown.enter="addSkill"
              class="grow bg-transparent border-0 focus:ring-0 p-1 min-w-[100px] text-gray-900 dark:text-white placeholder-gray-500  focus:outline-0 dark:placeholder-gray-400"
              id="skills" name="skills" placeholder="Add a skill..." type="text" />
          </div>
          <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Press Enter to add a new skill.
          </p>
        </div>


        <!-- social links -->
        <div class="space-y-4">

          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Social Links</label>
          <div class="relative">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" for="github">Github</label>
            <input id="github" v-model="github"
              class="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm focus:border-brand-indigo focus:ring-brand-indigo sm:text-sm pl-10 text-gray-900 dark:text-white p-4"
              name="github" placeholder="GitHub Profile URL" type="url" />
          </div>

          <div class="relative ">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              for="post-title">LinkedIn</label>
            <input v-model="linkedin"
              class="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm focus:border-brand-indigo focus:ring-brand-indigo sm:text-sm pl-10 text-gray-900 dark:text-white  p-4"
              name="linkedin" placeholder="LinkedIn Profile URL" type="url" />
          </div>

          <div class="relative ">
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              for="post-title">Portfolio</label>
            <input v-model="portfolio"
              class="block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 shadow-sm focus:border-brand-indigo focus:ring-brand-indigo sm:text-sm pl-10 text-gray-900 dark:text-white  p-4"
              name="portfolio" placeholder="Portfolio URL" type="url" />
          </div>
        </div>



        <div
          class="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <router-link class="w-full sm:w-auto justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white
            dark:bg-gray-800 px-4 py-2 text-sm font-medium text-red-700 dark:text-gray-200 shadow-sm hover:bg-gray-50
            dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-indigo focus:ring-offset-2
            dark:focus:ring-offset-gray-800" to='/profile'>
            Cancel
          </router-link>

          <button @click="update_data()"
            class="w-full sm:w-auto justify-center rounded-md border border-transparent bg-brand-indigo px-4 py-2 text-sm font-medium  shadow-sm hover:bg-brand-indigo/90 focus:outline-none focus:ring-2 focus:ring-brand-indigo focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            type="submit">
            Save Changes
          </button>
        </div>

      </div>
    </main>
  </main>
</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
import { useAlertStore } from '@/stores/alerts.js';
import api from '@/services/api'
import defaut_avatar from '@/assets/images/default_user.png'
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

const alert = useAlertStore()
let name = ref('')
let bio = ref('');
let skills = ref(['node js', 'vue js', 'frontend development']);
let github = ref('')
let linkedin = ref("")
let currentSkill = ref('');
let portfolio = ref('')
let profileImage = ref('')
const fileInput = ref(null)

// Compute full image URL
const imageUrl = computed(() => {
  return buildImageUrl(profileImage.value) || defaut_avatar
})

const addSkill = (event) => {
  event.preventDefault(); // Prevent form submission if inside a form

  const trimmedSkill = currentSkill.value.trim();

  // Only add if not empty and not already in the list
  if (trimmedSkill && !skills.value.includes(trimmedSkill)) {
    skills.value.push(trimmedSkill);
    currentSkill.value = '';
  }
};


const removeSkill = (index) => {
  skills.value.splice(index, 1);
};

const update_data = async () => {
  try {
    const payload = {
      name: name,
      bio: bio.value,
      skills: Array.isArray(skills.value) ? [...skills.value] : skills.value,
      github: github.value,
      linkedin: linkedin.value,
      portfolio: portfolio.value,
    }
    let response = await api.post('/user/update/me', payload)
    if (response.status == 200) {
      console.log(response)
      alert.success('Updated Successfully!')
    }
    else {
      alert.error("Some error has occured! try again")
    }
  } catch (e) {
    if (e.status == 402) {
      alert.error("User name is taken")
    }
    else {
      console.error(e)
      alert.error(e || "some error has occured. Try again later")
    }
  }
}


onMounted(async () => {
  try {
    // let data = await axios.get(backend_url + `/user/${name}`)
    const res = await api.get('/user/me')
    console.log(res.data);
    name.value = res.data.username
    bio.value = res.data.bio
    github.value = res.data.github
    linkedin.value = res.data.linkedin
    portfolio.value = res.data.portfolio
    profileImage.value = res.data.profile_image
  } catch (e) {
    console.error(`Some error has occured! ${e}`);
  }
});


const onImageSelect = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  if (!file.type.startsWith("image/")) {
    alert("Please select an image file")
    return
  }

  if (file.size > 16 * 1024 * 1024) {
    alert.error("Image must be less than 16MB")
    return
  }

  try {
    // Create FormData with ONLY the image file
    const formData = new FormData()
    formData.append("image", file)

    const res = await api.post(
      "/user/me/profile-image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    )

    // Update image instantly
    profileImage.value = res.data.profile_image
    alert.success("Profile image updated successfully!")

  } catch (err) {
    console.error(err)
    alert.error("Failed to upload image")
  }
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

.material-icons-outlined {
  font-size: 24px;
}
</style>
