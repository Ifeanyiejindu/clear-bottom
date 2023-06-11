import React from "react";

const Gallery = () => {
  return (
    <section className="w-full gradientbackground items-center flex flex-col justify-center">
      <div className="max-w-[1240px] py-32 mx-auto">
        <div className="flex ml-3  flex-col md:flex-row justify-between items-start md:items-center mb-20 w-[90%]">
          <h3 className="text-[40px] leading-10 font-semibold text-white">
            Gallery
          </h3>
          <button className="bg-gradient-to-b from-brightMustard to-mustard border-highlightGreen hover:text-gray-600 text-black text-16px mt-4 md:mt-0 py-1 px-3 rounded-xs">
            View More
          </button>
        </div>

        <div className="columns-2 md:columns-4 space-y-4 space-x-4">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt=""
          />
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt=""
          />
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            alt=""
          />
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
          />
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            alt=""
          />
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
