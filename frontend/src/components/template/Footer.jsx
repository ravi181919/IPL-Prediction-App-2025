import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto flex shadow-sm  shadow-white/20 rounded-lg flex-col md:flex-row items-end justify-between py-6.5">
      {/* Left Side - Logo and Name */}
      
       <div className="flex h-full">
       <div className="flex items-center justify-center h-full w-[10vw]">
          <img
            src="https://www.iplt20.com/assets/images/IPL_LOGO_CORPORATE_2024.png"
            alt="IPL Logo"
            className="h-10 w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-1 pt-2 ">
          <span className="text-lg font-semibold leading-none">IPL Prediction App</span>

          {/* Center - Navigation Links */}
          <nav className="flex gap-4">
            <a href="#home" className="hover:text-blue-400 leading-none text-xs">
              Home
            </a>
            <a href="#livescore" className="hover:text-blue-400 leading-none text-xs">
              Live Score
            </a>
            <a href="#pointstable" className="hover:text-blue-400 leading-none text-xs">
              Points Table
            </a>
          </nav>
        </div>
       </div>


      {/* Right Side - Copyright */}
      <div className="text-sm  opacity-80 pr-10">
        <p className="flex flex-col items-center leading-none"><span>&copy; 2025 IPL Prediction.</span> <span>All Rights Reserved.</span></p>
      </div>
    </div>
  );
};

export default Footer;
