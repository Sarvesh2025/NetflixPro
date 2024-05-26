import React, { useRef, useState } from "react";
import Header from "./Header";
import { bg_image } from "../Utils/Const";
import { checkValidData,validateName} from "../Utils/validate";
const Login = () => {
  const [isLoginForm, setisLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    if (name != null) {
      setErrorMessage(validateName(name));
     }
    const message = checkValidData(email.current.value, password.current.value);
   
    setErrorMessage(message);
  }
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
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12
        absolute
        p-12
        bg-black
        my-36
        mx-auto
        right-0
        left-0
        text-white
         opacity-85"
      >
        <h1 className="  font-bold text-3xl py-4">
          {isLoginForm ? "Sign In " : "Sign Up"}
        </h1>
        {isLoginForm ? (
          " "
        ) : (
            <input
              ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
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
