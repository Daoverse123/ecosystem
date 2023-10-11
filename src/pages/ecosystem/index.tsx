import React from "react";
import { Inter } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });

import { Playfair_Display } from "next/font/google";
export const playfair = Playfair_Display({ subsets: ["latin"] });

import Nav from "@/components/Nav";
import OfferingCard from "@/components/OfferingCard";

import socialAssets from "../../components/socialAssets";
import Footer from "@/components/Footer";

function Ecosystem() {
  return (
    <div className={`flex flex-col w-full ${inter.className}`}>
      <Nav />
      {/* Banner */}
      <div className="fles w-full h-[252px] hero-bg"></div>
      <div className="flex px-[120px] gap-[81px]">
        {/* Info Sec */}
        <section className="flex flex-col relative top-[-40px]">
          <picture>
            <img
              className="w-[160px] h-[160px]"
              src="/placeholder.png"
              alt=""
            />
          </picture>
          <button className="mt-[24px] w-[160px] text-[18px] py-[10px] bg-black text-white rounded-[8px]">
            Claim Credits
          </button>
          <div className="flex flex-col gap-[23.3px] mt-[37px]">
            {socialAssets.map((sc, key) => {
              return (
                <span className="flex items-center" key={"sc" + key}>
                  {sc.icon}
                  <h1
                    key={"cl" + key}
                    className={`border-b-[1px] text-[20.5px] ml-[17.5px] mr-[4px]`}
                    style={{
                      color: sc.fill,
                      borderColor: sc.fill,
                    }}
                  >
                    {sc.social}
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M6.5 18L18.5 6"
                      stroke={sc.fill}
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.75 6H18.5V15.75"
                      stroke={sc.fill}
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              );
            })}
          </div>
        </section>
        {/* description */}
        <section className="mt-[72px]">
          {/* Bread crums */}
          <span className="flex gap-[14px] items-center">
            <h4 className="text-[20px] text-[#8C93A3]">Offerings</h4>
            <h4 className="text-[20px]">{">"}</h4>
            <h4 className="text-[20px]">Product One</h4>
          </span>
          <h1 className={`${playfair.className} text-[48px] mt-[27px]`}>
            Product Name 1
          </h1>
          <p className="text-[#6B6B7F] mt-[32px]">
            What truts service offerings is What truts service offerings is What
            truts service offerings is What truts service offerings is What
            truts service offerings is
          </p>
          <h1 className={`mt-[32px]`}>Ecosystem Offerings</h1>
          <p className="text-[#6B6B7F] mt-[12px]">
            Simple step-by-step guide on how businesses can get listed and earn
            reviews to access Truts Packages. Simple step-by-step guide on how
            businesses can get listed and earn reviews to access Truts Packages.
            Simple step-by-step guide on how businesses can get listed and earn
            reviews to access Truts Packages. Simple step-by-step guide on how
            businesses can get listed and earn reviews to access Truts Packages.
          </p>
          <h1 className="mt-[32px] text-[20px]">Images</h1>
          <picture>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/XFCE-4.10-Desktop.png"
              alt=""
              className="mt-[12px] rounded-[12px]"
            />
          </picture>
        </section>
      </div>
      <section className="px-[120px] mt-[157px] mb-[124px]">
        <h1 className={`${playfair.className} text-[48px] mt-[27px]`}>
          Other Offerings
        </h1>
        <span className="flex gap-[16px] mt-[80px]">
          <OfferingCard />
          <OfferingCard />
          <OfferingCard />
          <OfferingCard />
        </span>
      </section>
      <Footer />
    </div>
  );
}

export default Ecosystem;
