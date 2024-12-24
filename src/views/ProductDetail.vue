<template>
  <!-- Start Breadcrumbs Section -->
  <section id="productbreadcrumbs" class="container mx-auto px-6 pt-12 pb-2">
    <ol class="flex items-center whitespace-nowrap">
      <li class="inline-flex items-center">
        <a
          class="flex items-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          href="#"
        >
          Home
        </a>
        <svg
          class="shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-5 size-4 text-gray-400"
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
          class="flex items-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          href="#"
        >
          Catalog
          <svg
            class="shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-5 size-4 text-gray-400"
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

      <li class="inline-flex items-center">
        <a
          class="flex items-center text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          href="#"
        >
          Apple
          <svg
            class="shrink-0 mx-2 sm:mx-3 md:mx-4 lg:mx-5 size-4 text-gray-400"
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
        class="inline-flex items-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 truncate"
        aria-current="page"
      >
        iPhone
      </li>
    </ol>
  </section>
  <!-- End Breadcrumbs Section -->

  <!-- Start Product Images And Descriptions Section -->
  <section id="productimagesanddescriptions" class="container mx-auto px-6">
    <div class="w-full flex flex-col justify-center lg:flex-row lg:h-screen">
      <!-- Start product images section -->
      <div class="w-full lg:w-1/2">
        <!-- Large size and upper Slider -->
        <div
          data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }'
          class="relative w-full hidden lg:block"
        >
          <div class="hs-carousel flex space-x-2 h-[600px]">
            <div class="flex h-full">
              <div
                class="hs-carousel-pagination max-h-96 pt-20 flex flex-col gap-y-2"
              >
                <div
                  v-for="(image, index) in images"
                  :key="index"
                  class="hs-carousel-pagination-item shrink-0 border border-white rounded-md overflow-hidden cursor-pointer w-[140px] h-[100px] opacity-30 hs-carousel-active:opacity-100"
                >
                  <div class="flex justify-center h-full p-2">
                    <span
                      class="h-32 self-center text-xs text-gray-800 transition duration-700"
                      ><img :src="image" class="object-cover object-center"
                    /></span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="relative grow overflow-x-hidden min-h-96 bg-transparent rounded-lg"
            >
              <div
                class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-0 opacity-0"
              >
                <div
                  v-for="(image, index) in images"
                  :key="index"
                  class="hs-carousel-slide h-full"
                >
                  <div class="flex justify-center p-6 w-full h-full">
                    <span
                      class="self-center text-4xl h-[450px] xl:h-[600px] bg-transparent transition duration-700 overscroll-none"
                      ><img
                        :src="image"
                        class="object-cover object-center h-[450px] xl:h-[600px] w-full"
                    /></span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="hs-carousel-prev hs-carousel-disabled:opacity-30 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 focus:outline-none rounded-s-lg"
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
                class="hs-carousel-next hs-carousel-disabled:opacity-30 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 focus:outline-none rounded-e-lg"
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
            </div>
          </div>
        </div>
        <!-- End Large size and upper Slider -->

        <!-- Medium size and lower Slider -->
        <div
          data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }'
          class="relative block lg:hidden mb-20"
        >
          <div
            class="hs-carousel relative overflow-hidden w-full min-h-[300px] md:min-h-[500px] bg-white rounded-lg"
          >
            <div
              class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-0 opacity-0"
            >
              <div
                v-for="(image, index) in images"
                :key="index"
                class="hs-carousel-slide"
              >
                <div class="flex justify-center h-full p-6">
                  <span class="self-center text-4xl text-gray-800"
                    ><img
                      :src="image"
                      class="object-cover min-h-[300px] md:min-h-[500px]"
                  /></span>
                </div>
              </div>
            </div>

            <button
              type="button"
              class="hs-carousel-prev hs-carousel-disabled:opacity-30 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 focus:outline-none focus:bg-gray-800/10 rounded-s-lg"
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
              class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg"
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
          </div>

          <div
            class="hs-carousel-pagination absolute -bottom-16 start-0 w-full overflow-x-auto"
          >
            <div class="flex flex-row justify-center items-center gap-x-2 mt-4">
              <div
                v-for="(image, index) in images"
                :key="index"
                class="hs-carousel-pagination-item shrink-0 rounded-md overflow-hidden cursor-pointer w-20 h-20 opacity-30 hs-carousel-active:opacity-100"
              >
                <div class="flex justify-center w-20 h-20 py-2">
                  <span class="self-center text-xs text-gray-800"
                    ><img :src="image" class="object-cover"
                  /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Medium size and lower Slider -->
      </div>
      <!-- End product images section -->

      <!-- Start right side product detail description -->
      <div
        class="w-full lg:w-1/2 lg:ps-10 flex flex-col justify-center h-full lg:h-[600px] mt-4 md:mt-0 mb-4"
      >
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-medium mb-3 md:mb-6">
          Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A
        </h1>
        <p class="font-medium text-2xl mb-5 md:mb-10">K5,000,000</p>

        <ul class="text-gray-700 mb-6 md:mb-14">
          <li class="mb-1">Brand : Apple</li>
          <li class="mb-1">Type : Iphone 15 Plus</li>
          <li class="mb-1">
            SKU :Apple IPhone 15 Plus Dual Sim 256GB (Green) CH/A
          </li>
          <li class="mb-1">Warranty : 1 year</li>
        </ul>
        <div class="mb-10 w-full">
          <button
            class="btn border border-yellow-500 w-32 sm:w-36 md:w-40 lg:w-[48%] xl:w-[48.7%] h-14 font-medium rounded me-3"
          >
            Add to Wishlist
          </button>
          <button
            class="btn bg-yellow-500 w-32 sm:w-36 md:w-40 lg:w-[48%] xl:w-[48.7%] h-14 font-medium rounded"
          >
            Add to Card
          </button>
        </div>

        <div class="grid grid-cols-3">
          <div class="flex items-center gap-x-3">
            <StarIcon class="text-gray-600 w-7" />
            <div>
              <h3 class="text-gray-500 text-sm mb-1 font-medium">
                Free Shipping
              </h3>
              <p class="text-sm font-medium">over K500,000</p>
            </div>
          </div>
          <div class="flex items-center gap-x-3">
            <StarIcon class="text-gray-600 w-7" />
            <div>
              <h3 class="text-gray-500 text-sm mb-1 font-medium">
                Return Policy
              </h3>
              <p class="text-sm font-medium">1-3 day</p>
            </div>
          </div>
          <div class="flex items-center gap-x-3">
            <StarIcon class="text-gray-600 w-7" />
            <div>
              <h3 class="text-gray-500 text-sm mb-1 font-medium">
                Open 24/7 support
              </h3>
              <p class="text-sm font-medium">9-11 weekdays</p>
            </div>
          </div>
        </div>
      </div>
      <!-- End right side product detail description -->
    </div>
  </section>
  <!-- End Product Images And Descriptions Section -->

  <!-- Start Product Details Section -->
  <section id="productdetails" class="py-12 bg-gray-100">
    <div class="container mx-auto px-6">
      <div class="my-12 px-6 py-12 rounded-lg bg-white">
        <div id="productdetailsheader" class="w-full h-full mb-10">
          <h2 class="text-3xl font-medium tracking-wider">Details</h2>
        </div>

        <div id="productdetailsbody" class="w-full h-full mb-10">
          <p class="font-normal text-sm text-gray-400 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            temporibus nisi neque, excepturi cum eos deserunt explicabo fugit
            ratione asperiores commodi quo hic, sequi a earum! Delectus culpa
            molestias dolorem! Libero voluptatem dolorum aut inventore ipsa
            earum! Dolorem dolorum quae ea possimus nesciunt nihil quaerat,
            tempora nam non natus numquam, eveniet qui suscipit veritatis at
            dolore, perferendis quasi nobis! Asperiores. Suscipit placeat
            deserunt alias sunt fugiat, ea ex nam incidunt sapiente ipsum unde
            eligendi numquam rem nulla aliquid, consequatur blanditiis ducimus
            pariatur vitae quo ullam nisi nostrum quia. Necessitatibus, vitae?
            Expedita fuga, aliquam sequi consequuntur repellendus nemo mollitia
            eveniet saepe numquam, error dolorem, modi porro aliquid repudiandae
            eos corporis accusantium? Aliquam quam rem tempora natus nemo
            mollitia magni cum ipsum. Aspernatur, cumque molestiae ducimus iusto
            deserunt facere dolorem sequi et soluta, assumenda tempora debitis.
            Repellendus, dolorum tenetur at dolor quas modi libero eius nesciunt
            vero iusto impedit sapiente. Sapiente, fugiat.
          </p>
        </div>

        <div id="productdetailsfooter" class="w-full h-full mb-14">
          <h2 class="text-xl font-medium tracking-wider mb-6">Screen</h2>

          <div
            class="w-full h-full flex justify-between items-center pb-4 mb-8 border-b border-gray-300"
          >
            <h2 class="text-lg font-medium tracking-wider">Screen diagonal</h2>
            <h2 class="text-lg font-medium tracking-wider">6.7"</h2>
          </div>

          <div
            class="w-full h-full flex justify-between items-center pb-4 mb-8 border-b border-gray-300"
          >
            <h2 class="text-lg font-medium tracking-wider">
              The screen resolution
            </h2>
            <h2 class="text-lg font-medium tracking-wider">2796x1290</h2>
          </div>

          <div
            class="w-full h-full flex justify-between items-center pb-4 mb-8 border-b border-gray-300"
          >
            <h2 class="text-lg font-medium tracking-wider">
              The screen refresh rate
            </h2>
            <h2 class="text-lg font-medium tracking-wider">120Hz</h2>
          </div>

          <div
            class="w-full h-full flex justify-between items-center pb-4 mb-8 border-b border-gray-300"
          >
            <h2 class="text-lg font-medium tracking-wider">
              The pixel density
            </h2>
            <h2 class="text-lg font-medium tracking-wider">460 ppi</h2>
          </div>

          <div
            class="w-full h-full flex justify-between items-center pb-4 mb-8 border-b border-gray-300"
          >
            <h2 class="text-lg font-medium tracking-wider">Screen type</h2>
            <h2 class="text-lg font-medium tracking-wider">OLED</h2>
          </div>

          <div
            class="w-full h-full flex justify-between items-start pb-4 mb-10 border-b border-gray-300"
          >
            <h2 class="text-lg font-medium tracking-wider">Additionally</h2>
            <div class="flex flex-col items-end">
              <h2 class="text-lg font-medium tracking-wider">Dynamic Island</h2>
              <h2 class="text-lg font-medium tracking-wider">
                Always-On Display
              </h2>
              <h2 class="text-lg font-medium tracking-wider">HDR Display</h2>
              <h2 class="text-lg font-medium tracking-wider">True Tone</h2>
              <h2 class="text-lg font-medium tracking-wider">
                Wide Color (P3)
              </h2>
            </div>
          </div>

          <h2 class="text-xl font-medium tracking-wider mb-6">CPU</h2>

          <div
            class="w-full h-full flex justify-between items-center pb-4 mb-8 border-b border-gray-300"
          >
            <h2 class="text-lg font-medium tracking-wider">CPU</h2>
            <h2 class="text-lg font-medium tracking-wider">A16Bionic</h2>
          </div>

          <div
            class="w-full h-full flex justify-between items-center pb-4 mb-8"
          >
            <h2 class="text-lg font-medium tracking-wider">Number of cores</h2>
            <h2 class="text-lg font-medium tracking-wider">6</h2>
          </div>
        </div>

        <div class="grid w-48 h-8 sm:w-64 sm:h-16 mx-auto">
          <button
            class="place-self-center w-full flex px-3 py-2 sm:px-6 sm:py-4 items-center justify-center border border-gray-800 rounded-lg"
          >
            <span class="text-sm font-semibold tracking-widest">View More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down ms-2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- End Product Details Section -->

  <!-- Start Reviews Section -->
  <section id="productreviews" class="container mx-auto px-6 py-12">
    <!-- Start Ratings Section -->
    <div class="w-full my-12">
      <!-- Reviews Header -->
      <h2 class="text-2xl font-semibold text-gray-800 tracking-wider">
        Reviews
      </h2>

      <div class="flex flex-wrap items-start my-12 space-x-12">
        <!-- Left Section (Rating Summary) -->
        <div
          class="flex flex-col items-center w-44 h-44 p-6 bg-gray-50 rounded-2xl"
        >
          <div class="mt-2 text-5xl font-bold text-gray-800">4.8</div>
          <div class="my-3 text-sm font-semibold text-gray-300">
            of 125 reviews
          </div>
          <div class="flex space-x-1">
            <!-- Star Icons -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-5 h-5 text-orange-400"
            >
              <path
                d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-5 h-5 text-orange-400"
            >
              <path
                d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-5 h-5 text-orange-400"
            >
              <path
                d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-5 h-5 text-orange-400"
            >
              <path
                d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-5 h-5 text-orange-400"
            >
              <path
                d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
              />
            </svg>
          </div>
        </div>

        <!-- Right Section (Ratings Breakdown) -->
        <div class="flex-grow">
          <div class="space-y-3">
            <!-- Rating Bar -->
            <div class="flex items-center my-2">
              <span class="w-32 text-lg font-bold text-gray-800 tracking-wider"
                >Excellent</span
              >
              <div class="flex-grow h-1.5 bg-gray-200 rounded-full mx-3">
                <div
                  class="h-1.5 bg-orange-300 rounded-full"
                  style="width: 90%"
                ></div>
              </div>
              <span class="text-sm text-gray-500">100</span>
            </div>

            <div class="flex items-center my-2">
              <span class="w-32 text-xl font-bold text-gray-800 tracking-wider"
                >Good</span
              >
              <div class="flex-grow h-1.5 bg-gray-200 rounded-full mx-3">
                <div
                  class="h-1.5 bg-orange-300 rounded-full"
                  style="width: 60%"
                ></div>
              </div>
              <span class="text-sm text-gray-500">11</span>
            </div>

            <div class="flex items-center my-2">
              <span class="w-32 text-xl font-bold text-gray-800">Average</span>
              <div class="flex-grow h-1.5 bg-gray-200 rounded-full mx-3">
                <div
                  class="h-1.5 bg-orange-300 rounded-full"
                  style="width: 30%"
                ></div>
              </div>
              <span class="text-sm text-gray-500">3</span>
            </div>

            <div class="flex items-center my-2">
              <span class="w-32 text-xl font-bold text-gray-800"
                >Below Average</span
              >
              <div class="flex-grow h-1.5 bg-gray-200 rounded-full mx-3">
                <div
                  class="h-1.5 bg-orange-300 rounded-full"
                  style="width: 20%"
                ></div>
              </div>
              <span class="text-sm text-gray-500">8</span>
            </div>

            <div class="flex items-center my-2">
              <span class="w-32 text-xl font-bold text-gray-800">Poor</span>
              <div class="flex-grow h-1.5 bg-gray-200 rounded-full mx-3">
                <div
                  class="h-1.5 bg-orange-300 rounded-full"
                  style="width: 5%"
                ></div>
              </div>
              <span class="text-sm text-gray-500">1</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Leave Comment -->
      <div class="mt-6">
        <input
          type="text"
          placeholder="Leave Comment"
          class="w-full p-6 text-sm text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none"
        />
      </div>
    </div>
    <!-- End Ratings Section -->

    <!-- Start Comments Section -->
    <div class="max-w-6xl mx-auto mt-8 space-y-6">
      <!-- Review 1 -->
      <div
        class="p-6 bg-gray-50 rounded-lg flex justify-between items-start space-x-4"
      >
        <!-- Profile Image -->
        <img
          src="https://via.placeholder.com/50"
          alt="Profile Image"
          class="w-12 h-12 rounded-full object-cover"
        />
        <!-- Content -->
        <div class="flex-1">
          <div class="flex flex-col items-start gap-2">
            <!-- Name and Rating -->
            <h3 class="text-sm font-semibold text-gray-800">Ronald Richards</h3>
            <div class="flex space-x-1">
              <!-- Star Rating -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-orange-400"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-orange-400"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-orange-400"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-orange-400"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-300"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
            </div>
          </div>
          <p class="mt-4 text-sm text-gray-700">
            This phone has 1T storage and is durable. Plus all the new iPhones
            have a C port! Apple is phasing out the current ones!
          </p>
        </div>
        <!-- Date -->
        <span class="text-sm text-gray-400">24 January, 2023</span>
      </div>

      <!-- Review 2 -->
      <div
        class="p-6 bg-gray-50 rounded-lg flex justify-between items-start space-x-4"
      >
        <!-- Profile Image -->
        <img
          src="https://via.placeholder.com/50"
          alt="Profile Image"
          class="w-12 h-12 rounded-full object-cover"
        />
        <!-- Content -->
        <div class="flex-1">
          <div class="flex flex-col items-start gap-2">
            <!-- Name and Rating -->
            <h3 class="text-sm font-semibold text-gray-800">Ronald Richards</h3>
            <div class="flex space-x-1">
              <!-- Star Rating -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-orange-400"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-orange-400"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-orange-400"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-orange-400"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-300"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
            </div>
          </div>
          <p class="mt-4 text-sm text-gray-700">
            This phone has 1T storage and is durable. Plus all the new iPhones
            have a C port! Apple is phasing out the current ones!
          </p>
        </div>
        <!-- Date -->
        <span class="text-sm text-gray-400">24 January, 2023</span>
      </div>

      <!-- Review 3 -->
      <div
        class="p-6 bg-gray-50 rounded-lg flex justify-between items-start space-x-4"
      >
        <!-- Profile Image -->
        <img
          src="https://via.placeholder.com/50"
          alt="Profile Image"
          class="w-12 h-12 rounded-full object-cover"
        />
        <!-- Content -->
        <div class="flex-1">
          <div class="flex flex-col items-start gap-2">
            <!-- Name and Rating -->
            <h3 class="text-sm font-semibold text-gray-800">Ronald Richards</h3>
            <div class="flex space-x-1">
              <!-- Star Rating -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-orange-400"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-orange-400"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-orange-400"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-orange-400"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-300"
              >
                <path
                  d="M12 .587l3.668 7.568L24 9.75l-6 6.02L19.335 24 12 20.01 4.665 24 6 15.77l-6-6.02 8.332-1.595z"
                />
              </svg>
            </div>
          </div>
          <p class="mt-4 text-sm text-gray-700">
            This phone has 1T storage and is durable. Plus all the new iPhones
            have a C port! Apple is phasing out the current ones!
          </p>
        </div>
        <!-- Date -->
        <span class="text-sm text-gray-400">24 January, 2023</span>
      </div>

      <!-- View More Button -->
      <div class="grid w-64 h-16 mx-auto">
        <button
          class="place-self-center w-full flex px-6 py-4 items-center justify-center border border-gray-800 rounded-lg"
        >
          <span class="text-sm font-semibold tracking-widest">View More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-down ms-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- End Comments Section -->
  </section>
  <!-- End Reviews Section -->

  <!-- Start Related Products Section -->
  <section class="container mx-auto px-6 py-20">
    <h2 class="text-xl font-medium tracking-wider">Related Products</h2>
    <div class="flex justify-between mt-12">
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-4 sm:mt-6 md:mt-8 lg:mt-10"
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
  </section>
  <!-- End Related Products Section -->
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { StarIcon } from "@heroicons/vue/24/outline";

const thumbsSwiper = ref(null);
const images = [
  "/images/pd4.webp",
  "/images/pd2.webp",
  "/images/pd3.webp",
  "/images/pd4.webp",
];

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
]);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];
</script>

<style scoped></style>
