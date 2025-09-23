import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa6";


const BlogPages = () => {
  return (
    <>
      <div className="container">
            <div className="max-w-7xl mx-auto ">
                <div className="w-full p-1">
                  <h2 className='text-2xl font-bold'>From The Blog</h2>
                </div>
    <div className="blog-pages grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
    <div className="inner-blog bg-white p-4 rounded-lg shadow-md border-amber-700 hover:shadow-lg transition-shadow duration-300">
      <div className="overflow-hidden w-full max-w-md mb-5 relative">
  <img
    src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg"
    alt="blog"
    className="block w-full h-auto transform transition-transform duration-3000 ease-in-out hover:scale-[3]
"
  />
  <span className="flex items-center justify-items-center text-sm mb-2 absolute top-[40%] bg-[#ff5252] p-2 rounded-2xl right-2 z-50 text-white gap-2"><FaRegClock />
 Sep 23, 2025</span>
</div>
    <Link to='/'><h3 className="text-md font-medium mb-2 hover:text-red-500">Sustainable living through cutting-edge prefabricated homes</h3></Link> 
    <p className="text-sm text-gray-600 mb-3">Give2 lady of they such they sure it. Me contained explained my education. Vulgar...</p>
    <Link to="/" className="text-black hover:text-[#ff5252] hover:underline flex">Read More <RiArrowRightSLine className='mt-1' />
</Link>
  </div>
  <div className="inner-blog bg-white p-4 rounded-lg shadow-md">
    <div className="overflow-hidden w-full max-w-md mb-5 relative">
    <img src="https://serviceapi.spicezgold.com/download/1741758867669_7-6.jpg" className="block w-full h-auto transform transition-transform duration-3000 ease-in-out hover:scale-[3]" alt="" />
 <span className="flex items-center justify-items-center text-sm mb-2 absolute top-[40%] bg-[#ff5252] p-2 rounded-2xl right-2 z-50 text-white gap-2"><FaRegClock />
 Sep 23, 2025</span>
    </div>
   <Link to='/'><h3 className="text-md font-medium mb-2 hover:text-red-500">Sustainable living through cutting-edge prefabricated homes</h3></Link> 
    <p className="text-sm text-gray-600 mb-3">Give2 lady of they such they sure it. Me contained explained my education. Vulgar...</p>
    <Link to="/" className="text-black hover:text-[#ff5252] hover:underline flex">Read More <RiArrowRightSLine className='mt-1' />
</Link>
  </div>
  <div className="inner-blog bg-white p-4 rounded-lg shadow-md">
    <div className="overflow-hidden w-full max-w-md mb-5 relative">
    <img src="https://serviceapi.spicezgold.com/download/1741758993155_6-4.jpg" className="block w-full h-auto transform transition-transform duration-3000 ease-in-out hover:scale-[3]" alt="" />
     <span className="flex items-center justify-items-center text-sm mb-2 absolute top-[40%] bg-[#ff5252] p-2 rounded-2xl right-2 z-50 text-white gap-2"><FaRegClock />
 Sep 23, 2025</span>
    
    </div>
    <Link to=''><h3 className="text-md font-medium mb-2 hover:text-red-500">Sustainable living through cutting-edge prefabricated homes</h3></Link> 
    <p className="text-sm text-gray-600 mb-3">Give2 lady of they such they sure it. Me contained explained my education. Vulgar...</p>
    <Link to="/" className="text-black hover:text-[#ff5252] hover:underline flex">Read More <RiArrowRightSLine  className='mt-1'/>
</Link>
  </div>
  </div>
  </div>
  </div>
    
    </>
  
  )
}

export default BlogPages