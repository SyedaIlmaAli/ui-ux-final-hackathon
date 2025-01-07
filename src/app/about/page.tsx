"use client";
import Image from "next/image";
import Link from "next/link";
import DifferentBrand from "@/components/DifferentBrand";
import ClubJoin from "@/components/ClubJoin";

const About = () => {
  return (
    <div>

      <div className="bg-[#ffffff] h-52 font-[clash-display] py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center px-6 md:px-12 h-full">
          {/* Left Side: Heading */}
          <div className="w-full md:w-1/2 flex justify-start items-center mb-4 md:mb-0 md:ml-24">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-black leading-tight">
              A brand built on the love of craftsmanship, <br /> quality, and
              outstanding customer service
            </h1>
          </div>
          {/* Right Side: Button */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
          <Link href="/pages/product">

            <button
              onClick={() => console.log("View our products")}
              className="inline-flex items-center text-black w-40 h-12 bg-[#f9f9f9] mt-6 sm:mt-8 md:mt-12 py-3 sm:py-4 mb-10 md:mb-20 focus:outline-none hover:bg-purple-900 hover:text-white p-4 text-sm sm:text-base"
            >
              View our products
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff] px-6 md:px-28 font-[Clash-Display]">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-6 md:space-y-0">
          {/* Left Side: Content */}
          <div className="bg-[#2a254b] h-[478px] w-full md:w-[634px]">
            <div className="text-white px-6 md:px-20 py-10 md:py-20">
              <div className="text-2xl sm:text-3xl mb-2">
                It started with a small idea
              </div>
              <div className="text-sm sm:text-base">
                <p>
                  A global brand with local beginnings, our story began in a
                  small studio in South London in early 2014
                </p>
              </div>
              <button
                onClick={() => console.log("View collection")}
                className="inline-flex items-center text-white h-12 bg-[#f9f9f948] mt-12 sm:mt-16 md:mt-52 py-5 mb-10 md:mb-20 focus:outline-none hover:bg-purple-900 p-4 text-sm sm:text-base"
              >
                View collection
              </button>
            </div>
          </div>
          {/* Right Side: Image */}
          <div className="w-full md:w-[534px] h-[478px]">
            <Image
              src="/aboutimg1.jpg"
              alt="About Image 1"
              className="w-full h-full object-cover"
              width={500}
              height={100}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#ffffff] py-14 font-[Clash-Display]">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="w-full">
              <Image
                src="/about2.jpg"
                alt="About Image 2"
                className="w-full h-[603px] object-cover"
                width={720}
                height={603}
              />
            </div>
            {/* Content */}
            <div className="bg-[#f9f9f9] w-full md:w-[920px] px-6 md:px-20 py-10 md:py-20">
              <h1 className="text-xl sm:text-2xl md:text-[24px] text-[#2a254b] mb-3">
                Our service isn&apos;t just personal, it&apos;s actually hyper personally
                exquisite
              </h1>

              <div className="text-[#505977]">
                <p className="mb-4">
                  When we started Avion, the idea was simple. Make high quality
                  furniture affordable and available for the mass market.
                </p>
                <p>
                  Handmade, and lovingly crafted furniture and homeware is what
                  we live, breathe and design, so our Chelsea boutique became
                  the hotbed for the London interior design community.
                </p>
              </div>
              <button
                onClick={() => console.log("Get in touch")}
                className="inline-flex items-center text-[#2A254B] h-12 bg-white mt-12 sm:mt-16 md:mt-48 py-5 focus:outline-none hover:bg-purple-200 p-4 text-sm sm:text-base"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DifferentBrand/>
      </div>
      <div>
        <ClubJoin/>
      </div>

      
    </div>
  );
};
export default About;