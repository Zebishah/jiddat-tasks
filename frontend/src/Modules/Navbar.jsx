import { FaChevronDown } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import image from "../images/dad-hotel-WUoztQ3hp9Q-unsplash.jpg";
import { useAuth } from "../AuthContext";
import { useState } from "react";
const Navbar = () => {
  const { currentUser, handleLogout } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="flex flex-row items-center justify-between px-12 py-4 bg-transparent border-b-1 border-b-gray-300">
      <div className="flex w-full">
        <h1 className="text-2xl text-blue-800 font-radios">
          {currentUser ? `${currentUser.userType} Dashboard` : "Dashboard"}
        </h1>
      </div>
      <div className="flex w-full gap-x-6">
        <div className="flex items-center justify-end w-full gap-x-2">
          <img src={image} alt="..." className="rounded-full w-7 h-7" />
          <p className="text-sm text-black font-radios">
            {currentUser ? currentUser.name : "User"}
          </p>
        </div>
        <div
          className="relative flex items-center justify-center gap-x-3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaChevronDown
            size={20}
            className="text-gray-500 cursor-pointer"
            onClick={handleDropdownToggle}
          />
          <FaBell size={20} className="text-gray-500 cursor-pointer" />
          {dropdownVisible && (
            <div className="absolute right-0 w-32 mt-2 bg-white border border-gray-200 rounded shadow-lg">
              <button
                className="block w-full px-4 py-2 text-left text-black hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
