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
import project13 from "../assets/images/project13.png";
import project14 from "../assets/images/project14.png";
import project15 from "../assets/images/project15.png";
import figmalink from "../assets/images/figma-link.png";
import link from "../assets/images/link.png";
import viewProjectArrow from "../assets/images/icons/viewproject-arrow.svg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import Reveal from "../components/Reveal";

export default function Mywork() {
  const [activeTab, setActiveTab] = useState("All");
  const handleFilter = (type) => {
    setActiveTab(type);
  };

  return (
    <div>
      <div className="containerX relative z-10">
        <div className="work-page">
          <Reveal className="work-showcase-head">
            <h2>Work Showcase</h2>
            <ul className="work-tabs">
              {["All", "Web App", "Website", "Mobile App"].map((type) => (
                <li
                  key={type}
                  onClick={() => handleFilter(type)}
                  className={activeTab === type ? "is-active" : ""}
                >
                  {type}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* All */}
          <Reveal variant="fade">
          <div
            className={`All-items ${
              activeTab === "All" ? "block animate-fade" : "hidden"
            }`}
          >
            <div className="work-two-grid">
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
                    <div className="flex justify-end items-center mt-2.5">
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

                      
                      
                    </div>
                  </div>
                </div>
              </div>

                <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                  <div className="bg-white p-5 h-full ">
                    <p className="text-[#1F1E1E99] mb-2.5">App</p>
                    <div>
                      <img src={project14} alt="" />
                    </div>
                  </div>

                  <div className="Portfolio-contant">
                    <div className="w-full ">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-white">DTS Splint</h3>
                        <h4 className="text-white">(Dental)</h4>
                      </div>
                      <div className="flex justify-end items-center mt-2.5">
                        <div>
                          <Link
                            to="https://www.figma.com/proto/5dkeIJSt6cSiKwKuSHJjnu/Instant-Smiles-DTS-SPLINT?node-id=853-6703&viewport=104%2C56%2C0.05&t=T3WuTflTt1kTXHYB-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                            target="_blank"
                            className="link-items"
                          >
                            <div>
                              <img src={figmalink} alt="" />
                            </div>
                          </Link>
                        </div>

                       
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
                      <div className="flex justify-end items-center mt-2.5">
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

                       
                       
                      </div>
                    </div>
                  </div>
                </div>

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

                      <div className="flex justify-end items-center mt-2.5">
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
                      <div className="flex justify-end items-center mt-2.5">
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
                    <div className="flex justify-end items-center mt-2.5">
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

                    
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white  h-full project-imgage">
                  <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                  <div>
                    <img src={project11} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Dermatology</h3>
                      <h4 className="text-white">(Skin Care)</h4>
                    </div>
                    <div className="flex justify-end items-center mt-2.5">
                      <div className="flex items-center gap-2.5">
                        <Link
                          to="https://www.figma.com/proto/QCOAQX1eFi13NUGxoJERwV/INTEGRATIVE-DERMATOLOGY?page-id=0%3A1&node-id=1003-418&viewport=-12070%2C-2050%2C0.26&t=nb4HHeETsdKbCV0a-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1003%3A418"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                        <Link
                          to="https://integrativedermatology.co/"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={link} alt="" />
                          </div>
                        </Link>
                      </div>

                  
                    </div>
                  </div>
                </div>
              </div>

                <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                  <div className="bg-white p-5 h-full ">
                    <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                    <div>
                      <img src={project13} alt="" />
                    </div>
                  </div>

                  <div className="Portfolio-contant">
                    <div className="w-full ">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-white">Vioc</h3>
                        <h4 className="text-white">(IVF Center)</h4>
                      </div>
                      <div className="flex justify-end items-center mt-2.5">
                        <div className="flex items-center gap-2.5">
                          <Link
                            to="https://www.figma.com/proto/LWlR78x72iTEdf07NugTlc/VIOC?node-id=129-276&viewport=-1400%2C280%2C0.05&t=W35dkL9huFtip9XE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                            className="link-items"
                          >
                            <div>
                              <img src={figmalink} alt="" />
                            </div>
                          </Link>
                          <Link
                          target="_blank"
                            to="https://vioc.in/"
                            className="link-items"
                          >
                            <div>
                              <img src={link} alt="" />
                            </div>
                          </Link>
                        </div>

                     
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                  <div className="bg-white p-5 h-full ">
                    <p className="text-[#1F1E1E99] mb-2.5">Mobile App</p>
                    <div>
                      <img src={project15} alt="" />
                    </div>
                  </div>

                  <div className="Portfolio-contant">
                    <div className="w-full ">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-white">KidLoop</h3>
                        <h4 className="text-white">(Children's Clothing)</h4>
                      </div>
                      <div className="flex justify-end items-center mt-2.5">
                        <div>
                          <Link
                            to="https://www.figma.com/proto/cfryUDmCQEQcL1pC3XkgW5/KidLoop---Children-s-clothing?node-id=161-11666&viewport=-8893%2C216%2C0.46&t=sZai0b6E09Yf1weU-1&scaling=scale-down&content-scaling=fixed&page-id=161%3A11084"
                            target="_blank"
                            className="link-items"
                          >
                            <div>
                              <img src={figmalink} alt="" />
                            </div>
                          </Link>
                        </div>

                    
                      </div>
                    </div>
                  </div>
                </div>
            </div>

        
          </div>
          </Reveal>

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
                    <div className="flex justify-end items-center mt-2.5">
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
                    <div className="flex justify-end items-center mt-2.5">
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
                    <div className="flex justify-end items-center mt-2.5">
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

                  
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Web App</p>
                  <div>
                    <img src={project14} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">DTS Splint</h3>
                      <h4 className="text-white">(Dental)</h4>
                    </div>
                    <div className="flex justify-end items-center mt-2.5">
                      <div>
                        <Link
                          to="https://www.figma.com/proto/5dkeIJSt6cSiKwKuSHJjnu/Instant-Smiles-DTS-SPLINT?node-id=853-6703&viewport=104%2C56%2C0.05&t=T3WuTflTt1kTXHYB-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                      </div>

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
                    <div className="flex justify-end items-center mt-2.5">
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

                    
                    </div>
                  </div>
                </div>
              </div>  

              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full">
                  <p className="text-[#1F1E1E99] mb-2.5">Website</p>
                  <div>
                    <img src={project13} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">Vioc</h3>
                      <h4 className="text-white">(IVF Center)</h4>
                    </div>
                    <div className="flex justify-end items-center mt-2.5">
                      <div className="flex  items-center gap-2.5">
                        <Link
                          to="https://www.figma.com/proto/LWlR78x72iTEdf07NugTlc/VIOC?node-id=129-276&viewport=-1400%2C280%2C0.05&t=W35dkL9huFtip9XE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                        <Link
                          to="https://vioc.in/"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={link} alt="" />
                          </div>
                        </Link>
                      </div>

                     
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
                    <div className="flex justify-end items-center mt-2.5">
                      <div className="flex items-center gap-2.5">
                        <Link
                          to="https://www.figma.com/proto/QCOAQX1eFi13NUGxoJERwV/INTEGRATIVE-DERMATOLOGY?page-id=0%3A1&node-id=1003-418&viewport=-12070%2C-2050%2C0.26&t=nb4HHeETsdKbCV0a-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1003%3A418"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={figmalink} alt="" />
                          </div>
                        </Link>
                        <Link
                          to="https://integrativedermatology.co/"
                          target="_blank"
                          className="link-items"
                        >
                          <div>
                            <img src={link} alt="" />
                          </div>
                        </Link>
                      </div>

                     
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
                    <img src={project15} alt="" />
                  </div>
                </div>
                <div className="Portfolio-contant">
                  <div className="w-full ">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-white">KidLoop</h3>
                      <h4 className="text-white">(Children's Clothing)</h4>
                    </div>
                    <div className="flex justify-end items-center mt-2.5">
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

                    </div>
                  </div>
                </div>
              </div>

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
                    <div className="flex justify-end items-center mt-2.5">
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
