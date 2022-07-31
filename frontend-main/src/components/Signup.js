import React, {useState} from "react";
import {Link, useHistory } from "react-router-dom";

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "" , email: "" , password: "", cpassword: ""})
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


    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {name, email, password} = credentials;
        // const response = await fetch("http://localhost:5000/api/auth/createuser", {
        const response = await fetch("https://inotebookbackend.herokuapp.com/api/auth/createuser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})  
          });
          const json = await response.json();
          console.log(json)
          if (json.success) { // redirecting to homepage if user is valid
            //  save the auth-token redirect
            localStorage.setItem('token', json.authToken)
            history.push("/")
            props.showAlert("Successfully createt account", "success")
          }
          else{
              props.showAlert("Invalid Credentials", "danger")
          }
    }

    const onChange = (e) => {
        // setNote({ ...note, [e.target.name]: e.target.value });
        setCredentials({...credentials, [e.target.name]: e.target.value})
      };

  return (
    <div  className="container my-10">
      <h1 className="my-3">Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange = {onChange}
            name="name"
            required
          />
        </div>  
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange = {onChange}
            name="email"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type={showPassword}
            className="form-control"
            id="password"
            onChange = {onChange}
            name="password"
            minLength={5}
            required
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
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            onChange = {onChange}
            name="cpassword"
            minLength={5}
            required
          />
        </div>
        
        <button style={{color:'white'}} type="submit" className="btn btn-warning">
          Submit
        </button>
        <div className="mx-2" style={{display: 'inline'}}>or</div>
        <Link
        style={{ color: "white" }}
        className=" btn btn-warning my-1"
        to="/login"
        role="button"
      >
        Login
      </Link>
       <div className="mx-2" style={{display: 'inline'}}>if you already have a account.</div>
      </form>
     
    </div>
  );
};

export default Signup;
