import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userData } from "../features/auth/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(state);
  };

  const submitHandle = async (e) => {
    setIsProcessing(true)
    let user = await fetch("http://localhost:5000/auth/login", {
      method: "get",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json"
      }, 
    });
    setIsProcessing(false)
    localStorage.setItem(JSON.stringify({user: user}))
    localStorage.setItem(JSON.stringify({token: user.token}))
    dispatch(userData(user))
    console.log('user data fetch by sever', user);
  };

  return (
    <div
      className="container mt-5 d-flex m-auto justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="m-2 p-3 shadow col-md-6">
        <div className="row text-center">
          <h1> Login your Account</h1>
        </div>
        <div className="row">
          <form className="row g-3" onSubmit={submitHandle}>
            <div className="col-12">
              <label htmlFor="validationServer03" className="form-label">
                Email Address
              </label>
              <input
                onChange={handleChange}
                name="email"
                value={state.email}
                type="email"
                className="form-control"
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                required
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a valid email #.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="validationServer03" className="form-label">
                Password
              </label>
              <input
                onChange={handleChange}
                name="password"
                value={state.password}
                type="password"
                className="form-control"
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                required
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a Password.
              </div>
            </div>

            <div className="col-md-12">
              {!isProcessing ? (
                <button className="btn w-100 btn-success" type="submit">
                  Login
                </button>
              ) : (
                <button className="btn w-100 btn-success" type="submit">
                  <div className="spinner-border spinner-border-sm"></div>
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="col-12 my-3 fw-bold">
          <span className="fw-bold text-danger">{error}</span>
        </div>
        <div className="col-12 my-3 fw-bold">
          <Link to="/register">Register Account if you don't have Account</Link>
        </div>
      </div>
    </div>
  );
}
