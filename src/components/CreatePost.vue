<template>
  <main
    class="flex-1 md:p-8 p-0 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white h-full flex flex-col space-y-10 ">
    <div class=" flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <main class="w-full max-w-4xl mx-auto">
        <div class="bg-white  dark:bg-slate-800 rounded-lg shadow-md p-6 sm:p-8">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Create Post</h1>
            <div class="flex items-center space-x-2 mt-4 sm:mt-0">
              <button
                class="px-4 py-2 text-sm font-medium text-white dark:text-slate-300  dark:bg-red-500 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors bg-red-500">Cancel</button>
              <button
                class="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">Save
                draft</button>
              <button
                class="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-700 transition-colors">Publish</button>
            </div>
          </div>
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" for="post-title">Post
                title</label>
              <input
                class="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                id="post-title" placeholder="What’s the title of your post?" type="text" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" for="post-content">Post
                content</label>
              <textarea
                class="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                id="post-content" placeholder="Share your thoughts, project updates, or ask a question..."
                rows="12"></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Upload images</label>
              <div class="flex items-center justify-center w-full">
                <label
                  class="flex flex-col items-center justify-center w-full h-48 border-2 border-slate-300 dark:border-slate-600 border-dashed rounded-lg cursor-pointer bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                  for="dropzone-file">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <span class="material-icons text-slate-500 dark:text-slate-400 text-4xl mb-2">cloud_upload</span>
                    <p class="mb-2 text-sm text-slate-500 dark:text-slate-400"><span class="font-semibold">Click to
                        upload</span> or drag and drop</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input class="hidden" id="dropzone-file" multiple="" type="file" />
                </label>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                for="skills-tags">Skills/Tags</label>
              <div
                class="flex flex-wrap items-center gap-2 p-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700">
                <span
                  class="flex items-center bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-sm font-medium px-2.5 py-1 rounded-full">
                  JavaScript
                  <button
                    class="ml-1.5 text-primary  dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100 flex items-center">
                    <span class="material-icons-outlined text-[20px]" style="font-size: 16px;">close</span>
                  </button>
                </span>
                <span
                  class="flex items-center bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-sm font-medium px-2.5 py-1 rounded-full ">
                  React
                  <button class="ml-1.5 text-primary dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100">
                    <span class="material-icons-outlined text-[20px]" style="font-size: 16px;">close</span>
                  </button>
                </span>
                <input
                  class="flex-grow bg-transparent border-0 focus:ring-0 p-1 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 min-w-[100px]"
                  id="skills-tags" placeholder="Add a tag..." type="text" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </main>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

.material-icons-outlined {
  font-size: 24px;
}
</style>
