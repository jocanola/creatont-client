import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./Review.css";

export const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
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
                <Rating
                  onClick={handleRating}
                  ratingValue={rating} /* Available Props */
                />
              </div>

              <div class="col-md-12">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea">Comments</label>
                </div>
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary">
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
          </div>
        </div>
      </div>
    </div>
  );
};
