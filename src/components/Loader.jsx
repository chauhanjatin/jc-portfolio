import React from "react";
import herobg from "../assets/images/hero-bg.gif";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white fixed z-[99999999] top-0 w-full">
      <div className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[300px] md:after:h-[1000px] after:bg-[linear-gradient(180deg,rgba(244,244,244,0)_-1%,#F4F4F4_100%)] z-10 w-full absolute top-0 h-[100vh] md:h-dvh flex items-center">
        <img src={herobg} alt="" className="w-full h-full opacity-35" />
      </div>
      <span class="loader-45"> </span>      
    </div>
  );
}
