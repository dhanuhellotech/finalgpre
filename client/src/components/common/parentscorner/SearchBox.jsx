import React, { useState } from 'react';
import './Search.css';

const SearchBox = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Perform the search logic on the data
    const filteredResults = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      
      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h4>Search Results:</h4>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
