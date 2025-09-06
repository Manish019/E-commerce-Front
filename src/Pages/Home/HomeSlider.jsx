import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const HomeSlider = () => {
  return (
   <>
<div className="homeslider">
  <div className="container">
        <Swiper
        pagination={{
          spaceBetween: 30,
        loop: true,
        type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./banner-one.jpg" alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./banner-two.jpg" alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./banner-three.jpg" alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./banner-four.jpg" alt="" className="w-full" />
        </SwiperSlide>

      </Swiper>
  </div>
</div>
   </>
  )
}

export default HomeSlider