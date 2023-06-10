import React from "react";

const PhotoSection = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-4 w-full md:w-auto max-w-full md:max-w-[1240px] mx-auto pb-32">
      <img
        className="w-[32%] object-cover h-[500px] rounded-xl"
        src="https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        alt=""
      />
      <img
        className="w-[32%] object-cover h-[500px] rounded-xl"
        src="https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        alt=""
      />
      <img
        className="w-[32%] object-cover h-[500px] rounded-xl"
        src="https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        alt=""
      />
    </div>
  );
};

export default PhotoSection;
