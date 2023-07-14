import React from "react";
import { photo14, photo8 } from "../../../assets/images";

const Packages = () => {
  return (
    <section class="">
      <div class="relative px-4 py-24 mx-auto sm:px-6 md:px-4 lg:max-w-8xl lg:px-20 lg:py-36">
        <dl class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <a href="/">
            <div class="h-full overflow-hidden bg-[#191C19] rounded border border-gray-700 shadow-xl">
              <div class="p-8 pb-0">
                <p class="mt-4 text-3xl font-semibold text-goldenBrown">
                  Mangrove Tour
                </p>
                <p class="mt-2 text-white">
                  Explore enchanting mangrove tunnels and spot fascinating
                  marine life.
                </p>
              </div>
              <div class="relative mt-12">
                <img
                  className="object-cover w-full aspect-square"
                  src={photo14}
                  alt="/"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cardBackground to-transparent"></div>
              </div>
            </div>
          </a>
          <a href="/">
            <div class="h-full overflow-hidden bg-[#191C19] rounded border border-gray-700 mt-0 md:mt-10 shadow-xl">
              <div class="p-8 pb-0">
                <p class="mt-4 text-3xl font-semibold text-goldenBrown">
                  Mangrove and Iguana
                </p>
                <p class="mt-2 text-white">
                  Discover/ Encounter wildlife, and visit a beautiful crystal
                  beach with rock iguanas.
                </p>
              </div>
              <div class="relative mt-12">
                <img
                  className="object-cover w-full aspect-square"
                  src="https://images.pexels.com/photos/17079323/pexels-photo-17079323/free-photo-of-boat-on-beach-on-shore-with-forest.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="/"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cardBackground to-transparent"></div>
              </div>
            </div>
          </a>
          <a href="/">
            <div class="h-full overflow-hidden bg-[#191C19] rounded border border-gray-700 shadow-xl">
              <div class="p-8 pb-0">
                <p class="mt-4 text-3xl font-semibold text-goldenBrown">
                  Paddle Board
                </p>
                <p class="mt-2 text-white">
                  Enjoy wildlife sightings and embark on a stand-up
                  paddleboarding adventure.
                </p>
              </div>
              <div class="relative mt-12">
                <img
                  className="object-cover w-full aspect-square"
                  src={photo8}
                  alt="/"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cardBackground to-transparent"></div>
              </div>
            </div>
          </a>
          <a href="/">
            <div class="h-full overflow-hidden bg-[#191C19] rounded border border-gray-700 mt-0 md:mt-10 shadow-xl">
              <div class="p-8 pb-0">
                <p class="mt-4 text-3xl font-semibold text-goldenBrown">
                  Aerial Photography
                </p>
                <p class="mt-2 text-white">
                  Capture stunning high-quality aerial photos and videos
                  photography services.
                </p>
              </div>
              <div className="relative mt-12">
                <img
                  className="object-cover w-full aspect-square"
                  src="https://images.pexels.com/photos/4601354/pexels-photo-4601354.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="/"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cardBackground to-transparent"></div>
              </div>
            </div>
          </a>
        </dl>
      </div>
    </section>
  );
};

export default Packages;
