import React from "react";

function SearchBar( {onFilterChange, currentSortBy, onsetSortBy} ) {
  
  function handleFilterClick(event) {
    const filterType = event.target.value
    onFilterChange(filterType)
  }

  function handleSortByChange(e) {
    console.log(e.target.value)
    onsetSortBy(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleSortByChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handleSortByChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterClick}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
