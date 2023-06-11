import React from "react";

const CTAForTours = () => {
  return (
    <section class="overflow-hidden bg-mustard sm:grid sm:grid-cols-2">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            Discover the Wonders of Turks and Caicos
          </h2>

          <p class="hidden text-gray-800 md:mt-4 md:block">
            Experience the beauty of Turks and Caicos like never before. Join
            our guided tours and explore the mesmerizing landscapes,
            crystal-clear waters, and diverse marine life. Whether you're a
            first-time adventurer or an experienced explorer, our knowledgeable
            guides will ensure an unforgettable journey.
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="/"
              class="inline-block rounded bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-opacity-90 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Book A Tour
            </a>
          </div>
        </div>
      </div>

      <img
        alt="Student"
        src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        class="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
};

export default CTAForTours;
