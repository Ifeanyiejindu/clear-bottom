import React from "react";
import {
  drone,
  firstIcon,
  paddleBoardIcon,
  secondIcon,
} from "../../../assets/images";

const Packages = () => {
  const TourPackages = ({ title, icon, description }) => {
    return (
      <div className="h-[400px] w-[90%] mx-auto sm:w-[380px] rounded-[10px] shadow-md p-[25px] space-y-[30px] flex flex-col items-center text-center justify-center">
        <img src={icon} alt="icon of mangroove" />
        <h4 className="text-[30px]">{title}</h4>
        <p className="text-18px">{description}</p>
      </div>
    );
  };
  return (
    <section className="max-w-[1240px] flex flex-col sm:flex-row mx-auto py-[100px] justify-between items-center">
      <div className="order-2 sm:order-none grid grid-cols-1 sm:grid-cols-2 grid-rows-2 mx-auto gap-4 items-center justify-center w-full md:w-[70%]">
        <TourPackages
          description={
            "Explore enchanting mangrove tunnels and spot fascinating marine life."
          }
          title={"Mangrove Tour"}
          icon={firstIcon}
        />
        <TourPackages
          description={
            "Discover/ Encounter wildlife, and visit a beautiful crystal beach with rock iguanas."
          }
          title={"Mangrove and Iguana"}
          icon={secondIcon}
        />
        <TourPackages
          description={
            "Enjoy wildlife sightings and embark on a stand-up paddleboarding adventure."
          }
          title={"Paddle Board"}
          icon={paddleBoardIcon}
        />
        <TourPackages
          description={
            "Capture stunning aerial photos and videos with high-quality drone photography services."
          }
          title={"Aerial Photography"}
          icon={drone}
        />
      </div>
      <div className="order-1 sm:order-none flex flex-col items-start justify-start p-[30px]">
        <div className="h-[326px] max-w-[400px] rounded-[30px] b flex flex-col items-start justify-center  mb-10">
          <h1
            className="text-[40px] font-semibold mb-5"
            style={{ lineHeight: "1" }}
          >
            Pick The Right Package For You
          </h1>
          <p className="text-18px mb-10">
            Every package option has it own uniqueness and breakdown. Click to
            find out more.
          </p>
          <button className="text-18px py-[5px] px-[40px] text-white bg-red rounded-[7px] ">
            FAQs
          </button>
        </div>
        {/* <img className="bg-black rounded-full p-3 h-40" src={logo} alt="" /> */}
      </div>
    </section>
  );
};

export default Packages;
