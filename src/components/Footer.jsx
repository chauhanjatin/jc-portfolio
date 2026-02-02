import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import gmailicon from "../assets/images/icons/gmail-icon.svg";
import phoneicon from "../assets/images/icons/phone-icon.svg";
import herobg from "../assets/images/hero-bg.gif";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";

export default function Cta() {
  return (
    <div>
      <div className="relative">
        <div className="containerX">
          <div className="py-[40px] md:py-[80px] px-[20px] md:px-[10px] text-center relative z-10">
            <h2 className="text-[#1E1E1E] text-2xl md:text-[42px]">
              Let's Connect.
            </h2>

            <div
              className="my-[40px] md:my-[50px] flex flex-col md:flex-row items-center md:justify-center gap-6 xl:gap-[90px] 2xl:gap-[48px] md:flex-nowrap w-full">

              <Link to="/" className="flex gap-2.5 items-center">
                <img src={gmailicon} alt="" className="w-6 md:w-auto" />
                <p className="text-[16px] xl:text-[20px] font-light text-[#1E1E1E]">
                  chauhanjatin.25@gmail.com
                </p>
              </Link>

              {/* <Link to="" className="flex gap-2.5 items-center">
                <img src={phoneicon} alt="" className="w-6 md:w-auto" />
                <p className="text-[16px] xl:text-[20px] font-light text-[#1E1E1E]">
                  +91 70963 64801
                </p>
              </Link> */}

              <ul className="flex items-center gap-3">
                {/* <li className="icon-tilt">
                  <Link
                    to="https://www.linkedin.com/in/jatin-chauhan-a52a4947"
                    target="_blank"
                    className="bg-white w-[36px] md:w-[40px] h-[36px] md:h-[40px] rounded-md flex justify-center items-center social"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="text-[18px] md:text-[20px]"
                    />
                  </Link>
                </li>

                <li className="icon-tilt">
                  <Link
                    to="https://upwork.com/freelancers/jatinchauhan"
                    target="_blank"
                    className="bg-white w-[36px] md:w-[40px] h-[36px] md:h-[40px] rounded-md flex justify-center items-center social"
                  >
                    <FontAwesomeIcon
                      icon={faUpwork}
                      className="text-[18px] md:text-[20px]"
                    />
                  </Link>
                </li> */}

                <li className="icon-tilt">
                  <Link
                    to="https://www.behance.net/chauhanjat115a"
                    target="_blank"
                    className="bg-white w-[36px] md:w-[40px] h-[36px] md:h-[40px] rounded-md flex justify-center items-center social"
                  >
                    <FontAwesomeIcon
                      icon={faBehance}
                      className="text-[18px] md:text-[20px]"
                    />
                  </Link>
                </li>

                <li className="icon-tilt">
                  <Link
                    to="https://dribbble.com/jatinchauhan"
                    target="_blank"
                    className="bg-white w-[36px] md:w-[40px] h-[36px] md:h-[40px] rounded-md flex justify-center items-center social"
                  >
                    <FontAwesomeIcon
                      icon={faDribbble}
                      className="text-[18px] md:text-[20px]"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <p className="text-[#1E1E1E80] font-light mb-[30px] md:mb-[40px] text-sm md:text-base">
              Copyright ⓒ 2025. All Rights Reserved by Jatin Chauhan.
            </p>
          </div>
        </div>

        <div
          className="after:content-[''] after:absolute after:top-0 after:left-0 after:w-full 
                        after:h-[300px] md:after:h-[500px] 
                        after:bg-[linear-gradient(360deg,rgba(244,244,244,0)_0%,#F4F4F4_100%)] 
                        w-full absolute bottom-0 
                        h-[600px] md:h-[700px]">
          <img
            src={herobg}
            alt=""
            className="w-full h-full opacity-35 object-cover"
          />
        </div>
        
      </div>
    </div>
  );
}
