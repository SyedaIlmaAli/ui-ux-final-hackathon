import React from "react";
import { Button } from "./ui/button";
import Image from "next/image"

const Hero = () => {
  return (
    <div>
    <div className="overflow-x-hidden lg:block hidden">
    <div className="bg-myDarkBlue my-10 max-w-screen flex gap-20 text-white">
      <div className="space-y-3 py-40 px-10">
        <h5 className="text-[32px] max-w-[513px]">The furniture brand for the future, with timeless designs</h5>
        <Button variant="secondary" className="bg-[#F9F9F926] hover:text-black text-white">View Collection</Button>
        <div className="pt-24">
        <p className="w-[602px] text-[18px]">
          A new era in eco friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors and a beautiful way to
          display things digitally using modern web technologies.
        </p>
      </div>
      </div>
      <div className="md:block hidden">
        <Image src={"/ui-chair.png"} alt="chair" width={520} height={584}/>
      </div>
    </div>
    </div>
    <div className="overflow-x-hidden lg:hidden block">
    <div className="bg-myDarkBlue my-10 max-w-screen flex items-center flex-col gap-20 text-white">
      <div className="space-y-3 py-40 px-10">
        <h5 className="text-[32px] max-w-[400px]">The furniture brand for the future, with timeless designs</h5>
        
        <div className="pt-24">
        <p className="max-w-[400px] text-[18px]">
          A new era in eco friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors and a beautiful way to
          display things digitally using modern web technologies.
        </p>
        <Button variant="secondary" className="bg-[#F9F9F926] text-white w-full mt-8">View Collection</Button>
      </div>
      </div>
      <div className="md:block hidden">
        <Image src={"/ui-chair.png"} alt="chair" width={520} height={584}/>
      </div>
    </div>
    </div>

    </div>
  );
};

export default Hero;
