import React from 'react'
import TabList from './TabList'
import ProductSlider from './ProductSlider'

const ProductList = () => {
  return (
    <>

      <div className="product-section">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">

              {/* Left Section - 40% */}
              <div className="w-full md:w-2/5 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className='text-2xl font-bold'>Popular Products</h2>
                <p>Do not miss the current offers until the end of March.</p>
              </div>
              {/* Right Section - 60% */}
              <div className="w-full md:w-3/5 bg-gray-100 p-6 rounded-lg shadow-md">
              <TabList />
              </div>
            </div>

          <div className="product-slider-box">
            <ProductSlider productItems={5} />
          </div>
  
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductList