import {
  ChevronRight,
  ChevronLeft,
  User,
  Package,
  CreditCard,
  KeyRound,
  Trash2,
  FileText,
  Shield,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AccountSettings() {
  const navigate = useNavigate();

  const accountSettings = [
    { 
      icon: User, 
      label: "Edit Profile", 
      path: "/accountedit" 
    },
    { 
      icon: CreditCard, 
      label: "UPI Details", 
      path: "/upidetails" 
    },
    { 
      icon: KeyRound, 
      label: "Reset Password", 
      path: "/resetpassword"
    },
    { 
      icon: Trash2, 
      label: "Delete Account", 
      path: "/deleteaccount" 
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 font-sans">
      <div className="relative flex items-center justify-center mb-7">
        <ChevronLeft
          size={22}
          className="text-gray-900 absolute left-[calc(50%-120px)] cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h2 className="text-base font-medium text-black">Hey, User</h2>
      </div>

      <div className="flex justify-between mb-8">
        <button 
          className="border border-gray-500 rounded-lg py-2 px-4 text-sm font-medium text-black flex-1 mx-1 flex items-center justify-center"
          onClick={() => navigate("/my-products")}
        >
          <Package size={18} className="mr-2" />
          My Products
        </button>
        <button 
          className="border border-gray-500 rounded-lg py-2 px-4 text-sm font-medium text-black flex-1 mx-1 flex items-center justify-center"
          onClick={() => navigate("/reports")}
        >
          <FileText size={18} className="mr-2" />
          Report
        </button>
      </div>

      <hr className="mb-5 text-gray-400" />

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-center">Account Settings</h3>

        {accountSettings.map((item, index) => (
          <div key={index} className="py-2">
            <button 
              className="w-full flex items-center justify-between"
              onClick={() => handleNavigation(item.path)}
            >
              <div className="flex items-center">
                <item.icon size={18} className="text-gray-600 mr-3" />
                <span className="text-base">{item.label}</span>
              </div>
              <ChevronRight size={18} className="text-gray-400 ml-1" />
            </button>
          </div>
        ))}
      </div>

      <hr className="mb-5 text-gray-400" />

      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2 text-center">
          Legal & Information
        </h3>

        <div className="py-2">
          <button 
            className="w-full flex items-center justify-between"
            onClick={() => navigate("/terms")}
          >
            <div className="flex items-center">
              <FileText size={18} className="text-gray-600 mr-3" />
              <span className="text-base">Terms of Use</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </button>
        </div>

        <div className="py-2">
          <button 
            className="w-full flex items-center justify-between"
            onClick={() => navigate("/privacy")}
          >
            <div className="flex items-center">
              <Shield size={18} className="text-gray-600 mr-3" />
              <span className="text-base">Privacy Policy</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </button>
        </div>
      </div>

      <button 
        className="border border-gray-500 rounded-lg py-2 px-4 text-sm font-medium text-black flex items-center justify-center mx-auto"
        onClick={() => {
          // Perform logout actions here
          navigate("/login");
        }}
      >
        <LogOut size={18} className="mr-2" />
        Log Out
      </button>
    </div>
  );
}