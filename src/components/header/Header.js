import React from "react";
import { Account } from "../Account/Account";
import "./Header.css";

export const Header = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
      <Account />
      <div className="container head-spacing">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          Creatont
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link" href="#">
                New Post
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">About Us</a>
            </li>
          </ul>
          <div className="d-flex">
            <span
              className="login-span"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Login
            </span>{" "}
            |<span className="siginup-span">Sign Up</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
