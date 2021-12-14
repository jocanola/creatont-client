import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div
      className="modal fade"
      id="About"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body p-5">
            {/* <!-- Nav tabs --> */}
            <div className="text-center" id="about__title">
              About Us
            </div>
            <span id="about__span">
              Creatont is a community for users to share their contents for
              other users to rate and review the content
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
