import { useState, useRef, useEffect } from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import project7 from "../assets/images/project7.png";
import project8 from "../assets/images/project8.png";
import project9 from "../assets/images/project9.png";
import project10 from "../assets/images/project10.png";
import project11 from "../assets/images/project11.png";
import project12 from "../assets/images/project12.png";
import figmalink from "../assets/images/figma-link.png";
import link from "../assets/images/link.png";
import viewProjectArrow from "../assets/images/icons/viewproject-arrow.svg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Cta from "../components/Cta";

export default function Mywork() {
  const [activeTab, setActiveTab] = useState("All");
  const handleFilter = (type) => {
    setActiveTab(type);
  };

  return (
    <div>
      <div className="containerX relative z-10">
        <div className="mt-[160px]">
          <div className="mt-10 grid gap-4 sm:flex sm:justify-between sm:items-center">
            <h2>Work Showcase</h2>
            <ul className="flex items-center gap-2.5">
              {["All", "Web App", "Website", "Mobile App"].map((type) => (
                <li
                  key={type}
                  onClick={() => handleFilter(type)}
                  className={`py-2 sm:px-10 px-3 rounded-[20px] cursor-pointer transition-all duration-300
      ${
        activeTab === type
          ? "bg-[--primary-color] text-black border border-[--primary-color]"
          : "bg-transparent border border-[#1E1E1E] text-black hover:bg-[--primary-color] hover:text-black hover:border-[--primary-color]"
      }`}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>

          {/* All */}
          <div
            className={`All-items ${
              activeTab === "All" ? "block animate-fade" : "hidden"
            }`}
          >
            <div className="Portfolio-grid">
              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full ">
                  <p className="text-[#1F1E1E99] mb-2.5">Web App</p>
                  <div>
                    <img src={project4} alt="" />
                  </div>
                </div>

                <div className="Portfolio-contant">
                  <div className="w-full">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Uniqlearn</h3>
                      <h4 className="text-white">(Learning)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div>
                        <Link
                          to="https://www.figma.com/proto/Lpl14RL2PjUJ4d0zj1JK78/Uniqlearn?page-id=0%3A1&node-id=348-517&starting-point-node-id=348%3A517&t=7zHOPtYFpnOM5oZv-1"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/uniqLearn"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-10">
                <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                  <div className="bg-white p-5 h-full ">
                    <p className="text-[#1F1E1E99] mb-2.5">App</p>
                    <div>
                      <img src={project5} alt="" />
                    </div>
                  </div>

                  <div className="Portfolio-contant">
                    <div className="w-full ">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-white">Workista</h3>
                        <h4 className="text-white">(Job)</h4>
                      </div>
                      <div className="flex justify-between items-center mt-2.5">
                        <div>
                          <Link
                            to="https://www.figma.com/proto/oc2IcbgfPd55Q6yntMc2vE/Workiesta?page-id=820%3A1428&node-id=848-3225&viewport=363%2C826%2C0.34&t=rZWxkLYnW8Cd4xH4-1&scaling=scale-down&content-scaling=fixed"
                            target="_blank"
                            className="link-items"
                          >
                            <div>
                              <img src={figmalink} alt="" />
                            </div>
                          </Link>
                        </div>

                        <Link
                          to="/project/workista"
                          className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                        >
                          <h4>View Details</h4>
                          <img src={viewProjectArrow} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                  <div className="bg-white p-5 h-full ">
                    <p className="text-[#1F1E1E99] mb-2.5">Mobile App</p>
                    <div>
                      <img src={project3} alt="" />
                    </div>
                  </div>

                  <div className="Portfolio-contant">
                    <div className="w-full ">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-white">LearnBud AI</h3>
                        <h4 className="text-white">(AI Learning)</h4>
                      </div>
                      <div className="flex justify-between items-center mt-2.5">
                        <div>
                          <Link
                            to="https://www.figma.com/proto/g2R0K4VjNGVWrtIBE1HfTm/Tutor-Note-AI--Final-?page-id=0%3A1&node-id=20-86106&viewport=-1241%2C799%2C0.18&t=15Il487dsvCaB3Qi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=20%3A86106"
                            target="_blank"
                            className="link-items"
                          >
                            <div>
                              <img src={figmalink} alt="" />
                            </div>
                          </Link>
                        </div>

                        <Link
                          to="/project/learnbud"
                          className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                        >
                          <h4>View Details</h4>
                          <img src={viewProjectArrow} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="leftPortfolio-grid ">
              <div className="grid gap-10">
                <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                  <div className="bg-white h-full project-imgage">
                    <p className="text-[#1F1E1E99] mb-2.5">Web App</p>
                    <div>
                      <img src={project1} alt="" />
                    </div>
                  </div>

                  <div className="Portfolio-contant">
                    <div className="w-full ">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-white">Dmysti5</h3>
                        <h4 className="text-white">(Cybersecurity)</h4>
                      </div>

                      <div className="flex justify-between items-center mt-2.5">
                        <div>
                          <Link
                            to="https://www.figma.com/proto/M1mnxz7Kp2nCc9XfIJj6cO/Demysti5?page-id=281%3A2344&node-id=281-2345&t=iPrv67yWIXXMa402-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=281%3A2345&hide-ui=1"
                            target="_blank"
                            className="link-items"
                          >
                            <div>
                              <img src={figmalink} alt="" />
                            </div>
                          </Link>
                        </div>

                        <Link
                          to="/project/dmysti5"
                          className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                        >
                          <h4>View Details</h4>
                          <img src={viewProjectArrow} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                  <div className="bg-white p-5 h-full ">
                    <p className="text-[#1F1E1E99] mb-2.5">Web App</p>
                    <div>
                      <img src={project2} alt="" />
                    </div>
                  </div>

                  <div className="Portfolio-contant">
                    <div className="w-full ">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-white">Voicing AI</h3>
                        <h4 className="text-white">(AI Video)</h4>
                      </div>
                      <div className="flex justify-between items-center mt-2.5">
                        <div>
                          <Link
                            to="https://www.figma.com/proto/sgyXyzacg0ozPkOn9TGWyv/TheVoicing-Udemy--Internal-?page-id=0%3A1&node-id=1-33693&starting-point-node-id=13%3A4185&t=UTT9WEJBPZcOXfJ0-1"
                            target="_blank"
                            className="link-items"
                          >
                            <div>
                              <img src={figmalink} alt="" />
                            </div>
                          </Link>
                        </div>

                        <Link
                          to="/project/voicing"
                          className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                        >
                          <h4>View Details</h4>
                          <img src={viewProjectArrow} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trudentz */}
              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white  h-full project-imgage">
                  <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                  <div>
                    <img src={project6} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Trudentz</h3>
                      <h4 className="text-white">(Dental)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div className="flex items-center gap-2.5">
                        <Link
                          to="https://www.figma.com/proto/BGFsjBvs58XcZ3K2GjrGSG/Trudentz?page-id=0%3A1&node-id=288-242&viewport=-23%2C293%2C0.07&t=tCYJABtzQnVGwQqq-1&scaling=min-zoom&content-scaling=fixed"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                        <Link
                          to="https://trudentz.com/"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={link} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/trudentz"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6  rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Portfolio-grid">
              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white  h-full project-imgage">
                  <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                  <div>
                    <img src={project7} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Cogentshift</h3>
                      <h4 className="text-white">(Salesforce)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div className="flex items-center gap-2.5">
                        <Link
                          to="https://www.figma.com/proto/Lrp1hSDeAewZpTGx8YF9cM/Cogent-Shift?page-id=0%3A1&node-id=259-7420&node-type=frame&t=gAQCSi0oZHcoA0Mx-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=259%3A7420&hide-ui=1"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                        <Link
                          to="https://cogentshift.com/"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={link} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/cogentshift"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-10">
                <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                  <div className="bg-white p-5 h-full ">
                    <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                    <div>
                      <img src={project8} alt="" />
                    </div>
                  </div>

                  <div className="Portfolio-contant">
                    <div className="w-full ">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-white">Salviali</h3>
                        <h4 className="text-white">(Ecommerce)</h4>
                      </div>
                      <div className="flex justify-between items-center mt-2.5">
                        <div className="flex items-center gap-2.5">
                          <Link
                            to="https://www.figma.com/proto/9I1fVJFTegwqHx109EQX3E/Salviali-Integrated-Medicine?page-id=0%3A1&node-id=251-109&starting-point-node-id=251%3A109&t=elpPQBUcFJGyethU-1"
                            className="link-items"
                          >
                            <div>
                              <img src={figmalink} alt="" />
                            </div>
                          </Link>
                          <Link
                            to="https://salviali.com/"
                            className="link-items"
                          >
                            <div>
                              <img src={link} alt="" />
                            </div>
                          </Link>
                        </div>

                        <Link
                          to="/project/salviali"
                          className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                        >
                          <h4>View Details</h4>
                          <img src={viewProjectArrow} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                  <div className="bg-white p-5 h-full ">
                    <p className="text-[#1F1E1E99] mb-2.5">Mobile App</p>
                    <div>
                      <img src={project9} alt="" />
                    </div>
                  </div>

                  <div className="Portfolio-contant">
                    <div className="w-full ">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-white">Instant Smile</h3>
                        <h4 className="text-white">(Dental)</h4>
                      </div>
                      <div className="flex justify-between items-center mt-2.5">
                        <div>
                          <Link
                            to="https://www.figma.com/proto/CVSfIxEK6FSOXhTWJiei12/Instant-Smiles?page-id=57%3A53&node-id=76-20226&t=ODlS4EAzhAlHf2Dw-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=76%3A20226&hide-ui=1"
                            target="_blank"
                            className="link-items"
                          >
                            <div>
                              <img src={figmalink} alt="" />
                            </div>
                          </Link>
                        </div>

                        <Link
                          to="/project/instantsmiles"
                          className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                        >
                          <h4>View Details</h4>
                          <img src={viewProjectArrow} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="leftPortfolio-grid">
              <div className="grid gap-10">
                <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                  <div className="bg-white p-5 h-full ">
                    <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                    <div>
                      <img src={project11} alt="" />
                    </div>
                  </div>

                  <div className="Portfolio-contant">
                    <div className="w-full ">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-white"> Dermatology</h3>
                        <h4 className="text-white">(Skin Care)</h4>
                      </div>
                      <div className="flex justify-between items-center mt-2.5">
                        <div>
                          <Link
                            to="https://www.figma.com/proto/QCOAQX1eFi13NUGxoJERwV/INTEGRATIVE-DERMATOLOGY?page-id=0%3A1&node-id=1003-418&viewport=-12070%2C-2050%2C0.26&t=nb4HHeETsdKbCV0a-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1003%3A418"
                            target="_blank"
                            className="link-items"
                          >
                            <div>
                              <img src={figmalink} alt="" />
                            </div>
                          </Link>
                        </div>

                        <Link
                          to="/project/integrativedermatology"
                          className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                        >
                          <h4>View Details</h4>
                          <img src={viewProjectArrow} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                  <div className="bg-white p-5 h-full ">
                    <p className="text-[#1F1E1E99] mb-2.5">Mobile App</p>
                    <div>
                      <img src={project12} alt="" />
                    </div>
                  </div>

                  <div className="Portfolio-contant">
                    <div className="w-full ">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-white">Arouzed</h3>
                        <h4 className="text-white">(Dating)</h4>
                      </div>
                      <div className="flex justify-between items-center mt-2.5">
                        <div>
                          <Link
                            to="https://www.figma.com/proto/2Uhw839q3KSYMhIAyImSZH/Final-Arouzed?page-id=0%3A1&node-id=113-1547&t=92OP6TmcQADF75wX-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=113%3A1629&hide-ui=1"
                            target="_blank"
                            className="link-items"
                          >
                            <div>
                              <img src={figmalink} alt="" />
                            </div>
                          </Link>
                        </div>

                        <Link
                          to="/project/arouzed"
                          className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                        >
                          <h4>View Details</h4>
                          <img src={viewProjectArrow} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white  h-full project-imgage">
                  <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                  <div>
                    <img src={project10} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Youniverse Home Care</h3>
                      <h4 className="text-white">(Health Care)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div className="flex  items-center gap-2.5">
                        <Link
                          to="https://www.figma.com/proto/jRY59POwQdbsne6IiYD8Xq/Youniverse-Home-Care?page-id=0%3A1&node-id=303-1233&t=95gj1ofl2bGYnq5Y-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=303%3A1233&hide-ui=1"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                        <Link
                          to="https://ynhc.com.au/"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={link} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/youniversalhomecare"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Web App */}
          <div
            className={`Dashboard-items ${
              activeTab === "Web App" ? "block animate-fade" : "hidden"
            }`}
          >
            <div className="Dashboard-grid  mt-10">
              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Web App</p>
                  <div>
                    <img src={project4} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Uniqlearn</h3>
                      <h4 className="text-white">(Learning)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div>
                        <Link
                          to="https://www.figma.com/proto/Lpl14RL2PjUJ4d0zj1JK78/Uniqlearn?page-id=0%3A1&node-id=348-517&starting-point-node-id=348%3A517&t=7zHOPtYFpnOM5oZv-1"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/uniqLearn"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Web App</p>
                  <div>
                    <img src={project1} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Dmysti5</h3>
                      <h4 className="text-white">(Cybersecurity)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div>
                        <Link
                          to="https://www.figma.com/proto/M1mnxz7Kp2nCc9XfIJj6cO/Demysti5?page-id=281%3A2344&node-id=281-2345&t=iPrv67yWIXXMa402-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=281%3A2345&hide-ui=1"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/dmysti5"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] ">Web App</p>
                  <div>
                    <img src={project2} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Voicing AI</h3>
                      <h4 className="text-white">(AI Video)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div>
                        <Link
                          to="https://www.figma.com/proto/sgyXyzacg0ozPkOn9TGWyv/TheVoicing-Udemy--Internal-?page-id=0%3A1&node-id=1-33693&starting-point-node-id=13%3A4185&t=UTT9WEJBPZcOXfJ0-1"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/voicing"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Web App</p>
                  <div>
                    <img src={project5} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Workista</h3>
                      <h4 className="text-white">(Job)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div>
                        <Link
                          to="https://www.figma.com/proto/oc2IcbgfPd55Q6yntMc2vE/Workiesta?page-id=820%3A1428&node-id=848-3225&viewport=363%2C826%2C0.34&t=rZWxkLYnW8Cd4xH4-1&scaling=scale-down&content-scaling=fixed"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/workista"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Website */}
          <div
            className={`Website-items ${
              activeTab === "Website" ? "block animate-fade" : "hidden"
            }`}
          >
            <div className="Website-grid  mt-10">
              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                  <div>
                    <img src={project6} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Trudentz</h3>
                      <h4 className="text-white">(Dental)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div className="flex items-center gap-2.5">
                        <Link
                          to="https://www.figma.com/proto/BGFsjBvs58XcZ3K2GjrGSG/Trudentz?page-id=0%3A1&node-id=288-242&viewport=-23%2C293%2C0.07&t=tCYJABtzQnVGwQqq-1&scaling=min-zoom&content-scaling=fixed"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                        <Link
                          to="https://trudentz.com/"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={link} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/trudentz"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                  <div>
                    <img src={project7} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Cogentshift</h3>
                      <h4 className="text-white">(Salesforce)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div className="flex items-center gap-2.5">
                        <Link
                          to="https://www.figma.com/proto/Lrp1hSDeAewZpTGx8YF9cM/Cogent-Shift?page-id=0%3A1&node-id=259-7420&node-type=frame&t=gAQCSi0oZHcoA0Mx-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=259%3A7420&hide-ui=1"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                        <Link
                          to="https://cogentshift.com/"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={link} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/cogentshift"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                  <div>
                    <img src={project8} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Salviali</h3>
                      <h4 className="text-white">(Ecommerce)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div className="flex items-center gap-2.5">
                        <Link
                          to="https://www.figma.com/proto/9I1fVJFTegwqHx109EQX3E/Salviali-Integrated-Medicine?page-id=0%3A1&node-id=251-109&starting-point-node-id=251%3A109&t=elpPQBUcFJGyethU-1"
                          className="link-items"
                          target="_blank"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                        <Link
                          to="https://salviali.com/"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={link} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/salviali"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                  <div>
                    <img src={project10} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Youniverse Home Care</h3>
                      <h4 className="text-white">(Health Care)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div className="flex  items-center gap-2.5">
                        <Link
                          to="https://www.figma.com/proto/jRY59POwQdbsne6IiYD8Xq/Youniverse-Home-Care?page-id=0%3A1&node-id=303-1233&t=95gj1ofl2bGYnq5Y-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=303%3A1233&hide-ui=1"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                        <Link
                          to="https://ynhc.com.au/"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={link} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/youniversalhomecare"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                  <div>
                    <img src={project11} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white"> Dermatology</h3>
                      <h4 className="text-white">(Skin Care)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div>
                        <Link
                          to="https://www.figma.com/proto/QCOAQX1eFi13NUGxoJERwV/INTEGRATIVE-DERMATOLOGY?page-id=0%3A1&node-id=1003-418&viewport=-12070%2C-2050%2C0.26&t=nb4HHeETsdKbCV0a-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1003%3A418"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/integrativedermatology"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App */}
          <div
            className={`App-items ${
              activeTab === "Mobile App" ? "block animate-fade" : "hidden"
            }`}
          >
            <div className="App-grid  mt-10">
              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Mobile App</p>
                  <div>
                    <img src={project3} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">LearnBud AI</h3>
                      <h4 className="text-white">(AI Learning)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div>
                        <Link
                          to="https://www.figma.com/proto/g2R0K4VjNGVWrtIBE1HfTm/Tutor-Note-AI--Final-?page-id=0%3A1&node-id=20-86106&viewport=-1241%2C799%2C0.18&t=15Il487dsvCaB3Qi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=20%3A86106"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/learnbud"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Moblie App</p>
                  <div>
                    <img src={project9} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Instant Smile</h3>
                      <h4 className="text-white">(Dental)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div>
                        <Link
                          to="https://www.figma.com/proto/CVSfIxEK6FSOXhTWJiei12/Instant-Smiles?page-id=57%3A53&node-id=76-20226&t=ODlS4EAzhAlHf2Dw-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=76%3A20226&hide-ui=1"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/instantsmiles"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Mobile App</p>
                  <div>
                    <img src={project12} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Arouzed</h3>
                      <h4 className="text-white">(Dating)</h4>
                    </div>
                    <div className="flex justify-between items-center mt-2.5">
                      <div>
                        <Link
                          to="https://www.figma.com/proto/2Uhw839q3KSYMhIAyImSZH/Final-Arouzed?page-id=0%3A1&node-id=113-1547&t=92OP6TmcQADF75wX-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=113%3A1629&hide-ui=1"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                      </div>

                      <Link
                        to="/project/arouzed"
                        className="flex gap-2.5 bg-[#FFFFFF] py-3 px-6 rounded-[40px] transition-all duration-300 hover:bg-[--primary-color]"
                      >
                        <h4>View Details</h4>
                        <img src={viewProjectArrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Cta></Cta>
      </div>

      <Footer></Footer>
    </div>
  );
}
