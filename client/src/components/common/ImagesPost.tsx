import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
export const ImagesPost = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="h-[360px]">
          <img
            src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2025/05/21/z6623885580543-a91c35ba495662f42bbdbd7aac563490_1747810665.jpg"
            alt=""
            className="w-full h-full object-containt"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[360px]">
          <img
            src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2025/05/21/z6623885771285-0928e4aecf40087a167704fddd52e1ae_1747810664.jpg"
            alt=""
            className="w-full h-full object-containt"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[360px]">
          <img
            src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2025/05/21/z6623885771575-f836b521267a0f114f6276f4f90d7ff3_1747810664.jpg"
            alt=""
            className="w-full h-full object-containt"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[360px]">
          <img
            src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2025/05/21/z6623885779903-49065c0840f1322c02163710d1c3d422_1747810665.jpg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};
