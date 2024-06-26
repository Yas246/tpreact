import React from "react";
import Aboutheader from "../../components/Aboutheader";
import Apropos from "../../components/Apropos";
import Avantages from "../../components/Avantages";
import Dernierjob from "../../components/Dernierjob";
import Description from "../../components/Description";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <div className="w-full bg-white-A700">

        <Aboutheader className="flex flex-col items-center gap-11 bg-gray-50" />


        <Description className="flex flex-col items-center gap-[72px] bg-white-A700 pt-[70px] md:gap-[54px] md:pt-5 sm:gap-9" />


        <Avantages className="flex flex-col items-center bg-white-A700 pt-[70px] md:pt-5" />

        <Apropos className="flex items-center justify-center rounded-lg bg-white-A700 py-[72px] md:py-5" />

        <Dernierjob
          latestjobs="Similiar Jobs"
          className="relative h-[877px] bg-[url(/public/images/img_landing_page_latest.svg)] bg-cover bg-no-repeat pt-[70px] md:pt-5"
        />

        <Footer className="flex flex-col items-center gap-20 bg-gray-900 py-10 md:gap-[60px] sm:gap-10 sm:py-5" />
      </div>
    </>
  );
}
