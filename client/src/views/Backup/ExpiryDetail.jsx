import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import imgExpiry from "../assets/Adirab DSR Cap PACK 2.png";

export default function ExpiryDetails() {
  const [showModal, setShowModal] = useState(true);

  if (!showModal) return null; // Don't render if modal is closed

  return (
    <div className="h-full bg-gray-50 md:p-5 p-2 mb-10 min-h-screen">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4 mt-20">
        <button className="mr-4">
          <ArrowLeft className="md:w-7 w-5 md:h-7 h-5 text-gray-700" />
        </button>
        <h1 className="md:text-4xl text-2xl font-bold">Expiry Details</h1>
      </div>

      {/* Info Text */}
      <p className="text-center font-medium md:text-2xl p-2 text-lg text-gray-600 mb-4 md:mt-10 mt-6">
        Find mfg. Date / Best before / Expiry details of the product here
      </p>

      {/* Product Image Box */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="w-full border-4 border-green-500 rounded-lg px-4 py-6 mb-6">
          <div className="flex justify-center">
            <img
              src={imgExpiry}
              alt="Product"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Expiry Date Text */}
      <p className="text-center text-gray-800 md:mb-12 mb-10 mt-10 md:text-2xl text-lg">
        This product is recommended for use until February 7th, 2026
      </p>

      {/* OK Button */}
      <div className="flex justify-center">
        <button
          className="text-white font-semibold rounded-lg bg-gradient-to-r from-[#1A00FF] to-[#0B004B] hover:opacity-90 transition
            text-base sm:text-lg md:text-xl
            py-2 sm:py-2.5 px-24 lg:px-28 sm:px-24"
          onClick={() => setShowModal(false)}
        >
          Ok
        </button>
      </div>
    </div>
  );
}
