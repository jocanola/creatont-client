import React from "react";
import "./Content.css";
import contentImg from "../../assets/images/contentimage.jpg";
import ReactTimeAgo from "react-time-ago";
export const Content = ({ title, tags, ratings, review }) => {
  return (
    <div className="content">
      <div>
        <p className="content__title">
          Waddlesplash: “I am now writing an Xlib implementation”
        </p>
        <div className="content__tag">
          <span>Tech</span>
          <span>Tech</span>
          <span>Tech</span>
        </div>
        <div className="content__review">
          <i
            class="fas fa-star"
            style={{ color: "red", marginRight: "10px", fontSize: "22px" }}
          ></i>
          <span id="rating">3/5</span>
          <span id="timeago"> posted on </span>
          <ReactTimeAgo date={60000} locale="en-US" />
          <span id="timeago"> | 10 reviews</span>
        </div>
      </div>

      <img src={contentImg} alt="contentImage" />
    </div>
  );
};
