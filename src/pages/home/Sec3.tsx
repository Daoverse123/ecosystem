import React from "react";
import OfferingCard from "@/components/OfferingCard";
import { playfair, inter } from ".";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//types
import { offeringType } from "@/types";

export const Sec3 = () => {
  // Queries
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      let res = await axios.get(`${process.env.API}/offerings`);
      if (res.status == 200) {
        return res.data.data.result as offeringType[];
      }
    },
  });

  return (
    <section className="flex mx-auto flex-col px-[120px] max-[1200px]:px-[29px] py-[88px] max-[1200px]:py-[64px]">
      <span className="flex flex-col max-[1200px]:max-w-[700px] max-[1200px]:mx-auto">
        <h1
          className={
            "text-[48px] font-medium leading-[64px] max-[1200px]:leading-[40px] max-[1200px]:text-[32px]" +
            ` ${playfair.className}`
          }
        >
          Ecosystem Offerings
        </h1>
        <p
          className={
            "mt-[24px]  text-[18px] max-[1200px]:text-[16px] max-[1200px]:max-w-[600px] max-[425px]:w-[100%] text-[#6B6B7F] font-normal leading-[27px]" +
            ` ${inter.className}`
          }
        >
          The best of the best products and services at discounted rates for
          your projects to access, only on Truts
        </p>
      </span>
      <div className="mt-[80px] max-[1200px]:mt-[49px] flex w-full flex-wrap gap-x-2 gap-y-5 max-[1200px]:justify-center">
        {query.isSuccess &&
          query?.data?.map((card: offeringType, key: number) => {
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
      </div>
      <button className="mx-auto mt-[62px] text-[18px] px-[24px] py-[10px] bg-black text-white rounded-[8px]">
        Explore 100+ Offerings
      </button>
    </section>
  );
};

export default Sec3;
