import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import aboutimg from "../assets/images/aboutus-img.png";
import hand from "../assets/images/hand.png";
import { Link } from "react-router-dom";
import figma from "../assets/images/figma.png";
import adobe from "../assets/images/adobe.png";
import xdimg from "../assets/images/xd-img.png";
import javascript from "../assets/images/javascript.png";
import photoshop from "../assets/images/photoshop.png";
import reactnative from "../assets/images/react-native.png";
import css from "../assets/images/css.png";
import bootstrap from "../assets/images/bootstrap.png";
import wordpress from "../assets/images/wordpress.png";
import nextjs from "../assets/images/nextjs.png";
import indiaicon from "../assets/images/icons/india.svg";
import ukicon from "../assets/images/icons/uk-icon.svg";
import useicon from "../assets/images/icons/use-icon.svg";
import Testimonial from "../components/Testimonial";
import Ourclients from "../components/Ourclient";
import Reveal from "../components/Reveal";

export default function Aboutus() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(1);

  // TIMELINE DATA

 
  const steps = [
    {
      title: "UI Designer + Web Designer",
      duration: "Apr 2011– Mar 2018",
      bullets: ["Siya Soft, India"],
      images: indiaicon,
    },
    {
      title: "UI Designer + Web Designer ( Level 2 ) – Remote Staff",
      duration: "Jan 2014 – Mar 2016",
      bullets: ["SFWM LTD (Super future Multi Services), London, UK"],
      images: ukicon,
    },
    {
      title: "Web & Graphics Designer – Remote Staff",
      duration: "Feb 2013 – May 2014",
      bullets: ["Virtual Assistant Staffing - Washington, USA"],
      images: useicon,
    },
    {
      title: "UI Designer + Web Designer",
      duration: "Apr 2018 – Apr 2020",
      bullets: ["Differenz System, India"],
      images: indiaicon,
    },
    {
      title: "Sr. UI/UX Designer and Frontend Designer + Team Leader",
      duration: "Apr 2020 – Apr 2021",
      bullets: ["Differenz System, India"],
      images: indiaicon,
    },
    {
      title: "Sr. UI/UX Designer – Remote Staff",
      duration: "Feb 2022 – Dec 2022",
      bullets: ["Engine B, UK"],
      images: ukicon,
    },
    {
      title: "Lead UX Designer + Frontend Designer",
      duration: "Apr 2021 – Present",
      bullets: ["Codersbrain"],
      images: indiaicon,
    },
  ];

  











  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.1;
      const end = windowHeight * 0.9;
      let p = (rect.top - start) / (end - start);
      p = 1 - Math.min(1, Math.max(0, p));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="containerX relative z-10">
        {/* <div className="flex justify-center items-center mt-[100px]">
          <img src={aboutimg} alt="" />
        </div> */}

        <Reveal className="grid justify-center text-center sm:mt-[60px] mt-[40px]">
          <h1 className="flex  justify-center font-medium gap-2 items-center">
            “Hey!{" "}
            <img
              src={hand}
              alt=""
              className="sm:w-[62px] w-[40px] sm:h-[62px] h-[40px] hand-wave"
            />{" "}
            I’m Jatin Chauhan”
          </h1>
          <h2 className="sm:mt-[20px] mt-[10px] font-medium flex gap-2 items-center Designe-text">
            I Am
            <span className="typewriter text-[--primary-color]"></span>
            Designer & Developer
          </h2>

          <div>
            <Link
              to="https://mail.google.com/mail/?view=cm&fs=1&to=chauhanjatin.25@gmail.com"
              target="_blank"
              className="md:my-[50px] my-[30px] border border-[--primary-color] bg-[--primary-color] text-white py-3 px-6 inline-flex rounded-[40px] font-light transition-all duration-300 hover:bg-transparent hover:border-[#1E1E1E] hover:text-[#1E1E1E]"
            >
              <h4>Say "Hello Jatin"</h4>
            </Link>
          </div>
        </Reveal>

        {/* Work Experience */}
        <div>
          <Reveal>
            <h2 className="sm:mt-[100px] mt-[40px] text-center">
              Work Experience
            </h2>
            <p className="section-lead mb-[48px] ">
              Ten years across design and frontend roles.
              <br />
              From early studio work to leading product design.
            </p>
          </Reveal>

          <Reveal variant="fade">
          <div className="flex mt-8">
            <div className="flex gap-6 lg:gap-10 w-full">
              <div
                ref={containerRef}
                className="relative flex flex-col items-center"
              >
                <div className="absolute top-[12px] bottom-0 w-[3px] flex flex-col">
                  <div
                    style={{ height: `${progress * 100}%` }}
                    className="border-r-2 border-dashed border-[--primary-color]"
                  ></div>
                  <div className="flex-1 border-r-2 border-dashed border-gray-400"></div>
                </div>

                {steps.map((step, index) => {
                  const lineProgress = progress * steps.length;
                  const isCompleted = lineProgress >= index + 1;

                  return (
                    <div
                      key={index}
                      className="relative flex flex-col items-center pt-2 dot-items"
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-[5px] ${
                          isCompleted
                            ? "border-white bg-[--primary-color]"
                            : "border-white bg-black"
                        }`}
                      ></div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-8 w-full">
                {steps.map((step, index) => (
                  <div key={index} className="">
                    <div className="sm:flex block justify-between items-center">
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-medium md:text-[18px]">
                          {step.title}
                        </h3>
                        {step.images && <img src={step.images} alt="" />}
                      </div>
                      <div>
                        <span className="text-[#1E1E1E80] text-sm">Year </span>
                        <h4 className="text-[#1E1E1E] font-light text-base">
                          {step.duration}
                        </h4>
                      </div>
                    </div>

                    <ul className=" font-normal mt-2.5">
                      <li className="text-[#1E1E1E80] border-b-1 pb-2.5 border-b border-[rgb(231 231 231)] ">
                        {step.bullets[0]}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </Reveal>
        </div>

        {/* Education */}
        <Reveal className="educationBg_img rounded-[40px]">
          <div className="border-[10px] border-white rounded-[40px] mt-[100px] py-[35px] lg:py-[50px] px-[20px] shadow-[0_0_10px_0_#00000014]">
            <h2 className="text-center mb-[30px] lg:mb-[60px] font-medium">
              Education
            </h2>
            <div className="sm:flex grid sm:gap-0 gap-8 justify-around items-center text-center">
              <div className="">
                <h4 className="text-[#1E1E1E80]">2007</h4>
                <p className="sm:text-[22px] text-[18px] my-[10px]">
                  Bachelor of Science (Mathematics)
                </p>
                <h4 className="text-[#1E1E1E80]">
                  Sir. P.T. Science College, VNSGU, SURAT
                </h4>
              </div>

              <div className="">
                <h4 className="text-[#1E1E1E80]">2010</h4>
                <p className="sm:text-[22px] text-[18px] my-[10px]">
                  Master of Computer Applications
                </p>
                <h4 className="text-[#1E1E1E80]">
                  Department of Computer Science, VNSGU, SURAT
                </h4>
              </div>
              <div className="">
                <h4 className="text-[#1E1E1E80]">2026</h4>
                <p className="sm:text-[22px] text-[18px] my-[10px]">
                Google UX Design 
                </p>
                <h4 className="text-[#1E1E1E80]">
                Professional Certificate by Google
                </h4>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Tech Stack */}
        <Reveal className="mb-[100px]">
          <h2 className="text-center mt-[100px]">Tech Stack</h2>
          <p className="section-lead">
            The tools I use to design and build.
            <br />
            From Figma and Adobe to the frontend I ship with.
          </p>

          <div className="tech-stack">
            <div className="bg-white rounded-[10px] TechStack-items">
              <img src={figma} alt="" className="" />
            </div>

            <div className="bg-white rounded-[10px] TechStack-items">
              <img src={adobe} alt="" />
            </div>

            <div className="bg-white rounded-[10px] TechStack-items">
              <img src={xdimg} alt="" />
            </div>

            <div className="bg-white rounded-[10px] TechStack-items">
              <img src={javascript} alt="" />
            </div>

            <div className="bg-white rounded-[10px] TechStack-items">
              <img src={photoshop} alt="" />
            </div>

            <div className="bg-white rounded-[10px] TechStack-items">
              <img src={reactnative} alt="" />
            </div>

            <div className="bg-white rounded-[10px] TechStack-items">
              <img src={css} alt="" />
            </div>

            <div className="bg-white rounded-[10px] TechStack-items">
              <img src={bootstrap} alt="" />
            </div>
            <div className="bg-white rounded-[10px] TechStack-items">
              <img src={wordpress} alt="" />
            </div>

            <div className="bg-white rounded-[10px] TechStack-items">
              <img src={nextjs} alt="" />
            </div>
          </div>
        </Reveal>

        {/* <Testimonial></Testimonial> */}

        <Ourclients />
      </div>
      <Footer></Footer>
    </div>
  );
}
