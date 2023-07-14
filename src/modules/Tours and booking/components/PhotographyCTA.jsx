import React from "react";
import { photo28, photo30 } from "../../../assets/images";

const PhotographyCTA = () => {
  return (
    <section>
      <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 bg-black mb-10 md:mb-40">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center">
              <h2 class="text-2xl font-bold text-white md:text-3xl">
                Professional Aerial Photography Services
              </h2>

              <p class="hidden text-white/90 sm:mt-4 sm:block">
                Elevate your photography to new heights with our professional
                aerial photography services. Our skilled team utilizes
                state-of-the-art drones to capture stunning aerial shots that
                showcase the beauty of your special moments. Let us immortalize
                your memories from a unique perspective.
              </p>

              <div class="mt-4 md:mt-8">
                <a
                  href="/"
                  class="items-center justify-center  px-10 py-2.5 mt-8 text-center text-black duration-200 bg-gradient-to-b from-brightMustard to-mustard rounded inline-flex hover:bg-transparent hover:border-black hover:text-black/80 focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                >
                  Book Your Session Now
                </a>
              </div>
            </div>
          </div>

          <div class="  grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt=""
              src={photo28}
              class="h-40 w-full object-cover sm:h-56 md:h-full "
            />

            <img
              alt=""
              src={photo30}
              class="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographyCTA;
