import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchBox from '../Search/SearchBox'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Badge from "@mui/material/Badge";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 5,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 ',
  },
}));



const Header = () => {
  return (
    
    // header-part-start
 <header>
  <div className="top-strip py-2 border-t border-b border-gray-400 bg-primary">
  <div className="container">
    <div className="flex items-center justify-between">
      <div className="col-left w-[50%] px-15">
        <p className="text-[15px] text-primary">
          Get up to 50% off new season styles, limited time only
        </p>
      </div>
      <div className="col-right flex items-center justify-between w-full lg:w-[50%] lg:justify-end px-10">
        <ul className='flex items-ceter gap-6 text-[14px] transition-all duration-3s'>
          <Link to="/" className='text-black link font-medium'>Help Center</Link>
          <Link to="/" className='text-black link font-medium'>Track Order</Link>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* end of strip */}


{/* staet-header */}

<div className="header-logo">
  <div className="container flex items-center justify-between ">
    <div className="col-one w-[20%] lg:w-[25%] px-10 flex items-center mt-5 mb-5">
      <Link to="/" className='logo-img'><img src='/logo.jpg' alt='Logo' /></Link>
    </div>
    <div className="col-two w-[40%]">
    <SearchBox />
    </div>
    <div className="col-three w-[40%]">

      <div className="header-icons flex items-center justify-end gap-6 px-10">
        <ul className='flex items-ceter gap-6 text-[14px] transition-all duration-3s'>
          <li className='link text-[15px] font-medium'><Link to="/login">Login </Link> </li>
          <li className='link text-[15px] font-medium'><Link to="/register">Register</Link></li>
          {/* <li className='link text-2xl'><Link to="/"><FaRegHeart /></Link></li> */}
       <li className='link text-2xl mt-[-5px]'>
        <Tooltip title="Wishlist" arrow >

            <Link to="/"> <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <FaRegHeart />
      </StyledBadge>
    </IconButton>
    </Link>
    </Tooltip>
          </li>


          <li className='link text-2xl mt-[-5px]'>
                    <Tooltip title="cart" arrow>

            <Link to="/"> <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <IoCartOutline />
      </StyledBadge>
    </IconButton>
    </Link>
        </Tooltip>

          </li>

          {/* <li className='link text-2xl'><Link to="/"><IoCartOutline /></Link></li> */}
        </ul>
      </div>

    </div>
  </div>
</div>


 </header>

  )
}

export default Header