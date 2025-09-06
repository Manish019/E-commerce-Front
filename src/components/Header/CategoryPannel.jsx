import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";

const CategoryPannel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => {
    props.setIsopenCategoryPanel(newOpen);
  };

  const openSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
    setInnerSubmenuIndex(null); // reset inner submenu
  };

  const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="category-pannel">
      {/* Header */}
      <div className="logo flex items-center justify-evenly gap-5">
        <img src="/logo.jpg" alt="Logo" className="w-[150px] pt-5" />
        <RiCloseCircleFill
          className="text-[25px] cursor-pointer"
          onClick={() => toggleDrawer(false)}
        />
      </div>

      <h3 className="p-3 text-[18px] font-[500] text-[red]">
        Shop By Categories
      </h3>

      {/* Scrollable List */}
      <div className="scrolbar">
        <ul className="w-full relative">
          {/* Fashion Category */}
          <li className="flex flex-col p-3 transition-all duration-300 relative">
            <Button
              className="w-full !text-left !justify-start !px-1 !text-black"
              onClick={() => openSubmenu(0)}
            >
              Fashion
            </Button>
            {submenuIndex === 0 ? (
              <IoIosArrowUp
                className="absolute right-5 top-4 cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <IoIosArrowDown
                className="absolute right-5 top-4 cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {/* Submenus */}
            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-5 mt-2">
                {/* Womens Submenu */}
                <li className="relative">
                  <Button
                    className="w-full !text-left !justify-start !px-1 !text-black"
                    onClick={() => openInnerSubmenu(0)}
                  >
                    Womens
                  </Button>
                  {innerSubmenuIndex === 0 ? (
                    <IoIosArrowUp
                      className="absolute right-5 top-2 cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <IoIosArrowDown
                      className="absolute right-5 top-2 cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {/* Inner Submenu for Womens */}
                  {innerSubmenuIndex === 0 && (
                    <ul className="innersubmenu left-0 w-full pl-5 mb-3">
                      <li className="mb-1">
                        <Link to="/" className="!link">Saree</Link>
                      </li>
                      <li className="mb-1">
                        <Link to="/" className="!link">Tops</Link>
                      </li>
                      <li className="mb-1">
                        <Link to="/" className="!link">Jeans</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Girls Submenu */}
                <li className="relative">
                  <Button
                    className="w-full !text-left !justify-start !px-1 !text-black"
                    onClick={() => openInnerSubmenu(1)}
                  >
                    Girls
                  </Button>
                  {innerSubmenuIndex === 1 ? (
                    <IoIosArrowUp
                      className="absolute right-5 top-2 cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <IoIosArrowDown
                      className="absolute right-5 top-2 cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {/* Inner Submenu for Girls */}
                  {innerSubmenuIndex === 1 && (
                    <ul className="innersubmenu left-0 w-full pl-5 mb-3">
                      <li className="mb-1">
                        <Link to="/" className="!link">Frocks</Link>
                      </li>
                      <li className="mb-1">
                        <Link to="/" className="!link">Skirts</Link>
                      </li>
                      <li className="mb-1">
                        <Link to="/" className="!link">T-Shirts</Link>
                      </li>
                    </ul>
                  )}
                </li>
            {/* Mens-submenu */}
              <li className="relative">
                  <Button
                    className="w-full !text-left !justify-start !px-1 !text-black"
                    onClick={() => openInnerSubmenu(2)}
                  >
                    Mens
                  </Button>
                  {innerSubmenuIndex === 2 ? (
                    <IoIosArrowUp
                      className="absolute right-5 top-2 cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
                    <IoIosArrowDown
                      className="absolute right-5 top-2 cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  )}

                  {/* Inner Submenu for Mens */}
                  {innerSubmenuIndex === 2 && (
                    <ul className="innersubmenu left-0 w-full pl-5 mb-3">
                      <li className="mb-1">
                        <Link to="/" className="!link">Shirt</Link>
                      </li>
                      <li className="mb-1">
                        <Link to="/" className="!link">T-Shirt</Link>
                      </li>
                      <li className="mb-1">
                        <Link to="/" className="!link">Jeans</Link>
                      </li>
                    </ul>
                  )}
                </li>

              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer
      open={props.isopenCategoryPanel}
      onClose={() => toggleDrawer(false)}
    >
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPannel;
