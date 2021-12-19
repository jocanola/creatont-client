import React from "react";
import "./SearchBar.css";

export const SearchBar = ({ onSearchChange }) => {
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
        placeholder="Username"
        aria-label="Username"
        aria-describedby="addon-wrapping"
        onChange={(event) => onSearchChange(event)}
      />
    </div>
  );
};
