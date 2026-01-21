<template>
  <div
    class="main bg-gray-200 w-screen min-h-screen flex justify-center items-center flex-col gap-6 py-12 dark:bg-gray-800 dark:text-white">

    <div class="w-[90vw] md:w-[30vw] bg-white p-8 rounded shadow-lg mt-6 dark:bg-gray-900 dark:text-white">
      <div class="heading text-center space-y-3 my-10">
        <h1 class="text-4xl font-bold"> Dev<span class="text-blue-500">Connect</span></h1>
        <p class="text-[calc(2.8rem-24px)]">Welcome back! Please login to your accout</p>
      </div>
      <form class="flex flex-col gap-5" @submit.prevent="login">

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
        <div class="forgotpassword flex justify-end">
          <a href="#" class="text-blue-600 hover:underline text-sm md:text-md">Forgot Password?</a>
        </div>

        <button type="submit" class="bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 mt-1">Sign In</button>
        <div class="flex justify-center ">
          <router-link to="/register">Register?</router-link>
        </div>
      </form>

    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import mail_icon from "../assets/images/mail.svg";
import password_icon from "../assets/images/password.svg";
import axios from "axios";
import { useAlertStore } from '@/stores/alerts.js';
import { useAuthStore } from '@/stores/auth';

const alert = useAlertStore()
const router = useRouter();
const authStore = useAuthStore();

const password = ref("");
const mail = ref("");


let backend_url = import.meta.env.VITE_API_BASE_URL;




const login = async () => {
  try {
    const response = await axios.post(backend_url + "/auth/sign", {
      email: mail.value,
      password: password.value,
    });
    console.log(response.data);
    authStore.login(response.data.token);
    alert.showAlert("Login successful!", 'success', 3000);
    router.push('/feed');


  } catch (error) {
    alert.showAlert(error.response?.data?.message || "Login failed!", 'error', 4000);
  }
}

</script>
