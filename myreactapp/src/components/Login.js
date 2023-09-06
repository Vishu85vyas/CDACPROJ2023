import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Login.css";
import Home from "./Home";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

function Login() {
  const history = useHistory();
  const divStyle = {
    // padding- left: 2.5rem,
    // padding - right: 2.5rem
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [userRole, setUserRole] = useState("");
  const buttonStyle = {
    backgroundColor: "#BA68C8", // Change this to the desired color
    marginLeft: "10px", // Change this to the desired value for shifting rightwards
    // fontSize: '1.2rem'
    padding: "10px 200px", // Increase button size
    borderRadius: "5px",
  };
  if (token) {
    //debugger;
    if (token === "GUEST") {
      history.push("/home");
    } else if (token === "OWNER") {
      history.push("/action");
    } else if (token === "ADMIN") {
      history.push("/home");
    }
  }
  const handleLogin = async (props) => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setUserRole(response.data.userRole);
        setToken(response.data.token);
        console.log(userRole);
        let content = null;
      } else {
        // Handle unauthorized login
        console.log("Login failed");
      }
    } catch (error) {
      // Handle any error that occurred during the request
      console.error("An error occurred:", error);
    }
  };
  const loginhead = {
    marginRight: "200px",
    marginTop: "60px",
  };

  return (
    // <section class="vh-100">
    <section>
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <h4 class="fw-normal mb-3 pb-3" style={loginhead}>
                Sign into your account
              </h4>
              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">
                  Email
                </label>
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-sm"
                  placeholder="sanketracoon@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-3">
                <label class="form-label" for="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-sm"
                  placeholder="IAmRacoon@69"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div class="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="/forgotpassword" class="text-body">
                  Forgot password?
                </a>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  style={buttonStyle}
                  onClick={handleLogin}
                >
                  {" "}
                  Login{" "}
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a href="/register" class="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;