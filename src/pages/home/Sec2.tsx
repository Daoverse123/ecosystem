import React from "react";
import stepsAssets from "../../components/stepsAssets";
import { playfair, inter } from ".";

export function Sec2() {
  return (
    <section className="flex flex-col py-[80px]">
      <span className="flex flex-col items-center">
        <h1
          className={
            "text-[48px] font-medium leading-[80px] text-center" +
            ` ${playfair.className}`
          }
        >
          How to Access Truts Offerings
        </h1>
        <p
          className={
            "max-w-[558px] text-[18px] text-[#6B6B7F] font-normal text-center leading-[27px]" +
            ` ${inter.className}`
          }
        >
          Simple step-by-step guide on how businesses can get listed and earn
          reviews to access Truts Packages.
        </p>
      </span>
      <div className="flex mt-[100px] mx-auto gap-[40px]">
        {stepsAssets.map((step, key) => {
          return (
            <span key={"step" + key} className="w-[266px]">
              {step.icon}
              <h2
                className={
                  "mt-[40px] text-[32px] font-medium leading-4" +
                  ` ${playfair.className}`
                }
              >
                {step.title}
              </h2>
              <p className="mt-[24px] text-[#6B6B7F] leading-[24px]">
                {step.desc}
              </p>
            </span>
          );
        })}
      </div>
    </section>
  );
}

export default Sec2;
