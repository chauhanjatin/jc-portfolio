import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/projects.json";
import Cta from "../components/Cta";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = data.find((item) => item.slug === slug);
  if (!project) {
    return <h2 className="text-center mt-20">Project Not Found</h2>;
  }
  return (
    <div>
      <div className="containerX relative z-10">
        <div className="sm:mt-[150px] mt-[80px] flex items-center justify-between">
          <Link to="/mywork">
            <FontAwesomeIcon icon={faArrowLeft} className="sm:text-[30px] text-[20px]" />
          </Link>
          <h2 className="text-center ">{project.title}</h2>
          <div></div>
        </div>

        <div className="my-[60px] sm:my-[40px]">
          <img src={project.coverImage} alt="" className="w-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-4">
            <div className="border-[10px] border-white rounded-[40px] sm:p-[30px] p-[15px] sticky top-[50px]">
              <div className="mb-5">
                <h4 className="text-[#1E1E1E80] font-light">Project</h4>
                <h4 className="mt-[10px] font-medium">{project.title}</h4>
              </div>

              <div className="mb-5">
                <h4 className="text-[#1E1E1E80] font-light">Category</h4>
                <h4 className="mt-[10px] font-medium">{project.category}</h4>
              </div>

              <div className="mb-5">
                <h4 className="text-[#1E1E1E80] font-light">Industry</h4>
                <h4 className="mt-[10px] font-medium">{project.industry}</h4>
              </div>

              <div className="mb-5">
                <h4 className="text-[#1E1E1E80] font-light">Role</h4>
                <h4 className="mt-[10px] font-medium">{project.role}</h4>
              </div>

              <div className="mb-5">
                <h4 className="text-[#1E1E1E80] font-light">Tasks</h4>
                <h4 className="mt-[10px] font-medium">{project.tasks}</h4>
              </div>

              <div className="mb-5">
                <h4 className="text-[#1E1E1E80] font-light">Year</h4>
                <h4 className="mt-[10px] font-medium">{project.year}</h4>
              </div>

              <div className={`grid gap-[10px] items-center ${
                  project.WebsiteLink ? "grid-cols-2" : "grid-cols-1"
                }`}>
                {/* Figma Button */}
                <div>
                  <Link
                    to={project.figmaLink || "#"}
                    target="_blank"
                    className="bg-[--primary-color] py-3 px-5 border-[--primary-color] border rounded-[40px] text-center hover:bg-transparent hover:border-black transition-all duration-300 block">
                    View Figma
                  </Link>
                </div>

                {/* Website Button — only if link exists */}
                {project.WebsiteLink && (
                  <div>
                    <Link
                      to={project.WebsiteLink}
                      target="_blank"
                      className="bg-[--primary-color] py-3 px-5 border-[--primary-color] border rounded-[40px] text-center hover:bg-transparent hover:border-black transition-all duration-300 block">
                      View Website
                    </Link>
                  </div>
                )}
              </div>

            </div>
          </div>

          <div className="lg:col-span-8">
            {/* INTRODUCTION */}
            {project.introduction && (
              <div className="mb-[40px]">
                <h3 className="font-medium mb-[20px]">Introduction</h3>

                {project.introduction.map((text, i) => (
                  <ReactMarkdown
                    key={i}
                    components={{
                      p: ({ node, ...props }) => (
                        <p
                          className="text-[#1E1E1E80] text-[18px] mb-4 font-normal leading-relaxed"
                          {...props}
                        />
                      ),

                      strong: ({ node, ...props }) => (
                        <strong
                          className="text-black font-semibold"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {text}
                  </ReactMarkdown>
                ))}
              </div>
            )}

            {/* PRIMARY GOALS */}
            {project.primaryGoals && (
              <div className="my-[60px]">
                <h3 className="font-medium">Primary Goals</h3>
                <ul className="list-disc text-[18px] ms-[30px]">
                  {project.primaryGoals.map((goal, i) => (
                    <li key={i} className="mt-[10px]">
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CORE FEATURES */}
            {project.coreFeatures && (
              <div className="mb-[40px]">
                <h3 className="font-medium">Core Features</h3>
                <ul className="list-disc ms-[30px]">
                  {project.coreFeatures.map((feature, i) => {
                    const [left, right] = feature.split(/:(.+)/);
                    return (
                      <li
                        key={i}
                        className="mt-[10px] text-[17px] leading-relaxed"
                      >
                        <span className="font-normal text-black">{left}</span>
                        <span className="text-[#4B4B4B]"> {right}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="img-marquee">
        <div className="logos mb-[40px] mt-[100px]">
          {project.gallery.map((img, i) => (
            <div className="logo_items" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="containerX">
        <Cta />
        {/* <Testimonial /> */}
      </div>
      
      <Footer />
    </div>
  );
}