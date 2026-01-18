<template>
  <div class="card w-full bg-white rounded-xl shadow-2xl p-3">
    <div class="heading flex space-x-2">
      <div class="image h-12 flex items-center justify-center rounded-full m-3">
        <span class="material-icons-outlined">person</span>
      </div>
      <div class="username w-full flex items-start justify-center rounded-full m-3 flex-col">
        <h1 class="font-bold text-xl">User name here</h1>
        <p class="text-sm text-gray-500">Posted time</p>
      </div>
    </div>
    <div class="content flex-col flex items-start justify-center p-4">
      <h3 class="text-2xl">title</h3>
      <p class="text-md text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum omnis harum dolore ratione,
        tempora itaque nihil cum at iste error debitis sapiente repellendus soluta temporibus
        tenetur nobis consequatur! Accusantium, aut?
      </p>
    </div>
    <div class="tags">
      <div class="tag bg-purple-300 rounded-2xl px-4 py-1 text-md inline-block text-purple-800">
        #tag1
      </div>
      <div class="image">
        <img src="../assets/images/wallpaper.jpg" alt="postimage" class="rounded-xl mt-2 w-full h-auto" />
      </div>

      <!-- footer here  for card -->
      <div class="footer flex justify-between items-center mt-2 px-4">
        <div class="left mx-3 flex space-x-4">
          <button class="flex justify-center items-center space-x-1 text-center text-gray-600">
            <span class="material-icons-outlined text-gray-600">thumb_up</span>
            <p>10 Likes</p>
          </button>
          <button class="flex justify-center items-center text-center text-gray-600">
            <span class="material-icons-outlined text-gray-600 flex items-center justify-center">comments</span>
            <p>10 comments</p>
          </button>
        </div>
        <div class="right">
          <span class="material-icons-outlined text-gray-600 md:mr-5">share</span>
        </div>
      </div>
    </div>
  </div>
</template>
