import axios from "axios";
import React, { useState } from "react";
import "./PostContent.css";

export const PostContent = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isLoggedIn = JSON.parse(localStorage.getItem("user"));

  const userId = isLoggedIn?._id;
  const userName = isLoggedIn?.username;

  const data = new FormData();
  data.append("title", title);
  data.append("link", link);
  data.append("tags", tags);
  data.append("desc", desc);
  data.append("userName", userName);
  data.append("file", file);

  const splitTags = (e) => {
    const tagsValue = e.target.value;
    const tagsSplitted = tagsValue.split(",");
    setTags(tagsSplitted);
  };
  const onPostContent = (event) => {
    setLoading(true);
    event.preventDefault();
    axios
      .post(`http://localhost:5000/api/v1/content/${userId}`, data, {
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      })
      .then((response, error) => {
        // setModal("modal");
        console.log(response);
        setLoading(false);
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        const errorResponse = error?.response?.data?.errors;
        setError(errorResponse);
      });
  };
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
            {isLoggedIn && (
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
                    onChange={(e) => splitTags(e)}
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder="write more"
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputZip" class="form-label">
                    Image (optional)
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="inputZip"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <div class="col-12">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={onPostContent}
                  >
                    {loading ? "Loading..." : "Submit"}
                  </button>
                  <button type="button" className="btn btn-secondary float-end">
                    Close
                  </button>
                </div>
              </form>
            )}

            {!isLoggedIn && (
              <>
                <p>Create or login to post content</p>
                <span
                  className="login-span siginup-span"
                  data-bs-toggle="modal"
                  data-bs-target="#account"
                >
                  Login
                </span>
                |
                <span
                  className="siginup-span"
                  data-bs-toggle="modal"
                  data-bs-target="#account"
                >
                  Sign Up
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
