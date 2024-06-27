// SearchDrawer.tsx
import React from "react";
import { IoMdClose } from "react-icons/io";
import { LuSearch } from "react-icons/lu";

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchSuggestions: string[];
}

const SearchDrawer: React.FC<SearchDrawerProps> = ({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  searchSuggestions,
}) => {
  const filteredSuggestions = searchSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-full transform bg-white backdrop-blur-lg p-10 pt-12 shadow-lg transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between">
        <h1 className="flex font-poppins text-[24px] font-medium leading-[1]">
          Search
        </h1>
        <button
          className="text-[14px] font-medium text-[#6c7275]"
          onClick={onClose}
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>

      <div className="relative mt-6">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full rounded-full border-2 border-gray-300 py-3 pl-12 pr-4 focus:border-[#38cb89] focus:outline-none focus:ring-2 focus:ring-[#38cb89] focus:ring-opacity-50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <LuSearch className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" />
      </div>

      {searchQuery && (
        <ul className="mt-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-3 transition-colors duration-150 hover:bg-gray-100"
              onClick={() => {
                setSearchQuery(suggestion);
                // Implement search functionality here
                console.log(`Searching for ${suggestion}`);
              }}
            >
              {suggestion}
              {index < filteredSuggestions.length - 1 && (
                <div className="mt-2 border-b border-gray-200"></div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchDrawer;
