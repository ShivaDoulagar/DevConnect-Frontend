<template>
  <div class="main  bg-gray-200 w-[99vw] overflow-x-hidden">
    <div class="nav">
      <NavBar />
    </div>
    <div class="main w-full min-h-screen">
      <div
        class="content w-full flex text-center justify-center items-center flex-col gap-6 px-4 sm:px-8 md:px-12 lg:px-20 min-h-screen py-12">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Connect. Build. Share. Grow
        </h1>
        <div class="md:w-[60vw] ">
          <p class=" text-[calc(3.4rem-24px)]">
            DevConnect is the premier social platform for developers to showcase projects, share knowledge, and
            collaborate on next big thing. Join a community of builders today.
          </p>
        </div>
        <div class="buttons flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            class="bg-blue-700 rounded-lg shadow-md px-6 sm:px-9 py-2 sm:py-3 text-white hover:bg-blue-800 hover:underline text-lg sm:text-xl md:text-2xl">
            Get started for free
          </button>
          <button class="hover:underline text-lg sm:text-xl md:text-2xl">Learn More</button>
        </div>
      </div>
    </div>

    <div class="socials w-screen min-h-screen bg-gray-100">
      <div
        class="text-center flex flex-col items-center justify-center w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 gap-5 sm:gap-7 py-12">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Every thing you need to grow as a developer
        </h1>
        <p class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600">
          A single platform for all your single needs
        </p>
        <div class="cards w-full">
          <DashbaordCards />
        </div>
      </div>
    </div>
    <div class="footer text-center w-full">
      <div class="links flex justify-center text-center">
        <ol class="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
          <li><a class="text-base sm:text-lg md:text-xl" href="https://google.com">About</a></li>
          <li><a class="text-base sm:text-lg md:text-xl" href="https://google.com">Contact</a></li>
          <li><a class="text-base sm:text-lg md:text-xl" href="https://google.com">Github</a></li>
          <li><a class="text-base sm:text-lg md:text-xl" href="https://google.com">Privacy</a></li>
        </ol>
      </div>
      <p class="py-6 text-sm sm:text-base text-gray-600">© 2026 DevConnect. All rights reserved.</p>
    </div>
  </div>
</template>
<script setup>
import DashbaordCards from '@/components/DashbaordCards.vue'
import NavBar from '@/components/NavBar.vue'



</script>
