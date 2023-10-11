import React from "react";
import OfferingCard from "@/components/OfferingCard";
import { playfair, inter } from ".";

export function Sec1() {
  return (
    <section className="flex w-full px-[120px] pt-[120px] pb-[160px] justify-center">
      <div className="flex flex-col max-w-[730px] w-[477px] h-min">
        <h1
          className={
            "text-[48px] font-medium leading-[64px]" + ` ${playfair.className}`
          }
        >
          What Are Truts Ecosystem offerings?
        </h1>
        <p
          className={
            "text-[#6B6B7F] text-[18px] font-normal leading-[30px] mt-[40px]" +
            ` ${inter.className}`
          }
        >
          What truts service offerings is What truts service offerings is What
          truts service offerings is What truts service offerings is What truts
          service offerings is
        </p>

        <button className="mt-[24px] w-[192px] text-[18px] px-[24px] py-[10px] bg-black text-white rounded-[8px]">
          Explore Services
        </button>
      </div>
      <div className="flex flex-col ml-[195px] mr-[80px] h-min relative">
        <span
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
        </span>
      </div>
    </section>
  );
}

export default Sec1;
