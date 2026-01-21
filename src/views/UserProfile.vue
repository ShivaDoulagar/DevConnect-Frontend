<template>
  <div class="main w-screen min-h-screen flex space-x-2 bg-gray dark:bg-gray-800">
    <div class="sub-main w-15  flex-1 rounded md:block hidden shadow-lg">
      <NavBar />
    </div>
    <div class="content flex-4  rounded">
      <UserProfile />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/SideNavBar.vue'
import UserProfile from '@/components/UserProfile.vue';

</script>
