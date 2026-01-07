import "./searchBar.css";
import React from "react";
import { useState } from "react";

export default function SearchBar() {
  const [term, setTerm] = useState("");

  const handleSearchChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter film/series title to search soundtracks"
        value={term}
        onChange={handleSearchChange}
      />
      <button className="SearchButton" onClick={() => {}}>
        SEARCH
      </button>
    </div>
  );
}
