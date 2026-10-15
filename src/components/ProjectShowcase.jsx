import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import FigmaMark from "../assets/images/figma-link.png";
import WebsiteLink from "../assets/images/link.png";



function ProjectActions({ project }) {
  return (
    <div className="showcase-actions">
      <a
        href={project.figmaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="showcase-icon-btn"
        aria-label="View Design"
      >
        <span>
          <img src={FigmaMark} alt="Figma" />
        </span>
      </a>
      {project.websiteUrl && (
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="showcase-icon-btn"
          aria-label="Visit Website"
        >
          <span>
            <img src={WebsiteLink} alt="Website" />
          </span>
        </a>
      )}
    </div>
  );
}

const projects = [
  {
    title: "UniqLearn",
    alt: "UniqLearn education dashboard – teacher analytics web app UI/UX design case study",
    image: "/uniqlearn/uniqlearn.png",
    figmaUrl:
      "https://www.figma.com/proto/Lpl14RL2PjUJ4d0zj1JK78/Uniqlearn?page-id=0%3A1&node-id=348-517&starting-point-node-id=348%3A517&t=7zHOPtYFpnOM5oZv-1",
    detailsUrl: "/project/uniqLearn",
  },
  {
    title: "Integrative Dermatology",
    alt: "Integrative Dermatology clinic website design case study – desktop and mobile",
    image: "/integrative-dermatology.png",
    figmaUrl:
      "https://www.figma.com/proto/QCOAQX1eFi13NUGxoJERwV/INTEGRATIVE-DERMATOLOGY?page-id=0%3A1&node-id=1003-418&viewport=-12070%2C-2050%2C0.26&t=nb4HHeETsdKbCV0a-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1003%3A418",
    detailsUrl: "/project/integrativedermatology",
    websiteUrl: "https://integrativedermatology.co/",
  },
  {
    title: "LearnBud AI",
    alt: "LearnBud AI tutoring mobile app UI/UX design case study",
    image: "/learnbud/learnbud.png",
    figmaUrl:
      "https://www.figma.com/proto/g2R0K4VjNGVWrtIBE1HfTm/Tutor-Note-AI--Final-?page-id=0%3A1&node-id=20-86106&viewport=-1241%2C799%2C0.18&t=15Il487dsvCaB3Qi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=20%3A86106",

    detailsUrl: "/project/learnbud",
  },
  {
    title: "DTS Splint",
    alt: "DTS Splint AI-powered dental splint design software UI case study",
    image: "/dts-splint.png",
    figmaUrl: "https://www.figma.com/proto/5dkeIJSt6cSiKwKuSHJjnu/Instant-Smiles-DTS-SPLINT?node-id=853-6703&viewport=104%2C56%2C0.05&t=T3WuTflTt1kTXHYB-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    detailsUrl: "/project/trudentz",
  },
];

export default function ProjectShowcase() {
  const scrollRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [travel, setTravel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setActive(
      Math.min(projects.length - 1, Math.floor(progress * projects.length))
    );
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;
    const updateTravel = () => {
      if (viewportRef.current && trackRef.current) {
        setTravel(
          Math.max(
            0,
            trackRef.current.scrollWidth - viewportRef.current.clientWidth
          )
        );
      }
    };
    updateTravel();
    window.addEventListener("resize", updateTravel);
    const observer = new ResizeObserver(updateTravel);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    return () => {
      window.removeEventListener("resize", updateTravel);
      observer.disconnect();
    };
  }, [isMobile]);

  // Mobile horizontal scroll handling
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    if (clientWidth > 0) {
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setMobileActive(Math.min(projects.length - 1, Math.max(0, index)));
    }
  };

  const handleMobilePrev = () => {
    if (mobileScrollRef.current) {
      const cardWidth = mobileScrollRef.current.clientWidth * 0.85;
      mobileScrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const handleMobileNext = () => {
    if (mobileScrollRef.current) {
      const cardWidth = mobileScrollRef.current.clientWidth * 0.85;
      mobileScrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section id="latest-work" className="relative w-full">
      {/* Desktop Sticky Horizontal Scroll Track (md and up) */}
      <div className="hidden md:block">
        <div ref={scrollRef} className="showcase-scroll" aria-label="Latest Work">
          <div ref={viewportRef} className="showcase-sticky">
            <Reveal className="text-center mb-4 sm:mb-8">
              <h2 className="text-[#1F1E1E]">Selected Work</h2>
              <p className="section-lead">
                Recent web and mobile products I designed.
                <br />
                Each one is built to feel clear, simple, and useful.
              </p>
            </Reveal>

            <motion.div
              ref={trackRef}
              className="showcase-track"
              style={{ x }}
            >
              {projects.map((project, index) => (
                <div key={project.title} className="showcase-step">
                  <article
                    className={`showcase-card group ${
                      index === active ? "is-active" : ""
                    }`}
                  >
                    {/* Clickable Image with Hover Arrow View Button */}
                    <div
                     
                      className="showcase-art block relative overflow-hidden"
                    >
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Meta Bar: Title & Action Buttons */}
                    <div className="showcase-meta">
                      <h3 className="text-base font-semibold tracking-[-0.01em] text-[#151618]">
                        {project.title}
                      </h3>
                      <ProjectActions project={project} />
                    </div>
                  </article>
                </div>
              ))}
            </motion.div>

            {/* View All Button */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <Link
                to="/mywork"
                className="border border-[--primary-color] bg-[--primary-color] text-white py-3 px-6 inline-flex rounded-[40px] font-light transition-all duration-300 hover:bg-transparent hover:border-[#1E1E1E] hover:text-[#1E1E1E]"
              >
                <h4>View All</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Touch Snap Carousel (under md) */}
      <div className="block md:hidden py-10 px-4">
        <Reveal className="text-center mb-6">
          <h2 className="text-[#1F1E1E]">Selected Work</h2>
          <p className="section-lead">
            Recent web and mobile products I designed.
            <br />
            Each one is built to feel clear, simple, and useful.
          </p>
        </Reveal>

        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none px-2"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="w-[85vw] max-w-[380px] shrink-0 snap-center"
            >
              <article className="group flex flex-col rounded-2xl bg-[#cbc9c93d] p-3.5 sm:p-4 shadow-sm border border-black/5 transition-all">
                <a
                  href={project.websiteUrl || project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#e4e4e4] group/mobileArt block"
                >
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/mobileArt:scale-[1.03]"
                  />

                  {/* Top-Right Arrow Indicator on Mobile */}
                  <div className="absolute top-3 right-3 z-10 size-9 rounded-full bg-white/95 text-[#0c0d10] border border-white/40 grid place-items-center shadow-lg">
                    <ArrowUpRight size={15} strokeWidth={2.4} />
                  </div>
                </a>

                <div className="mt-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-[0.95rem] font-semibold tracking-tight text-[#151618]">
                    {project.title}
                  </h3>
                  <ProjectActions project={project} />
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Navigation Arrows & Indicators */}
        <div className="mt-4 flex items-center justify-between px-2">
          <div className="flex items-center gap-1.5">
            {projects.map((p, idx) => (
              <span
                key={p.title}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === mobileActive
                    ? "w-6 bg-[--primary-color]"
                    : "w-1.5 bg-[#151618]/20"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleMobilePrev}
              disabled={mobileActive === 0}
              aria-label="Previous project"
              className="inline-grid size-8 place-items-center rounded-full border border-black/10 bg-white text-[#151618] shadow-sm transition-all disabled:opacity-30"
            >
              <ArrowLeft size={14} strokeWidth={2.2} />
            </button>
            <button
              onClick={handleMobileNext}
              disabled={mobileActive === projects.length - 1}
              aria-label="Next project"
              className="inline-grid size-8 place-items-center rounded-full border border-black/10 bg-white text-[#151618] shadow-sm transition-all disabled:opacity-30"
            >
              <ArrowRight size={14} strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link
            to="/mywork"
            className="border border-[--primary-color] bg-[--primary-color] text-white py-3 px-6 inline-flex rounded-[40px] font-light transition-all duration-300 hover:bg-transparent hover:border-[#1E1E1E] hover:text-[#1E1E1E]"
          >
            <h4>View All</h4>
          </Link>
        </div>
      </div>
    </section>
  );
}
