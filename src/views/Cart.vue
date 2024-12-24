<template>
  <div class="container mx-auto px-6 py-10 lg:py-20">
    <div class="w-full flex flex-col lg:flex-row pb-12">
      <div class="w-full lg:w-[55%]">
        <h1 class="text-xl font-semibold text-gray-800 tracking-wider">
          Your Cart
        </h1>

        <!-- Start Cart Items Section -->
        <div class="flex flex-col">
          <!-- Item 1 -->
          <div
            v-for="(product, index) in products"
            :key="index"
            class="flex flex-row items-center justify-center py-14 border-b border-gray-300"
          >
            <div
              class="w-1/4 flex flex-col items-center justify-center my-6 sm:mx-2"
            >
              <img
                :src="product.image"
                class="w-12 h-full md:w-20 mr-4 object-cover object-fit"
              />
            </div>

            <div
              class="w-1/2 sm:w-auto flex flex-col sm:flex-row justify-center sm:justify-between items-start sm:items-center gap-x-2 sm:gap-x-4"
            >
              <h1 class="text-xs md:text-base font-medium mb-3">
                {{ product.name }}
              </h1>
              <p class="text-xs md:text-sm">#2513956913984</p>

              <div class="flex justify-between mt-4 sm:mt-0">
                <button
                  @click="decreaseQuantity(index)"
                  class="mx-2 text-sm md:text-lg"
                >
                  -
                </button>
                <input
                  type="number"
                  v-model.number="product.quantity"
                  class="w-5 h-3 px-1 py-2 md:w-10 md:h-6 md:px-2 md:py-4 border border-gray-300 rounded-md text-center"
                  min="1"
                />
                <button
                  @click="increaseQuantity(index)"
                  class="mx-2 text-sm md:text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <div class="w-1/4 flex justify-center items-center">
              <p class="font-medium text-base md:text-lg">
                {{ formatCurrency(product.price * product.quantity) }}
              </p>

              <button @click="removeItem(index)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x size-4 md:size-8 text-gray-600"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            v-if="products.length === 0"
            class="border border-gray-500 rounded-lg mt-10 px-12 py-20"
          >
            <h2 class="justify-self-center text-red-500 font-semibold text-3xl">
              There is no item in your cart.
            </h2>
          </div>
        </div>
        <!-- End Cart Items Section -->
      </div>

      <!-- Order Summary Section -->
      <div
        class="w-full lg:w-[45%] h-fit mx-0 lg:ml-6 lg:mr-0 mt-6 lg:mt-0 py-2 border border-gray-300 rounded-lg"
      >
        <div
          class="container mx-auto px-6 py-10 flex flex-col justify-center items-start"
        >
          <h2 class="mb-10 text-xl font-semibold text-gray-800 tracking-wider">
            Order Summary
          </h2>

          <h3 class="text-base font-medium text-gray-600">
            Discount Code / Promo Code
          </h3>

          <input
            type="text"
            v-model="discountCode"
            class="w-full mt-2 mb-8 py-4 ps-4 rounded-lg"
            placeholder="Code"
          />

          <div class="w-full h-full flex justify-between items-center mb-6">
            <h2 class="text-lg font-medium text-gray-800 tracking-wider">
              Subtotal
            </h2>
            <h2 class="text-lg font-medium">{{ formatCurrency(subtotal) }}</h2>
          </div>

          <div
            v-if="products.length !== 0"
            class="w-full h-full flex justify-between items-center mb-3"
          >
            <h2 class="text-lg font-medium text-gray-600 tracking-wider">
              Estimated Tax
            </h2>
            <h2 class="text-lg font-medium">{{ formatCurrency(tax) }}</h2>
          </div>

          <div
            v-if="products.length !== 0"
            class="w-full h-full flex justify-between items-center mb-6"
          >
            <h2 class="text-lg font-medium text-gray-600 tracking-wider">
              Shipping & Handling
            </h2>
            <h2 class="text-lg font-medium">{{ formatCurrency(shipping) }}</h2>
          </div>

          <div class="w-full h-full flex justify-between items-center mb-12">
            <h2 class="text-lg font-medium text-gray-800 tracking-wider">
              Total
            </h2>
            <h2 class="text-lg font-medium">{{ formatCurrency(total) }}</h2>
          </div>

          <router-link
            :to="{ name: 'orderaddress' }"
            type="submit"
            class="w-full h-12 text-center leading-[48px] text-white tracking-wider bg-gray-950 rounded-lg"
          >
            Checkout
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const products = ref([
  {
    name: "Apple IPhone 15 ",
    price: 1000,
    quantity: 1,
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 ",
    price: 1000,
    quantity: 1,
    image: "/images/product.webp",
  },
  {
    name: "Apple IPhone 15 ",
    price: 1000,
    quantity: 1,
    image: "/images/product.webp",
  },

  {
    name: "Apple IPhone 15 ",
    price: 1000,
    quantity: 1,
    image: "/images/product.webp",
  },

  {
    name: "Apple IPhone 15 ",
    price: 1000,
    quantity: 1,
    image: "/images/product.webp",
  },
]);

const discountCode = ref("");
const shippingCost = 29; // Fixed shipping cost
const taxRate = 0.1; // 10% tax

// Computed properties
const subtotal = computed(() =>
  products.value.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )
);
const tax = computed(() =>
  products.value.length > 0 ? subtotal.value * taxRate : 0
);
const shipping = computed(() => (products.value.length > 0 ? shippingCost : 0));
const total = computed(() => subtotal.value + tax.value + shipping.value);

// Methods
const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    value
  );

const increaseQuantity = (index) => {
  products.value[index].quantity++;
};

const decreaseQuantity = (index) => {
  if (products.value[index].quantity > 1) {
    products.value[index].quantity--;
  }
};

const removeItem = (index) => {
  products.value.splice(index, 1);
};
</script>

<style scoped></style>
