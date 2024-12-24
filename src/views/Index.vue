<template>
  <!-- Hero -->
  <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-5">
    <!-- Slider -->
    <div
      data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"
  }'
      class="relative"
    >
      <div
        class="hs-carousel relative overflow-hidden w-full min-h-[300px] bg-white rounded-lg"
      >
        <div
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0"
        >
          <div class="hs-carousel-slide h-[300px]">
            <div
              class="flex justify-center h-[300px] bg-gray-100 lg:bg-transparent dark:bg-neutral-900"
            >
              <span
                class="self-center w-full text-4xl text-gray-800 transition duration-700 dark:text-white"
                ><img
                  src="/images/carousel1.png"
                  class="self-center object-cover object-center h-[300px] w-full"
              /></span>
            </div>
          </div>
          <div class="hs-carousel-slide h-[300px]">
            <div
              class="flex justify-center h-[300px] bg-gray-100 lg:bg-transparent dark:bg-neutral-800"
            >
              <span
                class="self-center w-full text-4xl text-gray-800 transition duration-700 dark:text-white"
                ><img
                  src="/images/carousel2.png"
                  class="self-center object-cover object-center h-[300px] w-full"
              /></span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-[300px] text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      >
        <span class="text-2xl" aria-hidden="true">
          <svg
            class="shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        type="button"
        class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-[300px] text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
      >
        <span class="sr-only">Next</span>
        <span class="text-2xl" aria-hidden="true">
          <svg
            class="shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button>

      <div
        class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"
      ></div>
    </div>
    <!-- End Slider -->
  </div>

  <!-- Category -->
  <div class="">
    <div class="container px-4 sm:px-6 md:px-8 lg:px-10 mx-auto pt-4">
      <div class="flex justify-between items-center relative z-10">
        <h1
          class="text-xl sm:text-2xl font-medium tracking-wide text-gray-900 bg-transparent relative z-10"
        >
          Browse By Category
        </h1>
        <a
          href="#"
          class="text-sm font-medium inline-flex items-center gap-x-2 bg-indigo-500 text-white text-gray-900 rounded-full px-5 py-3 transition duration-500 hover:bg-white hover:text-gray-900 group"
        >
          <span
            class="w-6 h-6 relative text-gray-900 bg-white rounded-full grid place-items-center overflow-hidden group-hover:text-white group-hover:bg-gray-900"
          >
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="group-hover:transition group-hover:duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
              width="10"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>

            <svg
              viewBox="0 0 14 15"
              fill="none"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute -translate-x-14 translate-y-14 group-hover:transition group-hover:duration-300 group-hover:ease-in-out group-hover:delay-100 group-hover:translate-x-0 group-hover:translate-y-0"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          View All
        </a>
      </div>

      <!-- Outer Scrollable Wrapper -->
      <div
        class="relative z-10 overflow-x-auto -mx-4 px-4 pt-12 sm:pt-10 md:pt-8 xl:pt-7"
      >
        <!-- Inner Container -->
        <div
          class="flex gap-5 mt-7 sm:gap-x-2 md:gap-x-4 lg:justify-between xl:flex-wrap"
        >
          <!-- Item 1 -->
          <div
            class="relative z-100 overflow-visible bg-transparent sm:bg-indigo-500 flex-none w-[25%] sm:w-[25%] md:w-[23.5%] lg:w-[19%] xl:w-[15%] rounded-md sm:px-2 sm:py-2 lg:px-5 lg:py-2 xl:px-7 xl:py-3 text-center group cursor-pointer xl:h-fit lg:h-[180px]"
          >
            <div
              class="relative overflow-visible flex justify-center items-center"
            >
              <img
                src="/images/watch.png"
                class="z-100 w-[80px] h-[80px] sm:w-28 sm:h-28 md:w-[120px] md:h-[120px] lg:w-32 lg:h-32 xl:w-36 xl:h-36 transition duration-500 ease-out transform sm:group-hover:scale-125 sm:group-hover:-translate-y-12 object-cover"
              />
            </div>
            <h3
              class="mt-3 flex-wrap lg:whitespace-nowrap text-gray-800 sm:text-white font-medium text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl transition duration-500 ease-out transform sm:group-hover:-translate-y-6 md:group-hover:-translate-y-[40px] lg:group-hover:-translate-y-[32px]"
            >
              Smart Watches
            </h3>
            <button
              class="hidden sm:block whitespace-nowrap bg-gray-800 rounded-full text-base font-medium px-1 lg:px-1 xl:px-2 py-1 lg:w-24 sm:text-white absolute left-1/2 -translate-x-1/2 bottom-[1px] sm:bottom-[3px] md:bottom-[4px] lg:bottom-[6px] xl:bottom-[10px] opacity-0 transition duration-500 ease-out group-hover:opacity-100 group-hover:delay-200"
            >
              Shop Now
            </button>
          </div>

          <!-- Item 2 -->
          <div
            class="relative z-100 overflow-visible bg-transparent sm:bg-indigo-500 flex-none w-[25%] sm:w-[25%] md:w-[23.5%] lg:w-[19%] xl:w-[15%] rounded-md sm:px-2 sm:py-2 lg:px-5 lg:py-2 xl:px-7 xl:py-3 text-center group cursor-pointer xl:h-fit lg:h-[180px]"
          >
            <div
              class="relative overflow-visible flex justify-center items-center"
            >
              <img
                src="/images/camera.png"
                class="z-100 w-[80px] h-[80px] sm:w-28 sm:h-28 md:w-[120px] md:h-[120px] lg:w-32 lg:h-32 xl:w-36 xl:h-36 transition duration-500 ease-out transform sm:group-hover:scale-125 sm:group-hover:-translate-y-12 object-cover"
              />
            </div>
            <h3
              class="mt-3 flex-wrap lg:whitespace-nowrap text-gray-800 sm:text-white font-medium text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl transition duration-500 ease-out transform sm:group-hover:-translate-y-6 md:group-hover:-translate-y-[40px] lg:group-hover:-translate-y-[32px]"
            >
              Cameras
            </h3>
            <button
              class="hidden sm:block whitespace-nowrap bg-gray-800 rounded-full text-base font-medium px-1 lg:px-1 xl:px-2 py-1 lg:w-24 sm:text-white absolute left-1/2 -translate-x-1/2 bottom-[1px] sm:bottom-[3px] md:bottom-[4px] lg:bottom-[6px] xl:bottom-[10px] opacity-0 transition duration-500 ease-out group-hover:opacity-100 group-hover:delay-200"
            >
              Shop Now
            </button>
          </div>

          <!-- Item 3 -->
          <div
            class="relative z-100 overflow-visible bg-transparent sm:bg-indigo-500 flex-none w-[25%] sm:w-[25%] md:w-[23.5%] lg:w-[19%] xl:w-[15%] rounded-md sm:px-2 sm:py-2 lg:px-5 lg:py-2 xl:px-7 xl:py-3 text-center group cursor-pointer xl:h-fit lg:h-[180px]"
          >
            <div
              class="relative overflow-visible flex justify-center items-center"
            >
              <img
                src="/images/phone.png"
                class="z-100 w-[80px] h-[80px] sm:w-28 sm:h-28 md:w-[120px] md:h-[120px] lg:w-32 lg:h-32 xl:w-36 xl:h-36 transition duration-500 ease-out transform sm:group-hover:scale-125 sm:group-hover:-translate-y-12 object-cover"
              />
            </div>
            <h3
              class="mt-3 flex-wrap lg:whitespace-nowrap text-gray-800 sm:text-white font-medium text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl transition duration-500 ease-out transform sm:group-hover:-translate-y-6 md:group-hover:-translate-y-[40px] lg:group-hover:-translate-y-[32px]"
            >
              Phones
            </h3>
            <button
              class="hidden sm:block whitespace-nowrap bg-gray-800 rounded-full text-base font-medium px-1 lg:px-1 xl:px-2 py-1 lg:w-24 sm:text-white absolute left-1/2 -translate-x-1/2 bottom-[1px] sm:bottom-[3px] md:bottom-[4px] lg:bottom-[6px] xl:bottom-[10px] opacity-0 transition duration-500 ease-out group-hover:opacity-100 group-hover:delay-200"
            >
              Shop Now
            </button>
          </div>

          <!-- Item 4 -->
          <div
            class="relative z-100 overflow-visible bg-transparent sm:bg-indigo-500 flex-none w-[25%] sm:w-[25%] md:w-[23.5%] lg:w-[19%] xl:w-[15%] rounded-md sm:px-2 sm:py-2 lg:px-5 lg:py-2 xl:px-7 xl:py-3 text-center group cursor-pointer xl:h-fit lg:h-[180px]"
          >
            <div
              class="relative overflow-visible flex justify-center items-center"
            >
              <img
                src="/images/ipad.png"
                class="z-100 w-[80px] h-[80px] sm:w-28 sm:h-28 md:w-[120px] md:h-[120px] lg:w-32 lg:h-32 xl:w-36 xl:h-36 transition duration-500 ease-out transform sm:group-hover:scale-125 sm:group-hover:-translate-y-12 object-cover"
              />
            </div>
            <h3
              class="mt-3 flex-wrap lg:whitespace-nowrap text-gray-800 sm:text-white font-medium text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl transition duration-500 ease-out transform sm:group-hover:-translate-y-6 md:group-hover:-translate-y-[40px] lg:group-hover:-translate-y-[32px]"
            >
              Ipad
            </h3>
            <button
              class="hidden sm:block whitespace-nowrap bg-gray-800 rounded-full text-base font-medium px-1 lg:px-1 xl:px-2 py-1 lg:w-24 sm:text-white absolute left-1/2 -translate-x-1/2 bottom-[1px] sm:bottom-[3px] md:bottom-[4px] lg:bottom-[6px] xl:bottom-[10px] opacity-0 transition duration-500 ease-out group-hover:opacity-100 group-hover:delay-200"
            >
              Shop Now
            </button>
          </div>

          <!-- Item 5 -->
          <div
            class="relative z-100 overflow-visible bg-transparent sm:bg-indigo-500 flex-none w-[25%] sm:w-[25%] md:w-[23.5%] lg:w-[19%] xl:w-[15%] rounded-md sm:px-2 sm:py-2 lg:px-5 lg:py-2 xl:px-7 xl:py-3 text-center group cursor-pointer xl:h-fit lg:h-[180px]"
          >
            <div
              class="relative overflow-visible flex justify-center items-center"
            >
              <img
                src="/images/headphone.png"
                class="z-100 w-[80px] h-[80px] sm:w-28 sm:h-28 md:w-[120px] md:h-[120px] lg:w-32 lg:h-32 xl:w-36 xl:h-36 transition duration-500 ease-out transform sm:group-hover:scale-125 sm:group-hover:-translate-y-12 object-cover"
              />
            </div>
            <h3
              class="mt-3 flex-wrap lg:whitespace-nowrap text-gray-800 sm:text-white font-medium text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl transition duration-500 ease-out transform sm:group-hover:-translate-y-6 md:group-hover:-translate-y-[40px] lg:group-hover:-translate-y-[32px]"
            >
              Headphones
            </h3>
            <button
              class="hidden sm:block whitespace-nowrap bg-gray-800 rounded-full text-base font-medium px-1 lg:px-1 xl:px-2 py-1 lg:w-24 sm:text-white absolute left-1/2 -translate-x-1/2 bottom-[1px] sm:bottom-[3px] md:bottom-[4px] lg:bottom-[6px] xl:bottom-[10px] opacity-0 transition duration-500 ease-out group-hover:opacity-100 group-hover:delay-200"
            >
              Shop Now
            </button>
          </div>

          <!-- Item 6 -->
          <div
            class="relative z-100 overflow-visible bg-transparent sm:bg-indigo-500 flex-none w-[25%] sm:w-[25%] md:w-[23.5%] lg:w-[19%] xl:w-[15%] rounded-md sm:px-2 sm:py-2 lg:px-5 lg:py-2 xl:px-7 xl:py-3 text-center group cursor-pointer xl:h-fit lg:h-[180px]"
          >
            <div
              class="relative overflow-visible flex justify-center items-center"
            >
              <img
                src="/images/gaming.png"
                class="z-100 w-[80px] h-[80px] sm:w-28 sm:h-28 md:w-[120px] md:h-[120px] lg:w-32 lg:h-32 xl:w-36 xl:h-36 transition duration-500 ease-out transform sm:group-hover:scale-125 sm:group-hover:-translate-y-12 object-cover"
              />
            </div>
            <h3
              class="mt-3 flex-wrap lg:whitespace-nowrap text-gray-800 sm:text-white font-medium text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl transition duration-500 ease-out transform sm:group-hover:-translate-y-6 md:group-hover:-translate-y-[40px] lg:group-hover:-translate-y-[32px]"
            >
              Gaming
            </h3>
            <button
              class="hidden sm:block whitespace-nowrap bg-gray-800 rounded-full text-base font-medium px-1 lg:px-1 xl:px-2 py-1 lg:w-24 sm:text-white absolute left-1/2 -translate-x-1/2 bottom-[1px] sm:bottom-[3px] md:bottom-[4px] lg:bottom-[6px] xl:bottom-[10px] opacity-0 transition duration-500 ease-out group-hover:opacity-100 group-hover:delay-200"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tab -->
  <div
    class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-20 flex flex-row justify-between items-center"
  >
    <nav
      class="flex gap-x-[6px] sm:gap-x-6 md:gap-x-8 lg:gap-x-10"
      aria-label="Tabs"
      role="tablist"
      aria-orientation="horizontal"
    >
      <button
        type="button"
        class="py-3 inline-flex items-center gap-x-0.5 sm:gap-x-1 md:gap-x-2 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-600 tracking-wide hs-tab-active:font-medium hs-tab-active:text-gray-900 hover:text-gray-900 active"
        id="pills-with-brand-color-item-1"
        aria-selected="true"
        data-hs-tab="#pills-with-brand-color-1"
        aria-controls="pills-with-brand-color-1"
        role="tab"
      >
        New Arrivals
      </button>
      <button
        type="button"
        class="py-3 inline-flex items-center gap-x-0.5 sm:gap-x-1 md:gap-x-2 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-600 tracking-wide hs-tab-active:font-medium hs-tab-active:text-gray-900 hover:text-gray-900"
        id="pills-with-brand-color-item-2"
        aria-selected="false"
        data-hs-tab="#pills-with-brand-color-2"
        aria-controls="pills-with-brand-color-2"
        role="tab"
      >
        Best Sellers
      </button>
      <button
        type="button"
        class="py-3 inline-flex items-center gap-x-0.5 sm:gap-x-1 md:gap-x-2 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-600 tracking-wide hs-tab-active:font-medium hs-tab-active:text-gray-900 hover:text-gray-900"
        id="pills-with-brand-color-item-3"
        aria-selected="false"
        data-hs-tab="#pills-with-brand-color-3"
        aria-controls="pills-with-brand-color-3"
        role="tab"
      >
        Featured Products
      </button>
    </nav>
    <a
      href="#"
      class="text-sm font-medium inline-flex items-center gap-x-2 bg-indigo-500 text-white rounded-full px-5 py-3 transition duration-500 whitespace-nowrap hover:bg-white hover:text-gray-900 group"
    >
      <span
        class="w-6 h-6 relative text-gray-900 bg-white rounded-full grid place-items-center overflow-hidden whitespace-nowrap group-hover:text-white group-hover:bg-gray-900"
      >
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="group-hover:transition group-hover:duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
          width="10"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="10"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -translate-x-14 translate-y-14 group-hover:transition group-hover:duration-300 group-hover:ease-in-out group-hover:delay-100 group-hover:translate-x-0 group-hover:translate-y-0"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      View All
    </a>
  </div>

  <div class="mt-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
    <div
      id="pills-with-brand-color-1"
      role="tabpanel"
      aria-labelledby="pills-with-brand-color-item-1"
    >
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        <div
          class="px-7 py-10 border-[0.5px]"
          :class="{
            'xl:border-b-[0.5px]': index < newArrivals.length - 6,
            'xl:border-x-0':
              index % 6 === 0 || index % 6 === 2 || index % 6 === 4,
            'xl:border-l': index % 6 === 0,
          }"
          v-for="(newArrival, index) in newArrivals"
          :key="index"
        >
          <div class="py-4 rounded-lg">
            <img :src="newArrival.image" class="w-3/5 lg:w-4/5 mx-auto" />
          </div>
          <h1 class="xl:text-base 2xl:text-lg text-center text-sm mt-7">
            {{ newArrival.name }}
          </h1>
          <h4
            class="xl:text-lg 2xl:text-xl text-center text-sm font-semibold mt-4"
          >
            {{ newArrival.price }}
          </h4>
        </div>
      </div>
    </div>

    <div
      id="pills-with-brand-color-2"
      class="hidden"
      role="tabpanel"
      aria-labelledby="pills-with-brand-color-item-2"
    >
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        <div
          class="px-7 py-10 border-[0.5px]"
          :class="{
            'xl:border-b-[0.5px]': index < bestSellers.length - 6,
            'xl:border-x-0':
              index % 6 === 0 || index % 6 === 2 || index % 6 === 4,
            'xl:border-l': index % 6 === 0,
          }"
          v-for="(bestSeller, index) in bestSellers"
          :key="index"
        >
          <div class="py-4 rounded-lg">
            <img :src="bestSeller.image" class="w-3/5 lg:w-4/5 mx-auto" />
          </div>
          <h1 class="xl:text-base 2xl:text-lg text-center text-sm mt-7">
            {{ bestSeller.name }}
          </h1>
          <h4
            class="xl:text-lg 2xl:text-xl text-center text-sm font-semibold mt-4"
          >
            {{ bestSeller.price }}
          </h4>
        </div>
      </div>
    </div>

    <div
      id="pills-with-brand-color-3"
      class="hidden"
      role="tabpanel"
      aria-labelledby="pills-with-brand-color-item-3"
    >
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        <div
          class="px-7 py-10 border-[0.5px]"
          :class="{
            'xl:border-b-[0.5px]': index < products.length - 6,
            'xl:border-x-0':
              index % 6 === 0 || index % 6 === 2 || index % 6 === 4,
            'xl:border-l': index % 6 === 0,
          }"
          v-for="(product, index) in products"
          :key="index"
        >
          <div class="py-4 rounded-lg">
            <img :src="product.image" class="w-3/5 lg:w-4/5 mx-auto" />
          </div>
          <h1 class="xl:text-base 2xl:text-lg text-center text-sm mt-7">
            {{ product.name }}
          </h1>
          <h4
            class="xl:text-lg 2xl:text-xl text-center text-sm font-semibold mt-4"
          >
            {{ product.price }}
          </h4>
        </div>
      </div>
    </div>
  </div>

  <!-- Discounts -->
  <div class="container px-4 sm:px-6 md:px-8 lg:px-10 mx-auto py-20">
    <div class="flex justify-between items-center">
      <h1
        class="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-medium tracking-wide text-gray-900"
      >
        Up to 50% Discounts
      </h1>
      <a
        href="#"
        class="text-sm font-medium inline-flex items-center gap-x-2 bg-indigo-500 text-white rounded-full px-5 py-3 transition duration-500 hover:bg-white hover:text-gray-900 group"
      >
        <span
          class="w-6 h-6 relative text-gray-900 bg-white rounded-full grid place-items-center overflow-hidden group-hover:text-white group-hover:bg-gray-900"
        >
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="group-hover:transition group-hover:duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
            width="10"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            ></path>
          </svg>

          <svg
            viewBox="0 0 14 15"
            fill="none"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute -translate-x-14 translate-y-14 group-hover:transition group-hover:duration-300 group-hover:ease-in-out group-hover:delay-100 group-hover:translate-x-0 group-hover:translate-y-0"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        View All
      </a>
    </div>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-4 sm:mt-6 md:mt-8 lg:mt-10"
    >
      <div
        class="px-7 py-10 border-[0.5px]"
        :class="{
          'xl:border-b-[0.5px]': index < discounts.length - 6,
          'xl:border-x-0':
            index % 6 === 0 || index % 6 === 2 || index % 6 === 4,
          'xl:border-l': index % 6 === 0,
        }"
        v-for="(discount, index) in discounts"
        :key="index"
      >
        <div class="py-4 rounded-lg">
          <img :src="discount.image" class="w-3/5 lg:w-4/5 mx-auto" />
        </div>
        <h1 class="xl:text-base 2xl:text-lg text-center text-sm mt-7">
          {{ discount.name }}
        </h1>
        <h4
          class="xl:text-lg 2xl:text-xl text-center text-sm font-semibold mt-4"
        >
          {{ discount.price }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const newArrivals = ref([
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
]);

const bestSellers = ref([
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
]);

const products = ref([
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/product.webp",
  },
]);

const discounts = ref([
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: "5,000,000",
    image: "/images/phone.png",
  },
]);
</script>

<style scoped>
.container {
  overflow: visible;
}
</style>
