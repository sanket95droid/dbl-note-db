import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [alertMessage, setAlertMessage] = useState("")
  // ^ provides alert message when login fails or successeds
  let history = useHistory();

  const [showPassword, setShowPassword] = useState("password")
    const showPass = () =>{
      if (showPassword === "password") {
        setShowPassword("text")
      }
      else{
        setShowPassword("password")
      }
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch("http://localhost:5000/api/auth/login", {
    const response = await fetch(
      "https://inotebookbackend.herokuapp.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // redirecting to homepage if user is valid
      //  save the auth-token redirect
      localStorage.setItem("token", json.authToken);
      history.push("/");
      console.log(json.authToken);     
    } else {
      setAlertMessage("Please enter valid email and password")

    }
  };

  const onChange = (e) => {
    // setNote({ ...note, [e.target.name]: e.target.value });
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{backgroundColor:'#f9f9f9'}}>
      <h1 className="my-3">Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type={showPassword}
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div className={`form-check form-switch my-4 text-light`}> 
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={showPass}
            />
            <label style={{color: 'black'}} className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Show Password
            </label>
          </div>
        <div style={{color:'red' }} className="my-2">{alertMessage}</div>
        <button
          type="submit"
          className="btn btn-warning"
          style={{ color: "white" }}
        >
          Login
        </button>
      </form>
      <div className="mx-4 my-3">or</div>
      
      <Link
        style={{ color: "white" }}
        className=" btn btn-warning my-1"
        to="/signup"
        role="button"
      >
        Create New Account
      </Link>
      {/* <div style={{height:'150px', width:'200px'}} className="my-100">to make full page coloured</div> */}
    </div>
  );
};

export default Login;
