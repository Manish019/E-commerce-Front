import React from 'react'
import './SearchBox.css'
import Button from '@mui/material/Button';
import { IoSearchSharp } from "react-icons/io5";




const SearchBox = () => {
  return (
    <div className='Searchbox relative items-center w-full h-full '>
      <input type='search' className='w-full h-10 border border-gray-300 rounded px-3 bg-[#dadadab9] focus:outline-none' placeholder='Search products...' />
            <Button className="bg-amber-200 !absolute right-[5px] top-[8px] z-50 bottom-0 !min-w-[20px] h-[30px] !rounded-full"><IoSearchSharp  className='text-[20px] text-gray-500'/></Button>

    </div>
  )
}

export default SearchBox