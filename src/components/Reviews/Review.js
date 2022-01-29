import axios from "axios";
import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Modal } from "../sharedComponents/Modal";
import { useStateValue } from "../State/StateProvider";
import "./Review.css";
import ReviewList from "./ReviewList";
// import ReviewList from "./ReviewList";

export const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comments, setComment] = useState("");

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null);
  const { currentContent } = useStateValue();

  const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  // const content = JSON.parse(localStorage.getItem("content"));
  //Still need to find solution to the get the userId and userName
  const userId = isLoggedIn?._id;
  const id = currentContent?._id;
  const review = currentContent?.review;
  console.log(id);

  const onSubmitComment = (event) => {
    event.preventDefault();
    setLoading2(true);
    const username = isLoggedIn?.username;
    const data = { username, comments };
    console.log(JSON.stringify(data));
    setLoading2(true);
    axios
      .put(
        `${process.env.REACT_APP_BASE_URL}/content/comments/${id}`,
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      )
      .then((response) => {
        setLoading2(false);
        window.location.reload();
      })
      .catch((error) => {
        setLoading2(false);
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
        `${process.env.REACT_APP_BASE_URL}/content/review/${id}`,
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
    <Modal id="Review">
      <div style={{ overflowY: "scroll", overflowX: "hidden" }}>
        <ReviewList content={currentContent?.review} />

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
                placeholder="Share your opinion"
                id="floatingTextarea"
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <label for="floatingTextarea">Share your opinion</label>
            </div>
          </div>

          <div class="col-12">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={onSubmitComment}
            >
              {loading2 ? "Loading..." : "Submit"}
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
      </div>
    </Modal>
  );
};
