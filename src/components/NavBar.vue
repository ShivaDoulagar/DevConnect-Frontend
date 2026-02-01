<template>
  <nav>
    <div class="w-full flex justify-between px-6 items-center md:px-36 ">
      <div class="left flex flex-row items-center justify-center space-x-3  md:justify-start">
        <div>
          <div class="material-icons-outlined text-white h-full bg-blue-600 p-2 rounded-lg">code</div>
        </div>
        <div>
          <h1 class="text-2xl font-bold py-4 ">DevConnect</h1>
        </div>
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
