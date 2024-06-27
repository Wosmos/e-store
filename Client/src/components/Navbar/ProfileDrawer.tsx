// ProfileDrawer.tsx
import React from "react";
import { IoMdClose } from "react-icons/io";
import Profile from "../../assets/Profile.png";

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  isOpen,
  onClose,
  onLogout,
}) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-10/12 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out md:w-1/3 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between">
        <h1 className="flex font-poppins text-[24px] font-medium leading-[1]">
          Your Profile
        </h1>
        <button
          className="text-[14px] font-medium text-[#6c7275]"
          onClick={onClose}
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <img
          src={Profile}
          alt="profile"
          className="h-24 w-24 rounded-full object-cover"
        />
        <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
        <p className="text-gray-500">johndoe@example.com</p>
      </div>

      <div className="mt-8 space-y-4">
        <button className="w-full rounded-lg bg-gray-100 px-4 py-2 text-left font-medium hover:bg-gray-200">
          Account Settings
        </button>
        <button className="w-full rounded-lg bg-gray-100 px-4 py-2 text-left font-medium hover:bg-gray-200">
          Order History
        </button>
        <button className="w-full rounded-lg bg-gray-100 px-4 py-2 text-left font-medium hover:bg-gray-200">
          Wishlist
        </button>
      </div>

      <button
        onClick={onLogout}
        className="relative mt-6 flex w-full transform items-center justify-center gap-8 rounded-lg bg-[#141718] py-2.5 font-inter font-medium leading-[1.63] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#38cb89]"
      >
        Log Out
      </button>
    </div>
  );
};

export default ProfileDrawer;
