<template>
  <div class="main w-screen min-h-screen flex space-x-2 bg-gray dark:bg-gray-800">
    <div class="sub-main w-15 bg-gray-500 flex-1 rounded md:block hidden shadow-lg">
      <NavBar />
    </div>
    <div class="content flex-4 bg-gray-600 rounded">
      <CreatePost />
    </div>
  </div>
</template>

<script setup>
import CreatePost from '@/components/CreatePost.vue';
import NavBar from '@/components/SideNavBar.vue'
</script>
