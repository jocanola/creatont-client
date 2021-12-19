import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <footer className="pt-2 footer">
      <div className="container">
        <div className="row text-center" id="for-margin">
          <div className="col-md-6">
            <h3 style={{}}>Contact Us</h3>
            <ul id="contact" style={{ listStyle: "none" }}>
              <li>
                <i
                  class="fas fa-envelope-open-text"
                  style={{ marginRight: "10px", color: "blue" }}
                ></i>
                olumoyesamson@gmail.com
              </li>
            </ul>
          </div>

          <div className="col-md-6 slideRight">
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
