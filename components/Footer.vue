<template>
  <footer class="w-full relative px-4 lg:px-16">
    <div class="container mx-auto bg-black rounded-2xl pt-10 px-4 lg:px-6">
      <div
        class="w-full flex flex-wrap lg:flex-nowrap items-center justify-between"
      >
        <div class="w-full lg:w-2/5">
          <h4 class="font-medium text-2xl mb-4 lg:text-[64px] text-[#E7E7E7]">
            Stay Updated, <br />
            Stay Connected
          </h4>
          <p class="text-[#CAC9CC] text-[15px] mb-4 lg:text-[22px] font-medium">
            Sign up for newsletters from trusted news outlets <br />
            or websites that cover topics of interest to you.
          </p>
        </div>
        <div class="w-full lg:w-2/5">
          <div class="bg-white/10 p-4 rounded flex flex-col">
            <h4 class="text-white mb-4 font-medium text-[24px]">
              Get Our News And Updates
            </h4>
            <div class="relative bg-white/40 p-1 rounded">
              <input
                type="text"
                placeholder="Enter your email address"
                class="w-full text-[#E7E7E7] placeholder:text-[#E7E7E7] rounded bg-transparent px-4 py-2.5"
              />
              <button
                class="absolute bg-black px-4 py-2.5 text-white rounded right-1 top-1/2 -translate-y-1/2"
              >
                Get Started
              </button>
            </div>
            <div class="mt-2">
              <p class="text-white text-[12px]">
                By subscribing you agree to our Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full h-[1px] my-20 bg-[#939393]"></div>

      <div class="flex flex-wrap lg:flex-nowrap w-full gap-8">
        <div class="w-full lg:w-1/2">
          <img src="/images/large_white_logo.png" alt="" />
          <p class="text-[#CAC9CC] font-semibold text-[22px]">
            Seamless management and innovative solutions for a smarter tomorrow.
          </p>
        </div>
        <div
          class="w-full lg:w-1/2 flex flex-wrap lg:flex-nowrap gap-10 justify-between"
        >
          <div class="flex flex-col">
            <h4 class="text-[#CAC9CC] font-semibold text-[22px] mb-4">
              Navigation
            </h4>
            <ul>
              <li class="text-[#7E7E7E] text-[18px] font-medium">About</li>
              <li class="text-[#7E7E7E] text-[18px] font-medium">Product</li>
              <li class="text-[#7E7E7E] text-[18px] font-medium">Pricing</li>
              <li class="text-[#7E7E7E] text-[18px] font-medium">Customers</li>
              <li class="text-[#7E7E7E] text-[18px] font-medium">FAQs</li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h4 class="text-[#CAC9CC] font-semibold text-[22px] mb-4">
              Address
            </h4>
            <ul>
              <li class="text-[#7E7E7E] text-[18px] font-medium">
                3982 Ranchview Dr. Richardson, California 62639
              </li>
            </ul>
          </div>
          <div class="flex flex-col">
            <h4 class="text-[#CAC9CC] font-semibold text-[22px] mb-4">
              Contact
            </h4>
            <ul>
              <li class="text-[#7E7E7E] text-[18px] font-medium">
                sales.marc@gmail.com
              </li>
              <li class="text-[#7E7E7E] text-[18px] font-medium">
                (307) 555-0013
              </li>
              <li
                class="text-[#7E7E7E] text-[18px] font-medium flex gap-4 items-center"
              >
                <div class="flex gap-4 items-center">
                  <div
                    class="h-[28px] w-[28px] border border-white/20 flex items-center justify-center rounded-full"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_180_2923)">
                        <path
                          d="M8.17341 6.03592L12.7632 0.700684H11.6756L7.69025 5.3332L4.50721 0.700684H0.835938L5.64933 7.70586L0.835938 13.3007H1.92363L6.13221 8.40859L9.49374 13.3007H13.165L8.17314 6.03592H8.17341ZM6.68367 7.76758L6.19597 7.07002L2.31554 1.51948H3.98617L7.11772 5.99895L7.60542 6.6965L11.6761 12.5191H10.0054L6.68367 7.76785V7.76758Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_180_2923">
                          <rect
                            width="12.6"
                            height="12.6"
                            fill="white"
                            transform="translate(0.700684 0.700684)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    class="h-[28px] w-[28px] border border-white/20 flex items-center justify-center rounded-full"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_180_2928)">
                        <path
                          d="M7.00248 3.76465C6.5779 3.76458 6.15747 3.84816 5.7652 4.0106C5.37293 4.17305 5.01651 4.41118 4.71629 4.7114C4.41607 5.01162 4.17793 5.36805 4.01548 5.76032C3.85304 6.15259 3.76946 6.57302 3.76953 6.9976C3.76946 7.42217 3.85304 7.84261 4.01548 8.23488C4.17793 8.62715 4.41607 8.98357 4.71629 9.28379C5.01651 9.58401 5.37293 9.82215 5.7652 9.9846C6.15747 10.147 6.5779 10.2306 7.00248 10.2305C7.42706 10.2306 7.84749 10.147 8.23976 9.9846C8.63203 9.82215 8.98846 9.58401 9.28868 9.28379C9.5889 8.98357 9.82703 8.62715 9.98948 8.23488C10.1519 7.84261 10.2355 7.42217 10.2354 6.9976C10.2355 6.57302 10.1519 6.15259 9.98948 5.76032C9.82703 5.36805 9.5889 5.01162 9.28868 4.7114C8.98846 4.41118 8.63203 4.17305 8.23976 4.0106C7.84749 3.84816 7.42706 3.76458 7.00248 3.76465ZM7.00248 9.09602C6.5876 9.09592 6.18207 8.97281 5.83715 8.74224C5.49223 8.51168 5.22342 8.18403 5.0647 7.80071C4.90598 7.41739 4.86448 6.99562 4.94544 6.58871C5.02641 6.18181 5.2262 5.80805 5.51957 5.51468C5.81293 5.22132 6.18669 5.02152 6.5936 4.94056C7.0005 4.8596 7.42228 4.9011 7.8056 5.05982C8.18892 5.21854 8.51657 5.48735 8.74713 5.83227C8.97769 6.17718 9.1008 6.58272 9.10091 6.9976C9.10105 7.27321 9.04686 7.54614 8.94146 7.80079C8.83605 8.05545 8.68149 8.28683 8.4866 8.48172C8.29172 8.6766 8.06033 8.83116 7.80568 8.93657C7.55102 9.04198 7.27809 9.09616 7.00248 9.09602Z"
                          fill="white"
                        />
                        <path
                          d="M9.5985 0.740262C8.4393 0.686187 5.56808 0.688812 4.40783 0.740262C3.38828 0.788037 2.48895 1.03426 1.76393 1.75929C0.552228 2.97099 0.707103 4.60374 0.707103 6.99826C0.707103 9.44896 0.570603 11.0439 1.76393 12.2372C2.98035 13.4531 4.63673 13.2941 7.0029 13.2941C9.4305 13.2941 10.2684 13.2956 11.1268 12.9633C12.2939 12.5102 13.1748 11.4671 13.2609 9.59334C13.3155 8.43361 13.3124 5.56291 13.2609 4.40266C13.157 2.19084 11.9699 0.849462 9.5985 0.740262ZM11.4334 11.4356C10.6391 12.2299 9.53708 12.159 6.98768 12.159C4.36268 12.159 3.31005 12.1979 2.54198 11.4277C1.65735 10.5473 1.81748 9.13344 1.81748 6.98986C1.81748 4.08924 1.5198 2.00026 4.43093 1.85116C5.09978 1.82754 5.29665 1.81966 6.98033 1.81966L7.00395 1.83541C9.80168 1.83541 11.9967 1.54246 12.1285 4.45306C12.1584 5.11719 12.1652 5.31669 12.1652 6.99774C12.1647 9.59229 12.2141 10.6512 11.4334 11.4356Z"
                          fill="white"
                        />
                        <path
                          d="M10.3639 4.39327C10.7811 4.39327 11.1193 4.05504 11.1193 3.6378C11.1193 3.22056 10.7811 2.88232 10.3639 2.88232C9.94664 2.88232 9.6084 3.22056 9.6084 3.6378C9.6084 4.05504 9.94664 4.39327 10.3639 4.39327Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_180_2928">
                          <rect
                            width="12.6"
                            height="12.6"
                            fill="white"
                            transform="translate(0.700684 0.700684)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    class="h-[28px] w-[28px] border border-white/20 flex items-center justify-center rounded-full"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="14"
                        cy="14"
                        r="14"
                        fill="white"
                        fill-opacity="0.04"
                      />
                      <circle
                        cx="14"
                        cy="14"
                        r="13.5"
                        stroke="white"
                        stroke-opacity="0.08"
                      />
                      <g clip-path="url(#clip0_180_2933)">
                        <path
                          d="M20.3007 20.3007V15.6859C20.3007 13.4179 19.8124 11.6854 17.1664 11.6854C15.8907 11.6854 15.0402 12.3784 14.6937 13.0399H14.6622V11.8902H12.1579V20.3007H14.7724V16.1269C14.7724 15.0244 14.9772 13.9692 16.3317 13.9692C17.6704 13.9692 17.6862 15.2134 17.6862 16.1899V20.2849H20.3007V20.3007ZM7.90543 11.8902H10.5199V20.3007H7.90543V11.8902ZM9.21268 7.70068C8.37793 7.70068 7.70068 8.37793 7.70068 9.21268C7.70068 10.0474 8.37793 10.7404 9.21268 10.7404C10.0474 10.7404 10.7247 10.0474 10.7247 9.21268C10.7247 8.37793 10.0474 7.70068 9.21268 7.70068Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_180_2933">
                          <rect
                            width="12.6"
                            height="12.6"
                            fill="white"
                            transform="translate(7.70068 7.70068)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div
                    class="h-[28px] w-[28px] border border-white/20 flex items-center justify-center rounded-full"
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="14"
                        cy="14"
                        r="14"
                        fill="white"
                        fill-opacity="0.04"
                      />
                      <circle
                        cx="14"
                        cy="14"
                        r="13.5"
                        stroke="white"
                        stroke-opacity="0.08"
                      />
                      <path
                        d="M17.9395 7.77734H10.9395C8.83945 7.77734 7.43945 8.83617 7.43945 11.3068V16.2479C7.43945 18.7185 8.83945 19.7773 10.9395 19.7773H17.9395C20.0395 19.7773 21.4395 18.7185 21.4395 16.2479V11.3068C21.4395 8.83617 20.0395 7.77734 17.9395 7.77734ZM18.2685 12.0762L16.0775 13.8409C15.6155 14.215 15.0275 14.3985 14.4395 14.3985C13.8515 14.3985 13.2565 14.215 12.8015 13.8409L10.6105 12.0762C10.3865 11.8926 10.3515 11.5538 10.5265 11.3279C10.7085 11.102 11.0375 11.0597 11.2615 11.2432L13.4525 13.0079C13.9845 13.4385 14.8875 13.4385 15.4195 13.0079L17.6105 11.2432C17.8345 11.0597 18.1705 11.095 18.3455 11.3279C18.5275 11.5538 18.4925 11.8926 18.2685 12.0762Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex w-full h-[1px] mt-10 bg-[#939393]"></div>
      <div
        class="flex flex-wrap lg:flex-nowrap justify-between text-[#7E7E7E] py-2"
      >
        <p>@2024 MARC All right reserved</p>
        <ul class="flex gap-4 items-center">
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Cookies Policy</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
