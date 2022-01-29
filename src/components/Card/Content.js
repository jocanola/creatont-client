import React, { useEffect, useState } from "react";
import "./Content.css";

import axios from "axios";
import { ReviewForm } from "../Reviews/Review";
import { ContentFooter } from "./ContentFooter";
import { useStateValue } from "../State/StateProvider";
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
  item,
}) => {
  const [rateValue, setRateValue] = useState(5);
  const onGetRatingValue = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/content/rating/${id}`)
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
            {tags?.map((tag, i) => (
              <span id="span__tag" key={i}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        {imageId ? (
          <img
            src={`${process.env.REACT_APP_BASE_URL}/content/image/${imageId}`}
            alt="contentImage"
          />
        ) : null}

        <ContentFooter
          rateValue={rateValue}
          createdAt={createdAt}
          item={item}
          review={review}
        />
        {/* <div className="content__footer sm-show">
          <ContentFooter
            rateValue={rateValue}
            createdAt={createdAt}
            onSaveCurrentPost={onSaveCurrentPost}
            review={review}
          />
        </div> */}
      </div>
    </>
  );
};
