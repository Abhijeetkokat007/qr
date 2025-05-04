import { ArrowLeft, Clock } from "lucide-react";
import { useState } from "react";

export default function UPIDetails() {
  const [upiId, setUpiId] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {/* Section 1: UPI Details */}
      <div className="max-w-lg mx-auto p-4 sm:p-6 md:p-8 bg-white mt-16 rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center mb-16 mt-5 md:mt-2 sm:mb-24">
          <button className="md:mr-4 text-gray-700 hover:bg-gray-100 rounded-full p-1" aria-label="Back">
            <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center flex-1">
            UPI Details
          </h1>
        </div>

        {/* UPI ID Input Field */}
        <div className="mb-4">
          <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">UPI Id</label>
          <input
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base"
          />
        </div>

        {/* No UPI ID Message */}
        <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 mt-6 text-center">
          No UPI Id saved to be shown
        </p>
      </div>

      {/* Section 2: Transaction History + Delete Button */}
      <div className="max-w-7xl mx-auto md:mb-20 mb-10">
        {/* Transaction History Option */}
        <div className="py-6 sm:py-8 border-t border-b border-gray-200 mb-12 sm:mb-16">
          <button className="flex items-center justify-center w-full">
            <div className="p-2 mr-3">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="font-medium text-base sm:text-lg md:text-2xl">
              View transaction history
            </span>
          </button>
        </div>

        {/* Delete Button - Centered */}
        <div className="flex justify-center">
          <button
            className="text-white font-semibold rounded-lg bg-gradient-to-r from-[#1A00FF] to-[#0B004B] hover:opacity-90 transition
              text-sm sm:text-base md:text-lg lg:text-xl
              py-2 sm:py-2.5 px-20 sm:px-24 md:px-28"
            onClick={() => setShowModal(false)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
