import Footer from "@/components/Footer";
import Multiselect from "@/components/Multiselect";
import Nav from "@/components/Nav";
import React from "react";

function Claim() {
  return (
    <div>
      <div className="flex flex-col w-full min-h-screen">
        <Nav />
        <section className="flex flex-col w-full min-h-screen bg-[#F6F6F6] px-[120px] py-[44px]">
          <span>
            <h1 className="text-[28px]">Application for Claiming</h1>
            <h3 className="text-[16px]">
              Please fill the basic information of your Offering to list your
              DAO on DAOverse.
            </h3>
          </span>
          <span className="mt-[40px]">
            <h2 className="text-[16px]">Truts URL</h2>
            <input
              className="bg-white rounded-[16px] h-[56px] w-full max-w-[700px] mt-[16px] px-4"
              type="text"
            />
          </span>

          <span className="mt-[40px] flex flex-col">
            <h2 className="text-[16px]">Select Offerings (max 3)</h2>
            <Multiselect />
          </span>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Claim;
