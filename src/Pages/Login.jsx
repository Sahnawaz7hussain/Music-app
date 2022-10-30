import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { USER_LOGIN_SUCCESS } from "../Redux/AuthReducer/actionType";
import "../Styles/LoginStyles.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const pay = {
        email,
        password,
      };
      dispatch(login(pay)).then((r) => {
        if (r.type === USER_LOGIN_SUCCESS) {
          const navigatePath = location.state ? location.state.from : "/";
          navigate(navigatePath, { replace: true });
        }
      });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="loginBox">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="type: eve.holt@reqres.in"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Your First Name"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
