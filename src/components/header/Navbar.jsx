import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Header from "./Header";

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

      <div className="absolute top-3 right-12  md:right-20 xl:right-40 z-50">
        <button
          className="text-white text-3xl fixed sm:text-blue-400 focus:outline-none"
          onClick={toggleNavbar}
        >
          {toggleNav ? (
            <HiOutlineX
              className={`${isRightHanded? "text-white" : "md:text-blue-500"}`}
            />
          ) : (
            <HiOutlineMenuAlt3 />
          )}
        </button>
      </div>

      <div
        className={`bg-gradient-to-r z-30 to-[#06b5d470] from-[#3c83f6c0] flex flex-col fixed top-0 h-screen w-56   transition-transform duration-700 ease-in-out ${
          isRightHanded ? 'right-0' : 'left-0'
        } ${toggleNav ? 'translate-x-0' : isRightHanded ? 'translate-x-full' : '-translate-x-full transition-all '} `}
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
        <div className={`btn flex pb-4  ${isRightHanded ? 'justify-end' : 'justify-start'} px-4`}>
          <button
            className="px-[14px] py-[10px] bg-white rounded-md"
            onClick={() => setisRightHanded(!isRightHanded)}
          >
            {isRightHanded ? 'Left' : 'Right'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;