import React from "react";

const Gallery = () => {
  const images = [
    "https://images.pexels.com/photos/7568925/pexels-photo-7568925.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/8711864/pexels-photo-8711864.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/13348895/pexels-photo-13348895.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/7426142/pexels-photo-7426142.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/14021728/pexels-photo-14021728.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/8456250/pexels-photo-8456250.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1430672/pexels-photo-1430672.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2404667/pexels-photo-2404667.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3925081/pexels-photo-3925081.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
