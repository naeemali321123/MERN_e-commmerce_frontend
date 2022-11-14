import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UseRegister from "./UseRegister";

export default function Register() {
  const {
    submitHandle,
    state,
    handleChange,
    url,
    onChangeFile,
    isProcessing,
    error,
  } = UseRegister();
  return (
    <div className="container mt-5 d-flex m-auto justify-content-center align-items-center">
      <div className="m-2 p-3 shadow col-md-6">
        <div className="row text-center">
          <h1> Register your Account</h1>
        </div>
        <div className="row">
          <form className="row g-3" onSubmit={submitHandle}>
            <div className="col-12">
              <label htmlFor="validationServer01" className="form-label">
                First Name
              </label>
              <input
                type="text"
                value={state.firstName}
                className="form-control"
                id="validationServer01"
                onChange={handleChange}
                name="firstName"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-12">
              <label htmlFor="validationServer01" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                value={state.lastName}
                className="form-control"
                id="validationServer01"
                onChange={handleChange}
                name="lastName"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-12">
              <label htmlFor="validationServer01" className="form-label">
                User Name
              </label>
              <input
                type="text"
                value={state.userName}
                className="form-control"
                id="validationServer01"
                onChange={handleChange}
                name="userName"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

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
            <div className="col-12">
              <label htmlFor="validationServer03" className="form-label">
                Confirm Password
              </label>
              <input
                onChange={handleChange}
                name="confirmPassword"
                value={state.confirmPassword}
                type="password"
                className="form-control"
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                required
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a ConfirmconfirmPassword Password.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="validationServer03" className="form-label">
                Mobile #
              </label>
              <input
                onChange={handleChange}
                name="phone"
                value={state.phone}
                placeholder='+92 (300) 000-0000'
                type="tel"
                className="form-control"
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                required
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a Mobile #.
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <label htmlFor="validationServer03" className="form-label">
                <button className="box border rounded-3" disabled>
                  <img
                    className="border rounded-2 m-2"
                    src={url}
                    alt="icon not found"
                    style={{ width: "120px", height: "120px" }}
                  />
                  <input
                    onChange={onChangeFile}
                    name="profilePic"
                    value={state.profilePic}
                    type="file"
                    className="form-control"
                    id="validationServer03"
                    aria-describedby="validationServer03Feedback"
                    required
                  />
                  <div
                    id="validationServer03Feedback"
                    className="invalid-feedback"
                  >
                    Please provide a Profile Pic
                  </div>
                </button>
              </label>
            </div>
            <div className="col-md-12">
              {!isProcessing ? (
                <button className="btn w-100 btn-success" type="submit">
                  Register
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
          <Link to="/login">Login if you have Account</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
