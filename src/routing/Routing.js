import React from "react";
import Nav from "../features/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/register/Register";
export default function Routing() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route
            path="/add"
            element={<h1 className="mt-5">Add Product page</h1>}
          />
          <Route
            path="/products"
            element={<h1 className="mt-5">Products listing page</h1>}
          />
          <Route
            path="/update"
            element={<h1 className="mt-5">Update Product page</h1>}
          />
          <Route
            path="/logout"
            element={<h1 className="mt-5">logout page</h1>}
          />
          <Route
            path="/"
            element={<h1 className="mt-5">Home page</h1>}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}
