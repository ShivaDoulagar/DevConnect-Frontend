<template>
  <div class="card w-full bg-white rounded-xl shadow-2xl p-4">
    <div class="heading flex space-x-2">
      <div class="flex items-center justify-center rounded-full flex-col">
        <div class="flex space-x-2">
          <span class="material-icons-outlined">trending_up</span>
          <h3 class="text-lg font-bold">Trending Tags</h3>
        </div>
        <div class="tags">
          <ul class="list-inside">
            <li v-for="tag in tags" :key="tag" class="text-blue-600 hover:underline cursor-pointer">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let tags = [
  '#javascript',
  '#vuejs',
  '#webdevelopment',
  '#frontend',
  '#programming',
  '#css',
  '#html',
  '#nodejs',
]
</script>
