import React from "react";
import Rating from "../../../constants/generalComponents/Rating";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  const Cards = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img
          className="h-[455px] w-[370px] rounded object-cover"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt="/"
        />

        <div className="w-[97%] md:w-[624px] h-[364px] rounded mx-auto md:mx-0 p-16 mt-[-100px] md:mt-0  ml-0 md:ml-[-50px] bg-[#191C19] flex flex-col justify-center items-start text-white">
          <p className="text-18px text-left mb-[30px]">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when
          </p>
          <Rating rating={5} />
          <p className="font-medium text-goldenBrown">Carlton Trapp</p>
        </div>
      </div>
    );
  };

  return (
    <div
      className=" w-full  bg-center bg-cover "
      style={{
        backgroundPositionY: "top",
        backgroundPositionX: "left",
        backgroundSize: "cover",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1516409134144-dd775651d24d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1333&q=80")',
      }}
    >
      <div className="text-center py-28 flex flex-col justify-center bg-blend-overlay bg-gradient-to-b from-backgroundGreen/50 to-highlightGreen w-full h-full">
        <h2 className="text-[45px] leading-[50px] font-semibold mb-[80px] text-white z-10">
          What The People Thinks About Us
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container max-w-full"
        >
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>
          <SwiperSlide>
            <Cards />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow text-goldenBrown">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow text-goldenBrown">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
