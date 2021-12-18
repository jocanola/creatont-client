import axios from "axios";
import React, { useState } from "react";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const data = {
    email,
    password,
  };
  const onSignIn = (event) => {
    setLoading(true);

    axios
      .post(
        "http://localhost:5000/api/v1/registration/login",
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      )
      .then((response) => {
        console.log(response);

        setLoading(false);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        window.location.reload();
      })
      .catch((error) => {
        setError(error.response.data.error);
        setLoading(false);
      });
  };
  return (
    <div>
      <form className="p-3">
        <div class="mb-3">
          <input
            type="email"
            class="form-control mt-3"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={onSignIn} type="submit" className="btn btn-primary">
          {loading ? "Loading..." : "Sign In"}
        </button>
        <button
          type="button"
          className="btn btn-secondary float-end"
          data-bs-dismiss="modal"
        >
          Close
        </button>
      </form>
    </div>
  );
};
