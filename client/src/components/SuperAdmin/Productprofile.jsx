import React from "react";
import { FaUpload } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi";
import Rectangle1 from "../../assets/Superadmin/Prodetails.png";
import { Link } from "react-router-dom";

export default function ProductDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-50 p-4 sm:p-6 font-poppins mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Navigation */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6 sm:mb-10">
          <Link to="/dashboard">
            <h1 className="text-xl sm:text-4xl font-bold text-gray-400 hover:text-primary transition-colors cursor-pointer">
              Dashboard
            </h1>
          </Link>

          <HiChevronRight className="text-gray-400 text-2xl sm:text-4xl" />

          <Link to="/product-profile">
            <h2 className="text-xl sm:text-3xl text-gray-400 hover:text-primary transition-colors cursor-pointer">
              Product Profile
            </h2>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-20 gap-8 mt-10 sm:mt-16 mb-10 sm:mb-16">
          {/* Upload Product Button */}
          <Link to="/upload-product">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-200 rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-3 transition-all hover:bg-blue-100 hover:shadow-xl">
                <FaUpload className="text-blue-500 text-xl sm:text-2xl group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm sm:text-base text-black font-medium group-hover:text-blue-500 transition-colors">
                Upload Product
              </span>
            </div>
          </Link>

          {/* View Product Button */}
          <Link to="/view-products">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-200 rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center mb-2 sm:mb-3 transition-all hover:bg-green-100 hover:shadow-xl">
                <AiOutlineEye className="text-green-400 text-xl sm:text-3xl group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm sm:text-base text-black font-medium group-hover:text-green-500 transition-colors">
                View Product
              </span>
            </div>
          </Link>
        </div>

        {/* Lab Image Card */}
        <div className="w-full h-40 sm:h-52 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-xl sm:rounded-2xl shadow-md">
          <img
            src={Rectangle1}
            alt="Laboratory scientists examining data"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
