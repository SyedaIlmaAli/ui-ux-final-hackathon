import React from "react";
import { Button } from "./ui/button";

const ClubJoin = () => {
  return (
    <div className="bg-[#F9F9F9] flex items-center h-[481px] justify-center">
      <div className="bg-white w-[1273px] h-[364px] flex gap-10 justify-center items-center flex-col">
        <h2 className="text-[20px] md:text-[36px] text-myDarkBlue">Join the club and get the benefits</h2>
        <p className="text-[14px] md:text-base text-myDarkBlue max-w-[329px] md:max-w-[470px] md:text-center">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <div className="flex gap-[10px]">
            <input type="email" placeholder="your@email.com" className="md:w-[470px] w-[224px] h-[52px]"/>
            <Button className="bg-myDarkBlue rounded-none py-4 px-8 h-[56px]">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default ClubJoin;
