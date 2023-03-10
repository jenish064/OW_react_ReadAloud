import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="circle navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Product</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggle-section"
      aria-controls="toggle-section" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="toggle-section">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/about" >About</Link>
        </li>
      </ul>
      {/* <form className="d-flex"> */}
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      {/* </form> */}
    </div>
  </nav>

  )
}
