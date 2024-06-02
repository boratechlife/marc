<template>
  <section>
    <div
      class="container px-4 lg:px-20 plan-bg rounded mx-auto flex flex-col justify-center items-center plan-bg"
    >
      <div class="w-full flex items-center justify-center">
        <button
          class="px-5 mb-10 py-2.5 custom-btn-border rounded-full bg-[#FFF3EF] text-primary"
        >
          Pricing
        </button>
      </div>

      <h4
        class="w-max-content font-bold font-heading mb-4 text-center text-lg lg:text-[44px]"
      >
        Choose your
        <span class="text-primary">Right Plan !!!</span>
      </h4>

      <p class="text-[20px] mb-3 text-[#5D5D5D]">
        Select from best plans, ensuring a perfect match, Need more or less?
      </p>

      <div class="flex gap-4 mb-4">
        <p class="text-[20px] text-[#5D5D5D]">Monthly</p>
        <div
          @click="isMonthly = !isMonthly"
          :class="isMonthly ? 'justify-start' : 'justify-end'"
          class="w-[66px] px-1 flex items-center transition-all duration-500 h-[36px] rounded-[150px] bg-primary"
        >
          <div
            class="h-[30px] w-[30px] flex rounded-full bg-white shadow-custom"
          ></div>
        </div>
        <p class="text-[20px] text-[#5D5D5D]">Yearly</p>
      </div>

      <div
        class="flex justify-between flex-wrap lg:flex-nowrap w-full gap-20 mt-10"
      >
        <div class="flex w-full">
          <div
            class="plan-bg-grad-card w-full lg:w-[381px] py-8 border p-4 rounded-xl flex flex-col justify-center items-center"
          >
            <div class="flex justify gap-8 mb-4 items-center">
              <div
                class="bg-[#FFF3EF] h-[52px] w-[52px] rounded-[16px] flex items-center justify-center"
              >
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.277832C10.8606 0.277832 7.37033 1.72356 4.79692 4.29698C2.2235 6.87039 0.777771 10.3607 0.777771 14.0001C0.777771 17.6394 2.2235 21.1297 4.79692 23.7031C7.37033 26.2765 10.8606 27.7223 14.5 27.7223L14.5 14.0001V0.277832Z"
                    fill="#FF6F42"
                  />
                  <path
                    d="M14.5 27.7222C18.1394 27.7222 21.6297 26.2764 24.2031 23.703C26.7765 21.1296 28.2222 17.6393 28.2222 13.9999C28.2222 10.3606 26.7765 6.87029 24.2031 4.29687C21.6297 1.72345 18.1394 0.277724 14.5 0.277724L14.5 13.9999L14.5 27.7222Z"
                    fill="#FFBEA8"
                  />
                </svg>
              </div>
              <div class="flex flex-col">
                <h4 class="font-bold text-[24px] font-heading">Standard</h4>
                <p class="text-[12px] text-[#4F4F4F]">
                  Focusing on the essentials
                </p>
              </div>
            </div>

            <h4 class="font-heading text-[44px] font-semibold mb-4">€ 100</h4>
            <div
              class="flex h-[1px] mb-10 bg-red-500 w-full"
              style="
                background: radial-gradient(
                  50% 50% at 50% 50%,
                  rgba(0, 0, 0, 0.4) 0%,
                  rgba(0, 0, 0, 0) 100%
                );
              "
            ></div>

            <div>
              <h4 class="text-center mb-4 text-sm font-heading font-bold">
                Starters includes:
              </h4>

              <ul class="flex flex-col gap-4">
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
              </ul>
            </div>

            <a
              href=""
              class="block w-full bg-black font-bold text-white mt-8 text-center py-3.5 rounded"
              >Get Started</a
            >
          </div>
        </div>
        <div class="flex w-full">
          <div
            class="plan-bg-grad-card w-full lg:w-[381px] py-8 border p-4 rounded-xl flex flex-col justify-center items-center"
          >
            <div class="flex justify gap-8 mb-4 items-center">
              <div
                class="bg-[#FFF3EF] h-[52px] w-[52px] rounded-[16px] flex items-center justify-center"
              >
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.277832C10.8606 0.277832 7.37033 1.72356 4.79692 4.29698C2.2235 6.87039 0.777771 10.3607 0.777771 14.0001C0.777771 17.6394 2.2235 21.1297 4.79692 23.7031C7.37033 26.2765 10.8606 27.7223 14.5 27.7223L14.5 14.0001V0.277832Z"
                    fill="#FF6F42"
                  />
                  <path
                    d="M14.5 27.7222C18.1394 27.7222 21.6297 26.2764 24.2031 23.703C26.7765 21.1296 28.2222 17.6393 28.2222 13.9999C28.2222 10.3606 26.7765 6.87029 24.2031 4.29687C21.6297 1.72345 18.1394 0.277724 14.5 0.277724L14.5 13.9999L14.5 27.7222Z"
                    fill="#FFBEA8"
                  />
                </svg>
              </div>
              <div class="flex flex-col">
                <h4 class="font-bold text-[24px] font-heading">Standard</h4>
                <p class="text-[12px] text-[#4F4F4F]">
                  Focusing on the essentials
                </p>
              </div>
            </div>

            <h4 class="font-heading text-[44px] font-semibold mb-4">€ 100</h4>
            <div
              class="flex h-[1px] mb-10 bg-red-500 w-full"
              style="
                background: radial-gradient(
                  50% 50% at 50% 50%,
                  rgba(0, 0, 0, 0.4) 0%,
                  rgba(0, 0, 0, 0) 100%
                );
              "
            ></div>

            <div>
              <h4 class="text-center mb-4 text-sm font-heading font-bold">
                Starters includes:
              </h4>

              <ul class="flex flex-col gap-4">
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
              </ul>
            </div>

            <a
              href=""
              class="block w-full bg-black font-bold text-white mt-8 text-center py-3.5 rounded"
              >Get Started</a
            >
          </div>
        </div>
        <div class="flex w-full">
          <div
            class="plan-bg-grad-card w-full lg:w-[381px] py-8 border p-4 rounded-xl flex flex-col justify-center items-center"
          >
            <div class="flex justify gap-8 mb-4 items-center">
              <div
                class="bg-[#FFF3EF] h-[52px] w-[52px] rounded-[16px] flex items-center justify-center"
              >
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 0.277832C10.8606 0.277832 7.37033 1.72356 4.79692 4.29698C2.2235 6.87039 0.777771 10.3607 0.777771 14.0001C0.777771 17.6394 2.2235 21.1297 4.79692 23.7031C7.37033 26.2765 10.8606 27.7223 14.5 27.7223L14.5 14.0001V0.277832Z"
                    fill="#FF6F42"
                  />
                  <path
                    d="M14.5 27.7222C18.1394 27.7222 21.6297 26.2764 24.2031 23.703C26.7765 21.1296 28.2222 17.6393 28.2222 13.9999C28.2222 10.3606 26.7765 6.87029 24.2031 4.29687C21.6297 1.72345 18.1394 0.277724 14.5 0.277724L14.5 13.9999L14.5 27.7222Z"
                    fill="#FFBEA8"
                  />
                </svg>
              </div>
              <div class="flex flex-col">
                <h4 class="font-bold text-[24px] font-heading">Standard</h4>
                <p class="text-[12px] text-[#4F4F4F]">
                  Focusing on the essentials
                </p>
              </div>
            </div>

            <h4 class="font-heading text-[44px] font-semibold mb-4">€ 100</h4>
            <div
              class="flex h-[1px] mb-10 bg-red-500 w-full"
              style="
                background: radial-gradient(
                  50% 50% at 50% 50%,
                  rgba(0, 0, 0, 0.4) 0%,
                  rgba(0, 0, 0, 0) 100%
                );
              "
            ></div>

            <div>
              <h4 class="text-center mb-4 text-sm font-heading font-bold">
                Starters includes:
              </h4>

              <ul class="flex flex-col gap-4">
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
                <li class="flex items-center gap-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 1.3335C4.32665 1.3335 1.33331 4.32683 1.33331 8.00016C1.33331 11.6735 4.32665 14.6668 7.99998 14.6668C11.6733 14.6668 14.6666 11.6735 14.6666 8.00016C14.6666 4.32683 11.6733 1.3335 7.99998 1.3335ZM11.1866 6.46683L7.40665 10.2468C7.31331 10.3402 7.18665 10.3935 7.05331 10.3935C6.91998 10.3935 6.79331 10.3402 6.69998 10.2468L4.81331 8.36016C4.61998 8.16683 4.61998 7.84683 4.81331 7.6535C5.00665 7.46016 5.32665 7.46016 5.51998 7.6535L7.05331 9.18683L10.48 5.76016C10.6733 5.56683 10.9933 5.56683 11.1866 5.76016C11.38 5.9535 11.38 6.26683 11.1866 6.46683Z"
                      fill="black"
                    />
                  </svg>
                  <span class="text-sm font-semibold text-[#4F4F4F]"
                    >Social Media Marketing</span
                  >
                </li>
              </ul>
            </div>

            <a
              href=""
              class="block w-full bg-black font-bold text-white mt-8 text-center py-3.5 rounded"
              >Get Started</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const isMonthly = ref(false);
</script>
