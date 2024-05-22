import React, { useState } from "react";
import Header from "./Header";
import { bg_image } from "../Utils/Const";
const Login = () => {
    const [isLoginForm, setisLoginForm] = useState(true);
    const toggleIslogin = () => {
        setisLoginForm(!isLoginForm)
    };
  return (
    <div className="">
      <Header />
      <div className="absolute ">
        <img src={bg_image} alt="background image"></img>
      </div>
      <form
        className="w-3/12
        absolute
        p-12
        bg-black
        my-36
        mx-auto
        right-0
        left-0
        text-white"
      >
        <h1 className="  font-bold text-3xl py-4">
          {isLoginForm ? "Sign In " : "Sign Up"}
        </h1>
        {isLoginForm ? (
          " "
        ) : (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isLoginForm ? "Sign In " : "Sign Up"}
        </button>
        <p onClick={toggleIslogin} className="cursor-pointer">
          New to Netflix? Signup Now
        </p>
      </form>
    </div>
  );
};

export default Login;
