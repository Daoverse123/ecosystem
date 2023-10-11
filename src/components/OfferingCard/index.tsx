import React from "react";

import { Playfair_Display } from "next/font/google";
export const playfair = Playfair_Display({ subsets: ["latin"] });

function OfferingCard() {
  return (
    <div className="overflow-hidden relative bg-[#FFF] px-[33px] py-[22px] rounded-[12px] flex flex-col w-[288px] h-[318px] border-[1px] border-[#CACDD5]">
      <span className="text-[12.6px] h-[34.7px]  rounded-bl-[14px] justify-center items-center absolute right-0 top-0 flex w-[108px] grad text-white">
        284 Claims
      </span>
      <picture>
        <img className="w-[60px] h-[60px]" src="/placeholder.png" alt="" />
      </picture>
      <h1
        className={"text-[20px] mt-[16px] leading-3" + ` ${playfair.className}`}
      >
        Ecosystem Offering 1
      </h1>
      <p className="text-[12px] text-[#747C90] mt-[20px] leading-4">
        A small subtext to tell about the Offering A small subtext to tell about
        the Offering A small subtext to tell about the Offering
      </p>
      <h3 className="text-[16px] mt-[20px] text-[#3065F3]">Credits: $5000</h3>
      <button className="mt-[16px] w-[115px] text-[12px] border-[#121212] rounded-[8px] border-[1px] px-[10px] py-[10px]">
        Claim
      </button>
    </div>
  );
}

export default OfferingCard;
