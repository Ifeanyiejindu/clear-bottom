import React from "react";

const PricingSection = () => {
  return (
    <section class="bg-gray-200">
      <div class="relative items-center w-full px-8 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div class="space-y-12 overflow-hidden bg-white border lg:rounded-3xl lg:p-20 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          <div class="relative flex flex-col p-4">
            <div class="flex-1">
              <p class="flex items-baseline mt-4 text-black">
                <span class="text-5xl font-light tracking-tight text-black">
                  $249
                </span>
              </p>
              <div class="px-4 py-5 border-b">
                <div class="flex flex-wrap items-baseline -mt-2 -ml-2">
                  <h3 class="mt-2 text-lg text-black">Great Team License</h3>
                  <p class="mt-1 text-sm text-gray-500">
                    For SAAS, personal &amp; clients
                  </p>
                </div>
              </div>
              <div class="flex">
                <a
                  href="/"
                  class="items-center justify-center w-full px-6 py-2.5 mt-8 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  aria-describedby="tier-hobby"
                >
                  Get started
                </a>
              </div>
              <ul class="flex flex-col order-last mt-10 text-sm text-black gap-y-3">
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Connect 1 websites </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Connect up to 2 bank accounts </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Track up to 15 credit cards </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Analytics support </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Export up to 3 months data </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="relative flex flex-col p-4">
            <div class="flex-1">
              <p class="flex items-baseline mt-4 text-black">
                <span class="text-5xl font-light tracking-tight text-black">
                  $59
                </span>
              </p>
              <div class="px-4 py-5 border-b">
                <div class="flex flex-wrap items-baseline -mt-2 -ml-2">
                  <h3 class="mt-2 text-lg text-black">Standard License</h3>
                  <p class="mt-1 text-sm text-gray-500">
                    For personal and clients
                  </p>
                </div>
              </div>
              <div class="flex">
                <a
                  href="/"
                  class="items-center justify-center w-full px-6 py-2.5 mt-8 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  aria-describedby="tier-company"
                >
                  Get started
                </a>
              </div>
              <ul class="flex flex-col order-last mt-10 text-sm text-black gap-y-3">
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Connect 80 websites </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Connect up to 5 bank accounts </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Track up to 50 credit cards </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Analytics support </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Export up to 12 months data </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Cloud service 24/7 </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Track in multiple users </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="relative flex flex-col p-4">
            <div class="flex-1">
              <p class="flex items-baseline mt-4 text-black">
                <span class="text-5xl font-light tracking-tight text-black">
                  $0
                </span>
              </p>
              <div class="px-4 py-5 border-b">
                <div class="flex flex-wrap items-baseline -mt-2 -ml-2">
                  <h3 class="mt-2 text-lg text-black">Test license</h3>
                  <p class="mt-1 text-sm text-gray-500">
                    Great for testing &amp; understanding.
                  </p>
                </div>
              </div>
              <div class="flex">
                <a
                  href="/"
                  class="items-center justify-center w-full px-6 py-2.5 mt-8 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  aria-describedby="tier-hobby"
                >
                  Get started
                </a>
              </div>
              <ul class="flex flex-col order-last mt-10 text-sm text-black gap-y-3">
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Connect unlimited websites </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Connect up to 15 bank accounts </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Track up to 200 credit cards </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Analytics support </span>
                </li>
                <li class="flex items-center">
                  <ion-icon
                    class="w-4 h-4 md hydrated"
                    name="checkmark-outline"
                    role="img"
                    aria-label="checkmark outline"
                  ></ion-icon>
                  <span class="ml-4"> Export up to 24 months data </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
