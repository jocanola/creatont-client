import React from "react";
import ReactTimeAgo from "react-time-ago";
import { useStateValue } from "../State/StateProvider";
import "./Content.css";

export const ContentFooter = ({ rateValue, createdAt, item, review }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));

  const { setCurrentContent } = useStateValue();

  return (
    <div>
      <div className="content__review">
        <i
          class="fas fa-star"
          style={{
            color: "rgb(29, 155, 240)",
            marginRight: "10px",
            fontSize: "22px",
          }}
        ></i>
        <span id="rating">
          {rateValue ? `${rateValue.toFixed(1)}/5.0` : "No rating"}
        </span>
        <span id="no-timeage"> posted </span>
        <ReactTimeAgo date={createdAt} locale="en-US" />
        <span
          id="timeago"
          className="nav-link"
          data-bs-toggle="modal"
          data-bs-target={isLoggedIn ? "#Review" : "#account"}
          onClick={() => setCurrentContent(item)}
        >
          | {review.length > 0 ? `${review.length} reviews` : "Write a review"}
        </span>
      </div>
    </div>
  );
};
