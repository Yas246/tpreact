import React from "react";
import FindHeader from "../../components/FindHeader";
import Footer from "../../components/Footer";
import Resultat from "../../components/Resultat";

export default function ResultatsPage() {
  return (
    <>
      <div className="w-full bg-white-A700">
        <FindHeader
          dreamjob="dream companies"
          findyournext="Find the dream companies you dream work for"
          jobtitleor="Fintech"
          popularui="Popular : Twitter, Microsoft, Apple, Facebook"
          className="flex flex-col gap-[65px] pt-3.5 md:pb-5 sm:gap-8"
        />

        <Resultat />

        <Footer className="flex flex-col items-center gap-20 bg-gray-900 py-10 md:gap-[60px] sm:gap-10 sm:py-5" />
      </div>
    </>
  );
}
