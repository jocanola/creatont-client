import React from "react";

export const SignIn = () => {
  return (
    <div>
      <form className="p-5">
        <div class="form-floating mb-5">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-5">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="password"
          />
          <label for="floatingInput">Email address</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
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
