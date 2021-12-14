import React from 'react'

export const SignUp = () => {
    return (
      <div>
        <form className="p-3">
          <div className="mb-3">
            <input
              type="email"
              className="form-control mt-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
            />
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
}
