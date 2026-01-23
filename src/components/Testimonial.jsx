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
    { name: "Yeasin Arafat", role: "Developer" },
    { name: "Yeasin Arafat", role: "Designer" },
    { name: "Yeasin Arafat", role: "Designer" },
    { name: "Yeasin Arafat", role: "Designer, LLCG Team" },
    { name: "Yeasin Arafat", role: "Designer" },
  ];

  return (
    <div>
      <div>
        <h2 className="text-center mt-[100px]">Voices of Trust & Success</h2>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={2}
        spaceBetween={50}
        loop={true}
        pagination={{ clickable: true }}
        speed={800}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative border-[7px] border-primary rounded-[45px] text-center">
              <span
                className="absolute -top-8 -left-8 w-[120px] h-[100px]
                  bg-[#ededed] bg-no-repeat bg-[length:60%] bg-[position:34px_15px]
                  rotate-180"
                style={{
                  backgroundImage:
                    "url(https://cdn-icons-png.flaticon.com/512/4338/4338294.png)",
                }}
              />

              <span
                className="absolute -bottom-8 -right-8 w-[120px] h-[100px]
                  bg-[#ededed] bg-no-repeat bg-[length:60%] bg-[position:34px_19px]"
                style={{
                  backgroundImage:
                    "url(https://cdn-icons-png.flaticon.com/512/4338/4338294.png)",
                }}
              />

              <p className="text-black text-[15px] leading-6 px-12 pt-12 pb-6 relative z-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              <div className="flex items-center justify-center gap-4 pb-12 relative z-10">
                <div className="text-left">
                  <h6 className="text-primary font-bold text-lg">{item.name}</h6>
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
