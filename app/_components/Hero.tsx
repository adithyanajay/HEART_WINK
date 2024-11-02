import React from "react";
import { heart_middle, heart_right, logo } from "../_assets/index.js";
import Image from "next/image";
function Hero() {
  return (
    <div className="Hero pb-20 md:pb-32 lg:pb-48 pt-10 min-w-full md:ml-10 overflow-hidden relative">
      <div className="hero-content ">
        <div className="logo w-4/12 max-w-72 m-auto md:m-0">
          <Image src={logo} alt="logo" className="w-full " />
        </div>
        <div className="logo flex flex-col gap-0 text-5xl md:text-7xl lg:8xl leading-none m-auto ">
          <span className="text-white m-auto md:m-0">HEART</span>
          <span className="text-red_sec  m-auto md:m-0">WINK</span>
        </div>
        <p className="text-white md:right-72 md:bottom-40 lg:bottom-72  md:absolute z-10 text-center mt-10 text-sm md:text-lg">-Love insights and pranks, <br></br>all in one place! </p>
      </div>

      <div className="hidden md:block logo w-6/12 max-w-7xl  md:m-0 absolute top-20 right-0  overflow-hidden">
        <Image src={heart_middle} alt="logo" className="w-full hidden xl:block" />
        <Image src={heart_right} alt="logo" className="w-full hidden md:block xl:hidden" />
      </div>
    </div>
  );
}

export default Hero;
