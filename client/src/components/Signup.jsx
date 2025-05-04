import { useState } from "react";
import axios from "axios";
import img2 from "../assets/Home/Signin.png";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // optional icons, or use emoji/icons as fallback

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showRePassword, setShowRePassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (formData.password !== formData.rePassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        username: formData.username,
        mobile: formData.phone,
        email: formData.email,
        password: formData.password,
      });

      setSuccessMsg(res.data.message || "Signup successful!");
      setTimeout(() => navigate("/login"), 1500); // Redirect after success
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2 relative">
      {/* Background Blurs */}
      <div className="absolute top-[-10%] left-[5%] w-[30vw] h-[30vw] sm:w-[18vw] sm:h-[18vw] rounded-full bg-yellow-200 opacity-30 blur-[50px]" />
      <div className="absolute top-[-10%] right-[2%] w-[25vw] h-[20vw] sm:w-[15vw] sm:h-[12vw] rounded-full bg-pink-300 opacity-30 blur-[50px]" />
      <div className="absolute bottom-[10%] left-[5%] w-[35vw] h-[25vw] sm:w-[20vw] sm:h-[18vw] rounded-full bg-blue-300 opacity-30 blur-[50px]" />
      <div className="absolute bottom-[5%] right-[5%] w-[35vw] h-[28vw] sm:w-[22vw] sm:h-[20vw] rounded-full bg-purple-300 opacity-30 blur-[50px]" />

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6 items-center">
        {/* Left - Form */}
        <div className="w-full flex flex-col justify-center px-4 md:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Sign up</h2>
            <p className="text-sm text-gray-500 mb-6">
              Let's start a wonderful journey with you
            </p>
          </div>

          {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}
          {successMsg && <p className="text-green-600 text-sm text-center mb-2">{successMsg}</p>}

          <form className="space-y-4 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="text-sm font-semibold">Username</label>
              <input type="text" id="username" value={formData.username} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Username" required />
            </div>
            <div className="relative">
              <label htmlFor="password" className="text-sm font-semibold">Password</label>
              <input
                type={showRePassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowRePassword((prev) => !prev)}
                className="absolute top-8 right-3 text-gray-500"
                tabIndex={-1}
              >
                {showRePassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <label htmlFor="rePassword" className="text-sm font-semibold">
                Re-write Password
              </label>
              <input
                type={showRePassword ? "text" : "password"}
                id="rePassword"
                value={formData.rePassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Re-write Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowRePassword((prev) => !prev)}
                className="absolute top-8 right-3 text-gray-500"
                tabIndex={-1}
              >
                {showRePassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-semibold">Phone Number</label>
              <input type="text" id="phone" value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter Phone number" required />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">E-mail</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter E-mail" />
            </div>
            <button type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white cursor-pointer py-2 rounded-xl hover:bg-blue-700 transition duration-300">
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline font-semibold">
              Log in
            </Link>
          </p>
        </div>

        {/* Right - Image */}
        <div className="hidden md:flex h-full ml-10 justify-center items-center">
          <img src={img2} alt="Signup Visual" className="w-full rounded-2xl object-cover" />
        </div>
      </div>
    </div>
  );
}


// import img2 from "../assets/Home/Signin.png";
// import { Link } from "react-router-dom";

// export default function Signup() {
//   return (
//     <div className="min-h-screen flex items-center justify-center p-2 relative">
//       <div className="absolute top-[-10%] left-[5%] w-[30vw] h-[30vw] sm:w-[18vw] sm:h-[18vw] rounded-full bg-yellow-200 opacity-30 blur-[50px]" />
//       <div className="absolute top-[-10%] right-[2%] w-[25vw] h-[20vw] sm:w-[15vw] sm:h-[12vw] rounded-full bg-pink-300 opacity-30 blur-[50px]" />
//       <div className="absolute bottom-[10%] left-[5%] w-[35vw] h-[25vw] sm:w-[20vw] sm:h-[18vw] rounded-full bg-blue-300 opacity-30 blur-[50px]" />
//       <div className="absolute bottom-[5%] right-[5%] w-[35vw] h-[28vw] sm:w-[22vw] sm:h-[20vw] rounded-full bg-purple-300 opacity-30 blur-[50px]" />

//       <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6 items-center">
//         {/* Left side - Form */}
//         <div className="w-full flex flex-col justify-center px-4 md:px-10">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold mb-2">Sign in</h2>
//             <p className="text-sm text-gray-500 mb-6">
//               Lets start wonderful journey with you
//             </p>
//           </div>

//           <form className="space-y-4 w-full max-w-md mx-auto">
//             <div>
//               <label htmlFor="username" className="text-sm font-semibold">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Enter Username"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="text-sm font-semibold">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter Password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div>
//               <label htmlFor="re-password" className="text-sm font-semibold">
//                 Re-write Password
//               </label>
//               <input
//                 type="password"
//                 id="re-password"
//                 placeholder="Re-write Password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div>
//               <label htmlFor="phone" className="text-sm font-semibold">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phone"
//                 placeholder="Enter Phone number"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="text-sm font-semibold">
//                 E-mail
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter E-mail"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white cursor-pointer py-2 rounded-xl hover:bg-blue-700 transition duration-300"
//             >
//               Sign In
//             </button>
//           </form>

//           <div className="flex items-center my-4 w-full max-w-md mx-auto">
//             <hr className="flex-grow border-gray-300" />
//             <span className="mx-2 text-sm text-gray-500">or continue</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>

//           <div className="flex justify-center space-x-4 w-full max-w-md mx-auto">
//             <button className="flex items-center px-6 py-2 border border-gray-400 rounded-xl text-sm font-medium cursor-pointer">
//               <img
//                 src="https://img.icons8.com/color/16/google-logo.png"
//                 alt="Google"
//                 className="mr-2"
//               />
//               Google
//             </button>
//             <button className="flex items-center px-6 py-2 border border-gray-400 rounded-xl text-sm font-medium cursor-pointer">
//               <img
//                 src="https://img.icons8.com/ios-filled/16/1877F2/facebook-new.png"
//                 alt="Facebook"
//                 className="mr-2"
//               />
//               Facebook
//             </button>
//           </div>

//           <p className="text-sm text-center text-gray-600 mt-6">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-blue-600 hover:underline font-semibold cursor-pointer"
//             >
//               Log in
//             </Link>
//           </p>
//         </div>

//         {/* Right side - Image */}
//         <div className="hidden md:flex h-full ml-10 justify-center items-center">
//           <img
//             src={img2}
//             alt="Pills"
//             className="w-full  rounded-2xl object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
