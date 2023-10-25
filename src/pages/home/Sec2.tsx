import React from "react";
import stepsAssets from "../../components/stepsAssets";
import { playfair, inter } from ".";

export function Sec2() {
  return (
    <section className="flex flex-col py-[80px] max-[1200px]:py-[42px]">
      <span className="flex flex-col items-center">
        <h1
          className={
            "text-[48px] max-[1200px]:text-[32px] font-medium leading-[80px] max-[1200px]:leading-[40px] text-center" +
            ` ${playfair.className}`
          }
        >
          How to Access Truts Offerings
        </h1>
        <p
          className={
            "max-w-[558px] max-[1200px]:max-w-[332px] max-[1200px]:mt-3  text-[18px] max-[1200px]:text-[16px] text-[#6B6B7F] font-normal text-center leading-[27px]" +
            ` ${inter.className}`
          }
        >
          Join us in a simple 3-step process
        </p>
      </span>
      <div className="flex max-[1200px]:flex-col mt-[100px] max-[1200px]:mt-[45px] mx-auto gap-[40px]">
        {stepsAssets.map((step, key) => {
          return (
            <span
              key={"step" + key}
              className="w-[266px] max-[1200px]:flex-col max-[1200px]:flex max-[1200px]:items-center"
            >
              {step.icon}
              <h2
                className={
                  "mt-[40px] text-[32px] max-[1200px]:text-[24px] font-medium leading-4" +
                  ` ${playfair.className}`
                }
              >
                {step.title}
              </h2>
              <p className="mt-[24px] max-[1200px]:text-[14px] max-[1200px]:max-w-[230px] text-[#6B6B7F] leading-[24px] max-[1200px]:text-center">
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
