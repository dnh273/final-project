import React, { useState } from "react";

interface SearchTableProps {
  setQ: React.Dispatch<React.SetStateAction<string>>;
}

const SearchTable = ({ setQ }: SearchTableProps) => {
  const [value, setValue] = useState("");
  const handleQ = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.normalize());
  };

  return (
    <div className="mb-4">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative flex">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="table-search-users"
          className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e) => handleQ(e)}
          placeholder="Tìm kiếm giảng viên"
        />
        <button
          onClick={() => setQ(value)}
          className="bg-blue-400 text-white font-semibold rounded-lg ml-2 inline-block px-2"
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default SearchTable;
