import React from "react";

const GalleryForPhotos = () => {
  const images = [
    "https://images.pexels.com/photos/5006976/pexels-photo-5006976.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/4652070/pexels-photo-4652070.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/4601397/pexels-photo-4601397.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/4368426/pexels-photo-4368426.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/4601716/pexels-photo-4601716.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3278939/pexels-photo-3278939.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/8874851/pexels-photo-8874851.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/14930522/pexels-photo-14930522.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <section>
      <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div class="grid grid-cols-2 col-span-2 gap-4 lg:grid-cols-4">
          {images.map((image) => {
            return (
              <figure key={image.key} class="">
                <img
                  class="w-full bg-gray-200"
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
