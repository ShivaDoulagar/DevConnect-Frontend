<template>
  <div class="cards-container flex gap-6 justify-center flex-wrap">
    <div v-for="(value, index) in data" :key="index"
      class="card bg-gray-200 shadow-md rounded-lg p-6 w-80 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center gap-4">
      <div class="icon w-[20%]">
        <img :src="value.icon" alt="" />
      </div>
      <h2 class="text-3xl font-bold mb-4">{{ value.title }}</h2>
      <p class="text-gray-700 mb-6 text-xl">{{ value.description }}</p>
    </div>
  </div>
</template>

<script setup>
import question_image from '../assets/images/question.png'
import colaborate_image from '../assets/images/colaborate.png'
import graduation_image from '../assets/images/graduation.png'
import project_code from '../assets/images/project_code.png'
let data = [
  {
    icon: project_code,
    title: 'Share Projects',
    description: 'Showcase your work, get feedback, and inspire others in the community.',
  },
  {
    icon: question_image,
    title: ' Ask Questions',
    description:
      'Stuck on a problem? Leverage the collective knowledge of the community to get unstuck fast.',
  },
  {
    icon: graduation_image,
    title: 'Learn & Discover',
    description:
      'Read insightful articles, discover new tools, and stay up-to-date with the latest trends.',
  },
  {
    icon: colaborate_image,
    title: 'Collaborate',
    description:
      'Find co-founders,team members, or mentors. Connect with developers from around the globe.',
  },
]
</script>
