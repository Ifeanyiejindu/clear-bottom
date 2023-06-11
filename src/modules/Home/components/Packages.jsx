import React from "react";

const Packages = () => {
  // const TourPackages = ({ title, icon, description }) => {
  //   return (
  //     <div className="h-[400px] w-[90%] mx-auto sm:w-[380px] rounded-[10px] shadow-md p-[25px] space-y-[30px] flex flex-col items-center text-center justify-center">
  //       <img src={icon} alt="icon of mangroove" />
  //       <h4 className="text-[30px]">{title}</h4>
  //       <p className="text-18px">{description}</p>
  //     </div>
  //   );
  // };
  return (
    // <section className="max-w-[1240px] flex flex-col sm:flex-row mx-auto py-[100px] justify-between items-center">
    //   <div className="order-2 sm:order-none grid grid-cols-1 sm:grid-cols-2 grid-rows-2 mx-auto gap-4 items-center justify-center w-full md:w-[70%]">
    //     <TourPackages
    //       description={
    //         "Explore enchanting mangrove tunnels and spot fascinating marine life."
    //       }
    //       title={"Mangrove Tour"}
    //       icon={firstIcon}
    //     />
    //     <TourPackages
    //       description={
    //         "Discover/ Encounter wildlife, and visit a beautiful crystal beach with rock iguanas."
    //       }
    //       title={"Mangrove and Iguana"}
    //       icon={secondIcon}
    //     />
    //     <TourPackages
    //       description={
    //         "Enjoy wildlife sightings and embark on a stand-up paddleboarding adventure."
    //       }
    //       title={"Paddle Board"}
    //       icon={paddleBoardIcon}
    //     />
    //     <TourPackages
    //       description={
    //         "Capture stunning aerial photos and videos with high-quality drone photography services."
    //       }
    //       title={"Aerial Photography"}
    //       icon={drone}
    //     />
    //   </div>
    //   <div className="order-1 sm:order-none flex flex-col items-start justify-start p-[30px]">
    //     <div className="h-[326px] max-w-[400px] rounded-[30px] b flex flex-col items-start justify-center  mb-10">
    //       <h1
    //         className="text-[40px] font-semibold mb-5"
    //         style={{ lineHeight: "1" }}
    //       >
    //         Pick The Right Package For You
    //       </h1>
    //       <p className="text-18px mb-10">
    //         Every package option has it own uniqueness and breakdown. Click to
    //         find out more.
    //       </p>
    //       <button className="text-18px py-[5px] px-[40px] text-white bg-red rounded-[7px] ">
    //         FAQs
    //       </button>
    //     </div>
    //     {/* <img className="bg-black rounded-full p-3 h-40" src={logo} alt="" /> */}
    //   </div>
    // </section>

    <section class="">
      <div class="relative px-4 py-24 mx-auto sm:px-6 md:px-4 lg:max-w-8xl lg:px-20 lg:py-36">
        <dl class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <a href="https://monoqrom.unwrapped.design/">
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
                  src="https://images.pexels.com/photos/2666806/pexels-photo-2666806.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="/"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cardBackground to-transparent"></div>
              </div>
            </div>
          </a>
          <a href="https://monoqrom.unwrapped.design/">
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
          <a href="https://monoqrom.unwrapped.design/">
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
                  src="https://images.pexels.com/photos/7967504/pexels-photo-7967504.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="/"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cardBackground to-transparent"></div>
              </div>
            </div>
          </a>
          <a href="https://monoqrom.unwrapped.design/">
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
