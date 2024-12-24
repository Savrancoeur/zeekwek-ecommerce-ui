<template>
  <div class="container mx-auto px-6 py-4 md:py-10">
    <!-- Start Breadcrumbs Section -->
    <section id="productbreadcrumbs" class="container">
      <ol
        class="hidden md:flex md:flex-row content-start items-center whitespace-nowrap"
      >
        <li class="inline-flex items-center">
          <a
            class="flex items-center text-[8px] sm:text-xs md:text-sm lg:text-base text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            href="#"
          >
            Home
          </a>
          <svg
            class="shrink-0 mx-5 size-4 text-gray-400"
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
        </li>
        <li class="inline-flex items-center">
          <a
            class="flex items-center text-[8px] sm:text-xs md:text-sm lg:text-base text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            href="#"
          >
            Catalog
            <svg
              class="shrink-0 mx-5 size-4 text-gray-400"
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
          </a>
        </li>
        <li
          class="inline-flex items-center text-[8px] sm:text-xs md:text-sm lg:text-base font-semibold text-gray-800 truncate"
          aria-current="page"
        >
          Smartphones
        </li>
      </ol>
    </section>
    <!-- End Breadcrumbs Section -->

    <!-- Start Products  Section -->
    <section id="productlistdisplay">
      <div class="flex w-full pt-0 md:py-12">
        <!-- Start Left Side Specifications Section -->
        <div
          class="md:w-[30%] lg:w-1/4 xl:w-1/5 hidden md:flex md:flex-col pr-1 lg:pr-2"
        >
          <!-- Price Button -->
          <div
            class="hs-accordion px-1 py-4"
            id="hs-basic-with-title-and-arrow-stretched-heading-one"
          >
            <button
              class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded="false"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
            >
              Price
              <svg
                class="hs-accordion-active:hidden block size-4"
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
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              <svg
                class="hs-accordion-active:block hidden size-4"
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
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-one"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <div class="flex justify-between items-center pt-6 text-gray-400">
                <h2>From</h2>
                <h2>To</h2>
              </div>
              <div
                class="flex justify-between items-center gap-x-2 py-6 text-gray-400"
              >
                <div class="max-w-1/3 space-y-3">
                  <input
                    type="number"
                    class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    v-model="minValue"
                    :placeholder="minPlaceholder"
                  />
                </div>
                <div class="max-w-1/3 space-y-3">
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-dash-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                      />
                    </svg>
                  </h2>
                </div>
                <div class="max-w-1/3 space-y-3">
                  <input
                    type="number"
                    class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    v-model="maxValue"
                    :placeholder="maxPlaceholder"
                  />
                </div>
              </div>
              <div class="w-full p-1">
                <div class="slider-container relative w-full">
                  <!-- Slider Background Fill -->
                  <div
                    class="slider-track absolute -top-1.5 left-0 h-1 bg-gray-300 rounded-full"
                  ></div>
                  <div
                    class="slider-fill absolute -top-1 transform -translate-y-1/2 h-1 bg-black/100 rounded-full"
                    :style="{ left: fillStart + '%', width: fillWidth + '%' }"
                  ></div>

                  <!-- Slider Thumbs -->
                  <input
                    type="range"
                    class="slider absolute appearance-none w-full -top-1 -translate-y-1/2 pointer-events-auto"
                    :min="min"
                    :max="max"
                    v-model="slider1Value"
                    @input="updateFill"
                  />
                  <input
                    type="range"
                    class="slider absolute appearance-none w-full -top-1 -translate-y-1/2 pointer-events-auto"
                    :min="min"
                    :max="max"
                    v-model="slider2Value"
                    @input="updateFill"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Brand Button -->
          <div
            class="hs-accordion px-1 py-4"
            id="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <button
              class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded="false"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
            >
              Brand
              <svg
                class="hs-accordion-active:hidden block size-4"
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
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              <svg
                class="hs-accordion-active:block hidden size-4"
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
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-two"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <div class="flex justify-between items-center pt-6 text-gray-400">
                <div class="max-w-sm">
                  <!-- SearchBox -->
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                    >
                      <svg
                        class="shrink-0 size-4 text-gray-400"
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
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <input
                      class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      type="text"
                      role="combobox"
                      aria-expanded="false"
                      placeholder="Search"
                      value=""
                      data-hs-combo-box-input=""
                    />
                  </div>
                  <!-- End SearchBox -->
                </div>
              </div>

              <div
                class="flex flex-row flex-wrap justify-items-start items-center gap-x-2 py-6 text-gray-400"
              >
                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-apple-checkbox"
                  />
                  <label
                    for="hs-apple-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >Apple </label
                  ><span class="px-2 text-xs">110</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-samsung-checkbox"
                  />
                  <label
                    for="hs-samsung-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >Samsung </label
                  ><span class="px-2 text-xs">125</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-xiaomi-checkbox"
                  />
                  <label
                    for="hs-xiaomi-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >Xiaomi </label
                  ><span class="px-2 text-xs">68</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-poco-checkbox"
                  />
                  <label
                    for="hs-poco-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >Poco </label
                  ><span class="px-2 text-xs">44</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-oppo-checkbox"
                  />
                  <label
                    for="hs-oppo-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >OPPO </label
                  ><span class="px-2 text-xs">36</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-honor-checkbox"
                  />
                  <label
                    for="hs-honor-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >Honor </label
                  ><span class="px-2 text-xs">10</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-motorola-checkbox"
                  />
                  <label
                    for="hs-motorola-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >Motorola </label
                  ><span class="px-2 text-xs">34</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-nokia-checkbox"
                  />
                  <label
                    for="hs-nokia-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >Nokia </label
                  ><span class="px-2 text-xs">22</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-realme-checkbox"
                  />
                  <label
                    for="hs-realme-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >Realme </label
                  ><span class="px-2 text-xs">35</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Built-in Memory Button -->
          <div
            class="hs-accordion px-1 py-4"
            id="hs-basic-with-title-and-arrow-stretched-heading-three"
          >
            <button
              class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded="false"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
            >
              Built-in Memory
              <svg
                class="hs-accordion-active:hidden block size-4"
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
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              <svg
                class="hs-accordion-active:block hidden size-4"
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
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-three"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <div class="flex justify-between items-center pt-6 text-gray-400">
                <div class="max-w-sm">
                  <!-- SearchBox -->
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                    >
                      <svg
                        class="shrink-0 size-4 text-gray-400"
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
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <input
                      class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      type="text"
                      role="combobox"
                      aria-expanded="false"
                      placeholder="Search"
                      value=""
                      data-hs-combo-box-input=""
                    />
                  </div>
                  <!-- End SearchBox -->
                </div>
              </div>

              <div
                class="flex flex-row flex-wrap justify-items-start items-center gap-x-2 py-6 text-gray-400"
              >
                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-16bg-checkbox"
                  />
                  <label
                    for="hs-16bg-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >16GB </label
                  ><span class="px-2 text-xs">65</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-32gb-checkbox"
                  />
                  <label
                    for="hs-32gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >32GB </label
                  ><span class="px-2 text-xs">123</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-64gb-checkbox"
                  />
                  <label
                    for="hs-64gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >64GB </label
                  ><span class="px-2 text-xs">48</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-128gb-checkbox"
                  />
                  <label
                    for="hs-128gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >128GB </label
                  ><span class="px-2 text-xs">50</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-oppo-checkbox"
                  />
                  <label
                    for="hs-oppo-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >256GB </label
                  ><span class="px-2 text-xs">24</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-512gb-checkbox"
                  />
                  <label
                    for="hs-512gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >512GB </label
                  ><span class="px-2 text-xs">8</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Protection Glass Button -->
          <div
            class="hs-accordion px-1 py-4"
            id="hs-basic-with-title-and-arrow-stretched-heading-four"
          >
            <button
              class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded="false"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
            >
              Protection Glass
              <svg
                class="hs-accordion-active:hidden block size-4"
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
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              <svg
                class="hs-accordion-active:block hidden size-4"
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
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-four"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
            >
              <div class="flex justify-between items-center pt-6 text-gray-400">
                <div class="max-w-sm">
                  <!-- SearchBox -->
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                    >
                      <svg
                        class="shrink-0 size-4 text-gray-400"
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
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <input
                      class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      type="text"
                      role="combobox"
                      aria-expanded="false"
                      placeholder="Search"
                      value=""
                      data-hs-combo-box-input=""
                    />
                  </div>
                  <!-- End SearchBox -->
                </div>
              </div>

              <div
                class="flex flex-row flex-wrap justify-items-start items-center gap-x-2 py-6 text-gray-400"
              >
                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-16bg-checkbox"
                  />
                  <label
                    for="hs-16bg-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >16GB </label
                  ><span class="px-2 text-xs">65</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-32gb-checkbox"
                  />
                  <label
                    for="hs-32gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >32GB </label
                  ><span class="px-2 text-xs">123</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-64gb-checkbox"
                  />
                  <label
                    for="hs-64gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >64GB </label
                  ><span class="px-2 text-xs">48</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-128gb-checkbox"
                  />
                  <label
                    for="hs-128gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >128GB </label
                  ><span class="px-2 text-xs">50</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-oppo-checkbox"
                  />
                  <label
                    for="hs-oppo-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >256GB </label
                  ><span class="px-2 text-xs">24</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-512gb-checkbox"
                  />
                  <label
                    for="hs-512gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >512GB </label
                  ><span class="px-2 text-xs">8</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Screen Diagonal Button -->
          <div
            class="hs-accordion px-1 py-4"
            id="hs-basic-with-title-and-arrow-stretched-heading-five"
          >
            <button
              class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded="false"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
            >
              Screen Diagonal
              <svg
                class="hs-accordion-active:hidden block size-4"
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
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              <svg
                class="hs-accordion-active:block hidden size-4"
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
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-five"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
            >
              <div class="flex justify-between items-center pt-6 text-gray-400">
                <div class="max-w-sm">
                  <!-- SearchBox -->
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                    >
                      <svg
                        class="shrink-0 size-4 text-gray-400"
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
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <input
                      class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      type="text"
                      role="combobox"
                      aria-expanded="false"
                      placeholder="Search"
                      value=""
                      data-hs-combo-box-input=""
                    />
                  </div>
                  <!-- End SearchBox -->
                </div>
              </div>

              <div
                class="flex flex-row flex-wrap justify-items-start items-center gap-x-2 py-6 text-gray-400"
              >
                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-16bg-checkbox"
                  />
                  <label
                    for="hs-16bg-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >16GB </label
                  ><span class="px-2 text-xs">65</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-32gb-checkbox"
                  />
                  <label
                    for="hs-32gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >32GB </label
                  ><span class="px-2 text-xs">123</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-64gb-checkbox"
                  />
                  <label
                    for="hs-64gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >64GB </label
                  ><span class="px-2 text-xs">48</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-128gb-checkbox"
                  />
                  <label
                    for="hs-128gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >128GB </label
                  ><span class="px-2 text-xs">50</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-oppo-checkbox"
                  />
                  <label
                    for="hs-oppo-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >256GB </label
                  ><span class="px-2 text-xs">24</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-512gb-checkbox"
                  />
                  <label
                    for="hs-512gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >512GB </label
                  ><span class="px-2 text-xs">8</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Screen Type Button -->
          <div
            class="hs-accordion px-1 py-4"
            id="hs-basic-with-title-and-arrow-stretched-heading-six"
          >
            <button
              class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded="false"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
            >
              Screen Type
              <svg
                class="hs-accordion-active:hidden block size-4"
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
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              <svg
                class="hs-accordion-active:block hidden size-4"
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
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-six"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
            >
              <div class="flex justify-between items-center pt-6 text-gray-400">
                <div class="max-w-sm">
                  <!-- SearchBox -->
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                    >
                      <svg
                        class="shrink-0 size-4 text-gray-400"
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
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <input
                      class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      type="text"
                      role="combobox"
                      aria-expanded="false"
                      placeholder="Search"
                      value=""
                      data-hs-combo-box-input=""
                    />
                  </div>
                  <!-- End SearchBox -->
                </div>
              </div>

              <div
                class="flex flex-row flex-wrap justify-items-start items-center gap-x-2 py-6 text-gray-400"
              >
                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-16bg-checkbox"
                  />
                  <label
                    for="hs-16bg-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >16GB </label
                  ><span class="px-2 text-xs">65</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-32gb-checkbox"
                  />
                  <label
                    for="hs-32gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >32GB </label
                  ><span class="px-2 text-xs">123</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-64gb-checkbox"
                  />
                  <label
                    for="hs-64gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >64GB </label
                  ><span class="px-2 text-xs">48</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-128gb-checkbox"
                  />
                  <label
                    for="hs-128gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >128GB </label
                  ><span class="px-2 text-xs">50</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-oppo-checkbox"
                  />
                  <label
                    for="hs-oppo-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >256GB </label
                  ><span class="px-2 text-xs">24</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-512gb-checkbox"
                  />
                  <label
                    for="hs-512gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >512GB </label
                  ><span class="px-2 text-xs">8</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Battery Capacity Button -->
          <div
            class="hs-accordion px-1 py-4"
            id="hs-basic-with-title-and-arrow-stretched-heading-seven"
          >
            <button
              class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
              aria-expanded="false"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-seven"
            >
              Battery Capacity
              <svg
                class="hs-accordion-active:hidden block size-4"
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
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              <svg
                class="hs-accordion-active:block hidden size-4"
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
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-seven"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="region"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-seven"
            >
              <div class="flex justify-between items-center pt-6 text-gray-400">
                <div class="max-w-sm">
                  <!-- SearchBox -->
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                    >
                      <svg
                        class="shrink-0 size-4 text-gray-400"
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
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                      </svg>
                    </div>
                    <input
                      class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      type="text"
                      role="combobox"
                      aria-expanded="false"
                      placeholder="Search"
                      value=""
                      data-hs-combo-box-input=""
                    />
                  </div>
                  <!-- End SearchBox -->
                </div>
              </div>

              <div
                class="flex flex-row flex-wrap justify-items-start items-center gap-x-2 py-6 text-gray-400"
              >
                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-16bg-checkbox"
                  />
                  <label
                    for="hs-16bg-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >16GB </label
                  ><span class="px-2 text-xs">65</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-32gb-checkbox"
                  />
                  <label
                    for="hs-32gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >32GB </label
                  ><span class="px-2 text-xs">123</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-64gb-checkbox"
                  />
                  <label
                    for="hs-64gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >64GB </label
                  ><span class="px-2 text-xs">48</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-128gb-checkbox"
                  />
                  <label
                    for="hs-128gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >128GB </label
                  ><span class="px-2 text-xs">50</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-oppo-checkbox"
                  />
                  <label
                    for="hs-oppo-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >256GB </label
                  ><span class="px-2 text-xs">24</span>
                </div>

                <div class="flex items-center p-1">
                  <input
                    type="checkbox"
                    class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-512gb-checkbox"
                  />
                  <label
                    for="hs-512gb-checkbox"
                    class="text-md font-bold text-gray-800 ms-3"
                    >512GB </label
                  ><span class="px-2 text-xs">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Left Side Specifications Section -->

        <!-- Start Center Products Display Section -->
        <div class="w-full md:w-[70%] lg:w-3/4 xl:w-4/5 pl-2 pt-0 md:pt-12">
          <div class="flex justify-start md:justify-between items-center py-4">
            <div class="flex flex-row flex-wrap">
              <span
                class="mr-0 md:mr-2 text-sm lg:text-base xl:text-lg text-gray-500 tracking-widest"
              >
                Selected Products:
                <span class="text-sm lg:text-base xl:text-lg text-black"
                  >85</span
                >
              </span>
            </div>

            <!-- md size and large screens -->
            <div
              class="hidden md:block relative w-64 p-2 border border-gray-200 rounded-lg"
            >
              <select
                class="appearance-none w-full border-none text-gray-900 font-medium bg-transparent focus:outline-none"
              >
                <option>By Rating</option>
                <option>Highest to Lowest</option>
                <option>Lowest to Highest</option>
              </select>
            </div>
            <!-- md size and large screens -->

            <!-- xs and sm size -->
            <div class="block md:hidden relative w-32 ml-auto p-2">
              <!-- Offcanvas Button -->
              <button
                type="button"
                class="size-8 inline-flex justify-end items-center gap-x-0 rounded-full border border-transparent text-gray-800 focus:outline-none w-full"
                aria-label="Slider"
                data-hs-overlay="#hs-offcanvas-right"
              >
                <span class="sr-only">Slider</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-6 h-6 ml-auto"
                >
                  <path
                    d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
                  ></path>
                </svg>
              </button>
              <!-- Offcanvas Button -->

              <!-- Offcanvas ContentView -->
              <div
                id="hs-offcanvas-right"
                class="overflow-auto hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-s"
                role="dialog"
                tabindex="-1"
                aria-labelledby="hs-offcanvas-right-label"
              >
                <div
                  class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700"
                >
                  <h3
                    id="hs-offcanvas-right-label"
                    class="font-bold text-gray-800 dark:text-white"
                  >
                    Offcanvas title
                  </h3>
                  <button
                    type="button"
                    class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                    aria-label="Close"
                    data-hs-overlay="#hs-offcanvas-right"
                  >
                    <span class="sr-only">Close</span>
                    <svg
                      class="shrink-0 size-4"
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
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </div>

                <div class="w-full px-4 overflow-auto">
                  <!-- Price Button -->
                  <div
                    class="hs-accordion px-1 py-4"
                    id="hs-basic-with-title-and-arrow-stretched-heading-one"
                  >
                    <button
                      class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    >
                      Price
                      <svg
                        class="hs-accordion-active:hidden block size-4"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden size-4"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <div
                        class="flex justify-between items-center pt-6 text-gray-400"
                      >
                        <h2>From</h2>
                        <h2>To</h2>
                      </div>
                      <div
                        class="flex justify-between items-center gap-x-2 py-6 text-gray-400"
                      >
                        <div class="max-w-1/3 space-y-3">
                          <input
                            type="number"
                            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            v-model="minValue"
                            :placeholder="minPlaceholder"
                          />
                        </div>
                        <div class="max-w-1/3 space-y-3">
                          <h2>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-dash-lg"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                              />
                            </svg>
                          </h2>
                        </div>
                        <div class="max-w-1/3 space-y-3">
                          <input
                            type="number"
                            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            v-model="maxValue"
                            :placeholder="maxPlaceholder"
                          />
                        </div>
                      </div>
                      <div class="w-full p-1">
                        <div class="slider-container relative w-full">
                          <!-- Slider Background Fill -->
                          <div
                            class="slider-track absolute -top-1.5 left-0 h-1 bg-gray-300 rounded-full"
                          ></div>
                          <div
                            class="slider-fill absolute -top-1 transform -translate-y-1/2 h-1 bg-black/100 rounded-full"
                            :style="{
                              left: fillStart + '%',
                              width: fillWidth + '%',
                            }"
                          ></div>

                          <!-- Slider Thumbs -->
                          <input
                            type="range"
                            class="slider absolute appearance-none w-full -top-1 -translate-y-1/2 pointer-events-auto"
                            :min="min"
                            :max="max"
                            v-model="slider1Value"
                            @input="updateFill"
                          />
                          <input
                            type="range"
                            class="slider absolute appearance-none w-full -top-1 -translate-y-1/2 pointer-events-auto"
                            :min="min"
                            :max="max"
                            v-model="slider2Value"
                            @input="updateFill"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Brand Button -->
                  <div
                    class="hs-accordion px-1 py-4"
                    id="hs-basic-with-title-and-arrow-stretched-heading-two"
                  >
                    <button
                      class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                    >
                      Brand
                      <svg
                        class="hs-accordion-active:hidden block size-4"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden size-4"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                    >
                      <div
                        class="flex justify-between items-center pt-6 text-gray-400"
                      >
                        <div class="max-w-sm">
                          <!-- SearchBox -->
                          <div class="relative">
                            <div
                              class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                            >
                              <svg
                                class="shrink-0 size-4 text-gray-400"
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
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                              </svg>
                            </div>
                            <input
                              class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              type="text"
                              role="combobox"
                              aria-expanded="false"
                              placeholder="Search"
                              value=""
                              data-hs-combo-box-input=""
                            />
                          </div>
                          <!-- End SearchBox -->
                        </div>
                      </div>

                      <div
                        class="flex flex-row flex-wrap justify-items-start items-center gap-x-2 py-6 text-gray-400"
                      >
                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-apple-checkbox"
                          />
                          <label
                            for="hs-apple-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >Apple </label
                          ><span class="px-2 text-xs">110</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-samsung-checkbox"
                          />
                          <label
                            for="hs-samsung-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >Samsung </label
                          ><span class="px-2 text-xs">125</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-xiaomi-checkbox"
                          />
                          <label
                            for="hs-xiaomi-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >Xiaomi </label
                          ><span class="px-2 text-xs">68</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-poco-checkbox"
                          />
                          <label
                            for="hs-poco-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >Poco </label
                          ><span class="px-2 text-xs">44</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-oppo-checkbox"
                          />
                          <label
                            for="hs-oppo-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >OPPO </label
                          ><span class="px-2 text-xs">36</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-honor-checkbox"
                          />
                          <label
                            for="hs-honor-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >Honor </label
                          ><span class="px-2 text-xs">10</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-motorola-checkbox"
                          />
                          <label
                            for="hs-motorola-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >Motorola </label
                          ><span class="px-2 text-xs">34</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-nokia-checkbox"
                          />
                          <label
                            for="hs-nokia-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >Nokia </label
                          ><span class="px-2 text-xs">22</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-realme-checkbox"
                          />
                          <label
                            for="hs-realme-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >Realme </label
                          ><span class="px-2 text-xs">35</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Built-in Memory Button -->
                  <div
                    class="hs-accordion px-1 py-4"
                    id="hs-basic-with-title-and-arrow-stretched-heading-three"
                  >
                    <button
                      class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                    >
                      Built-in Memory
                      <svg
                        class="hs-accordion-active:hidden block size-4"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden size-4"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                    >
                      <div
                        class="flex justify-between items-center pt-6 text-gray-400"
                      >
                        <div class="max-w-sm">
                          <!-- SearchBox -->
                          <div class="relative">
                            <div
                              class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                            >
                              <svg
                                class="shrink-0 size-4 text-gray-400"
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
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                              </svg>
                            </div>
                            <input
                              class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              type="text"
                              role="combobox"
                              aria-expanded="false"
                              placeholder="Search"
                              value=""
                              data-hs-combo-box-input=""
                            />
                          </div>
                          <!-- End SearchBox -->
                        </div>
                      </div>

                      <div
                        class="flex flex-row flex-wrap justify-items-start items-center gap-x-2 py-6 text-gray-400"
                      >
                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-16bg-checkbox"
                          />
                          <label
                            for="hs-16bg-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >16GB </label
                          ><span class="px-2 text-xs">65</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-32gb-checkbox"
                          />
                          <label
                            for="hs-32gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >32GB </label
                          ><span class="px-2 text-xs">123</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-64gb-checkbox"
                          />
                          <label
                            for="hs-64gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >64GB </label
                          ><span class="px-2 text-xs">48</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-128gb-checkbox"
                          />
                          <label
                            for="hs-128gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >128GB </label
                          ><span class="px-2 text-xs">50</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-oppo-checkbox"
                          />
                          <label
                            for="hs-oppo-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >256GB </label
                          ><span class="px-2 text-xs">24</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-512gb-checkbox"
                          />
                          <label
                            for="hs-512gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >512GB </label
                          ><span class="px-2 text-xs">8</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Protection Glass Button -->
                  <div
                    class="hs-accordion px-1 py-4"
                    id="hs-basic-with-title-and-arrow-stretched-heading-four"
                  >
                    <button
                      class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                    >
                      Protection Glass
                      <svg
                        class="hs-accordion-active:hidden block size-4"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden size-4"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                    >
                      <div
                        class="flex justify-between items-center pt-6 text-gray-400"
                      >
                        <div class="max-w-sm">
                          <!-- SearchBox -->
                          <div class="relative">
                            <div
                              class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                            >
                              <svg
                                class="shrink-0 size-4 text-gray-400"
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
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                              </svg>
                            </div>
                            <input
                              class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              type="text"
                              role="combobox"
                              aria-expanded="false"
                              placeholder="Search"
                              value=""
                              data-hs-combo-box-input=""
                            />
                          </div>
                          <!-- End SearchBox -->
                        </div>
                      </div>

                      <div
                        class="flex flex-row flex-wrap justify-items-start items-center gap-x-2 py-6 text-gray-400"
                      >
                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-16bg-checkbox"
                          />
                          <label
                            for="hs-16bg-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >16GB </label
                          ><span class="px-2 text-xs">65</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-32gb-checkbox"
                          />
                          <label
                            for="hs-32gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >32GB </label
                          ><span class="px-2 text-xs">123</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-64gb-checkbox"
                          />
                          <label
                            for="hs-64gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >64GB </label
                          ><span class="px-2 text-xs">48</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-128gb-checkbox"
                          />
                          <label
                            for="hs-128gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >128GB </label
                          ><span class="px-2 text-xs">50</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-oppo-checkbox"
                          />
                          <label
                            for="hs-oppo-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >256GB </label
                          ><span class="px-2 text-xs">24</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-512gb-checkbox"
                          />
                          <label
                            for="hs-512gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >512GB </label
                          ><span class="px-2 text-xs">8</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Screen Diagonal Button -->
                  <div
                    class="hs-accordion px-1 py-4"
                    id="hs-basic-with-title-and-arrow-stretched-heading-five"
                  >
                    <button
                      class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                    >
                      Screen Diagonal
                      <svg
                        class="hs-accordion-active:hidden block size-4"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden size-4"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                    >
                      <div
                        class="flex justify-between items-center pt-6 text-gray-400"
                      >
                        <div class="max-w-sm">
                          <!-- SearchBox -->
                          <div class="relative">
                            <div
                              class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                            >
                              <svg
                                class="shrink-0 size-4 text-gray-400"
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
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                              </svg>
                            </div>
                            <input
                              class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              type="text"
                              role="combobox"
                              aria-expanded="false"
                              placeholder="Search"
                              value=""
                              data-hs-combo-box-input=""
                            />
                          </div>
                          <!-- End SearchBox -->
                        </div>
                      </div>

                      <div
                        class="flex flex-row flex-wrap justify-items-start items-center gap-x-2 py-6 text-gray-400"
                      >
                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-16bg-checkbox"
                          />
                          <label
                            for="hs-16bg-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >16GB </label
                          ><span class="px-2 text-xs">65</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-32gb-checkbox"
                          />
                          <label
                            for="hs-32gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >32GB </label
                          ><span class="px-2 text-xs">123</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-64gb-checkbox"
                          />
                          <label
                            for="hs-64gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >64GB </label
                          ><span class="px-2 text-xs">48</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-128gb-checkbox"
                          />
                          <label
                            for="hs-128gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >128GB </label
                          ><span class="px-2 text-xs">50</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-oppo-checkbox"
                          />
                          <label
                            for="hs-oppo-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >256GB </label
                          ><span class="px-2 text-xs">24</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-512gb-checkbox"
                          />
                          <label
                            for="hs-512gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >512GB </label
                          ><span class="px-2 text-xs">8</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Screen Type Button -->
                  <div
                    class="hs-accordion px-1 py-4"
                    id="hs-basic-with-title-and-arrow-stretched-heading-six"
                  >
                    <button
                      class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                    >
                      Screen Type
                      <svg
                        class="hs-accordion-active:hidden block size-4"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden size-4"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                    >
                      <div
                        class="flex justify-between items-center pt-6 text-gray-400"
                      >
                        <div class="max-w-sm">
                          <!-- SearchBox -->
                          <div class="relative">
                            <div
                              class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                            >
                              <svg
                                class="shrink-0 size-4 text-gray-400"
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
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                              </svg>
                            </div>
                            <input
                              class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              type="text"
                              role="combobox"
                              aria-expanded="false"
                              placeholder="Search"
                              value=""
                              data-hs-combo-box-input=""
                            />
                          </div>
                          <!-- End SearchBox -->
                        </div>
                      </div>

                      <div
                        class="flex flex-row flex-wrap justify-items-start items-center gap-x-2 py-6 text-gray-400"
                      >
                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-16bg-checkbox"
                          />
                          <label
                            for="hs-16bg-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >16GB </label
                          ><span class="px-2 text-xs">65</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-32gb-checkbox"
                          />
                          <label
                            for="hs-32gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >32GB </label
                          ><span class="px-2 text-xs">123</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-64gb-checkbox"
                          />
                          <label
                            for="hs-64gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >64GB </label
                          ><span class="px-2 text-xs">48</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-128gb-checkbox"
                          />
                          <label
                            for="hs-128gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >128GB </label
                          ><span class="px-2 text-xs">50</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-oppo-checkbox"
                          />
                          <label
                            for="hs-oppo-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >256GB </label
                          ><span class="px-2 text-xs">24</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-512gb-checkbox"
                          />
                          <label
                            for="hs-512gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >512GB </label
                          ><span class="px-2 text-xs">8</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Battery Capacity Button -->
                  <div
                    class="hs-accordion px-1 py-4"
                    id="hs-basic-with-title-and-arrow-stretched-heading-seven"
                  >
                    <button
                      class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 border-b border-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
                      aria-expanded="false"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-seven"
                    >
                      Battery Capacity
                      <svg
                        class="hs-accordion-active:hidden block size-4"
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
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden size-4"
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
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </button>
                    <div
                      id="hs-basic-with-title-and-arrow-stretched-collapse-seven"
                      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-seven"
                    >
                      <div
                        class="flex justify-between items-center pt-6 text-gray-400"
                      >
                        <div class="max-w-sm">
                          <!-- SearchBox -->
                          <div class="relative">
                            <div
                              class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                            >
                              <svg
                                class="shrink-0 size-4 text-gray-400"
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
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                              </svg>
                            </div>
                            <input
                              class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              type="text"
                              role="combobox"
                              aria-expanded="false"
                              placeholder="Search"
                              value=""
                              data-hs-combo-box-input=""
                            />
                          </div>
                          <!-- End SearchBox -->
                        </div>
                      </div>

                      <div
                        class="flex flex-row flex-wrap justify-items-start items-center gap-x-2 py-6 text-gray-400"
                      >
                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-16bg-checkbox"
                          />
                          <label
                            for="hs-16bg-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >16GB </label
                          ><span class="px-2 text-xs">65</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-32gb-checkbox"
                          />
                          <label
                            for="hs-32gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >32GB </label
                          ><span class="px-2 text-xs">123</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-64gb-checkbox"
                          />
                          <label
                            for="hs-64gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >64GB </label
                          ><span class="px-2 text-xs">48</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-128gb-checkbox"
                          />
                          <label
                            for="hs-128gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >128GB </label
                          ><span class="px-2 text-xs">50</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-oppo-checkbox"
                          />
                          <label
                            for="hs-oppo-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >256GB </label
                          ><span class="px-2 text-xs">24</span>
                        </div>

                        <div class="flex items-center p-1">
                          <input
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-gray-800 focus:ring-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-512gb-checkbox"
                          />
                          <label
                            for="hs-512gb-checkbox"
                            class="text-md font-bold text-gray-800 ms-3"
                            >512GB </label
                          ><span class="px-2 text-xs">8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Offcanvas ContentView -->
            </div>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div
              class="px-7 py-10 border-[0.5px]"
              :class="{
                'xl:border-b-[0.5px]': index < products.length - 4,
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

          <!-- Pagination Wrapper -->
          <div class="flex justify-center items-center pt-16">
            <div
              class="grid justify-center sm:flex sm:justify-start sm:items-center gap-2"
            >
              <!-- Pagination -->
              <nav class="flex items-center gap-x-1" aria-label="Pagination">
                <button
                  type="button"
                  class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Previous"
                >
                  <svg
                    class="shrink-0 size-3.5"
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
                  <span class="sr-only">Previous</span>
                </button>
                <div class="flex items-center gap-x-1">
                  <button
                    type="button"
                    class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg active:outline-none active:bg-gray-800 active:text-white disabled:opacity-50 disabled:pointer-events-none"
                    aria-current="page"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg active:outline-none active:bg-gray-800 active:text-white disabled:opacity-50 disabled:pointer-events-none"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg active:outline-none active:bg-gray-800 active:text-white disabled:opacity-50 disabled:pointer-events-none"
                  >
                    3
                  </button>
                  <div class="hs-tooltip inline-block">
                    <button
                      type="button"
                      class="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <span class="group-hover:hidden text-xs">••••</span>
                      <svg
                        class="group-hover:block hidden shrink-0 size-5"
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
                        <path d="m6 17 5-5-5-5"></path>
                        <path d="m13 17 5-5-5-5"></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    type="button"
                    class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg active:outline-none active:bg-gray-800 active:text-white disabled:opacity-50 disabled:pointer-events-none"
                  >
                    12
                  </button>
                </div>
                <button
                  type="button"
                  class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Next"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="shrink-0 size-3.5"
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
                </button>
              </nav>
              <!-- End Pagination -->
            </div>
            <!-- End Pagination Wrapper -->
          </div>
        </div>
        <!-- End Center Products Display Section -->
      </div>
    </section>
    <!-- End Products  Section -->
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const slider = ref(null);
const priceFrom = ref(0);
const priceTo = ref(10000);

