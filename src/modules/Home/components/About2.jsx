import React from "react";
import { photo23 } from "../../../assets/images";

const About2 = () => {
  return (
    <section className="p-2 sm:p-[100px] w-full gradientbackground">
      <div className="flex flex-col sm:flex-row items-center w-full sm:max-w-[1240px] mx-auto">
        <img
          className=" w-[100%] sm:max-w-[817px] h-[456px] rounded object-cover"
          src={photo23}
          alt=""
        />
        <div className="w-min sm:w-[874px] h-min sm:h-[384px] rounded-[3px] mt-[-100px] sm:mt-0   ml-0 sm:ml-[-300px] bg-[#191C19] border border-gray-600 text-white bot p-10 sm:p-[50px] items-start shadow-md">
          <h3
            style={{ lineHeight: 1 }}
            className="font-semibold text-[40px] sm:text-[45px] mb-[30px]"
          >
            Unmatched Adventure Experiences.
          </h3>
          <p className="text-[18px] mb-[30px]">
            Our friendly and knowledgeable staff ensures your safety and
            enjoyment throughout the tour. Whether you're a beginner or an
            experienced adventurer, we cater to individuals, families, and
            groups. Join us for an unforgettable journey in the Turks and Caicos
            Islands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About2;
