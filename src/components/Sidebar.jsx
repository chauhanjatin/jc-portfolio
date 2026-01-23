import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faUpwork } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import gmailicon from "../assets/images/icons/gmail-icon.svg";
import phoneicon from "../assets/images/icons/phone-icon.svg";
import instagramlogo from "../assets/images/icons/instagram-logo.svg";
import herobg from "../assets/images/hero-bg.gif";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "My Work", path: "/mywork" },
    { label: "Hire Me", path: "/hireme" },
  ];

  return (
    <div
      className={`fixed inset-0 bg-[--primary-color]
        flex items-center justify-center
        h-screen w-full z-[998]
        transition-all duration-700 ease-in-out
        transform${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}>

      <div className="w-full">
        <div className="containerX">
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-40 gap-30 lg:gap-56">
            
            <div className="flex sm:justify-center justify-start ">
              <ul className="text-[#1E1E1E] lg:space-y-16 sm:space-y-14 space-y-4">
                {menuItems.map((item, index) => {
                  const isActive = currentPath === item.path;
                  return (
                    <li
                      key={index}
                      style={{ transitionDelay: `${index * 160}ms` }}
                      className={`
                           transition-all duration-700 ease-in-out
                           ${
                             open
                               ? "opacity-100 translate-y-0"
                               : "opacity-0 translate-y-8"
                           }`}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={`
                      group inline-flex items-center gap-6 rounded-full
                      lg:text-[60px] sm:text-[50px] text-[30px] font-bold
                      transition-colors duration-300
                      ${isActive ? "text-white" : "text-[#1E1E1E]"}
                      `}
                      >
                        <span
                          className="
                          text-[20px] font-medium opacity-70
                          transition-all duration-500 ease-out
                          group-hover:opacity-100
                          group-hover:-translate-y-1
                         "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="
                          inline-block
                          transition-transform duration-500 ease-out
                          will-change-transform
                          group-hover:scale-110
                          "
                        >
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex">
              <div>
                <p
                  style={{ transitionDelay: "0ms" }}
                  className={`
      text-[30px] mt-8 font-semibold
      transition-all duration-700 ease-in-out
      ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
                >
                  {" "}
                  Let's Connect.
                </p>
                <Link
                  to="/"
                  style={{ transitionDelay: "160ms" }}
                  className={`
      flex gap-2.5 items-center sm:mt-10 mt-4
      transition-all duration-700 ease-in-out
      ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
                >
                  <img src={gmailicon} alt="" className="w-6 md:w-auto" />
                  <p className="text-[20px] xl:text-[28px] font-normal text-[#1E1E1E]">
                    chauhanjatin.25@gmail.com
                  </p>
                </Link>

                <Link
                  to=""
                  style={{ transitionDelay: "320ms" }}
                  className={`
      flex gap-2.5 items-center mt-5
      transition-all duration-700 ease-in-out
      ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
                >
                  <img src={phoneicon} alt="" className="w-6 md:w-auto" />
                  <p className="text-[20px] xl:text-[28px] font-normal text-[#1E1E1E]">
                    +91 70963 64801
                  </p>
                </Link>

                <ul
                  style={{ transitionDelay: "480ms" }}
                  className={`
      flex items-center gap-3 sm:mt-12 mt-8
      transition-all duration-700 ease-in-out
      ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
                >
                  <li className="icon-tilt">
                    <Link
                      to="https://www.linkedin.com/in/jatin-chauhan-a52a4947"
                      target="_blank"
                      className="
          bg-white w-[36px] h-[36px] md:w-[40px] md:h-[40px]
          rounded-md flex justify-center items-center social
          transition-transform duration-300 hover:-translate-y-1
        "
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
                      className="
          bg-white w-[36px] h-[36px] md:w-[40px] md:h-[40px]
          rounded-md flex justify-center items-center social
          transition-transform duration-300 hover:-translate-y-1
        "
                    >
                      <FontAwesomeIcon
                        icon={faUpwork}
                        className="text-[18px] md:text-[20px]"
                      />
                    </Link>
                  </li>

                  <li className="icon-tilt">
                    <Link
                      to="https://www.behance.net/chauhanjat115a"
                      target="_blank"
                      className="
          bg-white w-[36px] h-[36px] md:w-[40px] md:h-[40px]
          rounded-md flex justify-center items-center social
          transition-transform duration-300 hover:-translate-y-1
        "
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
                      className="
          bg-white w-[36px] h-[36px] md:w-[40px] md:h-[40px]
          rounded-md flex justify-center items-center social
          transition-transform duration-300 hover:-translate-y-1
        "
                    >
                      <FontAwesomeIcon
                        icon={faDribbble}
                        className="text-[18px] md:text-[20px]"
                      />
                    </Link>
                  </li>
                </ul>

                <h4
                  style={{ transitionDelay: "480ms" }}
                  className={`italic text-[20px] lg:text-[22px] sm:mt-12 mt-8 duration-700  ${
                    open
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  Also explore my creative side
                </h4>
                <div
                  style={{ transitionDelay: "540ms" }}
                  className={`flex items-center transition-all mt-5 duration-700 ease-in-out
      ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <div>
                    <Link
                      className="flex gap-1.5 lg:gap-2.5"
                      to="https://www.instagram.com/jatin.an.artist"
                      target="_blank"
                    >
                      <img src={instagramlogo} alt="" />
                      <h4 className="underline text-[20px] lg:text-[22px]">
                        @jatin.an.artis
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}