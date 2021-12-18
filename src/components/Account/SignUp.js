import axios from "axios";
import React, { useState } from "react";
import { useStateValue } from "../State/StateProvider";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [despatch] = useStateValue();

  const data = {
    email,
    password,
    username,
  };
  const onSignUp = (event) => {
    setLoading(true);
    event.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:5000/api/v1/registration", JSON.stringify(data), {
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      })
      .then((response) => {
        // setModal("modal");
        console.log(response);
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        const errorData = error?.response?.data?.errors;
        setError(
          `${errorData[0]?.value} is an ${errorData[0]?.msg} ${errorData[0]?.param}`
        );
      });
  };
  return (
    <div>
      <form className="p-3">
        <div className="mb-3">
          <input
            type="text"
            className="form-control mt-3"
            id="exampleInputusername"
            aria-describedby="emailHelp"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control mt-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Confirm Password"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={onSignUp} type="submit" className="btn btn-primary">
          {loading ? "Loading..." : "Sign Up"}
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
