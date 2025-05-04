import React, { useState } from "react";
import {
  FaSearch,
  FaAngleRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ProductDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      name: "Paracitamol",
      user: "Crazy abc",
      contact: "9864xxxxxx",
      date: "12/2/2025",
      time: "10:05:53 AM",
      location: null,
    },
    {
      name: "Paracitamol",
      user: "Crazy abc",
      contact: "9864xxxxxx",
      date: "12/2/2025",
      time: "10:05:53 AM",
      location: null,
    },
    {
      name: "Paracitamol",
      user: "",
      contact: "",
      date: "12/2/2025",
      time: "10:05:53 AM",
      location: null,
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.barcode && product.barcode.includes(searchTerm)) ||
      (product.description &&
        product.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="relative mx-4 md:mx-20 my-1 space-y-6 text-center overflow-hidden">
      {/* Ellipse Backgrounds */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] sm:w-[30vw] sm:h-[30vw] rounded-full bg-yellow-200 opacity-40 blur-[80px]" />
        <div className="absolute top-[-20%] right-[1%] w-[50vw] h-[42vw] sm:w-[25vw] sm:h-[18vw] rounded-full bg-pink-300 opacity-40 blur-[80px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[65vw] h-[45vw] sm:w-[28vw] sm:h-[25vw] rounded-full bg-blue-300 opacity-40 blur-[80px]" />
        <div className="absolute bottom-[5%] right-[10%] w-[65vw] h-[50vw] sm:w-[40vw] sm:h-[35vw] rounded-full bg-purple-300 opacity-40 blur-[80px]" />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-1 text-gray-400 text-lg sm:text-xl font-medium flex-wrap">
          <h1 className="text-3xl font-bold text-gray-400">Dashboard</h1>
          <FaAngleRight className="text-gray-300 mx-4 text-3xl" />
          <span className="hover:text-primary cursor-pointer transition-colors">
            Product Profile
          </span>
        </div>

        <div className="flex items-center bg-gray-300 w-full sm:w-[28rem] py-2 px-4 rounded-2xl border border-gray-400 gap-2">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none w-full text-gray-700"
          />
        </div>
      </div>

      {/* Table for desktop */}
      <div
        className="hidden md:block overflow-x-auto rounded-2xl shadow-lg"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="min-w-[900px]">
          {/* Table Header */}
          <div className="bg-blue-600 text-white grid grid-cols-7 py-4 px-6 text-sm sm:text-base rounded-xl shadow-md">
            <div className="font-medium">Sr. no.</div>
            <div className="font-medium text-center">Product Name</div>
            <div className="font-medium text-center">User Name</div>
            <div className="font-medium text-center">Contact Number</div>
            <div className="font-medium text-center">Date</div>
            <div className="font-medium text-center">Time</div>
            <div className="font-medium text-center">Location</div>
          </div>

          {/* Table Rows */}
          {filteredProducts.map((product, idx) => (
            <div
              key={idx}
              className="grid grid-cols-7 py-6 px-6 text-sm sm:text-base border-b border-gray-200 mt-2"
            >
              <div className="text-gray-800">{idx + 1}</div>
              <div className="text-gray-800 text-center">{product.name}</div>
              <div className="text-gray-800 text-center">
                {product.user || "—"}
              </div>
              <div className="text-gray-800 text-center">
                {product.contact || "—"}
              </div>
              <div className="text-gray-800 text-center">{product.date}</div>
              <div className="text-gray-800 text-center">{product.time}</div>
              <div className="text-gray-800 text-center flex justify-center items-center gap-1">
                <FaMapMarkerAlt className="text-gray-600 hover:text-blue-600" />{" "}
                {product.location}
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
            className="bg-white shadow-lg rounded-xl p-6 mb-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200"
          >
            {/* Card Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-blue-800">
                {product.name}
              </h3>
              <span className="text-gray-500 text-sm">#{idx + 1}</span>
            </div>

            {/* Card Body */}
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex justify-between">
                <strong className="text-gray-800">User Name:</strong>{" "}
                {product.user || "—"}
              </p>
              <p className="flex justify-between">
                <strong className="text-gray-800">Contact Number:</strong>{" "}
                {product.contact || "—"}
              </p>
              <p className="flex justify-between">
                <strong className="text-gray-800">Date:</strong> {product.date}
              </p>
              <p className="flex justify-between">
                <strong className="text-gray-800">Time:</strong> {product.time}
              </p>
              <p className="flex justify-between">
                <strong className="text-gray-800">Location:</strong>{" "}
                {product.location || "—"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDashboard;
