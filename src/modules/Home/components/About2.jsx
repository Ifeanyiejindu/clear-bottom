import React from "react";

const About2 = () => {
  return (
    <section className="bg-offwhite p-2 sm:p-[100px] w-full ">
      <div className="flex flex-col sm:flex-row items-center w-full sm:max-w-[1240px] mx-auto">
        <img
          className=" w-[100%] sm:max-w-[817px] h-[496px] rounded-md object-cover"
          src="https://images.unsplash.com/photo-1563028090-be505698de25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80"
          alt=""
        />
        <div className="w-min sm:w-[874px] h-min sm:h-[384px] rounded-[20px] mt-[-100px] sm:mt-0   ml-0 sm:ml-[-300px] bg-white p-10 sm:p-[50px] items-start shadow-md">
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
