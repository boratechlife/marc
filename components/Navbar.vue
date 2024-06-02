<template>
  <header
    class="bg-white left-0 top-10 shadow rounded-lg px-4 py-3 flex justify-between border fixed lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-2/3 mx-auto gap-20 items-center"
  >
    <MobileNav v-if="isMobileOpen" @close="isMobileOpen = false" />
    <div class="logo">
      <img src="/images/logo.svg" alt="" />
    </div>
    <ul class="w-1/2 hidden lg:flex justify-between items-center">
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
    <button class="bg-primary hidden lg:block px-3 py-2 rounded-lg text-white">
      Book a demo
    </button>

    <div @click="isMobileOpen = true" class="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8m0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </header>
</template>

<script setup>
const isMobileOpen = ref(false);
</script>
