import { useState, useRef } from 'react';
import { ChevronLeft, Pencil } from 'lucide-react';
import Profileimg from "../assets/Ellipse 2699.png";

export default function AccountEditForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    companyName: '',
    address: '',
    dateOfBirth: '',
    city: '',
    country: '',
    state: '',
    pincode: ''
  });

  const [profileImage, setProfileImage] = useState(Profileimg);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageClick = () => fileInputRef.current.click();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log('Selected image:', profileImage);
  };

  const InputField = ({ label, name, type = 'text', required, ...rest }) => (
    <div className="w-full">
      <label className="block text-sm mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        className="w-full p-1.5 border border-black rounded-md text-sm"
        {...rest}
      />
    </div>
  );

  return (
    <div className="max-w-xl mx-auto p-4 sm:p-6 bg-white font-sans">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button className="p-1">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl sm:text-3xl flex-grow text-center font-semibold">Account Edit</h1>
        <div className="w-5" />
      </div>

      {/* Profile Image */}
      <div className="flex justify-center mb-8">
        <div className="relative group w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gray-100 shadow-md border border-gray-300">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            onClick={handleImageClick}
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          <button
            className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md border border-gray-400 hover:bg-gray-100 transition"
            onClick={handleImageClick}
            type="button"
          >
            <Pencil size={16} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
          <InputField label="Name" name="name" required />
          <div className="w-full">
            <label className="block text-sm mb-2">
              Mobile Number<span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <span className="border border-r-0 border-black rounded-l-md p-1.5 bg-gray-50 text-gray-500 text-sm whitespace-nowrap">
                +91 -
              </span>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="w-full p-1.5 border border-black rounded-r-md text-sm"
              />
            </div>
          </div>
        </div>

        <InputField
          label="Company Name ( For Distributors/Retailers only )"
          name="companyName"
        />

        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
          <InputField
            label="Address"
            name="address"
            required
            placeholder="Apartment, Street Address"
          />
          <InputField label="Date of Birth" name="dateOfBirth" type="date" required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <InputField label="City" name="city" required />
          <InputField label="Country" name="country" required />
          <InputField label="State" name="state" required />
        </div>

        <div className="flex">
          <div className="w-full sm:w-32">
            <InputField label="Pincode" name="pincode" required />
          </div>
        </div>

        <div className="pt-1 flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-2/4 bg-blue-800 text-white py-2 rounded-md font-medium text-sm"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
