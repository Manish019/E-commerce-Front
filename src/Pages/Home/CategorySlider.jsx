import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import beautyImg from "../../assets/category-img/beauty.png";
import wellness from "../../assets/category-img/wellness.png";
import fashion from "../../assets/category-img/fashion.png";

import footwear from "../../assets/category-img/footwaer.png";

import jewellery from "../../assets/category-img/jewellery.png";

import groceries from "../../assets/category-img/groceries.png";
import electronics from "../../assets/category-img/electronics.png";
import bags from "../../assets/category-img/bags.png";






const CategorySlider = () => {
return (
    <div className="category-slider mt-5 py-10">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper catgory-swiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-md transition duration-300 hover:shadow-xl hover:border-blue-400">
              <img src={beautyImg} alt="Beauty" className="w-20 mx-auto transition duration-300 hover:scale-105" />
                  <p className="text-center mt-2 text-gray-700 hover:text-[#ff5266] hover:font-semibold">
                 Beauty</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-md transition duration-300 hover:shadow-xl hover:border-blue-400">
              <img src={fashion} alt="Fashion" className="w-20 mx-auto transition duration-300 hover:scale-105" />
              <p className="text-center mt-2 text-gray-700 hover:text-[#ff5266] hover:font-semibold">Fashion</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-md transition duration-300 hover:shadow-xl hover:border-blue-400">
              <img src={footwear} alt="Footwear" className="w-20 mx-auto transition duration-300 hover:scale-105" />
              <p className="text-center mt-2 text-gray-700 hover:text-[#ff5266] hover:font-semibold">Footwear</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-md transition duration-300 hover:shadow-xl hover:border-blue-400">
              <img src={jewellery} alt="Jewellery" className="w-20 mx-auto transition duration-300 hover:scale-105" />
              <p className="text-center mt-2 text-gray-700 hover:text-[#ff5266] hover:font-semibold">Jewellery</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-md transition duration-300 hover:shadow-xl hover:border-blue-400">
              <img src={groceries} alt="Groceries" className="w-20 mx-auto transition duration-300 hover:scale-105" />
              <p className="text-center mt-2 text-gray-700 hover:text-[#ff5266] hover:font-semibold">Groceries</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-md transition duration-300 hover:shadow-xl hover:border-blue-400">
              <img src={electronics} alt="Electronics" className="w-20 mx-auto transition duration-300 hover:scale-105" />
              <p className="text-center mt-2 text-gray-700 hover:text-[#ff5266] hover:font-semibold">Electronics</p>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-md transition duration-300 hover:shadow-xl hover:border-blue-400">
              <img src={wellness} alt="Wellness" className="w-20 mx-auto transition duration-300 hover:scale-105" />
              <p className="text-center mt-2 text-gray-700 hover:text-[#ff5266] hover:font-semibold">Wellness</p>
            </div>
          </SwiperSlide>
           <SwiperSlide>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 shadow-md transition duration-300 hover:shadow-xl hover:border-blue-400">
              <img src={bags} alt="Bags" className="w-20 mx-auto transition duration-300 hover:scale-105" />
              <p className="text-center mt-2 text-gray-700 hover:text-[#ff5266] hover:font-semibold">Bags</p>
            </div>
          </SwiperSlide>
            
        </Swiper>
      </div>
    </div>
  );
};

      export default CategorySlider;