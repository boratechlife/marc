<template>
  <section class="w-full">
    <div
      class="container px-4 lg:px-20 mx-auto flex flex-col gap-4 mb-10 items-center justify-center"
    >
      <div class="w-full flex items-center justify-center">
        <button
          class="px-5 mb-10 py-2.5 custom-btn-border rounded-full bg-[#FFF3EF] text-primary"
        >
          FAQs
        </button>
      </div>

      <h4 class="text-[44px] font-bold">
        Frequently Asked
        <span class="#FF6F42"></span>
        Questions
      </h4>

      <p class="font-semibold text-[#5D5D5D] text-[20px]">
        Quick answers to questions you might have.
      </p>

      <div class="w-full lg:w-2/3 flex flex-col items-center justify-center">
        <tabs />
      </div>
    </div>
  </section>
</template>
