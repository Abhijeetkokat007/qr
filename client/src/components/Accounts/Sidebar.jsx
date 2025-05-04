import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaUserCog,
  FaUserEdit,
  FaHistory,
  FaPowerOff,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const menuItems = [
  { name: "Account Details", icon: <FaUserCog />, path: "/accountsetting" },
  { name: "Account Editing", icon: <FaUserEdit />, path: "/accountediting" },
  { name: "Action History", icon: <FaHistory />, path: "/actionhistory" },
  { name: "Logout", icon: <FaPowerOff />, path: "/logout" },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="sm:hidden p-4 z-50 relative">
        <button
          onClick={toggleSidebar}
          className="text-2xl text-gray-700"
          aria-label="Toggle Sidebar"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          fixed sm:relative top-0 left-0 bg-gray-200 w-60 p-4 h-screen
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:block z-40
        `}
      >
        <ul className="space-y-4 mt-10 sm:mt-0">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={index}
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => {
                  if (item.path === "/logout") {
                    console.log("Logging out...");
                  }
                  navigate(item.path);
                  // Only close sidebar on mobile
                  if (window.innerWidth < 640) {
                    closeSidebar();
                  }
                }}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
