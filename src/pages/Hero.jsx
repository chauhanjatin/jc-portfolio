import satisfiedclients from "../assets/images/satisfied-clients.png";
import instagramicon from "../assets/images/icons/instagram-icon.svg";
import upworkring from "../assets/images/upwork-ring.png";
import uplogo from "../assets/images/up-logo.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import figmalink from "../assets/images/figma-link.png";
import link from "../assets/images/link.png";
import viewProjectArrow from "../assets/images/icons/viewproject-arrow.svg";

export default function Hero() {
  return (
    <div>
      <div className="containerX relative z-10">
        <div className="text-center">
          <div className="sm:h-[calc(100vh-70px)] h-full flex justify-center items-center">
            <div>
              {/* <div className="flex justify-center sm:mt-0 mt-6">
                <div className="mb-2.5 py-2 px-2.5 inline-flex items-center gap-2.5 bg-white rounded-[80px]">
                  <div>
                    <img src={satisfiedclients} alt="" />
                  </div>
                  <div>
                    <strong>100+</strong> Satisfied Clients
                  </div>
                </div>
              </div> */}

              <h1 className="text-[#1F1E1E]">
                I design digital experiences that connec brands with users
                through creativity and strategy.
              </h1>

              <h4 className="text-[#1F1E1E80] mt-[30px] sm:mx-[126px] mx-[20px]">
                Creative UI/UX Designer with 10+ years of experience crafting
                responsive, user-focused web and mobile apps. Blending
                aesthetics with functionality, I help brands build seamless and
                meaningful digital experiences that deliver both beauty and
                value.
              </h4>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=chauhanjatin.25@gmail.com"
                rel="noopener noreferrer"
                className="my-[50px] border border-[#1E1E1E] py-3 px-6 inline-flex rounded-[40px] transition-all duration-300 ease-in-out
                 hover:bg-[--primary-color]
                 hover:border-transparent
                 hover:text-white
                 cursor-pointer"
              >
                <h4>Say "Hello Jatin"</h4>
              </a>

              <div className="sm:flex grid justify-center items-center xl:mt-[60px] mt-[40px] gap-5">
                <h4 className="italic">Also explore my creative side</h4>
                <div>
                  <Link
                    className="flex gap-2.5 justify-center sm:justify-normal "
                    to="https://www.instagram.com/jatin.an.artist"
                    target="_blank"
                  >
                    <img src={instagramicon} alt="" />
                    <h4 className="underline">@jatin.an.artis</h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mt-0 mt-10">
            <h2>Latest Work</h2>
            <div className="Portfolio-grid">
              <div className="relative overflow-hidden rounded-[40px] Portfolio-items">
                <div className="bg-white p-5 h-full ">
                  <p className="text-[#1F1E1E99] text-start mb-2.5">Web App</p>
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
                    <p className="text-[#1F1E1E99] text-start mb-2.5">App</p>
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
                    <p className="text-[#1F1E1E99] text-start mb-2.5">
                      Mobile App
                    </p>
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
                    <p className="text-[#1F1E1E99] text-start mb-2.5">
                      Web App
                    </p>
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
                    <p className="text-[#1F1E1E99] text-start mb-2.5">
                      Web App
                    </p>
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
                  <p className="text-[#1F1E1E99] text-start mb-2.5">Website</p>
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

            <Link
              to="/mywork"
              className="my-[50px] border border-[#1E1E1E] py-3 px-6 inline-flex rounded-[40px] font-light transition-all duration-300 hover:bg-[--primary-color] hover:border-transparent"
            >
              <h4>View All</h4>
            </Link>
          </div>
        </div>
      </div>

      <Footer></Footer>

      {/* <Link
        className="upwork-logo hidden sm:block"
        to="https://upwork.com/freelancers/jatinchauhan"
        target="_blank"
      >
        <img src={upworkring} alt="" className="circle-text" />
        <img src={uplogo} alt="" className="upwork-icon" />
      </Link> */}
    </div>
  );
}
