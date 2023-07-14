import React, { useState } from "react";
import { photo25, video } from "../../../assets/images";

const CTASection = () => {
  const [tourImage, setTourImage] = useState(true);

  return (
    <section class="overflow-hidden gradientbackground">
      <div class="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div class="grid items-start grid-cols-1 md:grid-cols-2">
          <div class="lg:pr-24 md:pr-12">
            <h2 class="mt-6 text-3xl font-medium text-mustard">
              Dive into Adventure and Capture Unforgettable Moments
            </h2>
            <p class="mt-5 text-base text-white">
              Don't miss out on these extraordinary experiences. Dive into
              adventure with our tours and let our aerial photography services
              immortalize your memories. Book your Clear Bottom Adventure today
              and create moments that will last a lifetime.
            </p>
            <ul class="grid grid-cols-2 gap-4 mt-12 list-none lg:gap-6">
              <li onClick={() => setTourImage(true)}>
                <div>
                  <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                    ❖
                  </div>
                  <p class="mt-5 text-lg font-medium leading-6 text-goldenBrown">
                    Join Our Tours
                  </p>
                </div>
                <div class="mt-2 text-base text-white">
                  Embark on Thrilling Explorations of the Turks and Caicos
                  Islands
                </div>
              </li>
              <li onClick={() => setTourImage(false)}>
                <div>
                  <div class="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                    ❖
                  </div>
                  <p class="mt-5 text-lg font-medium leading-6 text-goldenBrown">
                    Book Photography
                  </p>
                </div>
                <div class="mt-2 text-base text-white">
                  Elevate Your Memories with Professional Aerial Photography
                  Services
                </div>
              </li>
            </ul>
          </div>
          <div class="h-full mt-2 md:mt-12 lg:mt-0 border-mercury-400 lg:pl-24 md:border-l md:pl-12">
            <video
              class="w-full md:w-[966px] h-auto md:h-[488px] aspect-square"
              src={video}
              controls
              muted
              autoPlay
              poster={photo25}
            />

            {/* <img
              alt="Lexingtøn thumbnail"
              class="object-cover bg-gray-300 w-[966px] h-[488px]"
              src={
                tourImage
                  ? `https://d33wubrfki0l68.cloudfront.net/ded521c426f480d4e473a11836c6ab8e7e948c84/95877/images/placeholders/square3.svg`
                  : `https://images.unsplash.com/photo-1686139280426-483b26ab94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80`
              }
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
