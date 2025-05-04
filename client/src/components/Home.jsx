import React from "react";
import logo from "../assets/Home/Cian Logo.png";
import mainImage from "../assets/Home/mainImage.png";
import mainImg2 from "../assets/Home/mainImg2.png";
import { Link } from "react-router-dom";
import {
  MdOutlineQrCodeScanner,
  MdOutlineVerified,
  MdOutlineShoppingCart,
} from "react-icons/md";

const HomePage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between px-4 py-2 text-center"
      style={{
        background: "linear-gradient(180deg, #00EEFF1A, #FFA6001A, #2F00FF1A)",
      }}
    >
      {/* Logo */}
      <img src={logo} alt="Cian Logo" className="w-32 sm:w-40 mt-6" />

      {/* Heading */}
      <div className="mt-8 sm:mt-8 px-2 ">
        <h1 className="text-2xl sm:text-5xl font-bold text-blue-700 py-3">
          Authenticate Now !
        </h1>
        <p className="mt-2 text-gray-700 text-sm sm:text-lg lg:text-3xl max-w-8xl mx-auto">
          Scan the QR code located on the product to authenticate it, access
          comprehensive information about the product, its journey and
          additional details
        </p>
      </div>

      {/* Center Images */}
      <div className="flex flex-row p-4 sm:flex-row justify-center items-center md:gap-6 mt-10">
        <img
          src={mainImg2}
          alt="Visual 1"
          className="w-48 sm:w-60 md:w-72 lg:w-[300px]"
        />
        <img
          src={mainImage}
          alt="Visual 2"
          className="w-48 sm:w-60 md:w-72 lg:w-[300px]"
        />
      </div>

      {/* Actions */}
      {/* Actions */}
      <div className="flex flex-row justify-center items-center gap-10 sm:gap-24 mt-10 flex-wrap">
        {[
          {
            icon: <MdOutlineQrCodeScanner className="text-blue-600" />,
            label: "Scan",
            path: "/scan",
          },
          {
            icon: <MdOutlineVerified className="text-green-500" />,
            label: "Verify",
            path: "/verify",
          },
          {
            icon: <MdOutlineShoppingCart className="text-orange-400" />,
            label: "Buy",
            path: "/cart",
          },
        ].map((action) => (
          <div key={action.label} className="flex flex-col items-center">
            <Link
              to={action.path}
              className="bg-[#DDDDDD] shadow-lg p-3 rounded-2xl text-3xl sm:text-4xl"
            >
              {action.icon}
            </Link>
            <p className="mt-2 text-base sm:text-lg">{action.label}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex  sm:flex-row gap-10 sm:gap-20 md:gap-24 mt-10 mb-8">
        <Link to="/signup">
          <button className="bg-blue-600 font-medium text-lg sm:text-xl text-white sm:px-20 md:px-20 px-8 py-3 rounded-md shadow-md hover:bg-blue-700 transition-all">
            Sign in
          </button>
        </Link>

        <Link to="/login">
          <button className="bg-blue-600 font-medium text-lg sm:text-xl text-white sm:px-20 md:px-20 px-8  py-3 rounded-md shadow-md hover:bg-blue-700 transition-all">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
