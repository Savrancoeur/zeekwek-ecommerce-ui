<template>
  <div class="container mx-auto mt-12 space-y-10 px-6 pb-64">
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
            >Step 2</span
          >
          <span
            class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black"
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
                >Step 2</span
              >
              <span
                class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black"
                >Payment</span
              >
            </div>
          </div>
          <div class="w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
        </li>
        <!-- End Item -->

        <!-- Item 3 -->
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

    <!-- Start Payment Method Header -->
    <div class="mx-8 md:mx-0 bg-gray-100 px-6 py-5 rounded-md">
      <span class="text-gray-700 text-base font-semibold tracking-wide"
        >Please Choose Your Payment Method</span
      >
    </div>
    <!-- End Payment Method Header -->

    <!-- Start Payment Description Section -->
    <div
      class="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 space-y-8 mx-auto px-4"
    >
      <!-- Summary Section -->
      <div class="p-6 rounded-lg border">
        <h2 class="text-lg font-semibold text-gray-700 tracking-wider">
          SUMMARY
        </h2>
        <div class="mt-4 space-y-4">
          <!-- Product  -->
          <div
            v-for="(product, index) in products"
            :key="index"
            class="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg"
          >
            <div class="flex items-center space-x-4">
              <img
                :src="product.image"
                alt="Product Image"
                class="w-12 h-12 rounded-lg"
              />
              <div class="flex flex-wrap px-2">
                <p class="text-lg font-semibold text-gray-800">
                  {{ product.name }}
                </p>
                <p class="pe-4 text-lg font-semibold text-gray-600">X</p>
                <p class="text-lg font-semibold text-gray-800">
                  {{ product.quantity }}
                </p>
              </div>
            </div>
            <p class="text-sm font-semibold text-gray-800">
              ${{ product.price }}
            </p>
          </div>
        </div>

        <!-- Address -->
        <div class="mt-6">
          <p class="text-base font-medium text-gray-600">Address</p>
          <p class="mt-4 text-base font-bold text-gray-800">
            1131 Dusty Townline, Jacksonville, TX 40322
          </p>
        </div>

        <!-- Subtotal -->
        <div class="mt-6 pt-4 flex justify-between text-gray-800 font-semibold">
          <span>Subtotal</span>
          <span>${{ subtotal }}</span>
        </div>
      </div>

      <!-- Payment Section -->
      <div>
        <h2 class="mb-6 text-lg font-semibold text-gray-800">PAYMENT</h2>
        <!-- Payment Methods -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <input
              type="radio"
              name="payment"
              id="cash"
              class="text-black focus:ring-black"
            />
            <label
              for="cash"
              class="text-lg tracking-wider text-gray-800 font-medium"
              >Cash on Delivery</label
            >
          </div>
          <div class="flex items-center space-x-4">
            <input
              type="radio"
              name="payment"
              id="wallet"
              class="text-black focus:ring-black"
            />
            <label
              for="wallet"
              class="text-lg tracking-wider text-gray-800 font-medium"
              >Pay by Bank/Wallet</label
            >
          </div>
        </div>

        <!-- Account Details -->
        <div class="mt-10">
          <h3 class="text-lg font-light text-gray-600 mb-8">ACCOUNT</h3>
          <div class="space-y-12">
            <!-- Visible Accounts -->
            <div v-for="(account, index) in state.visibleAccounts" :key="index">
              <div>
                <div class="flex items-center">
                  <button
                    v-if="
                      index === state.visibleAccounts.length - 1 &&
                      state.visibleAccounts.length < accounts.length
                    "
                    @click="addAccount"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 mb-2 me-3 text-white bg-gray-900 rounded-sm"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                  <p class="mb-3 text-lg font-light text-gray-600">
                    {{ account.name }}
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Transaction Number"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Payment Description Section -->

    <!-- Start Navigation Buttons -->
    <div class="flex justify-between items-center mx-4 md:mx-0">
      <button
        class="flex justify-between items-center gap-x-4 text-sm text-gray-700 font-semibold tracking-wider hover:underline"
      >
        BACK
      </button>
      <router-link
        :to="{ name: 'orderconfirmed' }"
        class="flex justify-between items-end px-10 py-3 border border-gray-900 text-sm text-white font-semibold tracking-wider bg-gray-900 rounded-lg hover:text-gray-900 hover:bg-white transition"
      >
        PLACE AN ORDER
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </router-link>
    </div>
    <!-- End Navigation Button -->
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

const products = ref([
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: 1000,
    quantity: 1,
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: 1000,
    quantity: 1,
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A",
    price: 1000,
    quantity: 1,
    image: "/images/product.webp",
  },
]);

const subtotal = computed(() => {
  return products.value.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
});

const accounts = [
  { name: "KPAY - Ye Myint Soe (09403438913)" },
  { name: "KBZ - 07540202106032001" },
  { name: "CB - 0228500100029808" },
  { name: "AYA - 20025883950" },
  { name: "YOMA - 006444117002972" },
];

const state = reactive({
  visibleAccounts: [accounts[0]],
});

function addAccount() {
  if (state.visibleAccounts.length < accounts.length) {
    state.visibleAccounts.push(accounts[state.visibleAccounts.length]);
  }
}
</script>

<style lang="scss" scoped></style>
