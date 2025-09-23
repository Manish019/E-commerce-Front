import React from 'react'
import HomeSlider from './HomeSlider'
import CategorySlider from './CategorySlider'
import { FaShippingFast } from "react-icons/fa";
import AddBannerSlider from '../../components/AddBannerSlider/AddBannerSlider';
import ProductList from '../../components/Product-page/ProductList';
import FeatureProduct from '../../components/Product-page/FeatureProduct';
import BlogPages from '../Blogs/BlogPages';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <>
      <HomeSlider />
      <CategorySlider />

      {/* Product section */}

      <section className='product-main-section bg-[#ffffff] py-10 pb-10'>
       <ProductList />
       
      </section>


        {/* free-shiping section */}

        <section className="freeshiping bg-white py-10 pb-10">
          <div className="container">
            <div className="max-w-6xl mx-auto free-add w-full bg-[#fffbfb] rounded-lg border-1 p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Left Column */}
              <div className="flex items-center gap-4">
                <FaShippingFast className="text-3xl text-red-600" />
                <span className="text-xl font-medium uppercase">Free Shipping</span>
              </div>

              {/* Middle Column (Double Width) */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <span className="text-[18px] text-[#1f1e1e]">
                  Free Delivery Now On Your First Order and Over $200
                </span>
              </div>

              {/* Right Column */}
              <div className="flex justify-end">
                <span className="text-2xl font-bold">- Only $200*</span>
              </div>
            </div>
          </div>
        </section>

      {/* AddBanner-slider */}

        <AddBannerSlider items={4} />

         <section className='product-main-section bg-[#ffffff] py-10 pb-10'>
       <FeatureProduct />
       <AddBannerSlider items={6} />

        <BlogPages />


      </section>

        <section className='product-main-section bg-[#f3ffefe3] py-10 pb-3'>
         
         <Footer />

      </section>
     

   



      </>
    );
}

      export default Home;