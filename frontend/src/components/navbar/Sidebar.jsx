import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { GrScorecard } from "react-icons/gr";
const Sidebar = () => {
  const links = [
    { path: "/", element: "Home", icons: <FaHome /> },
    { path: "/livescore", element: "Livescore", icons: <FiTv /> },
    { path: "/pointstable", element: "Pointstable", icons: <GrScorecard /> },
  ];
  return (
    <div className="w-[20%] h-full py-1">
      <div className="w-full h-full shadow-sm shadow-white/20 rounded-md">
      <div className="w-full h-full bg-[#1155C] relative rounded-tr-lg  rounded-br-lg overflow-hidden flex justify-between flex-col items-center py-4 px-2">
        <Link
          className="overflow-hidden h-[10%] w-full relative flex items-center justify-start bg-amber-"
          to={"/"}
        >
          <img
            className="h-full w-[40%] object-contain"
            src="https://www.iplt20.com/assets/images/IPL_LOGO_CORPORATE_2024.png"
            alt="logo-of-ipl-in-sidebar"
          />
          <h1 className="flex flex-col w-[60%] h-full leading-none text-sm font-black tracking-widest items-center gap-1 justify-end pb-1">IPL Prediction
            <span>Application</span>
          </h1>
        </Link>

        <div className="flex items-center justify-start flex-col gap-3 w-full">
          {links.map((link, linkIndex) => (
            <NavLink
              key={linkIndex}
              to={`${link.path}`}
              className={`flex items-center gap-2.5 px-5 hover:bg-[#1155C5] py-2 duration-300 w-full mx-auto rounded-sm`}
            >
              <span className="font-black text-2xl">{link.icons}</span>{" "}
              <span className="font-bold leading-none  tracking-wide">
                {link.element}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Sidebar;
