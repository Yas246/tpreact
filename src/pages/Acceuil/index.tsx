import React from "react";
import AcceuilHeader from "../../components/AcceuilHeader";
import Affiche from "../../components/Affiche1";
import Banniere from "../../components/Banniere";
import Categorie from "../../components/Categorie";
import Dernierjob from "../../components/Dernierjob";
import Footer from "../../components/Footer";
import Recomjob from "../../components/Recomjob";

export default function AcceuilPage() {
  return (
    <>
      <div className="w-full bg-white-A700">

        <AcceuilHeader className="relative h-[794px] bg-gray-50" />

        <Banniere className="flex flex-col items-center justify-center gap-[37px] bg-white-A700 py-12 md:py-5" />

        <Categorie className="flex flex-col items-center gap-[41px] bg-white-A700 pt-[72px] md:pt-5" />

        <Affiche className="flex items-center justify-center bg-white-A700 py-[72px] md:py-5" />

        <Recomjob className="flex flex-col items-center gap-[41px] bg-white-A700 pb-[72px] md:pb-5" />

        <Dernierjob className="relative h-[877px] bg-[url(/public/images/img_landing_page_latest.svg)] bg-cover bg-no-repeat pt-[72px] md:pt-5" />

        <Footer className="flex flex-col items-center gap-20 bg-gray-900 py-10 md:gap-[60px] sm:gap-10 sm:py-5" />
      </div>
    </>
  );
}
