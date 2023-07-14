import React from "react";
import {
  photo,
  photo11,
  photo12,
  photo15,
  photo17,
  photo24,
  photo4,
  photo6,
  photo7,
} from "../../../assets/images";

const Gallery = () => {
  const images = [
    photo,
    photo4,
    photo6,
    photo7,
    photo11,
    photo12,
    photo15,
    photo24,
    photo17,
  ];
  return (
    <section className="w-full gradientbackground items-center flex flex-col justify-center">
      <div className="max-w-[1240px] py-32 mx-auto">
        <div className="flex ml-3  flex-col md:flex-row justify-between items-start md:items-center mb-20 w-[90%]">
          <h3 className="text-[40px] leading-10 font-semibold text-white">
            Gallery
          </h3>
          {/* <button className="bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 text-black text-16px mt-4 md:mt-0 py-1 px-3 rounded-xs">
            View More
          </button> */}
        </div>

        <div className="px-1 md:px-0 columns-2 md:columns-4 space-y-4 space-x-0 md:space-x-4">
          {images.map((image) => {
            return (
              <img
                key={image.index}
                className="h-auto max-w-full rounded-lg"
                src={image}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
