import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isRightHanded, setisRightHanded] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  const toggleNavbar = () => {
    setToggleNav(!toggleNav);
  };
 

  console.log("IsReightHanded",isRightHanded)
  const navMenuStyle = {
    backdropFilter: "blur(5px)", // Correct syntax for backdrop-filter with blur

    transition: "transform 700ms ease-in-out",
  };

  return (
    <>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 relative sm:hidden">
        <div className="flex items-center justify-between h-full px-6">
          <div className="text-white flex items-center font-bold text-2xl">
            <div className="logo">
              <img src="images/logo.png" alt="Logo" />
            </div>
            <div className="logoText">TaskFlow</div>
          </div>
        </div>
      </div>

      <div className="absolute top-3 right-5  md:right-20 xl:right-40 z-50">
        <button
          className="text-white text-3xl sm:text-blue-400 focus:outline-none"
          onClick={toggleNavbar}
        >
          {toggleNav ? (
            <HiOutlineX
              className={`${toggleNav ? "text-white" : "text-blue-500"}`}
            />
          ) : (
            <HiOutlineMenuAlt3 />
          )}
        </button>
      </div>

      <div
        style={navMenuStyle}
        className={`bg-gradient-to-r  z-30 to-[#06b5d470] from-[#3c83f6c0] flex flex-col transition-transform duration-700 ease-in-out fixed top-0 ${isRightHanded ? 'right-0':'left-0'} h-screen w-56 transform ${
            isRightHanded?toggleNav  ? "translate-x-0": "-translate-x-[380px]":toggleNav  ? "translate-x-0": "translate-x-full"
          
        }`}
      >
        <div className="flex-1">
          <ul className="flex flex-col items-center justify-center h-full gap-8 text-white">
            <li>
              <a href="#home" className="block py-2">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="block py-2">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="btn flex pb-4 justify-center px-4">
          <button className="px-[14px] py-[10px] bg-white rounded-md  " onClick={()=>setisRightHanded(!isRightHanded)}>
            {isRightHanded?'Left':"Right"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
