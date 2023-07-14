import React from "react";
import { Link } from "react-router-dom";
import { photo4 } from "../../../assets/images";

const PhotoHeroSection = () => {
  return (
    <section className=" mt-24">
      <div class="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div class="relative flex-col items-start m-auto align-middle">
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div class="max-w-xl text-center lg:text-left">
                <div>
                  <p class="text-2xl font-medium tracking-tight text-white sm:text-4xl">
                    Capturing Moments from Above
                  </p>
                  <p class="max-w-xl mt-4 text-base tracking-tight text-gray-50">
                    Elevate your experience with our professional aerial
                    photography services. Our skilled photographers utilize
                    state-of-the-art drones to capture stunning images from
                    unique angles, providing you with magazine-quality still
                    photos and captivating aerial footage. Let us turn your
                    cherished moments into lifelong memories.
                  </p>
                </div>
                <div class="flex flex-col items-center justify-center gap-8 mt-10 lg:flex-row lg:justify-start">
                  <a
                    href="/"
                    class="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-gradient-to-b from-brightMustard to-mustard rounded nline-flex hover:bg-transparent hover:border-black hover:text-black/90 focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                  >
                    Book Session
                  </a>
                  <Link
                    to="/contact"
                    class="inline-flex items-center justify-center text-sm font-semibold text-goldenBrown duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                  >
                    Contact Us
                    <span aria-hidden="true"> → </span>
                  </Link>
                </div>
              </div>
            </div>
            <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
              <img
                class="object-cover object-center w-full h-[530px] aspect-square mx-auto bg-gray-300 border lg:ml-auto"
                alt="hero"
                src={photo4}
              />
            </div>
          </div>
        </div>
        <div>
          <div class="pt-12 mx-auto lg:max-w-7xl">
            <dl class="grid grid-cols-1 gap-6 space-y-0 text-center lg:gap-24 lg:grid-cols-3 lg:text-left">
              <div>
                <div>
                  <p class="mt-5 text-lg font-medium leading-6 text-goldenBrown">
                    Breathtaking Perspectives
                  </p>
                </div>
                <div class="mt-2 text-base text-gray-50">
                  Our agile drones capture images from virtually any angle,
                  offering awe-inspiring perspectives that showcase the beauty
                  of your surroundings.
                </div>
              </div>
              <div>
                <div>
                  <p class="mt-5 text-lg font-medium leading-6 text-goldenBrown">
                    High-Quality Visuals
                  </p>
                </div>
                <div class="mt-2 text-base text-gray-50">
                  We use premium quality drones equipped with gyro-stabilized
                  gimbals, ensuring ultra-sharp HD 4K video and 20-megapixel
                  still images that capture every detail.
                </div>
              </div>
              <div>
                <div>
                  <p class="mt-5 text-lg font-medium leading-6 text-goldenBrown">
                    Real-Time Control
                  </p>
                </div>
                <div class="mt-2 text-base text-gray-50">
                  With live HD video feed to the ground, our experienced pilots
                  can adjust camera angles and settings in real time,
                  guaranteeing the perfect shot.
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoHeroSection;
