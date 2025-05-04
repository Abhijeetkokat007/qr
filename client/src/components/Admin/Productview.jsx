import React, { useState } from "react";
import {
  FaDownload,
  FaEdit,
  FaSearch,
  FaAngleRight,
  FaQrcode,
} from "react-icons/fa";
import scannerQR from "../../assets/Home/qr-code.png"; // Import the QR image

const ProductDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle QR code download
  const handleQRDownload = (productName, barcode) => {
    // Create an anchor element
    const link = document.createElement("a");

    // Set the href to the image path
    link.href = scannerQR;

    // Set the download attribute with a filename based on product info
    link.download = `${productName}_${barcode}_QR.jpeg`;

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const products = [
    {
      name: "Paracetamol",
      barcode: "12345678",
      description: "Painkiller",
      status: "Verified",
      activationDate: "2025-02-12",
      deactivationDate: "2200-02-12",
    },
    {
      name: "Amoxicillin",
      barcode: "87654321",
      description: "Antibiotic",
      status: "Pending",
      activationDate: "2024-11-01",
      deactivationDate: "2200-03-30",
    },
    {
      name: "Cetirizine",
      barcode: "11223344",
      description: "Antihistamine",
      status: "Rejected",
      activationDate: "2023-05-15",
      deactivationDate: "2100-01-01",
    },
    {
      name: "Ibuprofen",
      barcode: "99887766",
      description: "Anti-inflammatory",
      status: "Verified",
      activationDate: "2024-09-10",
      deactivationDate: "2200-12-31",
    },
    {
      name: "Ibuprofen",
      barcode: "99887766",
      description: "Anti-inflammatory",
      status: "Verified",
      activationDate: "2024-09-10",
      deactivationDate: "2200-12-31",
    },
    {
      name: "Ibuprofen",
      barcode: "99887766",
      description: "Anti-inflammatory",
      status: "Verified",
      activationDate: "2024-09-10",
      deactivationDate: "2200-12-31",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.barcode.includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative mx-4 md:mx-20 mt-6 mb-2 space-y-6 text-center">
      {/* Ellipse Backgrounds */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] sm:w-[30vw] sm:h-[30vw] rounded-full bg-yellow-200 opacity-40 blur-[80px]" />
        <div className="absolute top-[-20%] right-[1%] w-[50vw] h-[42vw] sm:w-[25vw] sm:h-[18vw] rounded-full bg-pink-300 opacity-40 blur-[80px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[65vw] h-[45vw] sm:w-[28vw] sm:h-[25vw] rounded-full bg-blue-300 opacity-40 blur-[80px]" />
        <div className="absolute bottom-[5%] right-[10%] w-[65vw] h-[50vw] sm:w-[40vw] sm:h-[35vw] rounded-full bg-purple-300 opacity-40 blur-[80px]" />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 ">
        <div className="flex items-center gap-1 text-gray-400 text-lg sm:text-xl font-medium flex-wrap">
          <h1 className="text-3xl font-bold text-gray-400">Dashboard</h1>
          <FaAngleRight className="text-gray-300 mx-4 text-3xl" />
          <span className="hover:text-primary cursor-pointer transition-colors">
            Product Profile
          </span>
          <FaAngleRight className="text-gray-300 mx-4 text-3xl" />
          <span className="hover:text-primary cursor-pointer transition-colors">
            Product View
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

      {/* Table for desktop with scrollable container - Like the example */}
      <div
        className="hidden md:block overflow-x-auto mb-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="min-w-[900px]">
          {/* Table Header */}
          <div className="bg-blue-600 text-white grid grid-cols-8 py-4 px-6 text-sm sm:text-base rounded-xl shadow-md">
            <div className="font-medium">Sr.no</div>
            <div className="font-medium">Product Name</div>
            <div className="font-medium">Barcode</div>
            <div className="font-medium">Edit Information</div>
            <div className="font-medium">Product Description</div>
            <div className="font-medium">Status</div>
            <div className="font-medium">Activation Date</div>
            <div className="font-medium">Deactivation Date</div>
          </div>

          {/* Table Rows */}
          {filteredProducts.map((product, idx) => (
            <div
              key={idx}
              className="grid grid-cols-8 py-4 px-6 text-sm sm:text-base border-b border-gray-200 mt-2"
            >
              <div className="text-gray-800">{idx + 1}</div>
              <div className="text-gray-800">{product.name}</div>
              <div>
                <div className="flex items-center justify-center gap-3">
                  <FaQrcode
                    className="text-2xl text-gray-700"
                    title="QR Icon"
                  />
                  <FaDownload
                    className="text-base text-gray-500 cursor-pointer hover:text-blue-500 transition-colors"
                    title="Download QR"
                    onClick={() =>
                      handleQRDownload(product.name, product.barcode)
                    }
                  />
                </div>
              </div>
              <div className="text-gray-800 text-center">
                <button
                  onClick={() => handleEdit(idx)}
                  className="p-2 rounded-full hover:bg-blue-100 transition-colors focus:outline-none"
                  aria-label="Edit product"
                >
                  <FaEdit className="text-gray-600 hover:text-blue-800 cursor-pointer text-lg" />
                </button>
              </div>
              <div className="text-gray-800">{product.description}</div>
              <div className="text-gray-800">{product.status}</div>
              <div className="text-gray-800">{product.activationDate}</div>
              <div className="text-gray-800">{product.deactivationDate}</div>
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
                <strong className="text-gray-800">Barcode:</strong>{" "}
                {product.barcode}
              </p>
              <p className="flex justify-between">
                <strong className="text-gray-800">Description:</strong>{" "}
                {product.description}
              </p>
              <p className="flex justify-between">
                <strong className="text-gray-800">Status:</strong>{" "}
                {product.status}
              </p>
              <p className="flex justify-between">
                <strong className="text-gray-800">Activation Date:</strong>{" "}
                {product.activationDate}
              </p>
              <p className="flex justify-between">
                <strong className="text-gray-800">Deactivation Date:</strong>{" "}
                {product.deactivationDate}
              </p>
            </div>

            {/* Card Footer - Action Icons */}
            <div className="flex gap-6 items-center mt-4">
              <FaQrcode
                className="text-xl text-blue-500 hover:text-blue-600 transition-all duration-200"
                title="QR Icon"
              />
              <FaDownload
                className="text-base text-gray-500 cursor-pointer hover:text-gray-700 transition-all duration-200"
                title="Download QR"
                onClick={() => handleQRDownload(product.name, product.barcode)}
              />
              <div className="text-gray-800 text-center">
                <button
                  onClick={() => handleEdit(idx)}
                  className="p-2 rounded-full hover:bg-blue-100 transition-colors focus:outline-none"
                  aria-label="Edit product"
                >
                  <FaEdit className="text-gray-600 hover:text-blue-800 cursor-pointer text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDashboard;
