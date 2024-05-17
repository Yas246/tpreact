import React from "react";
import FindHeader from "../../components/FindHeader";
import Findpage from "../../components/Findpage";
import Footer from "../../components/Footer";

export default function FindPage() {
  return (
    <>
      <div className="w-full bg-white-A700">
        
        <FindHeader className="h-[514px] bg-[url(/public/images/img_header_2_desktop.svg)] bg-cover bg-no-repeat pb-[65px] md:h-auto md:pb-5" />

        <Findpage className="flex items-center justify-center bg-white-A700 py-[70px] md:py-5" />

        <Footer className="flex flex-col items-center gap-20 bg-gray-900 py-10 md:gap-[60px] sm:gap-10 sm:py-5" />
      </div>
    </>
  );
}
