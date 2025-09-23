import React from "react";
import { MdOutlineLocalShipping, MdOutlineSupportAgent } from "react-icons/md";
import { IoWalletSharp, IoGiftOutline } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiPhoneCallDuotone } from "react-icons/pi";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaSquareFacebook, FaSquareXTwitter, FaSquareInstagram, FaSquareYoutube, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="top-footer">
      <div className="container">
        <div className="w-[1000px] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center pb-10">
          <div className="flex flex-col items-center justify-center">
            <MdOutlineLocalShipping className="text-3xl text-[#ff5252] mb-2" />
            <h3 className="font-semibold">Free Shipping</h3>
            <p className="text-[15px] mt-2 text-gray-600">For all Orders Over $100</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoWalletSharp className="text-3xl text-[#ff5252] mb-2" />
            <h3 className="font-semibold">Secure Payment</h3>
            <p className="text-[15px] mt-2 text-gray-600">100% safe & secure</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <MdOutlineSupportAgent className="text-3xl text-[#ff5252] mb-2" />
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-[15px] mt-2 text-gray-600">Always here to help</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <GiReturnArrow className="text-3xl text-[#ff5252] mb-2" />
            <h3 className="font-semibold">Easy Returns</h3>
            <p className="text-[15px] mt-2 text-gray-600">30-day return policy</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoGiftOutline className="text-3xl text-[#ff5252] mb-2" />
            <h3 className="font-semibold">Best Quality</h3>
            <p className="text-[15px] mt-2 text-gray-600">Premium products only</p>
          </div>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="footer-second py-6 px-10">
          <div className="m-auto grid grid-cols-[1.3fr_0.7fr_0.7fr_1.3fr] gap-6 pb-5">
            <div className="flex flex-col items-start justify-start">
              <h3 className="text-[#3d3d3d] text-1xl font-bold mb-2">Contact us</h3>
              <p className="text-[15px] mt-2 text-black">Classyshop - Mega Super Store
                507-Union Trade Centre France
              </p>
              <Link to="#" className="flex text-[14px] mt-2 text-black hover:text-[#ff5252]"><MdOutlineMailOutline className="text-[20px] mr-2" />
                support@gmail.com</Link>
              <Link to="#" className="flex text-[14px] mt-2 text-black hover:text-[#ff5252]"><PiPhoneCallDuotone className="text-[20px] mr-2" />
                +1800 000 000</Link>
              <div className="social-icons flex items-center justify-start mt-4">
                <Link to="#" className="flex items-center justify-center rounded-full mr-2"><FaSquareFacebook className="text-[30px] text-[#ff5252] hover:text-black" />
                </Link>
                <Link to="#" className="flex items-center justify-center rounded-full mr-2"><FaSquareXTwitter className="text-[30px] text-[#ff5252] hover:text-black" /></Link>
                <Link to="#" className="flex items-center justify-center rounded-full mr-2"><FaSquareInstagram className="text-[30px] text-[#ff5252] hover:text-black" /></Link>
                <Link to="#" className="flex items-center justify-center rounded-full mr-2"><FaLinkedin className="text-[30px] text-[#ff5252] hover:text-black" /></Link>
                <Link to="#" className="flex items-center justify-center rounded-full mr-2"><FaSquareYoutube className="text-[30px] text-[#ff5252] hover:text-black" /></Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h3 className="text-[#3d3d3d] text-1xl font-bold mb-2">Products</h3>
              <ul>
                <li className="text-[13px] mt-2 text-black hover:text-[#ff5252]"><Link to="#">Prices drop</Link></li>
                <li className="text-[13px] mt-2 text-black hover:text-[#ff5252]"><Link to="#">New products</Link></li>
                <li className="text-[13px] mt-2 text-black hover:text-[#ff5252]"><Link to="#">Best sales</Link></li>
                <li className="text-[13px] mt-2 text-black hover:text-[#ff5252]"><Link to="#">Contact us</Link></li>
                <li className="text-[13px] mt-2 text-black hover:text-[#ff5252]"><Link to="#">Sitemap</Link></li>
                <li className="text-[13px] mt-2 text-black hover:text-[#ff5252]"><Link to="#">Stores</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h3 className="text-[#3d3d3d] text-1xl font-bold mb-2">Our company
              </h3>
              <ul>
                <li className="text-[13px] mt-2 text-black hover:text-[#ff5252]"><Link to="#">Delivery</Link></li>
                <li className="text-[13px] mt-2 text-black hover:text-[#ff5252]"><Link to="#">Legal Notice</Link></li>
                <li className="text-[13px] mt-2 text-black hover:text-[#ff5252]"><Link to="#">Secure payment</Link></li>
                <li className="text-[13px] mt-2 text-black hover:text-[#ff5252]"><Link to="#">Contact us</Link></li>
                <li className="text-[13px] mt-2 text-black hover:text-[#ff5252]"><Link to="#">Sitemap</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h3 className="text-[#3d3d3d] text-1xl font-bold mb-2">Subscribe to newsletter
              </h3>
              <p className="text-[15px] mt-2 text-black">Subscribe to our latest newsletter to get news about special discounts.
              </p>
              <form action="/" className="w-full mt-4">
                <input type="text" className="w-full h-[45px] border-2  rounded-2xl outline-none focus:border-red-600 pl-2 pr-2" placeholder="Enter your email" />
                <button className="w-2/4 h-[35px] bg-[#ff5252] text-white rounded-2xl mt-2 hover:bg-black">Subscribe</button>
                <div className="mt-2">
                  <FormControlLabel required control={<Checkbox />} className="text-[12px]" label="I agree to the terms and conditions and the privacy policy" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-300" />
      </div>
      <div className="footer-bottom py-0 mt-5 px-5">
        <div className="m-auto grid grid-cols-[1fr_1fr] gap-6 pb-1">
          <div className="flex items-center justify-start">
            <p className="text-[14px] text-black">© copyright 2025 . All Rights Reserved.</p>
          </div>
          <div className="flex items-center justify-end gap-1">
            <img src="../footer-img/visa.png" alt="payment-methods" />
            <img src="../footer-img/carte_blue.png" alt="payment-methods" />
            <img src="../footer-img/american_express.png" alt="payment-methods" />
            <img src="../footer-img/master_card.png" alt="payment-methods" />
            <img src="../footer-img/paypal.png" alt="payment-methods" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
