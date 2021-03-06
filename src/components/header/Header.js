import React from "react";
import { About } from "../About/About";
import { Account } from "../Account/Account";
import { PostContent } from "../Post/PostContent";
// import { ReviewForm } from "../Reviews/Review";
import "./Header.css";

export const Header = ({ setTopContent }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <Account />
      <PostContent />
      <About />
      <nav className="navbar sticky-top navbar-expand-lg navbar-light">
        <div className="container head-spacing">
          <a className="navbar-brand" href="#">
            Criew
          </a>
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

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  id="nav-link"
                >
                  New Post
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#About"
                  id="nav-link"
                >
                  About Us
                </a>
              </li>
            </ul>
            <div className="d-flex">
              {user ? (
                <span onClick={logout} className="siginup-span">
                  {"Log out"}
                </span>
              ) : (
                <>
                  <span
                    className="login-span siginup-span"
                    data-bs-toggle="modal"
                    data-bs-target="#account"
                  >
                    Login
                  </span>
                  |
                  <span
                    className="siginup-span"
                    data-bs-toggle="modal"
                    data-bs-target="#account"
                  >
                    Sign Up
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
