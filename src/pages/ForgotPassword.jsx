import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAbortApiCall from "../hooks/useAbortApiCall";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const { loading ,user} = useSelector((state) => state.root.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  const forgotSchema = yup.object({
    email: yup.string().email().required("email ips required").trim(),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(forgotSchema),
  });

  const onSubmit = (data) => {
    const { email } = data;
  };

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
          {t("Forgot Password")}
        </p>
        <div className="space-y-2">
          <label htmlFor="email" className="font-semibold md:text-lg">
            {t("Email")}
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-Yellow focus:border-[3px]"
            {...register("email")}
          />
          <span className="error">{errors?.email?.message}</span>
        </div>

        <div>
          <button
            className={`bg-Yellow ${
              loading && "bg-opacity-50"
            } active:scale-95 transition-all duration-100 uppercase md:text-lg font-semibold text-white text-center rounded-full p-3 w-full`}
            disabled={loading}
            type="submit"
          >
            {loading ? t("Sending").concat("...") : t("Send")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
