import React from "react";
import { banner } from "../../../assets/images";

const Hero = () => {
  // const bannerStyle = {
  //   backgroundImage: `url(${banner})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   backgroundPosition: "bottom",
  // };
  const bannerVideoStyle = {
    position: "relative",
    height: "75vh",
    backgroundSize: "cover",
  };
  const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
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
                Kayak Rentals{" "}
              </a>
              <a
                href="./blog-templates.html"
                class="text-black text-sm px-4  border bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 inline-flex items-center py-1 rounded-full"
              >
                Turks{" "}
              </a>
              <a
                href="/landing-pages.html"
                class="text-black text-sm px-4  border bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 inline-flex items-center py-1 rounded-full"
              >
                Paddle Board Rental{" "}
              </a>
              <a
                href="./ui-kits.html"
                class="text-black text-sm px-4  border bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 inline-flex items-center py-1 rounded-full"
              >
                Mangrove{" "}
              </a>
              <a
                href="/personal-templates.html"
                class="text-black text-sm px-4  border bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 inline-flex items-center py-1 rounded-full"
              >
                Iguana{" "}
              </a>
              <a
                href="./dark-templates.html"
                class="text-black text-sm px-4  border bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 inline-flex items-center py-1 rounded-full"
              >
                Eco-Friendly
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        class="bg-cover bg-neutral-300 bg-top h-[75vh]"
        style={bannerVideoStyle}
      >
        <video autoPlay loop muted poster={banner} style={videoStyle}>
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/820590028/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=76dd6a170f764fb6cefa6016f10b06260eb321eb88ca33947f5450b280d89c31"
            type="video/mp4"
          />
        </video>
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