onMounted(() => {
  if (slider.value) {
    noUiSlider.create(slider.value, {
      start: [priceFrom.value, priceTo.value],
      connect: true,
      range: {
        min: 0,
        max: 10000,
      },
    });

    // Update input fields when slider values change
    slider.value.noUiSlider.on("update", (values) => {
      priceFrom.value = Math.round(values[0]);
      priceTo.value = Math.round(values[1]);
    });
  }
});

// Slider boundaries
const min = ref(0);
const max = ref(100);

// Slider values
const slider1Value = ref(25);
const slider2Value = ref(75);

// Ensure slider1 can't go past slider2
watch(slider1Value, (newVal) => {
  if (newVal > slider2Value.value) slider1Value.value = slider2Value.value;
});

// Ensure slider2 can't go below slider1
watch(slider2Value, (newVal) => {
  if (newVal < slider1Value.value) slider2Value.value = slider1Value.value;
});

// Dynamic fill calculations
const fillStart = computed(() => (slider1Value.value / max.value) * 100);
const fillWidth = computed(
  () => ((slider2Value.value - slider1Value.value) / max.value) * 100
);

// Update fill on slider movement
const updateFill = () => {
  if (slider1Value.value > slider2Value.value) {
    slider1Value.value = slider2Value.value;
  }
  if (slider2Value.value < slider1Value.value) {
    slider2Value.value = slider1Value.value;
  }
};

const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectOption = (value) => {
  console.log("Selected:", value);
  dropdownOpen.value = false; // Close dropdown after selection
};

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
</script>

<style scoped>
/* Slider Track */
.slider-track {
  width: 100%;
}

/* Slider Fill */
.slider-fill {
  position: absolute;
}

/* Slider Styles */
.slider {
  /* -webkit-appearance: none; */
  height: 2px;
  background: transparent;
  pointer-events: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: black; /* Change this line */
  border-radius: 50%;
  pointer-events: auto;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: black; /* Change this line */
  border-radius: 50%;
  pointer-events: auto;
  cursor: pointer;
}

/* Remove blue border on focus */
select:focus {
  outline: none;
  box-shadow: none;
}

/* Adjust font size */
select,
select option {
  font-size: 1rem;
}
</style>
