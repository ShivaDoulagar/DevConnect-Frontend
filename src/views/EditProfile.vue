<template>
  <div class="main w-[96vw] mx-auto md:mx-0 min-h-screen flex space-x-2 bg-gray dark:bg-gray-800">
    <div class="sub-main w-13  flex-1 rounded md:block hidden shadow-lg ">
      <NavBar />
    </div>
    <div class="content flex-4 bg-gray-600 rounded">
      <EditUserProfile />
    </div>
  </div>
</template>

<script setup>

import EditUserProfile from '@/components/EditUserProfile.vue';
import NavBar from '@/components/SideNavBar.vue'
</script>
