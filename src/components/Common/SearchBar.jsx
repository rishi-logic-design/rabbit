import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXCircle, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchterm, setSearchterm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchterm);
    setIsOpen(false);
  }

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ease-in-out ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      } `}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative  flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchterm(e.target.value)}
              value={searchterm}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            />

            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-grey-600 hover:text-grey-800"
            >
              <HiMagnifyingGlass className="h-6 w-6 cursor-pointer" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-grey-600 hover:text-grey-800"
          >
            <HiMiniXMark className="h-6 w-6 cursor-pointer" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-5 w-6 cursor-pointer" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
