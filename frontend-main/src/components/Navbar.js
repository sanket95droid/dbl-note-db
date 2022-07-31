import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

export const Navbar = () => {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  let location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname); // location.pathname gives name of the page
  // }, [location]);

  return (
    <div >
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top "> */}
      <nav className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${location.pathname==='/signup'?'d-none':''} ${location.pathname==='/login'?'d-none':''} `}>
        <div className="container-fluid">
          <button
            style={{ border: "2px solid #f9f9f9" }}
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
          <Link id="logoDesktop" className="navbar-brand " to="/">
            iNoteBook
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                style={{ marginTop: "10px", marginBottom: "10px" }}
                id="logoPhone"
                className="nav-item my-10"
              >
                <div style={{display:'flex'}}>
                  <Link className="navbar-brand " to="/">
                    iNoteBook
                  </Link>
                  <button
                    style={{ border: "none", width:'100px' }}
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
                  
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/account" ? "active" : ""
                  }`}
                  to="/account"
                >
                  Account
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link
                  style={{ color: "white" }}
                  className="btn btn-warning mx-1"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  style={{ color: "white" }}
                  className="btn btn-warning "
                  to="/signup"
                  role="button"
                  id="signupBtnPhone"
                >
                  Signup
                </Link>
              </form>
            ) : (
              <form style={{ marginBottom: "2px" }} className="d-flex">
                <button
                  style={{ color: "white" }}
                  onClick={handleLogout}
                  className="btn btn-warning"
                  id="logoutBtnPhone"
                >
                  Logout
                </button>
                {/* <Link
                  style={{ color: "white" }}
                  className="btn btn-warning mx-3"
                  to="/account"
                  role="button"
                >
                  Account
                </Link> */}
              </form>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
