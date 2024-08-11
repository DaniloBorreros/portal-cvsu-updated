// components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="px-3 py-4">
      <div className="relative">
        <input
          type="text"
          id="search"
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Search..."
        />
        <svg className="absolute top-3 left-3 w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.942 13.883a6.5 6.5 0 1 0-1.415 1.415l4.873 4.873a1 1 0 0 0 1.415-1.415l-4.873-4.873zm-6.942 1.117a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"></path>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
