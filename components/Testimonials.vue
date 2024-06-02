<template>
  <section>
    <div
      class="container mx-auto px-4 lg:px-20 flex flex-col justify-center items-center"
    >
      <div class="w-full flex items-center justify-center">
        <button
          class="px-5 mb-10 py-2.5 custom-btn-border rounded-full bg-[#FFF3EF] text-primary"
        >
          Customers
        </button>
      </div>

      <h4 class="font-bold font-heading text-[45px]">
        Hear from our
        <span class="text-primary">Happy Clients</span>
      </h4>

      <img src="/images/underline_2.svg" alt="" />

      <p class="text-center font-semibold text-[#5D5D5D] text-[20px] mb-10">
        From glowing reviews to insightful feedback, learn how our services<br />
        have made an impact and why users trust us.
      </p>

      <div class="w-full">
        <Splide
          :options="{
            rewind: false,
            perPage: 3,
            perMove: 1,
            gap: 40,
            autoplay: true,
            breakpoints: {
              640: {
                perPage: 1,
              },
            },
          }"
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div
              class="h-[480px] rounded-[35px] p-8 testimonial-gradient flex flex-col justify-between"
            >
              <div class="">
                <span
                  class="px-3 rounded-xl py-1.5 uppercase bg-[#FFF3EF] text-primary border-[0.78px] border-primary/30 font-semibold text-[10px]"
                  >Company</span
                >
              </div>

              <p class="text-lg text-[#5D5D5D] font-semibold">
                Experience the future of property management with our
                groundbreaking AI technology. Our innovative platform
                revolutionizes the way you manage properties, leveraging
                cutting-edge AI algorithms to streamline operations, optimize
                efficiency, and deliver unparalleled results. Say hello to a new
                era of property management with our industry-leading AI solution
              </p>

              <div class="flex gap-4 items-center">
                <div class="h-[61px] w-[61px] rounded-full">
                  <img
                    src="/images/profile.png"
                    class="h-[61px] w-[61px] rounded-full object-cover"
                    alt=""
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <h4 class="text-[20px] font-semibold">Jorge Monahan</h4>
                  <p class="text-[12px]">Customer Integration Representative</p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              class="h-[480px] rounded-[35px] p-8 testimonial-gradient flex flex-col justify-between"
            >
              <div class="">
                <span
                  class="px-3 rounded-xl py-1.5 uppercase bg-[#FFF3EF] text-primary border-[0.78px] border-primary/30 font-semibold text-[10px]"
                  >Company</span
                >
              </div>

              <p class="text-lg text-[#5D5D5D] font-semibold">
                Experience the future of property management with our
                groundbreaking AI technology. Our innovative platform
                revolutionizes the way you manage properties, leveraging
                cutting-edge AI algorithms to streamline operations, optimize
                efficiency, and deliver unparalleled results. Say hello to a new
                era of property management with our industry-leading AI solution
              </p>

              <div class="flex gap-4 items-center">
                <div class="h-[61px] w-[61px] rounded-full">
                  <img
                    src="/images/profile.png"
                    class="h-[61px] w-[61px] rounded-full object-cover"
                    alt=""
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <h4 class="text-[20px] font-semibold">Jorge Monahan</h4>
                  <p class="text-[12px]">Customer Integration Representative</p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              class="h-[480px] rounded-[35px] p-8 testimonial-gradient flex flex-col justify-between"
            >
              <div class="">
                <span
                  class="px-3 rounded-xl py-1.5 uppercase bg-[#FFF3EF] text-primary border-[0.78px] border-primary/30 font-semibold text-[10px]"
                  >Company</span
                >
              </div>

              <p class="text-lg text-[#5D5D5D] font-semibold">
                Experience the future of property management with our
                groundbreaking AI technology. Our innovative platform
                revolutionizes the way you manage properties, leveraging
                cutting-edge AI algorithms to streamline operations, optimize
                efficiency, and deliver unparalleled results. Say hello to a new
                era of property management with our industry-leading AI solution
              </p>

              <div class="flex gap-4 items-center">
                <div class="h-[61px] w-[61px] rounded-full">
                  <img
                    src="/images/profile.png"
                    class="h-[61px] w-[61px] rounded-full object-cover"
                    alt=""
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <h4 class="text-[20px] font-semibold">Jorge Monahan</h4>
                  <p class="text-[12px]">Customer Integration Representative</p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              class="h-[480px] rounded-[35px] p-8 testimonial-gradient flex flex-col justify-between"
            >
              <div class="">
                <span
                  class="px-3 rounded-xl py-1.5 uppercase bg-[#FFF3EF] text-primary border-[0.78px] border-primary/30 font-semibold text-[10px]"
                  >Company</span
                >
              </div>

              <p class="text-lg text-[#5D5D5D] font-semibold">
                Experience the future of property management with our
                groundbreaking AI technology. Our innovative platform
                revolutionizes the way you manage properties, leveraging
                cutting-edge AI algorithms to streamline operations, optimize
                efficiency, and deliver unparalleled results. Say hello to a new
                era of property management with our industry-leading AI solution
              </p>

              <div class="flex gap-4 items-center">
                <div class="h-[61px] w-[61px] rounded-full">
                  <img
                    src="/images/profile.png"
                    class="h-[61px] w-[61px] rounded-full object-cover"
                    alt=""
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <h4 class="text-[20px] font-semibold">Jorge Monahan</h4>
                  <p class="text-[12px]">Customer Integration Representative</p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              class="h-[480px] rounded-[35px] p-8 testimonial-gradient flex flex-col justify-between"
            >
              <div class="">
                <span
                  class="px-3 rounded-xl py-1.5 uppercase bg-[#FFF3EF] text-primary border-[0.78px] border-primary/30 font-semibold text-[10px]"
                  >Company</span
                >
              </div>

              <p class="text-lg text-[#5D5D5D] font-semibold">
                Experience the future of property management with our
                groundbreaking AI technology. Our innovative platform
                revolutionizes the way you manage properties, leveraging
                cutting-edge AI algorithms to streamline operations, optimize
                efficiency, and deliver unparalleled results. Say hello to a new
                era of property management with our industry-leading AI solution
              </p>

              <div class="flex gap-4 items-center">
                <div class="h-[61px] w-[61px] rounded-full">
                  <img
                    src="/images/profile.png"
                    class="h-[61px] w-[61px] rounded-full object-cover"
                    alt=""
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <h4 class="text-[20px] font-semibold">Jorge Monahan</h4>
                  <p class="text-[12px]">Customer Integration Representative</p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div
              class="h-[480px] rounded-[35px] p-8 testimonial-gradient flex flex-col justify-between"
            >
              <div class="">
                <span
                  class="px-3 rounded-xl py-1.5 uppercase bg-[#FFF3EF] text-primary border-[0.78px] border-primary/30 font-semibold text-[10px]"
                  >Company</span
                >
              </div>

              <p class="text-lg text-[#5D5D5D] font-semibold">
                Experience the future of property management with our
                groundbreaking AI technology. Our innovative platform
                revolutionizes the way you manage properties, leveraging
                cutting-edge AI algorithms to streamline operations, optimize
                efficiency, and deliver unparalleled results. Say hello to a new
                era of property management with our industry-leading AI solution
              </p>

              <div class="flex gap-4 items-center">
                <div class="h-[61px] w-[61px] rounded-full">
                  <img
                    src="/images/profile.png"
                    class="h-[61px] w-[61px] rounded-full object-cover"
                    alt=""
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <h4 class="text-[20px] font-semibold">Jorge Monahan</h4>
                  <p class="text-[12px]">Customer Integration Representative</p>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>
