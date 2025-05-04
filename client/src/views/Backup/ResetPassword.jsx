import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordResetForm() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center mb-6">
        <button className="mr-4 text-gray-500">
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
        <h1 className="text-2xl font-bold text-center">Reset Password</h1>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-medium mb-1">Reset Your Password here</h2>
        <p className="text-sm text-gray-800">Must be at least 8 characters</p>
      </div>

      <form className="space-y-4">
        <div className="relative">
          <input
            type={showOldPassword ? "text" : "password"}
            placeholder="Old Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-400"
            onClick={() => setShowOldPassword(!showOldPassword)}
          >
            {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="relative">
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="New Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-400"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-400"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="bg-yellow-100 p-4 rounded-md">
          <p className="text-sm text-gray-800">
            Note - Password must be at least 8 characters long and include at
            least one number, one lowercase letter, one uppercase letter, and
            one special character.
          </p>
        </div>

        <button
          type="submit"
          className="w-full py-3 font-medium rounded-md bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
