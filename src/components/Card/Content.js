import React, { useEffect, useState } from "react";
import "./Content.css";

import ReactTimeAgo from "react-time-ago";
import axios from "axios";
import { ReviewForm } from "../Reviews/Review";
export const Content = ({
  id,
  title,
  link,
  tags,
  userName,
  createdAt,
  review,
  desc,
  userRating,
  imageId,
}) => {
  const [rateValue, setRateValue] = useState(5);
  const onGetRatingValue = () => {
    axios
      .get(`http://localhost:5000/api/v1/content/rating/${id}`)
      .then((response) => {
        setRateValue(response?.data?.data);
      });
  };

  useEffect(() => {
    onGetRatingValue();
  }, []);

  //save post to locatStorage
  const onSaveCurrentPost = () => {
    const data = {
      id,
      userName,
      review,
      userRating,
    };
    localStorage.setItem("content", JSON.stringify(data));
  };
  return (
    <>
      <ReviewForm userRating={id} />
      <div className="content">
        <div>
          <span id="timeago">
            <i>Posted by {userName}</i>
          </span>

          <p className="content__title">
            <a href={link} target="_blank">
              {title}
            </a>
          </p>

          <p className="content__desc">{desc}</p>
          <div className="content__tag">
            {tags?.map((item, i) => (
              <span>{item}</span>
            ))}
          </div>
          <div className="content__review no-show">
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
            <span id="timeago"> posted </span>
            <ReactTimeAgo date={createdAt} locale="en-US" />
            <span
              id="timeago"
              className="nav-link"
              data-bs-toggle="modal"
              data-bs-target="#Review"
              onClick={onSaveCurrentPost}
            >
              |{" "}
              {review.length > 0
                ? `${review.length} reviews`
                : "Write a review"}
            </span>
          </div>
        </div>
        <img
          src={`http://localhost:5000/api/v1/content/image/${imageId}`}
          alt="contentImage"
        />
      </div>
    </>
  );
};
