import React from "react";
import OfferingCard from "@/components/OfferingCard";
import { playfair, inter } from ".";

import OfferStack from "./OfferStack";

export function Sec1() {
  return (
    <section className="flex max-[1200px]:max-w-[400px] max-[1200px]:mx-auto  w-full px-[120px] max-[1200px]:px-[29px] pt-[120px] max-[1200px]:pt-[60px] pb-[160px] max-[1200px]:pb-[58px] justify-center max-[1200px]:flex-col-reverse">
      <div className="flex flex-col max-w-[730px] w-[477px] max-[1200px]:w-full h-min">
        <h1
          className={
            "max-[1200px]:hidden text-[48px] font-medium leading-[64px]" +
            ` ${playfair.className}`
          }
        >
          What Are Truts Ecosystem offerings?
        </h1>
        <p
          className={
            "max-[1200px]:max-w-[298px] text-[#6B6B7F] text-[18px] max-[1200px]:text-[16px] font-normal leading-[30px] mt-[40px] max-[1200px]:mt-[0px]" +
            ` ${inter.className}`
          }
        >
          Your ultimate web3 marketplace to get the best discounts on the best
          products and services
        </p>

        <button className="mt-[24px] w-[192px] text-[18px] max-[1200px]:text-[14px] px-[24px] py-[10px] bg-black text-white rounded-[8px]">
          Explore Services
        </button>
      </div>
      <div className="flex flex-col ml-[195px] max-[1200px]:ml-0 mr-[80px] max-[1200px]:mr-0  h-min relative max-[1200px]:scale-[70%] max-[1200px]:translate-x-[-10%]">
        <OfferStack />
      </div>
      <h1
        className={
          "hidden max-[1200px]:block text-[32px] font-medium leading-[40px]" +
          ` ${playfair.className}`
        }
      >
        What Are Truts Ecosystem offerings?
      </h1>
    </section>
  );
}

{
  /* <span
          style={{
            transform: "scale(1.25)",
          }}
          className="flex"
        >
          <OfferingCard />
        </span>
        <span
          style={{
            transform: "scale(1)",
          }}
          className="flex absolute bottom-[-35%] right-[-50%]"
        >
          <OfferingCard />
        </span> */
}

export default Sec1;
