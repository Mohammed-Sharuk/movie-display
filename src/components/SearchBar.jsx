import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="border rounded px-4 py-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Search</button>
    </form>
  );
};

export default SearchBar;
