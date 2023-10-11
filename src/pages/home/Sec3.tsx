import React from "react";
import OfferingCard from "@/components/OfferingCard";
import { playfair, inter } from ".";

export const Sec3 = () => {
  return (
    <section className="flex flex-col px-[120px] py-[88px]">
      <span className="flex flex-col">
        <h1
          className={
            "text-[48px] font-medium leading-[64px] " + ` ${playfair.className}`
          }
        >
          Ecosystem Offerings
        </h1>
        <p
          className={
            "mt-[24px]  text-[18px] text-[#6B6B7F] font-normal leading-[27px]" +
            ` ${inter.className}`
          }
        >
          Simple step-by-step guide on how businesses can get listed and earn
          reviews to access Truts Packages. Simple step-by-step guide on how
          businesses can get listed and earn reviews to access Truts Packages.
        </p>
      </span>
      <div className="f mt-[80px] flex w-full flex-wrap gap-x-2 gap-y-5">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((card, key) => {
          return <OfferingCard key={key + "offeringCard"} />;
        })}
      </div>
      <button className="mx-auto mt-[62px] text-[18px] px-[24px] py-[10px] bg-black text-white rounded-[8px]">
        Explore 100+ Offerings
      </button>
    </section>
  );
};

export default Sec3;
