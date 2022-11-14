import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const userData = localStorage.getItem("loggedUser")
  console.log('userToken', userData);
  const [isLogin, setIsLogin] = useState(false);
  const name = "Naeem Ali";
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark d-flex justify-content-center">
        <div className="container-fluid text-light">
          <Link className="navbar-brand" to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Real-Estate
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/add">
                  Add Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/update">
                  Update Products
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button className="btn btn-outline-success" type="search">
                Search
              </button>
            </form>
            <div>
              {isLogin ? (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/profile"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {isLogin ? `${name}` : "Login"}
                    </Link>
                    <ul className="dropdown-menu bg-light">
                      <li>
                        <Link className="dropdown-item" to="/profile/name">
                          Email
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/profile/email">
                          Profile Setting
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/login">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              ) : (
                <Link to={"/login"}>
                  <button className="btn mx-2 mt-2 mt-md-0 btn-outline-primary">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
