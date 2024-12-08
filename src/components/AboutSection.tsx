import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center gap-8">
      <div className="max-w-[536px] md:ml-24 ml-4 mt-20 flex flex-col gap-8">
        <h2 className="text-[24px] text-myDarkBlue leading-[33.6px]">
          From a studio in London to a global brand with over 400 outlets
        </h2>
        <p className="text-myDarkBlue text-[16px]">
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market.
        </p>
        <p className="text-myDarkBlue text-[16px]">
          Handmade, and lovingly crafted furniture and homeware is what we live,
          breathe and design so our Chelsea boutique become the hotbed for the
          London interior design community.
        </p>
        <Button variant="secondary" className="bg-[#F9F9F9] md:w-[150px] h-[56px] mt-14">Get in touch</Button>
      </div>
      <div>
        <Image src={"/Image.png"} alt="Image" width={720} height={603}/>
      </div>
    </div>
  );
};

export default AboutSection;
