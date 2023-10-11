import React from "react";
import { playfair, inter } from ".";

export function Hero() {
  return (
    <section className="flex flex-col w-full h-screen max-[1200px]:h-max hero-bg justify-center items-center pt-[20px]">
      <div className="flex flex-col items-center max-w-[730px]">
        <h1
          className={
            "text-[72px] max-[1200px]:text-[64px] max-[1200px]:mt-[52px] max-[1200px]:w-[90%] font-medium leading-[80px] text-center" +
            ` ${playfair.className}`
          }
        >
          Unlock Exclusive Benefits with Truts Ecosystem Offerings!
        </h1>
        <p
          className={
            "text-[20px] font-normal text-center leading-[30px] mt-[24px] max-[1200px]:text-[16px]" +
            ` ${inter.className}`
          }
        >
          Get listed and enjoy a world of discounts and opportunities!
        </p>
        <span className="flex gap-4 mt-[40px] max-[1200px]:mt-[28px]">
          <button className="text-[18px] max-[1200px]:text-[14px] px-[24px] py-[10px] bg-white rounded-[8px]">
            Explore Packages
          </button>
          <button className="text-[18px] max-[1200px]:text-[14px] px-[24px] py-[10px] bg-black text-white rounded-[8px]">
            Get Listed
          </button>
        </span>
      </div>
      <div className="flex flex-col items-center mt-[98px] max-[1200px]:mt-[50px] max-[1200px]:mb-[46px] w-full overflow-x-hidden">
        <p className="text-[16px] max-[1200px]:text-[14px] text-[#78727F]">
          Companies that Truts us
        </p>
        <span className="flex gap-[80px] mt-[20px]">
          {[1, 2, 3, 4, 5].map((ele, key) => {
            return (
              <h1 className="text-[#8e8b92] font-extrabold" key={key + "c"}>
                Company
              </h1>
            );
          })}
        </span>
      </div>
    </section>
  );
}

export default Hero;
