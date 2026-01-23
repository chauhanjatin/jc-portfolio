import React from "react";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import emailicon from "../assets/images/icons/email-icon.svg";
import { Link } from "react-router-dom";

export default function Contactus() {
  return (
    <div>
      <div className="containerX relative z-10">
        
        <div className="Contactus-section sm:h-[calc(100vh-70px)] h-full flex justify-center items-center">
          <div>
            <h1>Let’s Work Together</h1>
            <p className="text-[#1F1E1E80] mt-[30px]">
              Have an idea or a project in mind? I design thoughtful digital
              <br></br>
              experiences that balance creativity and usability.
            </p>
           
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chauhanjatin.25@gmail.com"
                rel="noopener noreferrer"
              className="flex items-center gap-3 mt-[50px]">
              {/* <img src={emailicon} alt="Email" /> */}
              <h1 className="text-[--primary-color]">
                chauhanjatin.25@gmail.com
              </h1>
            </a>

          </div>
        </div>

        {/* <div className="max-w-7xl mx-auto sm:py-20 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-[100px] md:gap-[70px] gap-[50px]">
            
          <div>

              <h2 className="font-medium sm:text-[55px] text-[30px] sm:leading-[70px] leading-[45px] text-black">
                Send Me <br /> A Message
              </h2>

              <h4 className="xl:mt-8 mt-5 text-[#1F1E1E80] sm:text-[20px] sm:leading-[32px] text-[16px] leading-[28px">
                Creative UI/UX Designer with 10+ years of experience crafting
                responsive, user-focused web and mobile apps. Blending
                aesthetics with functionality, I help brands build seamless and
                meaningful digital experiences that deliver both beauty and
                value.
              </h4>

            </div>

            <div className="bg-white p-8 xl:p-12 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full py-3 px-5 rounded-[40px] border border-[#1E1E1E] placeholder:text-[#1E1E1E] outline-none bg-transparent"
              />

              <div className="xl:mt-5 mt-4">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full py-3 px-5 rounded-[40px] border border-[#1E1E1E] placeholder:text-[#1E1E1E] outline-none bg-transparent"
                />
              </div>

              <div className="xl:mt-5 mt-4">
                <input
                  type="text"
                  placeholder="Enter Project Type"
                  className="w-full py-3 px-5 rounded-[40px] border border-[#1E1E1E] placeholder:text-[#1E1E1E] outline-none bg-transparent"
                />
              </div>

              <div className="xl:mt-5 mt-4">
                <textarea
                  rows="5"
                  placeholder="Enter Message"
                  className="w-full py-3 px-5 rounded-[20px] border border-[#1E1E1E] placeholder:text-[#1E1E1E] outline-none resize-none bg-transparent"
                />
              </div>

              <div className="xl:mt-8 mt-6">
                <button className="w-full bg-[#1E1E1E] text-white py-3 rounded-[40px] text-[16px] font-light transition-all duration-300 hover:bg-transparent hover:text-black border border-black">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* <Cta></Cta> */}
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}
