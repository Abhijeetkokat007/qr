import React, { useState } from "react";
import { BiDownload } from "react-icons/bi";
import DefaultProfile from "../../assets/Home/Ellipse 2699.png";

export default function AccountEditing() {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    reUsername: "",
    password: "",
    rePassword: "",
    email: "",
    otp: "",
    phone: "",
    phoneOtp: "",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="w-full min-h-screen p-4 bg-gradient-to-br from-white via-purple-100 to-blue-100 flex flex-col md:flex-row items-center justify-around gap-10">
      {/* Left Section - Profile Picture Upload */}
      <div className="flex flex-col items-center gap-3">
        <img
          src={profileImage || DefaultProfile}
          alt="Profile"
          className="w-32 sm:w-40 md:w-48 lg:w-48 h-auto border text-center rounded-full object-cover"
        />

        <label className="cursor-pointer flex items-center gap-2 bg-gray-300 w-40 lg:w-full text-black px-3 lg:px-6 xl:px-8 sm:px-4 md:px-3 py-2 rounded-full shadow-md transition">
          <BiDownload size={22} />
          Upload Photo
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      </div>

      {/* Right Section - Forms */}
      <div className="flex flex-col gap-4 w-full max-w-md lg:max-w-lg">
        {/* Username Editing */}
        <form className="bg-white p-4 sm:p-6 rounded-xl shadow-md space-y-3">
          <h3 className="font-semibold text-lg sm:text-xl">Username Editing</h3>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="p-2 border border-gray-300 rounded-xl w-full"
          />
          <input
            type="text"
            name="reUsername"
            value={formData.reUsername}
            onChange={handleChange}
            placeholder="Re-write Username"
            className="p-2 border border-gray-300 rounded-xl w-full mt-2"
          />
          <div className="flex justify-between mt-3">
            <button
              type="submit"
              className="bg-[#70A2FF] text-white px-5 py-1.5 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              type="reset"
              className="text-black px-5 py-1.5 rounded-lg shadow border transition"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Password Editing */}
        <form className="bg-white p-4 sm:p-6 rounded-xl shadow-md space-y-3">
          <h3 className="font-semibold text-lg sm:text-xl">Password Editing</h3>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-xl w-full"
          />
          <input
            type="password"
            name="rePassword"
            value={formData.rePassword}
            onChange={handleChange}
            placeholder="Re-write Password"
            className="p-2 border border-gray-300 rounded-xl w-full mt-2"
          />
          <div className="flex justify-between mt-3">
            <button
              type="submit"
              className="bg-[#70A2FF] text-white px-5 py-1.5 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              type="reset"
              className="text-black px-5 py-1.5 rounded-lg shadow border transition"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Email Verification */}
        <form className="bg-white p-4 sm:p-6 rounded-xl shadow-md space-y-3">
          <h3 className="font-semibold text-lg sm:text-xl">
            Email Verification
          </h3>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            className="p-2 border border-gray-300 rounded-xl w-full"
          />
          <input
            type="text"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            className="p-2 border border-gray-300 rounded-xl w-full mt-2"
          />
          <div className="flex justify-between mt-3">
            <button
              type="submit"
              className="bg-[#70A2FF] text-white px-5 py-1.5 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Verify
            </button>
            <button
              type="reset"
              className="text-black px-5 py-1.5 rounded-lg shadow border transition"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Phone Number Verification */}
        <form className="bg-white p-4 sm:p-6 rounded-xl shadow-md space-y-3">
          <h3 className="font-semibold text-lg sm:text-xl">
            Phone Number Verification
          </h3>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="p-2 border border-gray-300 rounded-xl w-full"
          />
          <input
            type="text"
            name="phoneOtp"
            value={formData.phoneOtp}
            onChange={handleChange}
            placeholder="Enter OTP"
            className="p-2 border border-gray-300 rounded-xl w-full mt-2"
          />
          <div className="flex justify-between mt-3">
            <button
              type="submit"
              className="bg-[#70A2FF] text-white px-5 py-1.5 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Verify
            </button>
            <button
              type="reset"
              className="text-black px-5 py-1.5 rounded-lg shadow border transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
