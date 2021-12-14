import React, { useState } from "react";
import "./PostContent.css";

export const PostContent = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
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
                <label for="inputAddress" class="form-label">
                  Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Why creatont is the best for content creator"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">
                  Link
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="www.xyz.com"
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  Tags
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCity"
                  placeholder="AI, Metaverse, Fintech, software, Entertainment"
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
              <div class="col-md-6">
                <label for="inputState" class="form-label">
                  State
                </label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="inputZip" class="form-label">
                  Image (optional)
                </label>
                <input
                  type="file"
                  class="form-control"
                  id="inputZip"
                  onChange={(e) => setImage(e.target.value)}
                />
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
