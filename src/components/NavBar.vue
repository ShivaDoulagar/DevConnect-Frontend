<template>
  <nav>
    <div class="w-full flex justify-between px-36 items-center">
      <div class="left flex items-center justify-center md:block">
        <h1 class="text-2xl font-bold py-4 ">DevConnect</h1>
      </div>
      <div class="right hidden md:flex items-center">
        <div class="login flex justify-between gap-3">
          <router-link class="px-4 py-2 rounded-lg hover:text-gray-500" to="/signin">Login</router-link>
          <router-link class="shadow-md bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-900"
            to="/register">Sign Up</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
