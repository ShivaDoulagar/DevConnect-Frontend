<template>
  <div class="main w-screen min-h-screen flex space-x-2 bg-white">
    <div class="sub-main w-15 bg-gray-500 flex-1  rounded">
      <div>
        <NavBar />
      </div>
    </div>
    <div class="content flex-4 bg-gray-600  rounded">
      <UserDashBoard />
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/SideNavBar.vue';
import UserDashBoard from '@/components/UserDashBoard.vue';
</script>
