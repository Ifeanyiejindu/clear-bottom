import React from "react";
import {
  TiSocialFacebook,
  TiSocialInstagram,

  // TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

import { logo } from "../../../assets/images";
import { Link } from "react-router-dom";

const Footer = () => {
  const images = [1, 2, 3, 4, 5, 6];
  return (
    <footer className=" py-[100px] bg-black text-white  text-left">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start max-w-[1240px] md:mx-auto mx-4">
        <div>
          <div>
            <img
              className="object-contain w-[5rem] mb-8"
              src={logo}
              alt="avowal logo"
            />
          </div>
          <p className="max-w-[250px] mb-8 text-[14px] font-normal">
            Immerse yourself in crystal clear waters on our paddle board and
            Clear Bottom kayak tours.
          </p>
          <div className="flex justify-items-start space-x-3">
            <a
              href="https://www.facebook.com/clearbottomadventures/"
              target="_blank"
              rel="noreferrer"
            >
              <TiSocialFacebook className="bg-mustardColor" size={25} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/clearbottomadventures/"
            >
              <TiSocialInstagram className="bg-mustardColor" size={25} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCTLjqiEXo2aZYbSSyMuo6Lw"
            >
              <TiSocialYoutube className="bg-mustardColor" size={25} />
            </a>
            {/* <TiSocialTwitter className="bg-mustardColor" size={25} /> */}
          </div>
        </div>
        <div className="space-y-3">
          <h5 className="mb-8 text-20px mt-8 md:mt-0 font-medium">Tours</h5>
          <p className=" text-[16px] text-[#DFDFDF] font-light">
            <Link to={"/tours"}>Mangrove Tour</Link>
          </p>
          <p className="text-[16px] text-[#DFDFDF] font-light">
            <Link to={"/tours"}> Mangrove & Iguana Beach</Link>
          </p>
          <p className="text-[16px] text-[#DFDFDF] font-light">
            <Link to={"/tours"}> Paddle Board</Link>
          </p>
          <p className="text-[16px] text-[#DFDFDF] font-light">
            <Link to={"/tours"}> Ariel Photography</Link>
          </p>
        </div>
        <div className="space-y-3">
          <h5 className="mb-8 text-20px mt-8 md:mt-0 font-medium">
            Useful Links
          </h5>
          <p className=" text-[16px] text-[#DFDFDF] font-light">
            <Link to={"/about"}>About us</Link>
          </p>
          <p className="text-[16px] text-[#DFDFDF] font-light">
            <Link to={"/contact"}>Contact Us</Link>
          </p>
          <p className="text-[16px] text-[#DFDFDF] font-light">
            Privacy Policy
          </p>
          <p className="text-[16px] text-[#DFDFDF] font-light">
            Terms and Condition
          </p>
        </div>
        <div>
          <h5 className="mb-8 text-20px mt-8 md:mt-0 font-medium">
            Recent Posts
          </h5>

          <div className=" grid grid-cols-3 gap-4 ">
            {images.map((image, index) => {
              return (
                <img
                  key={index}
                  className="h-[70px] w-[71px] rounded "
                  src="https://images.unsplash.com/photo-1496693623174-5f1de03f1b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
