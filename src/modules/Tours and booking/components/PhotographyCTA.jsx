import React from "react";

const PhotographyCTA = () => {
  return (
    <section>
      <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 bg-black mb-40">
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

          <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Student"
              src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
              class="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt="Student"
              src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              class="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographyCTA;
