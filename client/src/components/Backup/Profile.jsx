import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const res = await axios.get('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      toast.error('Failed to load profile');
      navigate('/login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out');
    navigate('/login');
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <Toaster position="top-center" />
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Your Profile</h2>

        {user ? (
          <div className="text-center space-y-4">
            <p><strong>User ID:</strong> {user._id}</p>
            <p><strong>Mobile:</strong> {user.mobile}</p>
            <button
              onClick={handleLogout}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading user data...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
