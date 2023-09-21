import React, { useState } from "react";
import "../Components/SearchInput.css";
function SearchInput() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {
    // Handle the search functionality here, e.g., perform a search using the searchKeyword state.
    console.log("Searching for:", searchKeyword);
  };

  return (
    <div className="outer-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchInput;
