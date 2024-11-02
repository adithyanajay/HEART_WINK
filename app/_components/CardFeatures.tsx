import Image from "next/image";
import Link from "next/link";
import React from "react";
import { double_heart_middle } from "../_assets";

interface CardFeaturesProps {
  title: string;
  sub_text: string;
  route: string;
}

function CardFeatures({ title, sub_text, route }: CardFeaturesProps) {
  return (
    <Link href={route}>
      <div className="card min-w-9/12 max-w-52:  h-32 relative bg-red_main shadow-sm shadow-gray-700/30 hover:scale-110 transition-all mx-auto">
        <div className="card-features-icon w-2/4 absolute top-0 left-0 z-0">
          <Image src={double_heart_middle} alt="logo" className="w-full" />
        </div>
        <div className="card-features-content relative z-10 flex flex-col justify-center pl-5">
          <h3 className="text-white uppercase text-lg md:text-2xl font-normal tracking-widest">
            {title}
          </h3>
          <p className="text-white mt-4 text-xs">{sub_text}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardFeatures;
