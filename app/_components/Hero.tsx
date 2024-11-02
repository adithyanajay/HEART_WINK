import React from "react";
import { heart_middle, heart_right, logo } from "../_assets/index.js";
import Image from "next/image";

function Hero() {
  return (
    <div className="Hero relative overflow-hidden pt-10 pb-20 md:pb-32 lg:pb-48 min-w-full md:ml-10">
      <div className="hero-content flex flex-col items-center md:items-start text-center md:text-left gap-4">
        
    
        <div className="w-3/4 max-w-xs  mx-auto md:mx-0">
          <Image src={logo} alt="Heart Wink Logo" className="w-full" />
        </div>

     
        <div className="flex flex-col gap-0 leading-none text-5xl md:text-7xl lg:text-8xl">
          <span className="text-white">HEART</span>
          <span className="text-red_sec">WINK</span>
        </div>

      </div>

     
      <div className="absolute top-20 right-0 w-5/6 max-w-4xl overflow-hidden">
        <Image src={heart_middle} alt="Decorative Heart" className="w-full hidden xl:block" />
        <Image src={heart_right} alt="Decorative Heart" className="w-full hidden md:block xl:hidden" />
      </div>
    </div>
  );
}

export default Hero;
