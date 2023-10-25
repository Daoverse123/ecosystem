import React, { useState } from "react";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";
import OfferingCard from "@/components/OfferingCard";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//types
import { offeringType, tagType } from "@/types";

//fonts
export const inter = Inter({ subsets: ["latin"] });
export const playfair = Playfair_Display({ subsets: ["latin"] });

function Discover() {
  const [selectedTags, setselectedTags] = useState<string[]>([]);

  const tags = useQuery({
    queryKey: ["todos-filter"],
    queryFn: async () => {
      let res = await axios.get(`${process.env.API}/api/v1/offering/tags`);
      if (res.status == 200) {
        return res.data.data.result as tagType[];
      }
    },
  });

  const cards = useQuery({
    queryKey: ["api", selectedTags],
    queryFn: async () => {
      let res = await axios.get(
        `${process.env.API}/api/v1/offerings?filter=${
          selectedTags.length > 0
            ? `{"tags":${JSON.stringify(selectedTags)}}`
            : "{}"
        }`,
      );
      if (res.status == 200) {
        return res.data.data.result as offeringType[];
      }
    },
  });

  return (
    <div className="flex flex-col w-full">
      <Nav />
      <section className="flex flex-col w-full max-[1200px]:px-[29px] px-[120px] mb-[180px]">
        <span className="mt-[50px]">
          <h1
            className={
              "text-[48px] font-medium leading-[64px] max-[1200px]:text-[32px]" +
              ` ${playfair.className}`
            }
          >
            Ecosystem Offerings
          </h1>
        </span>
        <div className="flex mt-[32px] flex-wrap w-[95%] gap-x-[12px] gap-y-[16px]">
          {tags.isSuccess &&
            tags?.data?.map((tg, idx) => {
              return (
                <Chip
                  selected={selectedTags.includes(tg.tag)}
                  name={tg.tag}
                  key={"fil" + idx}
                  select={() => {
                    setselectedTags((sc) => {
                      return [tg.tag, ...sc];
                    });
                  }}
                  remove={() => {
                    setselectedTags((sc) => {
                      return [...sc.filter((s) => s !== tg.tag)];
                    });
                  }}
                />
              );
            })}
        </div>
        {/* results */}
        <section>
          <p className="max-[1200px]:text-[12px] text-[18px] mb-5 text-[#6B6B7F] mt-[60px]">
            Showing {cards.isSuccess ? cards.data?.length : 0} results
          </p>
          <div className="flex max-[1200px]:justify-center flex-wrap gap-x-[10px] gap-y-[20px]">
            {cards.isSuccess &&
              cards?.data?.map((card, key) => {
                return (
                  <OfferingCard
                    id={card._id}
                    credit={card.credits}
                    icon={card.logo.secure_url}
                    title={card.name}
                    desc={card.description}
                    key={key + "offeringCard"}
                  />
                );
              })}
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

const Chip = ({
  selected,
  name,
  select,
  remove,
}: {
  selected?: boolean;
  name: string;
  select: () => void;
  remove: () => void;
}) => {
  if (selected) {
    return (
      <span className="max-[1200px]:text-[12px] bg-black max-[1200px]:text-[12px]:gap-2 gap-[8px] text-white flex justify-center items-center px-[24px] py-[10px] border-[1px] border-black rounded-[24px]">
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          fill="none"
          viewBox="0 0 14 15"
          className="cursor-pointer hover:opacity-50"
          onClick={() => {
            remove();
          }}
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
    <span
      onClick={() => {
        select();
      }}
      className=" cursor-pointer  max-[1200px]:text-[12px] flex justify-center items-center px-[24px] py-[10px] border-[1px] border-black rounded-[24px]"
    >
      {name}
    </span>
  );
};

export default Discover;
