import profileimg from "../assets/images/profile-img.png";
import herobg from "../assets/images/hero-bg.gif";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faUpwork,
  faBehance,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
export default function Navbar() {
  return (
    <div>
      <div className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[300px] md:after:h-[500px] after:bg-[linear-gradient(180deg,rgba(244,244,244,0)_-1%,#F4F4F4_100%)] z-10 w-full absolute top-0 h-[80vh] md:h-dvh">
        <img src={herobg} alt="" className="w-full h-full opacity-35" />
      </div>
      <div className="containerX ">
        <div className="relative top-0 z-50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mt-[30px] md:mt-[40px] ">
            
            <Link to='/' className="flex items-center gap-4 md:gap-5">
              <div>
                <img src={profileimg} alt="" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl lg:text-2xl">
                  Jatin Chauhan
                </h4>
                <p className="text-[#1F1E1E99] text-sm sm:text-base">
                  UI/UX Designer, Creative Developer
                </p>
              </div>
            </Link>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-5">
              {/* <div className="flex items-center gap-2">
                <div className="ripple"></div>
                <p className="text-sm sm:text-base md:text-[16px]">
                  Available for work
                </p>
              </div> */}
              {/* <div className="hidden sm:block bg-[#44444499] w-[2px] h-[40px] md:h-[35px]"></div> */}
              <ul className="flex items-center gap-3">
                {/* <li className="icon-tilt">
                  <Link
                    to="https://www.linkedin.com/in/jatin-chauhan-a52a4947"
                    target="_blank"
                    className="bg-white w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-md flex justify-center items-center social"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="text-[18px] md:text-[20px]"
                    />
                  </Link>
                </li> */}

                {/* <li className="icon-tilt">
                  <Link
                    to="https://upwork.com/freelancers/jatinchauhan"
                    target="_blank"
                    className="bg-white w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-md flex justify-center items-center social"
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
                    className="bg-white w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-md flex justify-center items-center social"
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
                    className="bg-white w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-md flex justify-center items-center social"
                  >
                    <FontAwesomeIcon
                      icon={faDribbble}
                      className="text-[18px] md:text-[20px]"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
