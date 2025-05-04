import React from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen, FaTruck } from "react-icons/fa";
import { RiUserLocationFill } from "react-icons/ri";
import { TbDeviceWatchHeart } from "react-icons/tb";
import { MdOutlineInventory } from "react-icons/md";

// ⬇️ Responsive Background Component
const Bg = () => {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
      <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] sm:w-[30vw] sm:h-[30vw] rounded-full bg-yellow-200 opacity-40 blur-[80px]" />
      <div className="absolute top-[-20%] right-[1%] w-[50vw] h-[42vw] sm:w-[25vw] sm:h-[18vw] rounded-full bg-pink-300 opacity-40 blur-[80px]" />
      <div className="absolute bottom-[10%] left-[10%] w-[65vw] h-[45vw] sm:w-[28vw] sm:h-[25vw] rounded-full bg-blue-300 opacity-40 blur-[80px]" />
      <div className="absolute bottom-[5%] right-[10%] w-[65vw] h-[50vw] sm:w-[40vw] sm:h-[35vw] rounded-full bg-purple-300 opacity-40 blur-[80px]" />
    </div>
  );
};

// ⬇️ Admin Dashboard Component
const DashboardAdmin = () => {
  const features = [
    {
      label: "Product Profile",
      icon: <FaBoxOpen className="text-blue-600 text-3xl" />,
      path: "/product-profile",
    },
    {
      label: "Traceability",
      icon: <RiUserLocationFill className="text-green-500 text-3xl" />,
      path: "/traceability",
    },
    {
      label: "Profile Tracking",
      icon: <FaTruck className="text-purple-600 text-3xl" />,
      path: "/profile-tracking",
    },
    {
      label: "Custom Batch number",
      icon: <TbDeviceWatchHeart className="text-pink-500 text-3xl" />,
      path: "/custom-batch",
    },
    {
      label: "Inventory Management",
      icon: <MdOutlineInventory className="text-orange-500 text-3xl" />,
      path: "/inventory-management",
    },
  ];

  return (
    <div className="relative min-h-screen w-full px-4 py-8">
      <Bg />
      <div className="text-center p-6 relative z-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Dashboard</h1>
        <p className="mb-10 text-xl font-normal mt-5 text-black">
          Welcome to Admin dashboard, here you can manage all the data of your
          products
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Link to={feature.path} key={index}>
              <div className="flex flex-col items-center rounded-2xl p-6 hover:scale-110 transition-transform duration-300">
                <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <p className="font-semibold">{feature.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
