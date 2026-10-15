import instagramicon from "../assets/images/icons/instagram-icon.svg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Ourclients from "../components/Ourclient";
import Industry from "../components/Industry";
import ProjectShowcase from "../components/ProjectShowcase";
import Cta from "../components/Cta";
import Reveal from "../components/Reveal";
export default function Hero() {
  return (
    <div>
      <div className="containerX relative z-10">
        <div className="text-center">
          <div className="sm:h-[calc(100vh-70px)] h-full flex justify-center items-center">
            <Reveal className="hero-intro">
              <ul className="hero-pills">
                <li>UI/UX Design</li>
                <li>Web Design</li>
                <li>Mobile App</li>
              </ul>

              <h1>
                <span>Hello!</span> I design digital experiences that work beautifully and deliver results.

              </h1>

              <h4 className="hero-lead">
              I help businesses turn complex ideas into simple, intuitive, and engaging digital products through thoughtful UX design and frontend development.
              </h4>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=chauhanjatin.25@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="my-[50px] border border-[--primary-color] bg-[--primary-color] text-white py-3 px-6 inline-flex rounded-[40px] transition-all duration-300 ease-in-out
                 hover:bg-transparent
                 hover:border-[#1E1E1E]
                 hover:text-[#1E1E1E]
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
            </Reveal>
          </div>

          <Reveal variant="fade" delay={120}>
            <Ourclients />
          </Reveal>
        </div>
      </div>

      {/* Latest Work Section with Smooth Scroll-Driven Horizontal Card Track */}
      <ProjectShowcase />

      <Industry />
<div className="containerX relative z-10">
  <Reveal>
    <Cta/>
  </Reveal>
</div>

      <Footer />
    </div>
  );
}
