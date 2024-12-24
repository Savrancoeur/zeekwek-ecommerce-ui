<template>
  <main class="">
    <!-- Navbar -->
    <div class="container mx-auto px-6 flex justify-between items-center py-5">
      <!-- Start Offcanvas -->
      <div class="me-auto">
        <button
          type="button"
          class="lg:hidden py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-700 text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-offcanvas-example"
          data-hs-overlay="#hs-offcanvas-example"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>

        <div
          id="hs-offcanvas-example"
          class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e"
          role="dialog"
          tabindex="-1"
          aria-labelledby="hs-offcanvas-example-label"
        >
          <div class="flex justify-between items-center py-3 px-4 border-b">
            <h3 id="hs-offcanvas-example-label" class="font-bold text-gray-800">
              Menu
            </h3>

            <button
              type="button"
              class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Close"
              data-hs-overlay="#hs-offcanvas-example"
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

          <div class="p-4">
            <div
              class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-1 lg:gap-2"
            >
              <a
                class="flex content-center items-center my-2 text-gray-800 rounded-lg focus:outline-none"
                href="#"
                aria-current="page"
              >
                <svg
                  class="shrink-0 size-5 me-3"
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
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path
                    d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  />
                </svg>
                Landing
              </a>

              <!-- Mega Menu -->
              <div
                class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false]"
              >
                <button
                  id="hs-header-base-mega-menu-fullwidth"
                  type="button"
                  class="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Mega Menu"
                >
                  <svg
                    class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
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
                    <path
                      d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Resources
                  <svg
                    class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full min-w-60 hidden z-10 top-full start-0 before:absolute before:-top-5 before:start-0 before:w-full before:h-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-header-base-mega-menu-fullwidth"
                >
                  <div
                    class="md:mx-6 lg:mx-8 md:bg-white md:rounded-lg md:shadow-md"
                  >
                    <!-- Grid -->
                    <div
                      class="py-1 md:p-2 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                      <div class="flex flex-col">
                        <!-- Link -->
                        <a
                          class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                          href="#"
                        >
                          <svg
                            class="shrink-0 size-4 mt-1 text-gray-800"
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
                            <path
                              d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                            />
                            <path
                              d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                            />
                          </svg>
                          <div class="grow">
                            <p class="font-medium text-sm text-gray-800">
                              Support Docs
                            </p>
                            <p class="text-sm text-gray-500">
                              Explore advice and explanations for all of
                              Preline's features.
                            </p>
                          </div>
                        </a>
                        <!-- End Link -->

                        <!-- Link -->
                        <a
                          class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                          href="#"
                        >
                          <svg
                            class="shrink-0 size-4 mt-1 text-gray-800"
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
                            <rect width="7" height="7" x="14" y="3" rx="1" />
                            <path
                              d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
                            />
                          </svg>
                          <div class="grow">
                            <p class="font-medium text-sm text-gray-800">
                              Integrations
                            </p>
                            <p class="text-sm text-gray-500">
                              Discover the huge range of tools that Preline
                              integrates with.
                            </p>
                          </div>
                        </a>
                        <!-- End Link -->

                        <!-- Link -->
                        <a
                          class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                          href="#"
                        >
                          <svg
                            class="shrink-0 size-4 mt-1 text-gray-800"
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
                            <path d="m7 11 2-2-2-2" />
                            <path d="M11 13h4" />
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                              ry="2"
                            />
                          </svg>
                          <div class="grow">
                            <p class="font-medium text-sm text-gray-800">
                              API Reference
                            </p>
                            <p class="text-sm text-gray-500">
                              Build custom integrations with our first-class
                              API.
                            </p>
                          </div>
                        </a>
                        <!-- End Link -->
                      </div>
                      <!-- End Col -->

                      <div class="flex flex-col">
                        <!-- Link -->
                        <a
                          class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                          href="#"
                        >
                          <svg
                            class="shrink-0 size-4 mt-1 text-gray-800"
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
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="M12 17h.01" />
                          </svg>
                          <div class="grow">
                            <p class="font-medium text-sm text-gray-800">
                              Help Center
                            </p>
                            <p class="text-sm text-gray-500">
                              Learn how to install, set up, and use Preline.
                            </p>
                          </div>
                        </a>
                        <!-- End Link -->

                        <!-- Link -->
                        <a
                          class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                          href="#"
                        >
                          <svg
                            class="shrink-0 size-4 mt-1 text-gray-800"
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
                            <circle cx="12" cy="12" r="4" />
                            <path
                              d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
                            />
                          </svg>
                          <div class="grow">
                            <p class="font-medium text-sm text-gray-800">
                              Developer Hub
                            </p>
                            <p class="text-sm text-gray-500">
                              Learn how to integrate or build on top of Preline.
                            </p>
                          </div>
                        </a>
                        <!-- End Link -->

                        <!-- Link -->
                        <a
                          class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                          href="#"
                        >
                          <svg
                            class="shrink-0 size-4 mt-1 text-gray-800"
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
                            <path
                              d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                            />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          <div class="grow">
                            <p class="font-medium text-sm text-gray-800">
                              Community Forum
                            </p>
                            <p class="text-sm text-gray-500">
                              Learn, share, and connect with other Preline
                              users.
                            </p>
                          </div>
                        </a>
                        <!-- End Link -->
                      </div>
                      <!-- End Col -->

                      <div class="mt-2 md:mt-0 flex flex-col">
                        <span
                          class="ms-2.5 mb-2 font-semibold text-xs uppercase text-gray-800"
                          >Customer stories</span
                        >

                        <!-- Link -->
                        <a
                          class="p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          <img
                            class="size-32 rounded-lg"
                            src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                            alt="Avatar"
                          />
                          <div class="grow">
                            <p class="text-sm text-gray-800">
                              Preline Projects has proved to be most efficient
                              cloud based project tracking and bug tracking
                              tool.
                            </p>
                            <p
                              class="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium"
                            >
                              Learn more
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
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            </p>
                          </div>
                        </a>
                        <!-- End Link -->
                      </div>
                      <!-- End Col -->
                    </div>
                    <!-- End Grid -->
                  </div>
                </div>
              </div>
              <!-- End Mega Menu -->

              <a
                class="flex items-center my-2 text-gray-800 rounded-lg focus:outline-none"
                href="#"
              >
                <svg
                  class="shrink-0 size-5 me-3"
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
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Account
              </a>

              <a
                class="flex items-center my-2 text-gray-800 rounded-lg focus:outline-none"
                href="#"
              >
                <svg
                  class="shrink-0 size-5 me-3"
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
                  <path d="M12 12h.01" />
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
                Work
              </a>

              <a
                class="flex items-center my-2 text-gray-800 rounded-lg focus:outline-none"
                href="#"
              >
                <svg
                  class="shrink-0 size-5 me-3"
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
                  <path
                    d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                  />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
                Blog
              </a>

              <a
                class="flex items-center my-2 text-gray-800 rounded-lg focus:outline-none"
                href="#"
              >
                <svg
                  class="shrink-0 size-5 me-3"
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
                  <path d="M12 12h.01" />
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
                Bubu
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- End Offcanvas -->

      <!-- Search Button -->
      <button
        type="button"
        class="m-1 ms-2 py-3 px-4 inline-flex lg:hidden items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-200"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-offcanvas-top"
        data-hs-overlay="#hs-offcanvas-top"
      >
        <svg
          class="shrink-0 size-4 text-gray-400 /60"
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
      </button>

      <div
        id="hs-offcanvas-top"
        class="hs-overlay hs-overlay-open:translate-y-0 -translate-y-full fixed top-0 inset-x-0 transition-all duration-300 transform max-h-40 size-full z-[80] bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hidden"
        role="dialog"
        tabindex="-1"
        aria-labelledby="hs-offcanvas-top-label"
      >
        <div
          class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700"
        >
          <h3
            id="hs-offcanvas-top-label"
            class="font-bold text-gray-800 dark:text-white"
          >
            Search Our Site
          </h3>
          <button
            type="button"
            class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
            aria-label="Close"
            data-hs-overlay="#hs-offcanvas-top"
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
        <div class="p-4">
          <div class="w-[90%] justify-self-center">
            <!-- SearchBox -->
            <div
              class="relative"
              data-hs-combo-box='{
    "groupingType": "default",
    "isOpenOnFocus": true,
    "apiUrl": "../assets/data/searchbox.json",
    "apiGroupField": "category",
    "outputItemTemplate": "<div data-hs-combo-box-output-item><span class=\"flex items-center cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200\"><div class=\"flex items-center w-full\"><div class=\"flex items-center justify-center rounded-full bg-gray-200 size-6 overflow-hidden me-2.5\"><img class=\"shrink-0\" data-hs-combo-box-output-item-attr=&apos;[{\"valueFrom\": \"image\", \"attr\": \"src\"}, {\"valueFrom\": \"name\", \"attr\": \"alt\"}]&apos; /></div><div data-hs-combo-box-output-item-field=\"name\" data-hs-combo-box-search-text data-hs-combo-box-value></div></div><span class=\"hidden hs-combo-box-selected:block\"><svg class=\"shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg></span></span></div>",
    "groupingTitleTemplate": "<div class=\"text-xs uppercase text-gray-500 m-3 mb-1 dark:text-neutral-500\"></div>"
  }'
            >
              <div class="relative">
                <div
                  class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                >
                  <svg
                    class="shrink-0 size-4 text-gray-400 dark:text-white/60"
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
                  class="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  type="text"
                  role="combobox"
                  aria-expanded="false"
                  placeholder="Type a name"
                  value=""
                  data-hs-combo-box-input=""
                />
              </div>

              <!-- SearchBox Dropdown -->
              <div
                class="absolute z-50 w-full bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700"
                style="display: none"
                data-hs-combo-box-output=""
              >
                <div
                  class="max-h-72 rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                  data-hs-combo-box-output-items-wrapper=""
                ></div>
              </div>
              <!-- End SearchBox Dropdown -->
            </div>
            <!-- End SearchBox -->
          </div>
        </div>
      </div>
      <!-- Search Button -->

      <div
        class="flex justify-center items-center lg:justify-start w-full lg:w-1/4"
      >
        <router-link :to="{ name: 'home' }"
          ><img src="/images/logo.webp" class="w-14 lg:w-24 cursor-pointer"
        /></router-link>
      </div>

      <div
        id="json-example-with-tab-filter-in-dropdown-tab-preview-markup"
        class="lg:w-2/4 hidden lg:block"
      >
        <!-- SearchBox -->
        <div
          class="relative lg:flex lg:justify-center lg:items-center lg:ms-auto"
          data-hs-combo-box='{
      "groupingType": "tabs",
      "isOpenOnFocus": true,
      "apiUrl": "https://fakestoreapi.com/products",
      "apiGroupField": "category",
      "outputItemTemplate": "<div class=\"cursor-pointer p-2 space-y-0.5 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100    \" data-hs-combo-box-output-item><div class=\"flex justify-between items-center w-full\"><div data-hs-combo-box-output-item-field=\"title\" data-hs-combo-box-search-text data-hs-combo-box-value></div></div></div><span class=\"hidden hs-combo-box-selected:block\"><svg class=\"shrink-0 size-3.5 text-blue-600 \" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg></span></img></div>",
      "groupingTitleTemplate": "<button type=\"button\" class=\"capitalize py-1 px-2 inline-flex items-center gap-x-2 text-sm text-nowrap rounded-md border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-100 hs-combo-box-tab-active:bg-blue-600 hs-combo-box-tab-active:border-blue-600 hs-combo-box-tab-active:focus:border-blue-600 hs-combo-box-tab-active:text-white disabled:opacity-50 disabled:pointer-events-none       \"></button>",
      "tabsWrapperTemplate": "<div class=\"overflow-x-auto p-4 rounded-t-xl border-b border-gray-200 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300  \"></div>"
    }'
        >
          <div class="relative w-full">
            <div
              class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
            >
              <svg
                class="shrink-0 size-4 text-gray-400 /60"
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
              class="py-3 ps-10 pe-4 w-full flex justify-end items-center border-gray-200 rounded-lg text-sm bg-gray-100 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              type="text"
              role="combobox"
              aria-expanded="false"
              placeholder="Search"
              value=""
              data-hs-combo-box-input=""
            />
          </div>

          <!-- SearchBox Dropdown -->
          <div
            class="absolute z-50 w-full bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]"
            style="display: none"
            data-hs-combo-box-output=""
          >
            <div
              class="max-h-[300px] p-2 rounded-b-xl overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
              data-hs-combo-box-output-items-wrapper=""
            ></div>
          </div>
          <!-- End SearchBox Dropdown -->
        </div>
        <!-- End SearchBox -->
      </div>

      <div class="flex justify-end lg:w-1/4">
        <img
          class="inline-block size-8 rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="Avatar"
        />
      </div>
    </div>

    <!-- ========== Start Header ========== -->
    <header
      class="hidden lg:flex lg:flex-wrap md:flex-nowrap z-50 w-full border-b border-gray-200 bg-neutral-800"
    >
      <nav
        class="container mx-auto px-6 relative w-full md:flex md:items-center md:justify-between py-2.5"
      >
        <div class="flex justify-between items-center gap-x-1">
          <!-- Collapse Button -->
          <button
            type="button"
            class="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            id="hs-header-base-collapse"
            aria-expanded="false"
            aria-controls="hs-header-base"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-header-base"
          >
            <svg
              class="hs-collapse-open:hidden size-4"
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
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              class="hs-collapse-open:block shrink-0 hidden size-4"
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span class="sr-only">Toggle navigation</span>
          </button>
          <!-- End Collapse Button -->
        </div>

        <!-- Collapse -->
        <div
          id="hs-header-base"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block mx-auto"
          aria-labelledby="hs-header-base-collapse"
        >
          <div
            class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
          >
            <div
              class="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1"
            >
              <div class="grow">
                <div
                  class="flex flex-col md:flex-row md:justify-between md:items-center gap-0.5 md:gap-1"
                >
                  <a
                    class="flex content-center items-center my-2 md:m-0 text-slate-50 rounded-lg focus:outline-none"
                    href="#"
                    aria-current="page"
                  >
                    <svg
                      class="shrink-0 size-5 me-3"
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
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                      <path
                        d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                      />
                    </svg>
                    Landing
                  </a>

                  <!-- Mega Menu -->
                  <div
                    class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false]"
                  >
                    <button
                      id="hs-header-base-mega-menu-fullwidth"
                      type="button"
                      class="hs-dropdown-toggle w-full py-2 flex items-center text-md text-slate-50 rounded-lg focus:outline-none"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Mega Menu"
                    >
                      <svg
                        class="shrink-0 size-5 me-3 md:me-2 block"
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
                        <path
                          d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                        />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Resources
                      <svg
                        class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    <div
                      class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full min-w-60 hidden z-10 top-full start-0 before:absolute before:-top-5 before:start-0 before:w-full before:h-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-header-base-mega-menu-fullwidth"
                    >
                      <div
                        class="md:mx-6 lg:mx-8 md:bg-white md:rounded-lg md:shadow-md"
                      >
                        <!-- Grid -->
                        <div
                          class="py-1 md:p-2 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                        >
                          <div class="flex flex-col">
                            <!-- Link -->
                            <router-link
                              :to="{ name: 'home' }"
                              class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                              href="#"
                            >
                              <div class="grow">
                                <p>Home</p>
                              </div>
                            </router-link>
                            <!-- End Link -->

                            <!-- Link -->
                            <router-link
                              :to="{ name: 'cart' }"
                              class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                              href="#"
                            >
                              <div class="grow">
                                <p>Cart</p>
                              </div>
                            </router-link>
                            <!-- End Link -->

                            <!-- Link -->
                            <router-link
                              :to="{ name: 'productlist' }"
                              class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                              href="#"
                            >
                              <div class="grow">
                                <p>Product List</p>
                              </div>
                            </router-link>
                            <!-- End Link -->

                            <!-- Link -->
                            <router-link
                              :to="{ name: 'productdetail' }"
                              class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                              href="#"
                            >
                              <div class="grow">
                                <p>Product Detail</p>
                              </div>
                            </router-link>
                            <!-- End Link -->
                          </div>
                          <!-- End Col -->

                          <div class="flex flex-col">
                            <!-- Link -->
                            <router-link
                              :to="{ name: 'orderaddress' }"
                              class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                              href="#"
                            >
                              <div class="grow">
                                <p>Order Address</p>
                              </div>
                            </router-link>
                            <!-- End Link -->

                            <!-- Link -->
                            <router-link
                              :to="{ name: 'orderconfirmed' }"
                              class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                              href="#"
                            >
                              <div class="grow">
                                <p>Order Confirmed</p>
                              </div>
                            </router-link>
                            <!-- End Link -->

                            <!-- Link -->
                            <router-link
                              :to="{ name: 'orderpayment' }"
                              class="p-3 flex gap-x-4 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg"
                              href="#"
                            >
                              <div class="grow">
                                <p>Order Payment</p>
                              </div>
                            </router-link>
                            <!-- End Link -->
                          </div>
                          <!-- End Col -->

                          <div class="mt-2 md:mt-0 flex flex-col">
                            <span
                              class="ms-2.5 mb-2 font-semibold text-xs uppercase text-gray-800"
                              >Customer stories</span
                            >

                            <!-- Link -->
                            <a
                              class="p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                              href="#"
                            >
                              <img
                                class="size-32 rounded-lg"
                                src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                                alt="Avatar"
                              />
                              <div class="grow">
                                <p class="text-sm text-gray-800">
                                  Preline Projects has proved to be most
                                  efficient cloud based project tracking and bug
                                  tracking tool.
                                </p>
                                <p
                                  class="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium"
                                >
                                  Learn more
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
                                    <path d="m9 18 6-6-6-6" />
                                  </svg>
                                </p>
                              </div>
                            </a>
                            <!-- End Link -->
                          </div>
                          <!-- End Col -->
                        </div>
                        <!-- End Grid -->
                      </div>
                    </div>
                  </div>
                  <!-- End Mega Menu -->

                  <a
                    class="flex items-center my-2 md:m-0 text-slate-50 rounded-lg focus:outline-none"
                    href="#"
                  >
                    <svg
                      class="shrink-0 size-5 me-3"
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    Account
                  </a>

                  <a
                    class="flex items-center my-2 md:m-0 text-slate-50 rounded-lg focus:outline-none"
                    href="#"
                  >
                    <svg
                      class="shrink-0 size-5 me-3"
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
                      <path d="M12 12h.01" />
                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                    Work
                  </a>

                  <a
                    class="flex items-center my-2 md:m-0 text-slate-50 rounded-lg focus:outline-none"
                    href="#"
                  >
                    <svg
                      class="shrink-0 size-5 me-3"
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
                      <path
                        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                      />
                      <path d="M18 14h-8" />
                      <path d="M15 18h-5" />
                      <path d="M10 6h8v4h-8V6Z" />
                    </svg>
                    Blog
                  </a>

                  <a
                    class="flex items-center my-2 md:m-0 text-slate-50 rounded-lg focus:outline-none"
                    href="#"
                  >
                    <svg
                      class="shrink-0 size-5 me-3"
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
                      <path d="M12 12h.01" />
                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                    Bubu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Collapse -->
      </nav>
    </header>
    <!-- ========== End Header ========== -->

    <!-- ========== Start Content Section ========== -->
    <RouterView></RouterView>
    <!-- ========== End Content Section ========== -->

    <!-- ========== Start Footer ========== -->
    <div class="bg-black">
      <div
        class="container 2xl:px-0 px-6 mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-x-20 text-white pt-16 pb-20"
      >
        <div class="pb-12 md:pb-0">
          <img src="/images/logowhite.png" class="w-14" />
          <p class="text-sm mt-5 tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            sit.
          </p>

          <ul class="wrapper inline-flex py-10 lg:pb-6 text-gray-900">
            <li
              class="icon group relative bg-white rounded-full me-6 w-10 h-10 text-xl flex justify-center items-center cursor-pointer transition duration-200 hover:bg-[#1877f2] hover:text-white facebook"
            >
              <span
                class="tooltip absolute top-0 text-xs p-2 w-32 rounded opacity-0 pointer-events-none transition duration-300 ease-customize group-hover:-top-10 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:bg-[#1877f2] group-hover:text-white"
                >Follow on Facebook</span
              >
              <svg
                viewBox="0 0 320 512"
                height="1.2em"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </li>
            <li
              class="icon group relative bg-white rounded-full me-6 w-10 h-10 text-xl flex justify-center items-center cursor-pointer transition duration-200 hover:bg-[#1da1f2] hover:text-white twitter"
            >
              <span
                class="tooltip absolute top-0 text-xs p-2 w-32 rounded opacity-0 pointer-events-none transition duration-300 ease-customize group-hover:-top-10 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:bg-[#1da1f2] group-hover:text-white"
                >Follow on Twitter</span
              >
              <svg
                height="1.8em"
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                class="twitter"
              >
                <path
                  d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                ></path>
              </svg>
            </li>
            <li
              class="icon group relative bg-white rounded-full me-6 w-10 h-10 text-xl flex justify-center items-center cursor-pointer transition duration-200 hover:bg-[#e4405f] hover:text-white instagram"
            >
              <span
                class="tooltip absolute top-0 text-xs p-2 w-32 rounded opacity-0 pointer-events-none transition duration-300 ease-customize group-hover:-top-10 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:bg-[#ff0050] group-hover:text-white"
                >Follow on Tik Tok</span
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-tiktok"
                viewBox="0 0 16 16"
              >
                <path
                  d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"
                />
              </svg>
            </li>
            <li
              class="icon group relative bg-white rounded-full me-6 w-10 h-10 text-xl flex justify-center items-center cursor-pointer transition duration-200 hover:bg-[#e4405f] hover:text-white instagram"
            >
              <span
                class="tooltip absolute top-0 text-xs p-2 w-32 rounded opacity-0 pointer-events-none transition duration-300 ease-customize group-hover:-top-10 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:bg-[#e4405f] group-hover:text-white"
                >Follow on Instagram</span
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.2em"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                ></path>
              </svg>
            </li>
          </ul>
        </div>

        <div class="pb-12 md:pb-0">
          <h1 class="tracking-wider font-medium mb-5">Services</h1>
          <ul class="text-sm flex flex-col gap-y-3">
            <li class="cursor-pointer hover:text-amber-400 hover:font-medium">
              Bonus program
            </li>
            <li class="cursor-pointer hover:text-amber-400 hover:font-medium">
              Gift cards
            </li>
            <li class="cursor-pointer hover:text-amber-400 hover:font-medium">
              Credit and payment
            </li>
            <li class="cursor-pointer hover:text-amber-400 hover:font-medium">
              Installment
            </li>
            <li class="cursor-pointer hover:text-amber-400 hover:font-medium">
              Non-cash account
            </li>
            <li class="cursor-pointer hover:text-amber-400 hover:font-medium">
              Payment
            </li>
          </ul>
        </div>

        <div class="pb-20 md:pb-0">
          <h1 class="tracking-wider font-medium mb-5">
            Assistance to the buyer
          </h1>
          <ul class="text-sm flex flex-col gap-y-3">
            <li class="cursor-pointer hover:text-amber-400 hover:font-medium">
              Find an order
            </li>
            <li class="cursor-pointer hover:text-amber-400 hover:font-medium">
              Terms of delivery
            </li>
            <li class="cursor-pointer hover:text-amber-400 hover:font-medium">
              Exchange and return of goods
            </li>
            <li class="cursor-pointer hover:text-amber-400 hover:font-medium">
              Gurantee
            </li>
            <li class="cursor-pointer hover:text-amber-400 hover:font-medium">
              Frequently asked questions
            </li>
            <li class="cursor-pointer hover:text-amber-400 hover:font-medium">
              Customer reviews
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- ========== End Footer ========== -->
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
