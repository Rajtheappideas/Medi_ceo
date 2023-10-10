import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSuccess,
  loginAllTabsEventListener,
} from "../redux/GlobalStates";
import {
  handleLoginUser,
  handleChangeLoggedIn,
  handleChangeIsIdleTimerStart,
} from "../redux/AuthSlice";
import useAbortApiCall from "../hooks/useAbortApiCall";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

const Login = () => {
  const { loading, user } = useSelector((state) => state.root.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  const signinSchema = yup.object({
    user: yup.string().email().required("email ips required").trim(),
    password: yup.string().required("password is required").trim(),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = (data) => {
    const { user, password } = data;
    const response = dispatch(
      handleLoginUser({
        user,
        password,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.message) {
          toast.success(res?.payload?.message);
          dispatch(handleChangeLoggedIn(true));
          dispatch(handleSuccess());
          dispatch(handleChangeIsIdleTimerStart(false));
          dispatch(loginAllTabsEventListener());
          window.localStorage.setItem("timer", JSON.stringify(300));
          navigate("/");
        }
      });
    }
  };

  // Mail: dummy@mail.com
  // Password: mrk9i27LPhMm

  //   Mail: dummy1@mail.com
  // Password: WWCNeTxyK4jr

  useEffect(() => {
    if (user && user !== null) {
      navigate("/");
    }
    return () => abortApiCall();
  }, []);

  return (
    <div className="h-screen w-screen relative flex md:items-center items-start md:pt-0 pt-16 justify-center space-y-2 bg-bgGray">
      <img
        className="absolute bottom-0 xl:right-20 right-0 h-fit md:w-1/3 w-1/3 object-contain object-center z-0"
        src={require("../assets/images/bgImage.png")}
        alt=""
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white xl:w-1/3 md:w-1/2 w-11/12 h-auto md:space-y-5 space-y-3 md:p-7 p-6 rounded-lg shadow-2xl drop-shadow-2xl z-0"
      >
        <p className="font-bold lg:text-3xl md:text-2xl text-xl uppercase">
          {t("Log In to your account")}
        </p>
        <div className="space-y-2">
          <label htmlFor="email" className="font-semibold md:text-lg">
            {t("Email")}
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-Yellow focus:border-[3px]"
            {...register("user")}
          />
          <span className="error">{errors?.user?.message}</span>
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="font-semibold md:text-lg">
            {t("Password")}
          </label>
          <input
            type="password"
            placeholder="*******"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-Yellow focus:border-[3px]"
            {...register("password")}
          />
          <span className="error">{errors?.password?.message}</span>
        </div>
        <p
          role="button"
          className="text-Yellow inline-block tracking-wide hover:underline transition-all duration-100 md:text-lg"
        >
          <Link to="/forgot-password">
            <b>{t("Forgot Password")}</b>
          </Link>
        </p>
        <div>
          <button
            className={`bg-Yellow ${
              loading && "bg-opacity-50"
            } active:scale-95 transition-all duration-100 uppercase md:text-lg font-semibold text-white text-center rounded-full p-3 w-full`}
            disabled={loading}
            type="submit"
          >
            {loading ? t("Logging in").concat("...") : t("Log in")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
