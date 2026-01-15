<template>
  <div
    class="main  bg-gray-200 w-screen min-h-screen flex justify-center items-center flex-col gap-6 py-12 dark:bg-gray-800 dark:text-white">
    <div class="heading text-center space-y-3">
      <h1 class="text-4xl font-bold"> Dev<span class="text-blue-500">Connect</span></h1>
      <p class="text-[calc(3.4rem-24px)]">Join the developer community</p>
    </div>
    <div class="w-[90vw] md:w-[30vw] bg-white p-8 rounded shadow-lg mt-6 dark:bg-gray-900 dark:text-white">
      <form class="flex flex-col gap-5" @submit.prevent="register">
        <!-- user -->
        <div class="input-group flex flex-col">
          <label for="name" class="mb-2 font-semibold text-gray-600">Name:</label>
          <div class="shadow-lg w-full flex border-gray-200 border rounded-lg items-center">
            <div class=" flex items-center">
              <img :src="user_icon" alt="name" class="inline w-5  ml-2   opacity-50" />
            </div>
            <input v-model="name" type="text" id="name"
              class="border flex-1  border-none  p-2 rounded-lg focus:outline-none" placeholder="Enter your email" />
          </div>
        </div>
        <!-- mail -->
        <div class="input-group flex flex-col">
          <label for="email" class="mb-2 font-semibold text-gray-600">Email:</label>
          <div class="shadow-lg w-full flex border-gray-200 border rounded-lg items-center">
            <div class=" flex items-center">
              <img :src="mail_icon" alt="mailicon" class="inline w-5  ml-2   opacity-50" />
            </div>
            <input v-model="mail" type="email" id="email"
              class="border flex-1  border-none  p-2 rounded-lg focus:outline-none" placeholder="Enter your email" />
          </div>
        </div>
        <!-- password -->
        <div class="input-group flex flex-col">
          <label for="password" class="mb-2 font-semibold text-gray-600">Password:</label>
          <div class="shadow-lg w-full flex border-gray-200 border rounded-lg items-center">
            <div class=" flex items-center">
              <img :src="password_icon" alt="password" class="inline w-5  ml-2   opacity-50" />
            </div>
            <input v-model="password" type="password" id="password"
              class="border flex-1  border-none  p-2 rounded-lg focus:outline-none" placeholder="Enter your password" />
          </div>
        </div>
        <!-- confirm password -->
        <div class="input-group flex flex-col">
          <label for="confirm password" class="mb-2 font-semibold text-gray-600">Confirm Password:</label>
          <div class="shadow-lg w-full flex border-gray-200 border rounded-lg items-center">
            <div class=" flex items-center">
              <img :src="password_icon" alt="confirm password" class="inline w-5  ml-2   opacity-50" />
            </div>
            <input v-model="confirm_password" type="password" id="confirm_password"
              class="border flex-1  border-none  p-2 rounded-lg focus:outline-none" placeholder="Confirm Password" />
          </div>
        </div>
        <button type="submit" class="bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 mt-4">Sign In</button>
        <div class="flex justify-center">
          <router-link to="/signin">Already have an account? Sign In</router-link>
        </div>
      </form>

    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import mail_icon from "../assets/images/mail.svg";
import password_icon from "../assets/images/password.svg";
import user_icon from "../assets/images/user.svg";
import axios from "axios";
import { useAlertStore } from '@/stores/alerts.js';

const alert = useAlertStore()

const password = ref("");
const confirm_password = ref("");
const mail = ref("");
const name = ref("");

let backend_url = import.meta.env.VITE_API_BASE_URL;


const checkPasswordMatch = () => {
  if (password.value !== confirm_password.value) {
    alert.showAlert("Passwords do not match!", 4000);
    return false;
  }
  return true;
};

const register = async () => {
  try {
    if (!checkPasswordMatch()) return;
    const response = await axios.post(backend_url + "/auth/register", {
      name: name.value,
      email: mail.value,
      password: password.value,
    });
    alert.success(response.data.message)
  } catch (error) {
    alert.error(error.response.data.message || "Registration failed!")
  }
}

</script>
