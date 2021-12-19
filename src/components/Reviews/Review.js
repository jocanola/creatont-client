import axios from "axios";
import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./Review.css";
import ReviewList from "./ReviewList";

export const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComment] = useState("");

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null);
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  const content = JSON.parse(localStorage.getItem("content"));
  //Still need to find solution to the get the userId and userName
  const userId = isLoggedIn?._id;
  const id = content?.id;
  const review = content?.review;
  console.log(review);

  // console.log(isLoggedIn._id);
  // console.log("user that have rated", id);b
  //Handling Comments
  const onSubmitComment = () => {
    setLoading2(true);
    const userName = isLoggedIn.userName;
    const data = { userName, comments };
    console.log(JSON.stringify(data));
    setLoading(true);
    axios
      .put(
        `http://localhost:5000/api/v1/content/comments/${id}`,
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      )
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error?.response?.data);
        setError(error?.response?.data?.error);
      });
  };

  //Handling Rating
  const handleRating = (rate) => {
    const totalRated = rate / 20;
    const data = { userId, rating: totalRated };
    console.log(id);
    console.log(JSON.stringify(data));
    setLoading(true);
    axios
      .put(
        `http://localhost:5000/api/v1/content/review/${id}`,
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      )
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error?.response?.data);
        setError(error?.response?.data?.error);
      });

    setRating(rate);
    console.log(rate);
    // other logic

    // console.log(rating);
  };

  return (
    <div
      className="modal fade"
      id="Review"
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
            <form class="row g-3 p-3">
              <div class="col-12">
                <label class="form-label">Rating</label>
                {!loading ? (
                  <Rating
                    onClick={handleRating}
                    ratingValue={rating} /* Available Props */
                  />
                ) : (
                  <p>Loading...</p>
                )}
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>

              <div class="col-md-12">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                  <label for="floatingTextarea">Comments</label>
                </div>
              </div>

              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={onSubmitComment}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary float-end"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
            {review.map((item, i) => {
              <ReviewList key={i} name={item.username} text={item.message} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
