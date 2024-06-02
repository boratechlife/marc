<template>
  <div class="w-full mt-10">
    <div class="flex flex-col gap-2">
      <div v-for="(item, index) in items" :key="index">
        <label
          for=""
          class="flex w-full rounded bg-[#FFE3DA] border-2 border-[#FFE3DA] gap-10 p-4 items-start justify-between cursor-pointer"
          @click="toggleAccordion(index)"
        >
          <span class="text-[24px] text-[#434343] font-semibold">{{
            item.number
          }}</span>
          <div>
            <p class="font-bold text-[24px]">{{ item.title }}</p>
            <p
              v-if="activeIndex === index"
              class="text-[20px] font-normal text-[#5D5D5D]"
            >
              {{ item.content }}
            </p>
          </div>
          <div class="">
            <svg
              width="40"
              height="40"
              v-if="activeIndex !== index"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_b_2055_111)">
                <rect width="40" height="40" rx="20" fill="#FFF3EF" />
                <path
                  d="M27.1999 19.2H20.8V12.7999C20.8 12.3584 20.4416 12 19.9999 12C19.5584 12 19.2 12.3584 19.2 12.7999V19.2H12.7999C12.3584 19.2 12 19.5584 12 19.9999C12 20.4416 12.3584 20.8 12.7999 20.8H19.2V27.1999C19.2 27.6416 19.5584 28 19.9999 28C20.4416 28 20.8 27.6416 20.8 27.1999V20.8H27.1999C27.6416 20.8 28 20.4416 28 19.9999C28 19.5584 27.6416 19.2 27.1999 19.2Z"
                  fill="#343434"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_2055_111"
                  x="-15"
                  y="-15"
                  width="70"
                  height="70"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_2055_111"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_2055_111"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <svg
              width="50"
              height="50"
              v-else
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_bd_2045_611)">
                <path
                  d="M5 25C5 13.9543 13.9543 5 25 5C36.0457 5 45 13.9543 45 25C45 36.0457 36.0457 45 25 45C13.9543 45 5 36.0457 5 25Z"
                  fill="#FF6F42"
                  shape-rendering="crispEdges"
                />
                <path
                  :d="'M17.9395 25.4654H31.7192C32.2382 25.4654 32.6588 25.0357 32.6588 24.5053C32.6588 23.9751 32.2383 23.5454 31.7192 23.5454H17.9395C17.4206 23.5455 17 23.9753 17 24.5055C17 25.0357 17.4206 25.4654 17.9395 25.4654Z'"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_bd_2045_611"
                  x="-10"
                  y="-10"
                  width="70"
                  height="70"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_2045_611"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_backgroundBlur_2045_611"
                    result="effect2_dropShadow_2045_611"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_2045_611"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const items = ref([
  {
    number: '01',
    title: 'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
    content:
      'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis',
  },
  {
    number: '02',
    title: 'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
    content:
      'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis',
  },
  {
    number: '03',
    title: 'Lorem ipsum dolor sit amet consectetur. Sagittis id.',
    content:
      'Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis',
  },
  // Add more items here
]);

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
