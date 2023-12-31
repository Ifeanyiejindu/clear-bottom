import React, { useState } from "react";
import { logo } from "../../../assets/images";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const location = useLocation();

  const isMobile = () => {
    setMobile(!mobile);
  };

  return (
    <header className="mb-[-100px] z-50">
      <div className="flex h-24 px-5 max-w-[1240px] justify-between items-center mx-auto text-white">
        <img className="object-contain w-[5rem]" src={logo} alt="avowal logo" />

        <ul className=" hidden md:flex text-[14px] xl:text-[16px] ">
          <li
            className={`p-4 hover:text-mustard ${
              location.pathname === "/" ? "text-mustard" : "text-white"
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`p-4 hover:text-mustard ${
              location.pathname === "/about" ? "text-mustard" : "text-white"
            }`}
          >
            <Link to="/about">About Us</Link>
          </li>
          <li
            className={`p-4 hover:text-mustard ${
              location.pathname === "/tours" ? "text-mustard" : "text-white"
            }`}
          >
            {" "}
            <Link to={"/tours"}>Book Tours</Link>
          </li>
          <li
            className={`p-4 hover:text-mustard ${
              location.pathname === "/photography"
                ? "text-mustard"
                : "text-white"
            }`}
          >
            {" "}
            <Link to={"/photography"}>Book Ariel Photography</Link>
          </li>

          <li
            className={`p-4 hover:text-mustard ${
              location.pathname === "/contact" ? "text-mustard" : "text-white"
            }`}
          >
            {" "}
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div
        onClick={isMobile}
        className="fixed md:hidden right-0 top-5 mr-8 z-50"
      >
        {mobile ? (
          <AiOutlineClose size={20} color="white" />
        ) : (
          <AiOutlineMenu size={20} color="white" />
        )}
      </div>
      <ul
        onClick={isMobile}
        className={`fixed md:hidden z-50 text-white  ${
          mobile ? "left-0" : "left-[-100%]"
        } top-0 w-[60%] h-full bg-cardBackground text-whiteColor ease-in-out duration-500`}
      >
        <div className="">
          <img
            className="object-contain w-[8rem] mt-16 ml-8"
            src={logo}
            alt="avowal logo"
          />
        </div>
        <li className="p-4 mt-8 ml-5 hover:text-mustard">
          <Link to={"/"}>Home Page</Link>
        </li>
        <li className="p-4 ml-5 hover:text-mustard">
          <Link to={"/about"}>About Us</Link>
        </li>
        <li className="p-4 ml-5 hover:text-mustard">
          <Link to={"/tours"}>Book Tours</Link>
        </li>
        <li className="p-4 ml-5 hover:text-mustard">
          <Link to={"/photography"}>Book Ariel Photography</Link>
        </li>
        <li className="p-4 ml-5 hover:text-mustard">
          <Link to={"/contact"}>Contact Us</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
