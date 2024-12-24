<template>
  <div class="container mx-auto px-6 mt-12 space-y-10 pb-64">
    <!-- Start Step Indicator -->
    <div
      class="hidden sm:flex flex-row justify-between items-center space-y-0 mx-0 text-gray-500"
    >
      <!-- Step 1 -->
      <div class="flex items-center space-x-2">
        <span
          class="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white font-medium opacity-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
            />
          </svg>
        </span>
        <div class="flex flex-col">
          <span
            class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black opacity-40"
            >Step 1</span
          >
          <span
            class="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black opacity-40"
            >Address</span
          >
        </div>
      </div>

      <!-- Dashed Line -->
      <span
        class="w-20 sm:w-36 md:w-48 lg:w-64 h-1 mx-8 ms-14 border-t-2 border-l-0 border-dashed"
      ></span>

      <!-- Step 2 -->
      <div class="flex items-center space-x-2">
        <span
          class="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white font-medium opacity-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-credit-card"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"
            />
            <path
              d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
            />
          </svg>
        </span>
        <div class="flex flex-col">
          <span
            class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black opacity-40"
            >Step 2</span
          >
          <span
            class="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black whitespace-nowrap opacity-40"
            >Payment</span
          >
        </div>
      </div>

      <!-- Dashed Line -->
      <span
        class="w-20 sm:w-36 md:w-48 lg:w-64 h-1 mx-8 ms-14 border-t-2 border-l-0 border-dashed"
      ></span>

      <!-- Step 3 -->
      <div class="flex items-center space-x-2">
        <span
          class="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart-check"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
            />
            <path
              d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            />
          </svg>
        </span>
        <div class="flex flex-col">
          <span
            class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black"
            >Step 3</span
          >
          <span
            class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black"
            >Order Confirmed</span
          >
        </div>
      </div>
    </div>
    <!-- End Step Indicator -->

    <!-- Stepper -->
    <div class="w-full block sm:hidden">
      <ul class="relative flex flex-row gap-x-2 w-full">
        <!-- Item 1 -->
        <li class="flex items-center gap-x-2 shrink basis-0 flex-1 group">
          <div
            class="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle"
          >
            <span
              class="size-7 flex justify-center items-center mr-2 shrink-0 bg-gray-800 opacity-30 font-medium text-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
                />
              </svg>
            </span>
            <div class="flex flex-col">
              <span
                class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black opacity-40"
                >Step 1</span
              >
              <span
                class="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black opacity-40"
                >Address</span
              >
            </div>
          </div>
          <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
        </li>
        <!-- End Item -->

        <!-- Item 2 -->
        <li
          class="flex items-center justify-self-end gap-x-2 shrink basis-0 flex-1 group"
        >
          <div
            class="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle"
          >
            <span
              class="size-7 flex justify-center items-center mr-2 shrink-0 bg-gray-800 opacity-30 font-medium text-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-credit-card"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"
                />
                <path
                  d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
                />
              </svg>
            </span>
            <div class="flex flex-col">
              <span
                class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black opacity-40"
                >Step 2</span
              >
              <span
                class="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black opacity-40"
                >Payment</span
              >
            </div>
          </div>
          <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
        </li>
        <!-- End Item -->

        <!-- Item 3 -->
        <li
          class="flex items-center gap-x-2 shrink basis-0 flex-1 group w-full"
        >
          <div
            class="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle"
          >
            <span
              class="size-7 flex justify-center items-center shrink-0 mr-2 bg-gray-800 font-medium text-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart-check"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
                />
                <path
                  d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                />
              </svg>
            </span>
            <div class="flex flex-col">
              <span
                class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black"
                >Step 3</span
              >
              <span
                class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black"
                >Order Confirmed</span
              >
            </div>
          </div>
          <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
        </li>
        <!-- End Item -->
      </ul>
    </div>
    <!-- End Stepper -->

    <!-- Start Order Confirmed -->
    <div
      class="bg-gray-100 pl-3 py-3 md:px-6 md:py-5 ml-6 mr-8 md:mx-0 rounded-md"
    >
      <span
        class="text-gray-900 text-xs sm:text-sm md:text-base font-normal uppercase tracking-wide"
        >Order Confirmed</span
      >
    </div>

    <div
      class="container flex flex-col mx-auto justify-center items-center py-12 sm:w-full sm:px-4"
    >
      <h2
        class="text-gray-900 text-4xl sm:text-5xl md:text-6xl uppercase font-normal tracking-wider"
      >
        Order Confirmed
      </h2>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-check-circle-fill size-14 mt-8 text-yellow-400"
        viewBox="0 0 16 16"
      >
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
        />
      </svg>

      <h3
        class="mt-6 text-gray-800 text-base sm:text-lg md:text-xl tracking-wider font-semibold"
      >
        Thank you, <span>Ye Myint Soe</span>. Your order is confirmed.
      </h3>

      <!-- View Order Button -->
      <div class="grid w-48 h-12 mx-auto mt-8">
        <button
          class="place-self-center w-full flex py-2 items-center justify-center border border-gray-800 rounded-lg"
        >
          <router-link
            class="text-sm sm:text-base md:text-lg font-medium tracking-wider"
            >View Your Order</router-link
          >
        </button>
      </div>
      <!-- View Order Button -->
    </div>
    <!-- End Order Confirmed -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
