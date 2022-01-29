import React from "react";
import { ClosedBtn } from "../sharedComponents/ClosedBtn";
import "./About.css";

export const About = () => {
  const Team = ({ name, position }) => (
    <div id="team">
      <h6>{name}</h6>
      <span>{position}</span>
    </div>
  );

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
          <div className="modal-body p-3">
            {/* <!-- Nav tabs --> */}
            <div className="text-center" id="about__title">
              About Us
            </div>
            <span id="about__span">
              Criew is a community for users to discover great contents and a
              platform for people to share contents for other users to rate and
              review the contents.
            </span>
            {/* <span>Team</span> */}
            <Team name="Samson Olumoye" position="Co-founder (Product guy)" />
            <Team
              name="Remilekun Sulaimon"
              position="Co-founder (Business guy)"
            />
            <Team name="Yusuff Jokanola" position="Developer (Tech Guy)" />
            <ClosedBtn />
          </div>
        </div>
      </div>
    </div>
  );
};
