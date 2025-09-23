import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const HomeAddSlider = () => {
  return (
   
    <>
    <section className='home-add-slider'>
      <div className="container flex items-center">
     <div class="grid grid-cols-[950px_350px] gap-4 justify-center">
  <div class="p-4 rounded-lg">
   <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="homesliderAdd"
      >
        <SwiperSlide>
          <div className="slider-img w-full h-auto rounded-lg relative overflow-hidden">
          <img src="../banner-sm1.jpg" />
          <div className="inner-info absolute top-0 h-full right-0 text-black z-50 p-8 w-1/2 space-y-3 bg-opacity-70 rounded-l-lg justify-center flex flex-col items-left">
            <h2 className='text-[30px] font-bold text-[#ff5252]'>Big saving days sale</h2>
            <p className='text-[20px] text-black'>Buy New Trend Women Black Cotton Blend Top | top for women | women top...</p>
            <h3 className='text-[23px] text-[#ff5252]'>Starting At Only <span className=' text-2xl font-bold text-black'>₹35,500.00</span></h3>
            <div className="button mt-5">
<Link to='/' className='bg-black hover:bg-[#ff5252] text-white py-2 px-4 rounded-3xl'>Shop Now</Link>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img w-full h-auto rounded-lg relative overflow-hidden">
          <img src="../banner-sm2.jpg" />
            <div className="inner-info absolute top-0 h-full right-0 text-black z-50 p-8 w-1/2 space-y-3 bg-opacity-70 rounded-l-lg justify-center flex flex-col items-left">
            <h2 className='text-[30px] font-bold text-[#ff5252]'>Big saving days sale</h2>
            <p className='text-[20px] text-black'>Top Deals on Smartphones | Limited Time Deals</p>
            <h3 className='text-[23px] text-[#ff5252]'>Starting At Only <span className=' text-2xl font-bold text-black'>₹44,000.00</span></h3>
            <div className="button mt-5">
                          <Link to='/' className='bg-black hover:bg-[#ff5252] text-white py-2 px-4 rounded-3xl'>Shop Now</Link>

            </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
  </div>

  <div class="p-4 rounded-lg shadow ">
    <div className="slider-img bg-[#f4f7e5] w-full rounded-lg relative overflow-hidden py-12 mb-5">
          <img src="../add-product-img/phone.webp" className='w-[33%] h-auto px-2'  />
          <div className="inner-info absolute top-0 h-full right-0 text-black z-50 p-2 w-[60%] space-y-3 bg-opacity-70 rounded-l-lg justify-center flex flex-col items-left">
            <p className='text-[20px] text-black'>Buy Men's Footwear with low price</p>
            <h3 className='text-[20px] text-[#ff5252]'>₹3550</h3>
            <div className="button mt-1">
<Link to='/' className='text-black py-2 hover:text-[#ff5252]'>Shop Now</Link>
            </div>
          </div>  
          </div> 
           <div className="slider-img bg-[#f4f7e5] w-full rounded-lg relative overflow-hidden py-12">
          <img src="../add-product-img/fashion.webp" className='w-[33%] h-auto px-2'  />
          <div className="inner-info absolute top-0 h-full right-0 text-black z-50 p-2 w-[60%] space-y-3 bg-opacity-70 rounded-l-lg justify-center flex flex-col items-left">
            <p className='text-[20px] text-black'>Buy Men's Footwear with low price</p>
            <h3 className='text-[20px] text-[#ff5252]'>₹3550</h3>
            <div className="button mt-1">
<Link to='/' className='text-black py-2 hover:text-[#ff5252]'>Shop Now</Link>
            </div>
          </div>
          </div>
          </div>
      </div>
      </div>
    </section>
    
    </>
  )
}

export default HomeAddSlider;