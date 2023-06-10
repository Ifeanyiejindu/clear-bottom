import React from "react";
import { banner } from "../../../assets/images";

const Hero = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <section className="w-full">
      <div
        className="h-[100vh] grid grid-cols-1 md:grid-cols-2 w-full justify-between items-center "
        style={bannerStyle}
      >
        <div className=" hidden md:flex"></div>
        <div className=" mx-auto w-[95%] md:w-[500px] rounded-[20px] bg-black bg-opacity-90 text-white flex flex-col items-start justify-center p-[40px]">
          <h1
            className="text-[50px] font-extrabold mb-5"
            style={{ lineHeight: "1" }}
          >
            Explore <br />
            nature’s Beauty.
          </h1>

          <p className="text-[16px] mb-7 min-w-[260px]">
            Discover the captivating beauty of the Turks and Caicos Islands.
            Immerse yourself in crystal clear waters on our paddleboard and
            Clear Bottom kayak tours.
          </p>
          <button className="text-22px py-[10px] px-[20px] bg-red rounded-[15px] ">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
