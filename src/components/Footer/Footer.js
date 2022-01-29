import React from "react";

import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="pt-2 footer fixed">
      <div className="container">
        <div className="row justify-content-center text-center" id="for-margin">
          <div className="col-md-6">
            <h3>Connect With Us</h3>
            <form>
              <div className="form-group">
                <ul id="contact" style={{ listStyle: "none" }}>
                  <li>
                    <a
                      href="https://twitter.com/SamsonOlumoye"
                      style={{ color: "white" }}
                    >
                      <i
                        class="fab fa-twitter"
                        style={{ marginRight: "10px", color: "blue" }}
                      ></i>
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
