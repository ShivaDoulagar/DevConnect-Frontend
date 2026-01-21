<script setup></script>
<template>
  <div class="suggestedDevelopers p-3 space-y-4 bg-white rounded-xl">
    <div class="heading">
      <h1 class="font-bold text-lg">Suggested Developers</h1>
    </div>
    <div class="developers flex flex-col space-y-3">
      <!-- person 1 -->
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center justify-center space-x-3">
          <div class="image w-10 h-10 rounded-full overflow-hidden  flex justify-center items-center">
            <img
              src="https://imgs.search.brave.com/uYUU53IdPc46ACW0wG_r5bkJkhx6FEXxu16zIieFDyk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb21t/b24udXNlbWJhc3N5/Lmdvdi93cC1jb250/ZW50L3VwbG9hZHMv/c2l0ZXMvNjcvMjAy/Mi8wMy9NYXJ0aW4t/THV0aGVyLUtpbmct/SlIucG5n"
              alt="image" class="h-full w-full object-cover" />
          </div>
          <div class="flex flex-col">
            <h3>John Doe</h3>
            <p class="text-sm text-gray-600 dark:text-gray-200">Reactjs and Nodejs</p>
          </div>
        </div>
        <div><button class="bg-blue-600 rounded text-white px-3 py-1 cursor-pointer">Follow</button></div>
      </div>
      <!-- person 2 -->
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center justify-center space-x-3">
          <div class="image w-10 h-10 rounded-full overflow-hidden  flex justify-center items-center">
            <img
              src="https://imgs.search.brave.com/4T5QkxXI6Abm04oEpDxoCgoNcLLJ36J3oZQje6USGLA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZWFt/LWltYWdlcy53YXJu/ZXJtZWRpYWNkbi5j/b20vMjAyNS0wNy9q/b2huLXNub3ctMTky/MC5qcGc_aG9zdD13/YmQtZG90Y29tLWRy/dXBhbC1wcmQtdXMt/ZWFzdC0xLnMzLmFt/YXpvbmF3cy5jb20m/dz0xOTIw"
              alt="image" class="h-full w-full object-cover" />
          </div>
          <div class="flex flex-col">
            <h3>John Snow</h3>
            <p class="text-sm text-gray-600 dark:text-gray-200">Reactjs and vue js</p>
          </div>
        </div>
        <div><button class="bg-blue-600 rounded text-white px-3 py-1 cursor-pointer">Follow</button></div>
      </div>

      <!-- person 3 -->
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center justify-center space-x-3">
          <div class="image w-10 h-10 rounded-full overflow-hidden  flex justify-center items-center">
            <img
              src="https://imgs.search.brave.com/sV59DmAoho1kNa14h0GxfGVLTDickumczt7ssAooV1g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM2LmFscGhhY29k/ZXJzLmNvbS85MDAv/dGh1bWJiaWctOTAw/MzA4LndlYnA"
              alt="image" class="h-full w-full object-cover" />
          </div>
          <div class="flex flex-col">
            <h3>Rob Stark</h3>
            <p class="text-sm text-gray-600 dark:text-gray-200">Reactjs and vue js</p>
          </div>
        </div>
        <div><button class="bg-blue-600 rounded text-white px-3 py-1 cursor-pointer">Follow</button></div>
      </div>


    </div>
  </div>
</template>
