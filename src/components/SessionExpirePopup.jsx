import React from "react";
import { useDispatch } from "react-redux";
import {
  handleChangeShowExpireSession,
  handleChangeLoggedIn,
  handleChangeIsIdleTimerStart,
} from "../redux/GlobalStates";
import { useNavigate } from "react-router-dom/dist";

const SessionExpirePopup = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOnClick = () => {
    dispatch(handleChangeShowExpireSession(false));
    dispatch(handleChangeLoggedIn(false));
    dispatch(handleChangeIsIdleTimerStart(false));

    navigate("/login");
  };

  return (
    <>
      <div className="bg-black backdrop-blur-md drop-shadow-lg bg-opacity-30 fixed inset-0 w-screen h-screen z-20"></div>
      <div className="md:w-1/2 w-10/12 text-center h-auto bg-white space-y-4 rounded-lg z-20 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-5">
        <p className="xl:text-3xl md:text-2xl text-lg text-center">
          Your Session is Expired
        </p>
        <button
          className="yellow_button md:w-1/2 w-full"
          onClick={() => handleOnClick()}
        >
          Ok
        </button>
      </div>
    </>
  );
};

export default SessionExpirePopup;
