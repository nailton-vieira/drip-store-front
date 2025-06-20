register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/autoplay";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../assets/TenisCarrossel1.jpeg";
import img2 from "../assets/TenisCarrossel2.jpeg";
import img3 from "../assets/TenisCarrossel3.jpeg";
import img4 from "../assets/TenisCarrossel4.jpeg";

export default function Carrossel() {
  const data = [
    { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
  ];
  return (
    <div className=" md:pt-[160px] h-64 md:h-100">
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation 
      autoplay={{delay:2500}}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt=""
              className="w-full h-[480px] object-cover md:h-[600px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}