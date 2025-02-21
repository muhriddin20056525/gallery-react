import React, { useState } from "react";

export default function Search({ getSearchImageTitle }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={() => getSearchImageTitle(searchText)}>Search</button>
    </div>
  );
}
