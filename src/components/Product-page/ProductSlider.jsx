import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import ProductItems from './ProductItems';



const ProductSlider = (props) => {
  return (
<>
<div className="product-slider">
<Swiper
        slidesPerView={props.productItems}
      spaceBetween={20}
        pagination={{
        loop: true,
        // type: 'progressbar',
        }}
         autoplay={{
        delay: 3000, // 2 sec delay
        disableOnInteraction: false,
      }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
       
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
       
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
       
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
       
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
       
        <SwiperSlide>
          <ProductItems />
        </SwiperSlide>
       

      </Swiper>

</div>
</>
  )
}

export default ProductSlider