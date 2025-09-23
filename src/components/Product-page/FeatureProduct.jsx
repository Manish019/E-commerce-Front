import React from 'react'
import ProductSlider from './ProductSlider'


const FeatureProduct = () => {
  return (
    <div className="product-section">
          <div className="container">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-6">
  
                {/* Left Section - 40% */}
                <div className="w-full p-1">
                  <h2 className='text-2xl font-bold'>Feature Products</h2>
                  <p>Do not miss the current offers until the end of March.</p>
                </div>
              
              </div>
  
            <div className="product-slider-box">
              <ProductSlider productItems={5} />
            </div>
    
            </div>
          </div>
        </div>
  )
}

export default FeatureProduct