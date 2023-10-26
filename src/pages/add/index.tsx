import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Multiselect from "@/components/Multiselect";
import React, { useState } from "react";
import { create } from "zustand";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

/*
name
description
credits
organization
tags
logo
images
socials 
*/

interface Form {
  name: string;
  description: string;
  credits: number;
  organization: string;
  tags: string[];
  setForm: (key: string, value: string) => any;
  setTags: (t: string[]) => any;
}

const useStore = create<Form>((set) => ({
  name: "",
  description: "",
  credits: 0,
  organization: "",
  tags: [],
  setForm: (key: string, value: string | number) => {
    return set((state) => ({ ...state, [key]: value }));
  },
  setTags: (t: string[]) => {
    return set((state) => ({ ...state, tags: t }));
  },
}));

function Add() {
  let formState = useStore();
  console.log(formState);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Nav />
      <section className="flex flex-col w-full min-h-screen bg-[#F6F6F6] px-[120px] py-[44px] max-[768px]:px-5">
        <span>
          <h1 className="text-[28px]">
            Application for listing your Ecosystem
          </h1>
          <h3 className="text-[16px]">
            Please fill the basic information of your Offering to list your DAO
            on DAOverse.
          </h3>
        </span>
        <span className="mt-[40px]">
          <h2 className="text-[16px]">What’s the name of your Offering</h2>
          {/* Name */}
          <input
            className="bg-white rounded-[16px] h-[56px] w-full max-w-[700px] mt-[16px] px-4"
            type="text"
            onChange={(e) => {
              formState.setForm("name", e.target.value);
            }}
            value={formState.name}
          />
        </span>
        <span className="mt-[40px]">
          <h2 className="text-[16px]">Description</h2>
          {/* Description */}
          <textarea
            rows={10}
            className="bg-white rounded-[16px]  w-full max-w-[700px] mt-[16px] p-4"
            onChange={(e) => {
              formState.setForm("description", e.target.value);
            }}
            value={formState.description}
          />
        </span>
        <span className="mt-[40px]">
          <h2 className="text-[16px]">Credits</h2>
          {/* credits */}
          <input
            className="bg-white rounded-[16px] h-[56px] w-full max-w-[700px] mt-[16px] px-4"
            type="number"
            value={formState.credits}
            onChange={(e) => {
              formState.setForm("credits", e.target.value);
            }}
          />
        </span>
        <span className="mt-[40px]">
          <h2 className="text-[16px]">Organization</h2>
          <input
            className="bg-white rounded-[16px] h-[56px] w-full max-w-[700px] mt-[16px] px-4"
            type="text"
            value={formState.organization}
            onChange={(e) => {
              formState.setForm("organization", e.target.value);
            }}
          />
        </span>
        <span className="mt-[40px] flex flex-col">
          <h2 className="text-[16px]">Tags</h2>
          <Multiselect
            setTags={(s) => {
              formState.setTags(s);
            }}
          />
        </span>
        <span className="mt-[40px]">
          <h2 className="text-[16px]">Logos</h2>
          <input
            className="h-[56px] w-full max-w-[700px] mt-[16px]"
            type="file"
            onChange={(event: any) => {
              const file = event?.target?.files[0];
              if (file) {
                const imageURL = URL.createObjectURL(file);
                let doc = document as any;
                doc.getElementById("logo").src = imageURL;
              }
            }}
          />
          <picture>
            <img className="object-contain h-80" id="logo" src="" alt="" />
          </picture>
        </span>
        {/* <span className="mt-[40px]">
          <h2 className="text-[16px]">Images</h2>
          <input
            className="h-[56px] w-full max-w-[700px] mt-[16px] "
            type="file"
            onChange={(event: any) => {
              const file = event?.target?.files[0];
              if (file) {
                const imageURL = URL.createObjectURL(file);
                let doc = document as any;
                doc.getElementById("image").src = imageURL;
              }
            }}
          />
          <picture>
            <img id="image" src="" alt="" className="object-contain h-80" />
          </picture>
        </span> */}
        <span className="mt-[40px]">
          <h2 className="text-[16px]">Socials</h2>
          <input
            className="bg-white rounded-[16px] h-[56px] w-full max-w-[700px] mt-[16px] px-4"
            type="text"
          />
        </span>
      </section>
      <Footer />
    </div>
  );
}

export default Add;
