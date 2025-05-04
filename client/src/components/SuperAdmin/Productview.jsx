import React from "react";
import { FaSearch, FaEye, FaAngleRight } from "react-icons/fa";

// Dummy data
const filteredProducts = [
  {
    adminName: "Celesta",
    uploads: 200,
  },
];

export default function Dashboard() {
  // Handle view click
  const handleViewClick = (adminName) => {
    alert(`Viewing details for ${adminName}`);
    // You can replace this with navigation or modal logic
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-yellow-50 to-pink-50 p-6 font-poppins">
      {/* Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-gray-400 text-lg sm:text-xl font-medium flex-wrap">
          <h1 className="text-3xl font-bold text-gray-400">Dashboard</h1>
          <FaAngleRight className="text-gray-300 mx-2 text-2xl" />
          <span className="hover:text-primary cursor-pointer transition-colors">
            Product Profile
          </span>
          <FaAngleRight className="text-gray-300 mx-2 text-2xl" />
          <span className="hover:text-primary cursor-pointer transition-colors">
            Product View
          </span>
        </div>

        {/* Search bar */}
        <div className="relative w-full sm:w-[400px] md:w-[500px]">
          <FaSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-full bg-gray-200 py-2 pl-10 pr-4 text-gray-700 focus:outline-none"
          />
        </div>
      </div>

      {/* Table for desktop */}
      <div className="overflow-x-auto mb-8 hidden md:block">
        <div className="min-w-[600px]">
          {/* Table Header */}
          <div className="bg-blue-600 text-white grid grid-cols-4 py-4 px-6 text-sm sm:text-base rounded-xl shadow-md">
            <div className="font-medium">Sr. no.</div>
            <div className="font-medium text-center">Admin name</div>
            <div className="font-medium text-center">
              Number of uploaded Products
            </div>
            <div className="font-medium text-center">View</div>
          </div>

          {/* Table Rows */}
          {filteredProducts.map((product, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 py-6 px-6 text-sm sm:text-base border-b border-gray-200 mt-2"
            >
              <div className="text-gray-800">{idx + 1}</div>
              <div className="text-gray-800 text-center">
                {product.adminName}
              </div>
              <div className="text-gray-800 text-center">{product.uploads}</div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleViewClick(product.adminName)}
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <FaEye size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards for mobile */}
      <div className="block md:hidden space-y-4">
        {filteredProducts.map((product, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-blue-800">
                Admin {idx + 1}
              </h3>
              <button
                onClick={() => handleViewClick(product.adminName)}
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <FaEye size={20} />
              </button>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong className="text-gray-800">Admin Name:</strong>{" "}
                {product.adminName}
              </p>
              <p>
                <strong className="text-gray-800">Uploaded Products:</strong>{" "}
                {product.uploads}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
