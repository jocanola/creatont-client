import React from "react";
import "./SearchBar.css";

export const SearchBar = ({ onSearchChange, setTopContent }) => {
  return (
    <div className="input-group flex-nowrap mb-2 search">
      <span className="input-group-text" id="addon-wrapping">
        <i
          className="fas fa-search"
          //   style={{ marginRight: "10px", color: "blue" }}
        ></i>
      </span>
      <input
        type="text"
        className="form-control input-search"
        placeholder="Search"
        aria-label="Title"
        aria-describedby="addon-wrapping"
        onChange={(event) => onSearchChange(event)}
      />
      {/* <button
        class="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        newest
      </button> */}

      <select
        class="form-select"
        id="inputGroupSelect01"
        style={{ maxWidth: "100px" }}
        onChange={(event) => setTopContent(event.value)}
      >
        <option value={false}>newest</option>
        <option value={true}>topmost</option>
      </select>
    </div>
  );
};
