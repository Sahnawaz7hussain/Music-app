import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/AuthReducer/action";
import logo from "../Images/musicLogo.png";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((store) => {
    return store.authReducer;
  });
  const handleLoginClick = () => {
    if (!state.isAuth && state.token === "") {
      navigate("/login");
    } else {
      dispatch(logout("token"));
    }
  };
  return (
    <>
      <div
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          paddingLeft: "25px",
          paddingRight: "15px",
          position: "sticky",
          top: "0",
          background: "#fff",
          borderBottom: " 1px solid grey",
          zIndex: 300,
        }}
      >
        <img width={"50px"} src={logo} alt="Music App" />

        <button onClick={handleLoginClick}>
          {!state.isAuth && state.token === "" ? "Login" : "Logout"}
        </button>
      </div>
    </>
  );
};

export default Navbar;
