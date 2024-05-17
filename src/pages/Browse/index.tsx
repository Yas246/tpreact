import React from "react";
import Filter from "../../components/Filter";
import FindHeader from "../../components/FindHeader";
import Footer from "../../components/Footer";
import RecomEnt from "../../components/RecomEnt";

export default function BrowsePage() {
  return (
    <>
   
      <div className="w-full bg-white-A700">
       
        <FindHeader className="flex flex-col gap-[65px] pb-[65px] md:pb-5 sm:gap-8" />

        <RecomEnt className="flex flex-col items-center gap-8 bg-white-A700 pt-[72px] md:pt-5" />

        <Filter className="relative h-[1095px] overflow-auto" />

        <Footer className="flex flex-col items-center gap-20 bg-gray-900 py-10 md:gap-[60px] sm:gap-10 sm:py-5" />
      </div>
    </>
  );
}
