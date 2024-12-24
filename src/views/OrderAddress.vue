<template>
  <div class="container w-full mx-auto mt-12 px-6 space-y-10 pb-64">
    <!-- Start Step Indicator -->
    <div
      class="hidden sm:flex flex-row justify-between items-center space-y-0 mx-0 text-gray-500"
    >
      <!-- Step 1 -->
      <div class="flex items-center space-x-2">
        <span
          class="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white font-semibold"
          ><svg
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
            class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black"
            >Step 1</span
          >
          <span
            class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black"
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
            class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black opacity-40"
            >Step 2</span
          >
          <span
            class="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black opacity-40"
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
            >Step 3</span
          >
          <span
            class="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black whitespace-nowrap opacity-40"
            >Order Confirmed</span
          >
        </div>
      </div>
    </div>
    <!-- End Step Indicator -->

    <!-- Stepper -->
    <div class="w-full block sm:hidden">
      <ul class="relative flex flex-row gap-x-2 w-full">
        <!-- Item -->
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
                class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black"
                >Step 1</span
              >
              <span
                class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black"
                >Address</span
              >
            </div>
          </div>
          <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
        </li>
        <!-- End Item -->

        <!-- Item -->
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

        <!-- Item -->
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
                >Step 3</span
              >
              <span
                class="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-black opacity-40"
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

    <!-- Start Invoice Address -->
    <div class="bg-gray-100 px-6 py-5 mx-4 md:mx-0 rounded-md">
      <span class="text-gray-900 text-lg font-normal tracking-wide"
        >INVOICE ADDRESS</span
      >
    </div>
    <!-- End Invoice Address -->

    <!-- Start Form Section -->
    <div class="px-4 md:px-0">
      <form class="space-y-8">
        <!-- Row 1 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <!-- Name -->
          <div>
            <label
              for="name"
              class="block text-sm font-medium uppercase tracking-wide text-gray-600"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="block w-full h-12 mt-2 py-2 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
          </div>
          <!-- Phone -->
          <div>
            <label
              for="phone"
              class="block text-sm font-medium uppercase tracking-wide text-gray-600"
              >Phone</label
            >
            <input
              type="text"
              id="phone"
              name="phone"
              class="block w-full h-12 mt-2 py-2 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
          </div>
        </div>
        <!-- Row 2 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- Address -->
          <div>
            <label
              for="address"
              class="block text-sm font-medium uppercase tracking-wide text-gray-600"
              >Address</label
            >
            <textarea
              id="address"
              name="address"
              rows="5"
              class="block w-full mt-2 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            ></textarea>
          </div>
          <!-- City -->
          <div>
            <label
              for="city"
              class="block text-sm font-medium uppercase tracking-wide text-gray-600"
              >Order From (City)</label
            >
            <input
              type="text"
              id="city"
              name="city"
              class="block w-full h-12 mt-2 py-2 border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
          </div>
        </div>
      </form>
    </div>
    <!-- End Form Section -->

    <!-- Start Navigation Buttons -->
    <div class="flex justify-between items-center px-4 md:px-0">
      <button
        class="flex justify-between items-center gap-x-4 text-sm text-gray-700 font-semibold tracking-wider hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
          />
        </svg>
        BACK
      </button>
      <router-link
        :to="{ name: 'orderpayment' }"
        class="flex justify-between items-center text-sm text-gray-700 font-semibold tracking-wider hover:underline"
      >
        NEXT
      </router-link>
    </div>
    <!-- End Navigation Button -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
