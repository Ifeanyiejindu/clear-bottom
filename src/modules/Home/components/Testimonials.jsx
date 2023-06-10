import React from "react";
import Rating from "../../../constants/generalComponents/Rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Cards = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img
          className="h-[455px] w-[370px] rounded-lg object-cover"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />

        <div className="w-[97%] md:w-[624px] h-[364px] rounded-md mx-auto md:mx-0 p-16 mt-[-100px] md:mt-0  ml-0 md:ml-[-50px] bg-white flex flex-col justify-center items-start">
          <p className="text-20px mb-[30px]">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when
          </p>
          <Rating rating={5} />
          <p className="font-medium">Carlton Trapp</p>
        </div>
      </div>
    );
  };

  return (
    <div
      className=" w-full  bg-center bg-cover "
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
      }}
    >
      <div className="text-center py-28 flex flex-col justify-center bg-white bg-opacity-95 w-full h-full">
        <h2 className="text-[45px] leading-[50px] font-semibold mb-[80px] text-black z-10">
          What The People Thinks About Us
        </h2>
        <Slider {...settings}>
          {/* {fakeTestimonies.map((testimony) => {
          return <Cards key={testimony} />;
        })} */}
          <Cards />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
