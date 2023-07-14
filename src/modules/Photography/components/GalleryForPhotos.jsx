import React from "react";
import {
  photo,
  photo11,
  photo12,
  photo14,
  photo16,
  photo2,
  photo3,
  photo31,
} from "../../../assets/images";

const GalleryForPhotos = () => {
  const images = [
    photo3,
    photo2,
    photo,
    photo11,
    photo12,
    photo14,
    photo16,
    photo31,
  ];
  return (
    <section>
      <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div class="grid grid-cols-2 col-span-2 gap-4 lg:grid-cols-4">
          {images.map((image) => {
            return (
              <figure key={image.key} class="">
                <img
                  class="w-full bg-gray-200 aspect-square object-cover"
                  src={image}
                  alt=""
                  width="1310"
                  height="873"
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryForPhotos;
