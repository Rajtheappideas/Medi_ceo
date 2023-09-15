import React from "react";
import { Link } from "react-router-dom/dist";
import { useDispatch } from "react-redux";
import {
  handleChangeLoggedIn,
  handleChangeIsIdleTimerStart,
} from "../redux/GlobalStates";

const Login = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(handleChangeLoggedIn(true));
    dispatch(handleChangeIsIdleTimerStart(false));
    window.localStorage.setItem("timer", JSON.stringify(10));
  };

  return (
    <div className="h-screen w-screen relative flex items-center justify-center space-y-2 bg-bgGray">
      <img
        className="absolute bottom-0 xl:right-20 right-0 md:block hidden h-fit w-1/3 object-contain object-center z-0"
        src={require("../assets/images/bgImage.png")}
        alt=""
      />
      <div className="bg-white xl:w-1/3 md:w-1/2 w-11/12 h-auto md:space-y-5 space-y-3 lg:p-7 p-4 rounded-lg shadow-2xl drop-shadow-2xl z-0">
        <p className="font-bold lg:text-3xl md:text-2xl text-xl uppercase">
          Log In to your account
        </p>
        <div className="space-y-2">
          <label htmlFor="email" className="font-semibold md:text-lg">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-400 focus:border-[3px]"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="font-semibold md:text-lg">
            Password
          </label>
          <input
            type="password"
            placeholder="*******"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-400 focus:border-[3px]"
          />
        </div>
        <p
          role="button"
          className="text-Yellow inline-block tracking-wide hover:underline transition-all duration-100 md:text-lg"
        >
          <b>Forgot Password</b>
        </p>
        <div>
          <Link to="/">
            <button
              type="button"
              className="bg-Yellow active:scale-95 transition-all duration-100 uppercase md:text-lg font-semibold text-white text-center rounded-full p-3 w-full"
              onClick={() => handleOnClick()}
            >
              log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
