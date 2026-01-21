<template>
  <main class="flex-1 overflow-y-auto bg-gray-50">
    <div class="max-w-4xl mx-auto py-10 px-8">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-bold text-primary">Notifications</h2>
          <p class="text-gray-500 text-sm mt-1">Stay updated with your latest interactions.</p>
        </div>
        <div class="flex items-center gap-3">
          <button class="text-sm font-medium text-primary hover:underline">Mark all as read</button>
          <button class="p-2 text-gray-400 hover:text-primary transition-colors">
            <span class="material-icons-outlined text-[20px]">filter_list</span>
          </button>
        </div>
      </div>
      <div class="space-y-3">
        <div
          class="group relative bg-unread border border-gray-100 rounded-xl p-4 flex items-start gap-4 transition-all hover:shadow-sm">
          <div class="absolute top-5 right-4 w-2 h-2 rounded-full bg-accent"></div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <span class="material-icons-outlined text-[20px]">chat_bubble</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-[15px] leading-relaxed">
              <span class="font-semibold">Jane Smith</span> commented on your post <span
                class="text-primary font-medium">"React Hooks Best Practices"</span>
            </p>
            <p class="text-xs text-gray-500 mt-1">2 minutes ago</p>
          </div>
        </div>
        <div
          class="group relative bg-unread border border-gray-100 rounded-xl p-4 flex items-start gap-4 transition-all hover:shadow-sm">
          <div class="absolute top-5 right-4 w-2 h-2 rounded-full bg-accent"></div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
            <span class="material-icons-outlined text-[20px]">favorite</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-[15px] leading-relaxed">
              <span class="font-semibold">Marcus Chen</span> liked your project <span
                class="text-primary font-medium">"DevConnect UI Kit"</span>
            </p>
            <p class="text-xs text-gray-500 mt-1">45 minutes ago</p>
          </div>
        </div>
        <div
          class="group bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-4 transition-all hover:shadow-sm">
          <div
            class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
            <span class="material-icons-outlined text-[20px]">person_add</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-[15px] leading-relaxed">
              <span class="font-semibold">Sarah Connor</span> started following you.
            </p>
            <p class="text-xs text-gray-500 mt-1">3 hours ago</p>
          </div>
        </div>
        <div
          class="group bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-4 transition-all hover:shadow-sm">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
            <span class="material-icons-outlined text-[20px]">forum</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-[15px] leading-relaxed">
              <span class="font-semibold">David Miller</span> replied to your question in <span
                class="text-primary font-medium">"Tailwind Configs"</span>
            </p>
            <p class="text-xs text-gray-500 mt-1">5 hours ago</p>
          </div>
        </div>
        <div
          class="group bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-4 transition-all hover:shadow-sm">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
            <span class="material-symbols-outlined text-[20px]">star</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-[15px] leading-relaxed">
              Your post <span class="text-primary font-medium">"Modern CSS Layouts"</span> reached 100 stars!
            </p>
            <p class="text-xs text-gray-500 mt-1">Yesterday at 4:20 PM</p>
          </div>
        </div>
        <div
          class="group bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-4 transition-all hover:shadow-sm">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
            <span class="material-icons-outlined text-[20px]">alternate_email</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-[15px] leading-relaxed">
              <span class="font-semibold">Elena Gilbert</span> mentioned you in a comment.
            </p>
            <p class="text-xs text-gray-500 mt-1">Yesterday at 11:05 AM</p>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center">
        <button
          class="px-6 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:border-primary hover:text-primary transition-all">
          Load older notifications
        </button>
      </div>
    </div>
  </main>
</template>
