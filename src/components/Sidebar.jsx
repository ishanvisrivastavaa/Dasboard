import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuBox, LuUser, LuMessageSquare, LuCalendar } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
import { TbUser } from "react-icons/tb";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/members", name: "Members", icon: TbUser },
    { id: 3, path: "/messages", name: "Messages", icon: LuMessageSquare },
    { id: 4, path: "/projects", name: "Projects", icon: FaSuitcase },
    { id: 5, path: "/clients", name: "Clients", icon: LuUser },
    { id: 6, path: "/works", name: "Work Plan", icon: LuCalendar },
  ];

  return (
    <div
      className={`fixed z-10 h-screen border-r pt-8 px-4 shadow-2xl ${
        !isOpen ? "w-60" : " w-20/2"
      } bg-indigo-900`}
    >
      <div>
        <div className="flex gap-x-4 items-center ">
          <img src="logo.png" alt="logo" onClick={toggleSidebar} />
          <span
            className={`font-semibold origin-left  text-xl text-white ${
              isOpen && "hidden"
            }`}
          >
            Master
          </span>
        </div>
      </div>
      <ul className="pt-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            className="text-gray-300 text-md flex  items-center gap-x-4 cursor-pointer p-4 my-2 hover:bg-indigo-700 rounded-md"
            key={index}
          >
            <Link
              className="flex items-center justify-center space-x-5 "
              to={link.path}
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span
                className={`text-white origin-left text-sm ${
                  isOpen && "hidden"
                }`}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <p
          className={`absolute bottom-0 p-4 mb-4 rounded-full space-x-2 text-sm py-2 text-black bg-white ${
            !isOpen ? "w-48" : "w-10"
          }`}
        >
          <span className="font-black text-md">?</span>
          <span className={`${isOpen && "hidden"}`}>Need Help?</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
