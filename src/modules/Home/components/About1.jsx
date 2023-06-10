import React from "react";

const About1 = () => {
  return (
    <section className="w-full sm:max-w-[1240px] mx-auto ">
      <div className="flex flex-col sm:flex-row py-20 px-0 md:px-20 w-full relative justify-between items-center mx-auto">
        <div className="flex flex-col  items-start p-[20px] mb-20 sm:mb-0 space-y-6 w-full md:max-w-[50%]">
          <h3 style={{ lineHeight: 1 }} className="font-semibold text-[40px]">
            Our Commitment to Nature and Adventure
          </h3>
          <p className="text-[18px] mb-[30px]">
            We offer eco-friendly tours that showcase the wonders of the Turks
            and Caicos Islands. Paddle through enchanting mangrove tunnels, spot
            diverse marine life, and immerse yourself its natural beauty.
          </p>
          <div className="flex w-full  justify-between">
            <div className="border-r pr-2 mr-10 sm:pr-16 border-opacity-30 border-gray-600">
              <h3 className="text-[25px] sm:text-[45px] font-semibold">53k</h3>
              <p className="text-[13px] sm:text-[18px] ">Happy Client</p>
            </div>
            <div className="border-r pr-2 mr-10 sm:pr-16 border-opacity-30 border-gray-600">
              <h3 className="text-[25px] sm:text-[45px] font-semibold">100</h3>
              <p className="text-[13px] sm:text-[18px] ">Wildlife Species</p>
            </div>
            <div className="">
              <h3 className="text-[25px] sm:text-[45px] font-semibold">10%</h3>
              <p className="text-[13px] sm:text-[18px] ">Summer Discount</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-end mx-auto w-[95%] sm:max-w-[40%]">
          <img
            className="h-[403px] max-w-[50%]  rounded-[15px] object-cover"
            src="https://images.unsplash.com/photo-1496693623174-5f1de03f1b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt="/"
          />
          <img
            className="h-[487px] max-w-[50%] rounded-[15px] object-cover"
            src="https://images.unsplash.com/photo-1657057791120-c96b35ecdaf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
            alt="/"
          />
        </div>
      </div>
    </section>
  );
};

export default About1;
