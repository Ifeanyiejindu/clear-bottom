import React from "react";

const HowWeWork = () => {
  const Cards = ({ number, title, description, className, padding }) => {
    return (
      <div
        className={` h-[393px] w-[95%] md:w-[454px] text-white mx-auto rounded text-left p-8 md:p-14 ${className} flex flex-col justify-center items-start`}
      >
        <h1
          className="text-[50px] font-semibold text-goldenBrown mb-[10px]"
          style={{ lineHeight: 1 }}
        >
          {number}
        </h1>
        <h3
          style={{ lineHeight: 1 }}
          className="text-[30px] font-semibold  mb-[25px]"
        >
          {title}
        </h3>
        <p className="text-18px font-normal">{description}</p>
      </div>
    );
  };
  return (
    <div className=" w-full flex flex-col justify-center items-center py-32">
      <h2 className="text-50px font-semibold mb-12 text-white">How We Work</h2>
      <div className="flex flex-col md:flex-row w-full md:w-[1240px]">
        <Cards
          number={"01"}
          title="Explore and Select"
          description="Browse through our exciting tour options and select the adventure that suits your preferences and interests."
        />
        <Cards
          number={"02"}
          className={
            "bg-[#191C19] border shadow-lg shadow-gray-700 border-mustard text-white"
          }
          title={"Booking and Reservation"}
          description="Make a booking by providing 
          your preferred date, time, and any 
          additional requirements. Our team
           will assist you were needed."
        />
        <Cards
          number={"03"}
          title={"Confirmation and Preparations"}
          description="Once your booking is confirmed, you will receive a confirmation
          notification along with any necessary instructions needed."
        />
      </div>
    </div>
  );
};

export default HowWeWork;
