import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , Pagination} from "swiper/modules";
import 'swiper/css/navigation';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import BannnerBox from './BannnerBox';



const AddBannerSlider = (props) => {
  return (
   <>
   <div className="AddBanner-Slider py-10 pb-10">
    <div className="container">
     <div className="inner-width max-w-7xl mx-auto">
      <Swiper
      slidesPerView={props.items}
      spaceBetween={10}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000, // 2 sec delay
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper catgory-swiper"
    >
      <SwiperSlide>
<div className="box-img ">
  {/* props passed image */}
  <BannnerBox  Addimg='/add-img/trip-img.webp' link={" / "}  />
</div>
</SwiperSlide>
<SwiperSlide>
<div className="box-img">
  {/* props passed image */}
  <BannnerBox  Addimg='/add-img/lays-img.webp' link={" / "} />
</div>
</SwiperSlide>
<SwiperSlide>
<div className="box-img">
  {/* props passed image */}
  <BannnerBox  Addimg='/add-img/mobile-img.webp' />
</div>
</SwiperSlide>
<SwiperSlide>
<div className="box-img">
  {/* props passed image */}
  <BannnerBox  Addimg='/add-img/spin-img.webp' link={" / "} />
</div>
</SwiperSlide>
<SwiperSlide>
<div className="box-img">
  {/* props passed image */}
  <BannnerBox  Addimg='/add-img/womens-fashion.webp' link={" / "} />
</div>
</SwiperSlide>
<SwiperSlide>
<div className="box-img">
  {/* props passed image */}
  <BannnerBox  Addimg='/add-img/badam-img.webp' link={" / "} />
</div>
</SwiperSlide>
     
    </Swiper>
    </div>
    </div>
   </div>
  
   
   </>
  )
}

export default AddBannerSlider