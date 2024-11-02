import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-white w-full h-full rounded-tl-3xl rounded-tr-3xl flex justify-around items-center">
      <div className="div">
        <div className="flex flex-col gap-0 leading-none text-4xl md:text-5xl lg:text-6xl p-20 ">
          <span className="text-red_main  ">HEART</span>
          <span className="text-red_main ">WINK</span>
          <p className="text-sm mt-10">
            By team <span className="text-blue-700">Miko</span>
          </p>
        </div>
      </div>

      <div className="">
        <Link href="https://github.com/adithyanajay/heart_wink">
         <p className="text-red_main underline">Github Repo</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
