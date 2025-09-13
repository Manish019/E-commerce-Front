import React from 'react'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';



const ProductItems = () => {
  return (
    <>

    <div className="product-items py-5">
      {/* Product Card */}
      <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden border group">
        {/* Image Section */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src="/productlist-img/Light-Fade.jpg"
            alt="Product"
            className="w-full h-full object-cover"
          />

          {/* Discount Badge */}
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            8%
          </span>

          {/* Action Buttons */}
          <div className=" action-list absolute -top-[200px] right-2 flex flex-col gap-2
        transition-all duration-700 ease-out
        group-hover:top-2">
              <Tooltip title="Add" arrow>

            <Button
              className="
                !bg-white !text-black !text-lg
          !w-[30px] !h-[30px] !min-w-[30px] !rounded-full
          hover:!bg-[#ff5252] hover:!text-white
              "
            >
              <IoMdHeartEmpty />
            </Button>
</Tooltip>
            <Tooltip title="View"  placement="left-start">
            <Button
              className="
                 !bg-white !text-black !text-lg
          !w-[30px] !h-[30px] !min-w-[30px] !rounded-full
          hover:!bg-[#ff5252] hover:!text-white
              "
            >
              <MdOutlineZoomOutMap />
            </Button>
            </Tooltip>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 bg-[#f5f5f5]">
          <h6 className="text-amber-700 text-sm">Flying Machine</h6>
          <h3 className="text-[15px] font-semibold link">
            Women Wide Leg High-Rise..
          </h3>

          {/* Rating */}
          <div className="flex items-center text-yellow-500 text-sm my-1">
            <Rating name="size-medium" defaultValue={4} readOnly />
          </div>

          {/* Price Section */}
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-400">₹1,200.00</span>
            <span className="text-black font-semibold">₹999.00</span>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full mt-3 border border-red-500 text-red-500 py-2 rounded-md font-semibold hover:bg-red-500 hover:text-white transition">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductItems