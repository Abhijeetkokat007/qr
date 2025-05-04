import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
function Signup() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!mobile || !password) {
      toast.error('All fields are required');
      return false;
    }

    if (!mobileRegex.test(mobile)) {
      toast.error('Enter a valid 10-digit mobile number');
      return false;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return false;
    }

    return true;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        mobile,
        password,
      });
      toast.success(res.data.message);
      setMobile('');
      setPassword('');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Create Account</h2>
        <div className="space-y-4">
          <input
            type="text"
            value={mobile}
            placeholder="Mobile Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleSignup}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <span className="text-blue-600 hover:underline cursor-pointer">
            <Link  to="/login">login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
