import React from "react";
import { useDispatch } from "react-redux";
import { handleChangeShowExpireSession } from "../redux/GlobalStates";
import {
  handleChangeLoggedIn,
  handleChangeIsIdleTimerStart,
  handleChangeUser,
} from "../redux/AuthSlice";
import { useNavigate } from "react-router-dom/dist";
import { useTranslation } from "react-i18next";

const SessionExpirePopup = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleOnClick = () => {
    dispatch(handleChangeShowExpireSession(false));
    dispatch(handleChangeLoggedIn(false));
    dispatch(handleChangeIsIdleTimerStart(false));
    dispatch(handleChangeUser());
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="bg-black backdrop-blur-md drop-shadow-lg bg-opacity-30 fixed inset-0 w-screen h-screen z-30 overflow-hidden"></div>
      <div className="md:w-1/2 w-10/12 text-center h-auto bg-white space-y-4 rounded-lg z-20 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-5">
        <p className="xl:text-3xl md:text-2xl text-lg text-center">
          {t("Your Session has Expired")}
        </p>
        <button
          className="yellow_button md:w-1/2 w-full"
          onClick={() => handleOnClick()}
        >
          {t("Ok")}
        </button>
      </div>
    </>
  );
};

export default SessionExpirePopup;
