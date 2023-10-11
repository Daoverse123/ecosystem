import React from "react";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";
import OfferingCard from "@/components/OfferingCard";
import Footer from "@/components/Footer";

//fonts
export const inter = Inter({ subsets: ["latin"] });
export const playfair = Playfair_Display({ subsets: ["latin"] });

function Discover() {
  return (
    <div className="flex flex-col w-full">
      <Nav />
      <section className="flex flex-col w-full px-[120px] mb-[180px]">
        <span className="mt-[50px]">
          <h1
            className={
              "text-[48px] font-medium leading-[64px]" +
              ` ${playfair.className}`
            }
          >
            Ecosystem Offerings
          </h1>
        </span>
        <div className="flex mt-[32px] flex-wrap w-[95%] gap-x-[12px] gap-y-[16px]">
          {[...new Array(14).fill("Tag Type")].map((ch, idx) => {
            return <Chip selected={idx < 3} name={ch} key={"fil" + idx} />;
          })}
        </div>
        {/* results */}
        <section>
          <p className="text-[18px] text-[#6B6B7F] mt-[60px]">
            Showing 20 results
          </p>
          <div className="flex flex-wrap gap-x-[10px] gap-y-[20px]">
            {[...new Array(20).fill("Tag Type")].map((ch, idx) => {
              return <OfferingCard key={"ofc" + idx} />;
            })}
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

const Chip = ({ selected, name }: { selected?: boolean; name: string }) => {
  if (selected) {
    return (
      <span className="bg-black gap-[8px] text-white flex justify-center items-center px-[24px] py-[10px] border-[1px] border-black rounded-[24px]">
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          fill="none"
          viewBox="0 0 14 15"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.313"
            d="M10.938 3.563l-7.876 7.874M10.938 11.438L3.061 3.561"
          ></path>
        </svg>
      </span>
    );
  }

  return (
    <span className="flex justify-center items-center px-[24px] py-[10px] border-[1px] border-black rounded-[24px]">
      {name}
    </span>
  );
};

export default Discover;
