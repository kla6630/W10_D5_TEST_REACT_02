import React, { useState } from "react";

function SearchBar({ initialValue, onSearch }) {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
