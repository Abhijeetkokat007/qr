import { useState } from "react";

export default function DeleteAccountPage() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-12">
        <button className="text-gray-500">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold flex-grow text-center">
          Delete Account
        </h1>
        <div className="w-6"></div> {/* Empty div for spacing balance */}
      </div>

      <div className="mb-10 text-center">
        <h2 className="text-lg font-medium">User Account</h2>
        <p className="text-gray-600">+91xxxxxxxxxx</p>
      </div>

      <div className="flex justify-center mb-12">
        <button className="w-3/4 py-3  font-medium rounded-md bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Delete Account
        </button>
      </div>

      <div className="mb-10 px-4">
        <h3 className="text-lg font-semibold mb-3 text-center">
          When you delete the account?
        </h3>
        <p className="text-md text-gray-700 max-w-lg mx-auto">
          We will miss you. You wont be able to access your already verified
          products, you cannot access your Rewards. Your data will be completely
          deleted. You will not receive any notifications on already verified
          products.
        </p>
      </div>

      <div className="px-4">
        <h3 className="text-lg font-semibold mb-3 text-center">
          How can I create new account?
        </h3>
        <p className="text-md text-gray-700 max-w-lg mx-auto">
          Coming back is easy. You need to register using email or phone number.
          You will no longer be able to see your previous data.
        </p>
      </div>
    </div>
  );
}
