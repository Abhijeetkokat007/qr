import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/Home/Login.png";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ mobile: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard"); // Change as per your routing
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 relative">
      {/* Background blur circles */}
      <div className="absolute top-[-10%] left-[5%] w-[30vw] h-[30vw] sm:w-[18vw] sm:h-[18vw] rounded-full bg-yellow-200 opacity-30 blur-[50px]" />
      <div className="absolute top-[-10%] right-[2%] w-[25vw] h-[20vw] sm:w-[15vw] sm:h-[12vw] rounded-full bg-pink-300 opacity-30 blur-[50px]" />
      <div className="absolute bottom-[10%] left-[5%] w-[35vw] h-[25vw] sm:w-[20vw] sm:h-[18vw] rounded-full bg-blue-300 opacity-30 blur-[50px]" />
      <div className="absolute bottom-[5%] right-[5%] w-[35vw] h-[28vw] sm:w-[22vw] sm:h-[20vw] rounded-full bg-purple-300 opacity-30 blur-[50px]" />

      {/* Header Text */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl text-blue-500 font-bold mb-4">
          Authenticate Now!
        </h2>
        <p className="font-semibold text-sm md:text-base px-2">
          Scan the QR code located on the product to authenticate it, access comprehensive information about the product, its journey, and additional details.
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Form */}
        <div className="flex flex-col justify-center px-4 md:px-10">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold mb-2">Log In</h3>
            <p className="text-sm text-gray-500">
              Welcome back! Please enter your details
            </p>
          </div>

          <form className="space-y-4 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="mobile" className="text-sm font-semibold">Mobile Number</label>
              <input
                id="mobile"
                type="text"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-semibold">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Log In
            </button>
          </form>

          <div className="text-sm text-blue-600 cursor-pointer hover:underline mt-2 text-right max-w-md mx-auto">
            Forgot Password?
          </div>

          <div className="flex items-center my-6 w-full max-w-md mx-auto">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">or continue</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center space-x-4 w-full max-w-md mx-auto">
            <button className="flex items-center px-6 py-2 border border-gray-500 rounded-xl text-sm font-medium cursor-pointer">
              <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" className="mr-2" />
              Google
            </button>
            <button className="flex items-center px-6 py-2 border border-gray-500 rounded-xl text-sm font-medium cursor-pointer">
              <img src="https://img.icons8.com/ios-filled/16/1877F2/facebook-new.png" alt="Facebook" className="mr-2" />
              Facebook
            </button>
          </div>

          <p className="text-sm text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:flex h-full justify-center items-center">
          <img src={img1} alt="Scientist" className="w-full rounded-2xl object-cover" />
        </div>
      </div>
    </div>
  );
}




// import img1 from "../assets/Home/Login.png";
// import { Link } from "react-router-dom";

// export default function Login() {
//   return (
//     <div className="min-h-screen flex flex-col items-center p-4 relative">
//       <div className="absolute top-[-10%] left-[5%] w-[30vw] h-[30vw] sm:w-[18vw] sm:h-[18vw] rounded-full bg-yellow-200 opacity-30 blur-[50px]" />
//       <div className="absolute top-[-10%] right-[2%] w-[25vw] h-[20vw] sm:w-[15vw] sm:h-[12vw] rounded-full bg-pink-300 opacity-30 blur-[50px]" />
//       <div className="absolute bottom-[10%] left-[5%] w-[35vw] h-[25vw] sm:w-[20vw] sm:h-[18vw] rounded-full bg-blue-300 opacity-30 blur-[50px]" />
//       <div className="absolute bottom-[5%] right-[5%] w-[35vw] h-[28vw] sm:w-[22vw] sm:h-[20vw] rounded-full bg-purple-300 opacity-30 blur-[50px]" />

//       <div className="text-center max-w-3xl mx-auto mb-10">
//         <h2 className="text-3xl md:text-4xl text-blue-500 font-bold mb-4">
//           Authenticate Now !
//         </h2>
//         <p className="font-semibold text-sm md:text-base px-2">
//           Scan the QR code located on the product to authenticate it, access
//           comprehensive information about the product, its journey, and
//           additional details.
//         </p>
//       </div>

//       {/* Main Content */}
//       <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
//         {/* Left side - Form */}
//         <div className="flex flex-col justify-center px-4 md:px-10">
//           <div className="text-center mb-6">
//             <h3 className="text-3xl font-bold mb-2">Log In</h3>
//             <p className="text-sm text-gray-500">
//               Welcome back! Please enter your details
//             </p>
//           </div>

//           <form className="space-y-4 w-full max-w-md mx-auto">
//             <div className="flex flex-col space-y-1">
//               <label htmlFor="username" className="text-sm font-semibold">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 type="text"
//                 placeholder="Enter Username"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div className="flex flex-col space-y-1">
//               <label htmlFor="password" className="text-sm font-semibold">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 placeholder="Enter Password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>

//             <div className="text-left text-sm text-blue-600 cursor-pointer hover:underline">
//               Forgot Password?
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
//             >
//               Log In
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="flex items-center my-6 w-full max-w-md mx-auto">
//             <hr className="flex-grow border-gray-300" />
//             <span className="mx-2 text-sm text-gray-500">or continue</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>

//           <div className="flex justify-center space-x-4 w-full max-w-md mx-auto">
//             <button className="flex items-center px-6 py-2 border border-gray-500 rounded-xl text-sm font-medium cursor-pointer">
//               <img
//                 src="https://img.icons8.com/color/16/google-logo.png"
//                 alt="Google"
//                 className="mr-2"
//               />
//               Google
//             </button>
//             <button className="flex items-center px-6 py-2 border border-gray-500 rounded-xl text-sm font-medium cursor-pointer">
//               <img
//                 src="https://img.icons8.com/ios-filled/16/1877F2/facebook-new.png"
//                 alt="Facebook"
//                 className="mr-2"
//               />
//               Facebook
//             </button>
//           </div>

//           <p className="text-sm text-center text-gray-600 mt-6">
//             Dont have an account?{" "}
//             <Link
//               to="/signup"
//               className="text-blue-600 hover:underline font-semibold"
//             >
//               Sign up
//             </Link>
//           </p>
//         </div>

//         {/* Right side - Image */}
//         <div className="hidden md:flex h-full justify-center items-center">
//           <img
//             src={img1}
//             alt="Scientist"
//             className="w-full rounded-2xl object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
