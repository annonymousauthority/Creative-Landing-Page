import Image from "next/image";
import { Sofia } from "next/font/google";
import Navbar from "@/components/navBar_comp";
import HeroTexts from "@/components/heroTexts_comp";

export default function Home() {
  return (
    <div className="w-full bg-black h-screen py-6 overflow-hidden">
      <Navbar />
      <div className="hidden bg-[url('/assets/bg_photo.png')] mt-6 max-w-6xl h-screen lg:h-screen 2xl:h-[1050px] bg-contain bg-no-repeat mx-auto lg:flex bg-center">
        <div className="w-1/2 flex items-start justify-start mt-24">
          <HeroTexts text1={"Engaging"} text2={"Cultures"} />
        </div>
        <div className="w-1/2 flex items-end justify-end mb-24">
          <HeroTexts text1={"Building"} text2={"Dreams"} />
        </div>
      </div>
    </div>
  );
}
