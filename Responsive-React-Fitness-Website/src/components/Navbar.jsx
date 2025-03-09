import React from 'react'
import logo from "../assets/logo_main-48JSqkPZ.png";
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg Nav-main">
  <div className="container">
    <a className="logo" href="#"><img src={logo} className='img-fluid' alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-s mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Programs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Memberships</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Testimonials</a>
        </li>
       
      </ul>
      <form className="d-flex ms-md-4" role="search">
        <button className="btn1" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar