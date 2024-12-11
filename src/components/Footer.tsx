import React from "react";
import { Button } from "./ui/button";
import { FaInstagram, FaLinkedin, FaPinterest, FaSkype } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const Footer = () => {
  const Menudata = [
    "New arrivals",
    "Best sellers",
    "Recently viewed",
    "Popular this week",
    "All products",
  ];

  const CategoriesData = [
    "Crockery",
    "Furniture",
    "Homeware",
    "Plant pots",
    "Chairs",
    "Crockery",
  ];

  const ourCompanyData = [
    "About us",
    "Vacancies",
    "Contact us",
    "Privacy",
    "Returns policy",
  ];

  return (
    <div className="bg-myDarkBlue ">
      <div className=" border-b-2 border-white">
        <div className="grid grid-cols-2 py-8 px-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col gap-3 ">
            <h2 className="text-base text-white">Menu</h2>
            {Menudata.map((item, i) => {
              return (
                <ul key={i}>
                  <li className="text-white hover:underline text-sm cursor-pointer">{item}</li>
                </ul>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 ">
            <h2 className="text-base text-white">Categories</h2>
            {CategoriesData.map((item, i) => {
              return (
                <ul key={i}>
                  <li className="text-white hover:underline text-sm cursor-pointer">{item}</li>
                </ul>
              );
            })}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-base text-white">Our Company</h2>
            {ourCompanyData.map((item, i) => {
              return (
                <ul key={i}>
                  <li className="text-white hover:underline text-sm cursor-pointer">{item}</li>
                </ul>
              );
            })}
          </div>
          <div className="mt-4">
          <p className="text-white text-base">Join our mailing list</p>
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="md:w-[627px] my-5 bg-white/15 w-[127px] h-[40px] md:h-[56px]"
            />
            <Button className="bg-white w-[40px] text-myDarkBlue hover:text-white rounded-none my-5 px-8 h-[40px] md:h-[56px] ">
              Sign up
            </Button>
       </div>
        </div>
        </div>
      </div>
      <div className="flex justify-between px-7 py-8">
        <p className="text-white text-center text-sm">Copyright 2022 Avion LTD</p>
        <div className="hidden md:block">

        <ul className="flex gap-3">
            <li><FaLinkedin className="text-white w-6 h-6 hover:cursor-pointer hover:text-blue-500 duration-300"/></li>
            <li><IoLogoFacebook className="text-white  w-6 h-6 hover:cursor-pointer hover:text-blue-500"/></li>
            <li><FaInstagram className="text-white  w-6 h-6 hover:cursor-pointer hover:text-pink-500 duration-300"/></li>
            <li><FaSkype className="text-white  w-6 h-6 hover:cursor-pointer hover:text-blue-500 duration-300"/></li>
            <li><FaPinterest className="text-white  w-6 h-6 hover:cursor-pointer hover:text-red-500 duration-300"/></li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
