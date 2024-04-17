import React from 'react'
import logo from './img/thailand.png'

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
      <img src={logo} alt="Logo" height="75" className="d-inline-block align-text-top" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Portfilio">Portfilio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar