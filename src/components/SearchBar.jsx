import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onSearch(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full px-2 sm:px-0">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter City"
        className="px-4 py-2 w-full sm:w-64 md:w-80 rounded-full text-base sm:text-lg focus:outline-none shadow-lg"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
