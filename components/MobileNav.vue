<template>
  <nav class="fixed top-0 z-50 h-screen w-full p-4 left-0 bg-white">
    <div class="flex flex-col gap-4 relative">
      <div class="absolute close right-0 top-0" @click="emitClose">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
          />
        </svg>
      </div>
      <div class="logo">
        <img src="/images/logo.svg" alt="" />
      </div>
      <ul class="flex flex-col gap-4 justify-between items-center">
        <li class="text-gray-1">
          <a href="">About</a>
        </li>
        <li class="text-gray-1">
          <a href="">Product</a>
        </li>
        <li class="text-gray-1">
          <a href="">Pricing</a>
        </li>
        <li class="text-gray-1">
          <a href="">Customer</a>
        </li>
        <li class="text-gray-1">
          <a href="">Blog</a>
        </li>
      </ul>
      <button class="bg-primary px-3 py-2 rounded-lg text-white">
        Book a demo
      </button>
    </div>
  </nav>
</template>

<script setup>
const emit = defineEmits(['close']);

const emitClose = () => {
  emit('close');
};
</script>
