import React, { useState } from "react";
import img1 from "../assets/images/slider-img1.png";
import img2 from "../assets/images/slider-img2.png";
import img3 from "../assets/images/slider-img3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Dev Monnappa",
      role: "(New Zealand)",
      content:
        "Jatin communicated clearly throughout the engagement, was receptive to requests and feedback, delivered quality work, and was accommodating to changes. Overall, a very satisfying experience.",
    },
    {
      name: "Haris Beha",
      role: "(USA)",
      content:
        "Jatin's work is of the highest quality. He listens well and his English is very good, I never have encountered a communication problem with him. He is creative and forward thinking. He is very honest and reasonable with his time and effort and pricing. I would not hesitate to recommend him. He is very timely and helps the momentum of projects. He is insightful and dedicated. He is thorough and creative. A valuable asset to your project.",
    },
    {
      name: "ALVA Design Studio ",
      role: "(Canada)",
      content:
        "Jatin was great at communication and delivered on time. Will most definitely work with him again!",
    },
  ];

  return (
    <div>
      <div>
        <h2 className="text-center mt-[100px]">Voices of Trust & Success</h2>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={2}
        spaceBetween={40}
        loop={true}
        pagination={{ clickable: true }}
        speed={800}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="px-5">
            <div className="relative border-[7px] border-primary rounded-[45px] text-center h-full">
              <span
                className="absolute -top-11 -left-7 w-[120px] h-[100px]
                  bg-[#F4F4F4] bg-no-repeat bg-[length:60%] bg-[position:34px_15px]
                  rotate-180"
                style={{
                  backgroundImage:
                    "url(https://cdn-icons-png.flaticon.com/512/4338/4338294.png)",
                }}
              />

              <div className="px-12 pt-12 pb-6 relative z-10">
                <p className="text-black text-[15px] leading-6 content-text">
                {item.content}
              </p>
              </div>
              
              <div className="flex items-center justify-center gap-4 pb-12 relative z-10">
                <div className="text-center">
                  <h6 className="text-primary font-bold text-lg">
                    {item.name}
                  </h6>
                  <span className="text-black text-xs">{item.role}</span>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
