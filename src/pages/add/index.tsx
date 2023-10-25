import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Multiselect from "@/components/Multiselect";
import React from "react";

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

function Add() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Nav />
      <section className="flex flex-col w-full min-h-screen bg-[#F6F6F6] px-[120px] py-[44px]">
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
          <input
            className="bg-white rounded-[16px] h-[56px] w-full max-w-[700px] mt-[16px] px-4"
            type="text"
          />
        </span>
        <span className="mt-[40px]">
          <h2 className="text-[16px]">Description</h2>
          <textarea
            rows={10}
            className="bg-white rounded-[16px]  w-full max-w-[700px] mt-[16px] p-4"
          />
        </span>
        <span className="mt-[40px]">
          <h2 className="text-[16px]">Credits</h2>
          <input
            className="bg-white rounded-[16px] h-[56px] w-full max-w-[700px] mt-[16px] px-4"
            type="text"
          />
        </span>
        <span className="mt-[40px]">
          <h2 className="text-[16px]">Organization</h2>
          <input
            className="bg-white rounded-[16px] h-[56px] w-full max-w-[700px] mt-[16px] px-4"
            type="text"
          />
        </span>
        <span className="mt-[40px] flex flex-col">
          <h2 className="text-[16px]">Tags</h2>
          <Multiselect />
        </span>
        <span className="mt-[40px]">
          <h2 className="text-[16px]">Logos</h2>
          <input
            className="bg-white rounded-[16px] h-[56px] w-full max-w-[700px] mt-[16px] px-4"
            type="text"
          />
        </span>
        <span className="mt-[40px]">
          <h2 className="text-[16px]">Images</h2>
          <input
            className="bg-white rounded-[16px] h-[56px] w-full max-w-[700px] mt-[16px] px-4"
            type="text"
          />
        </span>
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
