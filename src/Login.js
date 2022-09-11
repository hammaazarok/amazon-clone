import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then((auth) => {
      // console.log(auth);
      if (auth) {
        navigate("/");
      }
    })
    .catch((error) => console.log(error.message));
  };
  const register = (e) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => console.log(error.message));
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="./assets/logo-black.png" alt=""></img>
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5> E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} type="submit" className="login_SignIn">
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Clone Conditions of Use and
          Privacy Notice.
        </p>
        <button className="login_Register" onClick={register}>
          Create your Amazon Clone Account
        </button>
      </div>
    </div>
  );
};

export default Login;
