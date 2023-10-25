import React from "react";
import { Inter } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });

import { Playfair_Display } from "next/font/google";
export const playfair = Playfair_Display({ subsets: ["latin"] });

import Nav from "@/components/Nav";
import OfferingCard from "@/components/OfferingCard";

import socialAssets from "../../components/socialAssets";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { offeringType } from "@/types";

function Ecosystem({ id }: { id: string }) {
  // Queries
  const query = useQuery({
    queryKey: [id],
    queryFn: async (qn) => {
      let id = qn.queryKey[0];
      let res = await axios.get(`${process.env.API}/api/v1/offering/${id}`);
      if (res.status == 200) {
        return res.data.data.offering as offeringType;
      }
    },
  });

  // Queries
  const other = useQuery({
    queryKey: ["other"],
    queryFn: async () => {
      let res = await axios.get(`${process.env.API}/api/v1/offerings`);
      if (res.status == 200) {
        return res.data.data.result as offeringType[];
      }
    },
  });

  if (!query.isSuccess) {
    return <h1>Loading</h1>;
  }

  return (
    <div className={`flex flex-col w-full ${inter.className}`}>
      <Nav />
      {/* Banner */}
      <div className="fles w-full h-[252px] hero-bg"></div>
      <div className="flex max-[1200px]:flex-col px-[120px] max-[1200px]:px-[29px] gap-[81px] max-[1200px]:gap-0">
        {/* Info Sec */}
        <section className="max-[1200px]:hidden flex flex-col relative top-[-40px]">
          <picture>
            <img
              className="w-[160px] h-[160px] rounded-[18px] outline outline-[1px] outline-[#CACDD5]"
              src={query.data?.logo.secure_url || "/placeholder.png"}
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
        {/* Mobile icon */}
        <picture>
          <img
            className="hidden max-[1200px]:block mx-auto translate-y-[-40%] w-[100px] h-[100px]"
            src={query.data?.logo.secure_url}
            alt=""
          />
        </picture>

        {/* description */}
        <section className="mt-[72px] max-[1200px]:mt-0">
          {/* Bread crums */}
          <span className="max-[1200px]:hidden flex gap-[14px] items-center">
            <h4 className="text-[20px] text-[#8C93A3]">Offerings</h4>
            <h4 className="text-[20px]">{">"}</h4>
            <h4 className="text-[20px]"> {query.data?.name}</h4>
          </span>
          <h1
            className={`${playfair.className} max-[1200px]:leading-3 max-[1200px]:pb-3 max-[1200px]:text-[32px] max-[1200px]:text-center max-[1200px]:mt-0 text-[48px] mt-[27px]`}
          >
            {query.data?.name}
          </h1>

          <p className="text-[#6B6B7F] mt-[32px] max-[1200px]:mt-[16px] max-[1200px]:text-center">
            {query.data?.description}
          </p>
          {/* mobile socials */}
          <div className="max-[1200px]:flex mt-4 hidden mx-auto justify-center gap-4">
            {socialAssets.map((ele) => {
              return ele.icon;
            })}
          </div>
          {/* <h1 className={`mt-[32px]`}>Ecosystem Offerings</h1>
          <p className="text-[#6B6B7F] mt-[12px]">
            Simple step-by-step guide on how businesses can get listed and earn
            reviews to access Truts Packages. Simple step-by-step guide on how
            businesses can get listed and earn reviews to access Truts Packages.
            Simple step-by-step guide on how businesses can get listed and earn
            reviews to access Truts Packages. Simple step-by-step guide on how
            businesses can get listed and earn reviews to access Truts Packages.
          </p> */}
          <h1 className="mt-[32px] text-[20px]">Images</h1>
          {query.data?.images.map((ig, idx) => {
            return (
              <picture key={"img" + idx}>
                <img
                  src={ig.secure_url}
                  alt=""
                  className="mt-[12px] rounded-[12px]"
                />
              </picture>
            );
          })}
        </section>
      </div>
      <section className="px-[120px] max-[1200px]:px-[29px] mt-[157px] max-[1200px]:mt-[108px] mb-[124px]">
        <h1
          className={`${playfair.className} text-[48px] max-[1200px]:text-[32px] mt-[27px] max-[1200px]:text-center`}
        >
          Other Offerings
        </h1>
        <span className="flex gap-1 mt-[80px] max-[1200px]:mt-[24px] flex-wrap max-[1200px]:justify-center">
          {other.isSuccess &&
            other?.data?.map((card: offeringType, key: number) => {
              return (
                <OfferingCard
                  credit={card.credits}
                  icon={card.logo.secure_url}
                  title={card.name}
                  desc={card.description}
                  key={key + "offeringCard"}
                  id={card._id}
                />
              );
            })}
        </span>
      </section>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const id = context.params.slug; // Get ID from slug

  return {
    props: {
      id: id || "null",
    },
  };
}
export default Ecosystem;
