import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineRocketLaunch } from "react-icons/md";
import './Navbar.css'
import CategoryPannel from './CategoryPannel';



const Navbar = () => {

  const [isopenCategoryPanel, setIsopenCategoryPanel] = useState(false);


  function openCategoryPanel() {
    setIsopenCategoryPanel(true);
  }



  return (

    <>
      <nav className='py-4'>
        <div className="container flex items-center justify-end gap-4">

          <div className="col-itme-left w-[25%] px-10">
            <Button className='!text-black text-2xl gap-2 w-full' onClick={openCategoryPanel}><HiOutlineMenuAlt1 className='text-2xl' /> Shop By Categories <FaAngleDown className='text-[15px] font-mono ml-auto' />
            </Button>
          </div>
          <div className="col-itme-right w-[60%]">
            <ul className='flex items-center justify-items-center gap-5 font-medium'>
              <li className='link text-[15px]'><Link to="/"><button className='link transition-all duration-300 !text-black hover:text-[#ff5252] font-bold'>Home </button></Link></li>
            <li className="link text-[15px] relative group">
  {/* Main link */}
  <Link to="/" className="block px-3 py-2 hover:text-red-500">
    Fashion
  </Link>

  {/* Submenu */}
  <div className="submenu absolute top-11 left-0 min-w-[200px] bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
    <ul className="flex flex-col">
      
      {/* Mens */}
      <li>
        <Link
          to="/"
          className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-red-500"
        >
          Mens
        </Link>
      </li>

      {/* Womens with nested submenu */}
      <li className="relative group/sub">
        <Link
          to="/"
          className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-red-500"
        >
          Womens ▸
        </Link>

        {/* Nested submenu */}
        <div className="absolute top-0 left-full min-w-[180px] bg-white shadow-lg rounded-md p-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
          <ul className="flex flex-col">
            <li>
              <Link
                to="/"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-red-500"
              >
                Saree
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-red-500"
              >
                Tops
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-red-500"
              >
                Jeans
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</li>



              <li className='link text-[15px]'><Link to="/">Electronics</Link></li>
              <li className='link text-[15px]'><Link to="/">Bags</Link></li>
              <li className='link text-[15px]'><Link to="/">Footwear</Link></li>
              <li className='link text-[15px]'><Link to="/">Groceries</Link></li>
              <li className='link text-[15px]'><Link to="/">Beauty</Link></li>
              <li className='link text-[15px]'><Link to="/">Wellness</Link></li>
              <li className='link text-[15px]'><Link to="/">Jewellary</Link></li>
            </ul>
          </div>

          <div className="col-itme-end w-[20%] flex items-center gap-2 mt-0 mb-0">
            <MdOutlineRocketLaunch />
            <p className='text-[14px]'> Free International Delivery</p>
          </div>


        </div>
      </nav>
      {/* // category pannel component */}
      <CategoryPannel isopenCategoryPanel={isopenCategoryPanel} setIsopenCategoryPanel={setIsopenCategoryPanel} />
    </>

  )
}

export default Navbar