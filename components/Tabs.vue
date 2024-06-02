<template>
  <div class="w-full">
    <ul class="flex w-full border border-[#DBDBDB] p-2.5 rounded">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
          'flex-1 w-min-content rounded text-center text-[20px] px-3 py-2 cursor-pointer',
          activeTab === index
            ? 'text-white bg-[#010101]'
            : 'text-[#B7B0AE] bg-[#fff]',
        ]"
        @click="setActiveTab(index)"
      >
        {{ tab.label }}
      </li>
    </ul>
    <div class="tab-content mt-4">
      <div v-if="activeTab === 0">
        <!-- Content for General FAQs -->
        <div class="w-full lg:w-10/12 mx-auto">
          <div class="flex flex-col">
            <accordion />
          </div>
        </div>
      </div>
      <div v-if="activeTab === 1">
        <!-- Content for Payment & Security FAQs -->
        <div class="w-full lg:w-10/12 mx-auto">
          <div class="flex flex-col">
            <accordion />
          </div>
        </div>
      </div>
      <div v-if="activeTab === 2">
        <!-- Content for Support & Other FAQs -->
        <div class="w-full lg:w-10/12 mx-auto">
          <div class="flex flex-col">
            <accordion />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref(0);

const tabs = ref([
  { label: 'General FAQs' },
  { label: 'Payment & Security FAQs' },
  { label: 'Support & Other FAQs' },
]);

const setActiveTab = (index) => {
  activeTab.value = index;
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
