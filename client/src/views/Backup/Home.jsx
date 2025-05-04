import React from "react";
import { FaQrcode, FaCheckCircle, FaShoppingCart } from "react-icons/fa";
import Img1 from "../assets/Home/1.png";
import Img2 from "../assets/Home/2.png";
import Img3 from "../assets/Home/3.png";
import Img4 from "../assets/Home/4.png";
import Img5 from "../assets/Home/5.png";
import Img6 from "../assets/Home/5.png";

const Home = () => {
  const openBackCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } },
        audio: false,
      });

      const videoElement = document.getElementById("scanner-video");
      if (videoElement) {
        videoElement.srcObject = stream;
        videoElement.play();
      }
    } catch (error) {
      console.error("Error accessing back camera:", error);
      alert("Unable to access back camera.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-2 sm:p-4 md:p-6 space-y-4 sm:space-y-6 md:space-y-8">
      {/* Mobile Background Image */}
      <div className="sm:hidden fixed inset-0 z-0 pointer-events-none">
        <img
          src={Img1}
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center relative z-10">
        Authenticate Now!
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base text-center max-w-xl text-gray-600 relative z-10">
        Scan the QR code located on the product to authenticate it, access
        comprehensive information about the product, its journey and additional
        details
      </p>

      {/* Three Horizontal Images - Hidden below 550px */}
      <div className="hidden sm:flex w-full overflow-hidden">
        <img
          src={Img1}
          alt="img1"
          className="w-1/3 md:w-[350px] lg:w-[529px] h-auto sm:h-[200px] md:h-[250px] lg:h-[384px] object-cover z-30"
        />
        <img
          src={Img2}
          alt="img2"
          className="w-1/3 md:w-[350px] lg:w-[529px] h-auto sm:h-[200px] md:h-[250px] lg:h-[384px] object-cover -ml-4 sm:-ml-6 md:-ml-8 z-20"
        />
        <img
          src={Img3}
          alt="img3"
          className="w-1/3 md:w-[350px] lg:w-[529px] h-auto sm:h-[200px] md:h-[250px] lg:h-[384px] object-cover -ml-4 sm:-ml-6 md:-ml-8 z-10"
        />
      </div>

      {/* Wave Background Wrapper */}
      <div className="relative flex flex-col items-center sm:items-start -mt-2 sm:-mt-3 md:-mt-4 w-full">
        {/* Background waves - only on large screens */}
        <img
          src={Img5}
          alt="Wave background"
          className="absolute left-[40px] bottom-[200px] w-[1100px] h-[715px] object-cover z-0 -ml-78 rotate-2 hidden lg:block"
        />
        <img
          src={Img6}
          alt="Wave Continuation"
          className="absolute left-[700px] bottom-[200px] w-[800px] h-[400px] object-cover z-0 hidden lg:block"
        />

        {/* Small screens: Image 4 */}
        <div className="block sm:hidden w-full mb-4 relative z-10">
          <img
            src={Img4}
            alt="Side pic"
            className="w-64 xs:w-72 h-auto xs:h-[180px] object-cover mx-auto"
          />
        </div>

        {/* Small screens: Icons Row */}
        <div className="flex sm:hidden items-center justify-center space-x-4 xs:space-x-6 w-full mb-6 relative z-10">
          <div className="flex flex-col items-center">
            <FaQrcode className="text-xl xs:text-2xl text-black" />
            <span className="mt-1 text-xs xs:text-sm font-semibold leading-relaxed">
              Scan
            </span>
          </div>

          <div className="w-0.5 h-16 bg-black" />

          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-xl xs:text-2xl text-black" />
            <span className="mt-1 text-xs xs:text-sm font-semibold leading-relaxed">
              Verify
            </span>
          </div>

          <div className="w-0.5 h-16 bg-black" />

          <div className="flex flex-col items-center">
            <FaShoppingCart className="text-xl xs:text-2xl text-black" />
            <span className="mt-1 text-xs xs:text-sm font-semibold leading-relaxed">
              Buy
            </span>
          </div>
        </div>

        {/* Small screens: Button */}
        <div className="block sm:hidden w-full relative z-10">
          <button
            onClick={openBackCamera}
            className="flex items-center justify-center w-48 xs:w-56 px-3 py-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition duration-300 mx-auto"
          >
            <FaQrcode className="text-lg text-white mr-2" />
            Scan QR
          </button>
        </div>

        {/* Medium to Large screens: Layout */}
        <div className="hidden sm:flex flex-row items-center justify-center relative z-10 w-full">
          <img
            src={Img4}
            alt="Side pic"
            className="w-[250px] md:w-[350px] lg:w-[415px] h-[200px] md:h-[270px] lg:h-[311px] object-cover mr-4 md:mr-6"
          />

          <div className="flex items-center space-x-8 md:space-x-16 lg:space-x-20">
            <div className="flex flex-col items-center">
              <FaQrcode className="text-3xl md:text-4xl text-black" />
              <span className="mt-2 md:mt-4 text-base md:text-lg font-semibold leading-relaxed">
                Scan
              </span>
            </div>

            <div className="w-0.5 h-20 md:h-24 lg:h-30 bg-black" />

            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-3xl md:text-4xl text-black" />
              <span className="mt-2 md:mt-4 text-base md:text-lg font-semibold leading-relaxed">
                Verify
              </span>
            </div>

            <div className="w-0.5 h-20 md:h-24 lg:h-30 bg-black" />

            <div className="flex flex-col items-center">
              <FaShoppingCart className="text-3xl md:text-4xl text-black" />
              <span className="mt-2 md:mt-4 text-base md:text-lg font-semibold leading-relaxed">
                Buy
              </span>
            </div>
          </div>
        </div>

        {/* Medium to Large screens: Button */}
        <div className="hidden sm:flex justify-center mt-2 md:mt-6 lg:mt-8 relative z-10 w-full">
          <button
            onClick={openBackCamera}
            className="flex items-center justify-center w-72 md:w-80 lg:w-[300px] px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-base md:text-lg font-semibold rounded-2xl transform-gpu transition duration-300 min-h-[48px]"
          >
            <FaQrcode className="text-xl md:text-2xl lg:text-4xl text-white mr-2 md:mr-3" />
            Scan QR
          </button>
        </div>

        {/* Video Preview */}
        {/* <video
          id="scanner-video"
          className="w-full max-w-md mt-4 mx-auto block relative z-10"
          autoPlay
          muted
          playsInline
        /> */}
      </div>
    </div>
  );
};

export default Home;