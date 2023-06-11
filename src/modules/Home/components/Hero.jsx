import React from "react";
import { banner } from "../../../assets/images";

const Hero = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  };
  return (
    <div>
      <section class="pt-32">
        <div class="relative items-center w-full px-5 py-12 mx-auto lg:pt-24 lg:px-32 max-w-7xl md:px-12">
          <div>
            <div>
              <p class="text-white tracking-tighter font-medium font-serif lg:text-6xl text-4xl">
                Explore <br />
                <span class="lg:block">nature’s Beauty.</span>
              </p>
              <p class="lg:text-xl max-w-2xl mt-8 text-white/80 text-base">
                Discover the captivating beauty of the Turks and Caicos Islands.
                Immerse yourself in crystal clear waters on our paddleboard and
                Clear Bottom kayak tours.
              </p>
            </div>
            <div class="flex flex-wrap gap-2 mt-6">
              <a
                href="./templates.html"
                class="text-black text-sm px-4  border bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 inline-flex items-center py-1 rounded-full"
              >
                Articles{" "}
              </a>
              <a
                href="./blog-templates.html"
                class="text-black text-sm px-4  border bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 inline-flex items-center py-1 rounded-full"
              >
                Tools{" "}
              </a>
              <a
                href="/landing-pages.html"
                class="text-black text-sm px-4  border bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 inline-flex items-center py-1 rounded-full"
              >
                Suppliers{" "}
              </a>
              <a
                href="./ui-kits.html"
                class="text-black text-sm px-4  border bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 inline-flex items-center py-1 rounded-full"
              >
                Products{" "}
              </a>
              <a
                href="/personal-templates.html"
                class="text-black text-sm px-4  border bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 inline-flex items-center py-1 rounded-full"
              >
                Trending{" "}
              </a>
              <a
                href="./dark-templates.html"
                class="text-black text-sm px-4  border bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 inline-flex items-center py-1 rounded-full"
              >
                Community
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        class="bg-cover bg-neutral-300 bg-top h-[75vh]"
        style={
          bannerStyle
          //   {
          //   backgroundSize: "cover",
          //   background: `url(
          //   "https://images.unsplash.com/photo-1458322493962-69c5a4ef7ddf?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
          // )`,
          // }
        }
      >
        <div class="relative px-5 mx-auto overflow-hidden lg:px-32 bg-opacity-90">
          <div class="py-32">
            <div class="lg:gap-24 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:max-w-7xl lg:mx-auto">
              <div class="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:py-16"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
