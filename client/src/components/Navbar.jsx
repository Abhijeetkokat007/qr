import React from 'react';
import { Settings, ChevronDown, User, QrCode } from 'lucide-react';
import Logo from '../assets/Cian Logo.png';

export const Navbar = () => {
  const openBackCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: 'environment' } },
        audio: false,
      });

      const videoElement = document.getElementById('scanner-video');
      if (videoElement) {
        videoElement.srcObject = stream;
        videoElement.play();
      }
    } catch (error) {
      console.error('Error accessing back camera:', error);
      alert('Unable to access back camera.');
    }
  };

  const handleSettingsClick = () => {
    window.location.href = '/sidebar';
  };

  return (
    <>
      <nav className="relative h-20 px-6 sm:px-8 lg:px-10 flex items-center justify-between border-b border-gray-200 w-full max-w-7xl mx-auto bg-white mb-4">
        {/* Left Section */}
        <div className="flex items-center">
          <button
            className="text-gray-600 focus:outline-none p-2 hover:bg-gray-100 rounded-full"
            aria-label="Settings"
            onClick={handleSettingsClick}
          >
            <Settings size={20} />
          </button>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={Logo} alt="Cian Logo" className="h-10 object-contain" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <span className="text-gray-700 text-sm hidden sm:block">User</span>
            <button
              className="focus:outline-none p-1 hover:bg-gray-100 rounded-full"
              aria-label="User options"
            >
              <ChevronDown size={16} className="text-gray-500" />
            </button>
          </div>

          <button
            className="focus:outline-none p-1 hover:bg-gray-100 rounded-full"
            aria-label="User Profile"
          >
            <User size={24} className="text-gray-700" />
          </button>

          <button
            className="focus:outline-none p-1 hover:bg-gray-100 rounded-full"
            onClick={openBackCamera}
            aria-label="Open Scanner"
          >
            <QrCode size={24} className="text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Video Preview */}
      {/* <video
        id="scanner-video"
        className="w-full max-w-md mx-auto block"
        autoPlay
        muted
        playsInline
      /> */}
    </>
  );
};

export default Navbar;