import React from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const Account = () => {
  return (
    <div
      className="modal fade"
      id="account"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            {/* <!-- Nav tabs --> */}
            <ul
              className="nav nav-tabs nav-justified"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Log In
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="settings-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Sign Up
                </button>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className="tab-pane active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {/* Login form */}
                <SignIn />
              </div>

              <div
                className="tab-pane"
                id="settings"
                role="tabpanel"
                aria-labelledby="settings-tab"
              >
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
